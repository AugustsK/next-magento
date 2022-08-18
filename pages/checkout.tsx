import React, { ReactElement } from 'react'
import type { NextPageWithLayout } from '../@types';
import CheckoutLayout from '@/layouts/checkout'

const Checkout: NextPageWithLayout = () => {
  return (
    <h1>CHECKOUT</h1>
  )
}

Checkout.getLayout = function getLayout(page: ReactElement) {
  return (
    <CheckoutLayout>
      {page}
    </CheckoutLayout>
  )
}

export default Checkout
