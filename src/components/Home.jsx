import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Outlet } from "react-router-dom";
import Loader from "./Loader";
import useFetch from "./customhooks/useFetch";


const Home = () => {


  let{products,error}=useFetch("https://fakestoreapi.com/products?limit=5")

  return (
    <div>
        <h1>Home</h1>
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
                <Card.Text>{product.description}</Card.Text>
              </Card.Body>
              <Card.Footer style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                <Card.Text>Price: {"\u20B9"}{product.price}</Card.Text>
              </Card.Footer>
            </Card>
          ))
        ) : (
          <Loader /> // ✅ Shows loader while fetching
        )}
      </section>
    </div>
  )
}

export default Home