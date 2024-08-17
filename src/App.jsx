import ProductsPage from './Pages/ProductsPage.jsx';
import { ProductsProvider } from './ContextApi/ProductsContext.jsx';
import './styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <ProductsProvider>
      <ProductsPage />
    </ProductsProvider>
  );
}

export default App;
