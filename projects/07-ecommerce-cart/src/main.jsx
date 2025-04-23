import { createRoot } from 'react-dom/client'
import { FiltersProvider } from './context/filters.jsx'
import { App } from './App'

const root = createRoot(document.getElementById('root'))
root.render(
  <FiltersProvider>
    <App />
  </FiltersProvider>
)
