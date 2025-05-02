import React, { useState } from 'react';
import { Paper, Typography, TextField, Button } from '@mui/material';
import axios from 'axios';

const AddNewProduct = () => {
    let paperStyle = { width: 300, margin: "17px auto", padding: "17px" };

    let [addProduct, setAddProduct] = useState({
        title: '',
        price: '',
        description: '',
        image: 'https://i.pravatar.cc',
        category: ''
    });

    function handleChange(e) {
        let { name, value } = e.target;
        if (name === "price") {
            value = parseFloat(value) || 0; 
        }
        setAddProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value
        }));
    }

    function handleAdd(e) {
        e.preventDefault();
        axios.post("https://fakestoreapi.com/products", addProduct)
            .then(() => alert("Product Added Successfully!"))
            .catch(error => {
                console.error("Error:", error);
                alert("Failed to add product.");
            });
    }

    return (
        <Paper elevation={20} style={paperStyle}>
            <Typography variant='h5'>Add New Product</Typography>
            <form onSubmit={handleAdd}>
                <TextField 
                    value={addProduct.title} 
                    name='title' 
                    label="Title" 
                    variant="outlined" 
                    fullWidth 
                    onChange={handleChange} 
                /> &nbsp;
                <TextField 
                    value={addProduct.price} 
                    name='price' 
                    label="Price" 
                    variant='outlined' 
                    fullWidth 
                    onChange={handleChange} 
                /> &nbsp;
                <TextField 
                    value={addProduct.description} 
                    name='description' 
                    label="Description" 
                    variant='outlined' 
                    fullWidth 
                    onChange={handleChange} 
                /> &nbsp;
                <TextField 
                    value={addProduct.image}
                    name="image"
                    label="Image URL"
                    variant="outlined"
                    type="text"
                    fullWidth
                    onChange={handleChange}
                /> &nbsp;
                <TextField  
                    value={addProduct.category} 
                    name='category' 
                    label="Category" 
                    variant='outlined' 
                    type='text' 
                    fullWidth 
                    onChange={handleChange}
                />
                <br/><br/>
                <Button type='submit' variant='contained'>Add</Button>
            </form>
        </Paper>
    );
};

export default AddNewProduct;
