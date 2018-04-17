import axios from "axios";

export default {
  // Gets all product
  getProduct: function() {
    return axios.get("/api/product");
  },
  // Gets the book with the given id
  getProduct: function(id) {
    return axios.get("/api/product/" + id);
  },
  // Deletes the book with the given id
  deleteProduct: function(id) {
    return axios.delete("/api/product/" + id);
  },
  // Saves a book to the database
  saveProduct: function(productData) {
    return axios.post("/api/product", productData);
  }
};