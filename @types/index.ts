import type { ReactElement } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

export type LayoutProps = {
    children:  JSX.Element
}

export type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactElement
}
  
export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}