import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Outlet } from "react-router-dom";
import Loader from "./Loader";
import useFetch from "./customhooks/useFetch";
import { useDispatch ,useSelector } from "react-redux";
import{addItem,removeItem}from"../store/cartSlice"

const ProductList = () => {
  /*const [products, setProducts] = useState([]); // ✅ useState inside component
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", { method: "GET" })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to fetch products. Try again later.");
        }
      })
      .then((productData) => {
        setProducts(productData);
      })
      .catch((error) => setError(error.message)); //  Handle fetch errors
  }, []);*/
  let dispatch = useDispatch()
  let cartState = useSelector((state)=> {return state.cart})
  let addItemToCart=(product)=>{
      let chkProduct = cartState.some( cartProduct => cartProduct.id === product.id)
      if(!chkProduct){
        dispatch(addItem(product))
        alert("Product added to cart")
      }else{
        alert("Product already in cart")
      }
     
  }

  let navigate=useNavigate()
  let{products,error,isLoading}=useFetch("https://fakestoreapi.com/products")
  return (
    <div>
      <h1>Product List</h1>
      <section className="productsCard">
        {error ? (
          <div style={{ color: "red", fontWeight: "bold", textAlign: "center" }}>
            {error}
          </div>
        ) : products.length > 0 ? (
          products.map((product) => (
            <Card key={product.id} style={{ width: "18rem", margin: "10px" }} className="product">
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.title}
                style={{ width: "9rem", height: "12rem" }}
              />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>Price: {"\u20B9"}{product.price}</Card.Text>
              </Card.Body>
              <Card.Footer style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                
                <Button variant="outline-primary" onClick={()=>addItemToCart(product)} >Add To Cart</Button>
                <Button variant="outline-warning" onClick={()=>{navigate(`updateproduct/${product.id}`)}}>Edit</Button>
                <Button variant="outline-danger" onClick={()=>{navigate(`deleteproduct/${product.id}`)}} >Delete</Button>
              </Card.Footer>
            </Card>
          ))
        ) : (
          <Loader /> // ✅ Shows loader while fetching
        )}
      </section>
      <Outlet />
    </div>
  );
};

export default ProductList;
