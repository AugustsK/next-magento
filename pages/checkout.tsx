import React, { ReactElement } from 'react'
import type { NextPageWithLayout } from '@/types';
import CheckoutLayout from '@/layouts/checkout'
import {SharedPageData} from "@/types";

const Checkout: NextPageWithLayout = () => {
  return (
    <h1>CHECKOUT</h1>
  )
}

Checkout.getLayout = function getLayout(page: ReactElement, pageProps: SharedPageData) {
  return (
    <CheckoutLayout {...pageProps}>
      {page}
    </CheckoutLayout>
  )
}

export default Checkout
