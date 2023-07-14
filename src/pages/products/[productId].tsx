import React from 'react'
import { useRouter } from 'next/router'
const Product = () => {
const router = useRouter();
  return (
    <>
    <div>Product page</div>
    <p>product: {router.query.productId}</p>
    </>

  )
}

export default Product