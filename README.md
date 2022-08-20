This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## next-magento

Copy `.env.example` to `.env` and set MAGENTO_BACKEND_URL

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### What is it?

Weekend project - an attempt to re-create Magento storefront as Next.js project.

#### Currently implemented

1. Apollo links:
   1. httpLink to map query data in URL for Varnish caching
   1. storeLink to pass store code and currency in graphql request headers
1. MagentoRoute catch-all component that queries graphql for route info and returns route data together with necessary payload (like cmsPage, product query or category query)
   1. all categories from megaMenu are exported as static paths and generated during SSG phase
   1. page revalidation can be controlled via ENV variable. Default is 5 minutes
1. Generic data (storeConfig, megaMenu) queried on all pages during SSR or SSG phase
1. MegaMenu implemented
1. Generic footer (Venia data)
1. Homepage content is pulled from CMS page based on storeConfig
1. Various little things
   1. Higher-order component for wrapping CSR components
   1. URL resolver for categories and products to automatically apply URL suffix based on storeConfig
   1. Namespaced htmlId tagged template fn based on React 18 useId hook
   1. storeConfig, cmsPage and category queries/interfaces/objects mapped to TS
   1. Queries in place to fetch route, cmsPage, product data and categories
   1. Different layout for Checkout with default fallback layout
   1. Apollo client config for both CSR and SSR modes
   1. Backend graphql endpoint masked via proxy for CSR

#### Biggest challenges so far

1. Pagebuilder does not work OOTB. Might be due to next.js webpack config OR the fact that I'm doing this in Typescript.
2. As the entire data flow is different, relying heavily on SSG (and SSR as a fallback), most (if not all) Venia/Peregrine business logic cannot be used. Therefore I'm not even trying to do it. The only part I wish to utilize as-is is Pagebuilder package, but that has its own hurdles (refer to previous point).
3. Not really a challenge, just something I haven't yet decided about - authorization token. PWA Studio keeps it entirely client-side (token requested, stored in localStorage and then used through-out). Same approach could be used here, however, a better approach might be utilizing next.js sessions and keeping Magento authorization away from client (essentially client authenticates against next.js express server, which in turn authenticates through graphql with Magento). 2nd approach might prove a bit challening.
4. While SSG revalidation can be easily implemented from next.js side (providing api route with secret token that allows to invalidate any route), having Magento (or varnish?! sure not...) call this URL at correct times might be quite a challenge. Could be done in parts:
   1. Magento plugin for FPC cache clear from admin that also calls next.js app with a wildcard rule as a MVP
   2. Have magento call next.js invalidate route based on cache identities that are being cleared. Might make Magento quite a bit slower
   3. Queue invalidated cache identities on magento side and empty the queue asynchronously, essentially removing the necessity for Magento to call next.js invalidate api during runtime.
