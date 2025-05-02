import React, { useEffect, useState } from 'react';
import { Paper, Typography, TextField, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // ✅ Import Axios

const UpdateProduct = () => {
    let { id } = useParams(); // ✅ Get the product ID from the URL
    let paperStyle = { width: 300, margin: "17px auto", padding: "17px" };

    let [updateProduct, setUpdateProduct] = useState({
        productId: id, title: "", price: "", description: "", image: "", category: ""
    });

    // ✅ Fetch product details when component loads
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                setUpdateProduct(response.data);
            })
            .catch(error => console.error("Error fetching product:", error));
    }, [id]);

    function handleChange(e) {
        let { name, value } = e.target;
        if (name === "price") {
            value = parseFloat(value) || 0; // ✅ Ensure price is a number
        }

        setUpdateProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value
        }));
    }

    function handleUpdate(e) {
        e.preventDefault();

        axios.put(`https://fakestoreapi.com/products/${id}`, updateProduct)
            .then(() => alert("Product Updated Successfully"))
            .catch(error => {
                console.error("Error:", error);
                alert("Failed to update product.");
            });
    }

    return (
        <Paper elevation={20} style={paperStyle}>
            <Typography variant='h5'>Update Product</Typography>&nbsp;
            <form onSubmit={handleUpdate}>
                <TextField value={updateProduct.title} name='title' label="Title" variant="outlined" fullWidth onChange={handleChange} /> &nbsp;
                <TextField value={updateProduct.price} name='price' label="Price" variant='outlined' fullWidth onChange={handleChange} /> &nbsp;
                <TextField value={updateProduct.description} name='description' label="Description" variant='outlined' fullWidth onChange={handleChange} /> &nbsp;
                <TextField value={updateProduct.category} name='category' label="Category" variant='outlined' fullWidth onChange={handleChange} />
                <br/><br/>
                <Button type='submit' variant='contained'>Update</Button>
            </form>
        </Paper>
    );
};

export default UpdateProduct;
