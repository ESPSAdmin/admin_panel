import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const token = localStorage.getItem('token');
  const [product, setProducts] = useState([]); // Change 'product' to 'products' for consistency
  const [categories, setCategories] = useState([]); // Change 'category' to 'categories' for consistency
  const [allLoader, setAllLoader] = useState(false);

  
    const fetchData = async () => {
      setAllLoader(true);
      try {
        // Fetch product data
        const productResponse = await axios.get('https://api.digiuncle.co.in/product/get');
        setProducts(productResponse.data.result);

        // Fetch category data
        const categoryResponse = await axios.get('https://api.digiuncle.co.in/category/get');
        setCategories(categoryResponse.data.result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setAllLoader(false);
      }
    };
useEffect(()=>{
  fetchData();

    // Clean-up function to cancel any ongoing requests (if necessary)
    return () => {};
},[])
  
// Dependency array is empty because we only want to fetch data once

  const addProductHandler = async (data) => {
    try {
      const response = await axios.post(
        'https://api.digiuncle.co.in/product/create',
        data,
        { headers: { token: `${token}` } } // Use Authorization header for token
      );
      console.log(response.data); // Log the response data
    } catch (error) {
      console.error(error);
    }
  };
  
 
const deleteProductHandler = async (id) => {
  try {
    const response = await axios.delete(
      `https://api.digiuncle.co.in/product/delete/${id}`
    );

    // Show confirmation dialog using Swal
    const result = await Swal.fire({
      title: 'Do you want to delete?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#23b1a5',
      cancelButtonColor: '#eb2632',
      confirmButtonText: 'Yes',
      showClass: {
        popup: 'animate__animated animate__fadeInUp animate__faster',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutDown animate__faster',
      },
    });
    
    // If user confirms deletion, show success message
    if (result.isConfirmed) {
      Swal.fire({
        title: 'Deleted Successfully!',
        icon: 'success',
      });
    }
fetchData()
    console.log(response.data); // Log the response data
  } catch (error) {
    console.error(error);
    // Show error message if deletion fails
    Swal.fire({
      title: 'Error!',
      text: 'Failed to delete product.',
      icon: 'error',
    });
  }
}

  return (
    <ProductContext.Provider value={{ product, categories, allLoader, addProductHandler, deleteProductHandler }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
