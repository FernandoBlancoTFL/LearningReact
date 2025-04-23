import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/Products'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Cart } from './components/Cart'
import { useState } from 'react'
import { useFilters } from './hooks/useFilters'
import { IS_DEVELOPMENT } from './config'
import './css/App.css'

export function App () {
  const [products] = useState(initialProducts)
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </>
  )
}
