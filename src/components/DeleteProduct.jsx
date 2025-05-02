import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const DeleteProduct = () => {
    let { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            axios.delete(`https://fakestoreapi.com/products/${id}`)
                .then(() => {
                    alert("Product Deleted Successfully");
                    navigate("/products"); // Redirect back to product list
                })
                .catch((error) => {
                    console.error("Error:", error);
                    alert("Failed to delete product.");
                });
        } else {
            navigate("/products");
        }
    }, [id, navigate]);

    return null; // No UI needed, handles deletion automatically
};

export default DeleteProduct;
