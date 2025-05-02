import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavScrollExample from "./components/NavBar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Products from "./components/Products";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";
import NotFound from "./components/NotFound";
import AddNewProduct from "./components/AddNewProduct";
import UpdateProduct from "./components/UpdateProduct";
import DeleteProduct from "./components/DeleteProduct";
import Cart from "./components/Cart";

if (!localStorage.getItem("cart")) {
  localStorage.setItem("cart", JSON.stringify([]));
}

function App() {
  return (
    <Router>
      <NavScrollExample />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mycart" element={<Cart />} />

        {/* ✅ Products Page with Nested Routes */}
        <Route path="/products" element={<Products />}>
          <Route index element={<ProductList />} />
          <Route path="addproduct" element={<AddNewProduct />} />
          <Route path="updateproduct/:id" element={<UpdateProduct />} /> 
          <Route path="deleteproduct/:id" element={<DeleteProduct />} /> 
          <Route path=":id" element={<ProductDetails />} />
        </Route>

        {/* ✅ Catch-all for Undefined Routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
