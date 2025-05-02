import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { Button as Btn } from "@mui/material";
import{MdShoppingCart}from "react-icons/md"

function NavScrollExample() {
  
  const [searchTerm, setSearchTerm] = useState(""); // State for search input
  const navigate = useNavigate(); // Hook for navigation

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/products/${searchTerm}`); // Navigate to product details page
      setSearchTerm(""); // Clear search input
    }
  };
  
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Nav.Link as={Link} to={"/"}>
          <Navbar.Brand>ShopiFy</Navbar.Brand>
        </Nav.Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/signup">SignUp</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
          </Nav>
          {/* Search Form */}
          <Form className="d-flex" onSubmit={handleSearch}>
            <Btn variant="contained" color="info" onClick={()=>navigate("/mycart")}><MdShoppingCart/></Btn> 
            <Form.Control
              type="search"
              placeholder="Enter Product ID"
              className="me-2"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button type="submit" variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
