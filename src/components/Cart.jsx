import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { removeItem } from "../store/cartSlice"; // Ensure correct import

const Cart = () => {
  let navigate = useNavigate();
  let products = useSelector((state) => state.cart);
  let dispatch = useDispatch();

  let handleDelete = (productId) => {
    dispatch(removeItem(productId)); // ✅ Pass only the product ID
  };

  return (
    <div>
      <h1>Cart Items</h1>
      <section className="productsCard">
        {products.length > 0 ? (
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
                <Card.Text>Price: ₹{product.price}</Card.Text>
              </Card.Body>
              <Card.Footer style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                <Button variant="outline-danger" onClick={() => handleDelete(product.id)}>
                  Delete
                </Button>
              </Card.Footer>
            </Card>
          ))
        ) : (
          <h3 style={{ textAlign: "center", color: "gray" }}>Your cart is empty</h3>
        )}
      </section>
    </div>
  );
};

export default Cart;
