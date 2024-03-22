import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
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
        const productResponse = await axios.get('https://api.digiuncle.co.in/product/admin-get',{headers:{Authorization:`espsadmin ${token}`}});
        console.log(productResponse.data.data)
        setProducts(productResponse.data.data);

        // Fetch category data
        const categoryResponse = await axios.get('https://api.digiuncle.co.in/category/get',{headers:{Authorization:`espsadmin ${token}`}});
        console.log(categoryResponse)
        setCategories(JSON.parse(categoryResponse.data.data));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setAllLoader(false);
      }
    };


useEffect(()=>{
  if(token){

    fetchData();  
  }
},[])
  
// Dependency array is empty because we only want to fetch data once

  const addProductHandler = async (formData) => {
    console.log(formData);
    try {
      const response = await axios.post(
        'https://api.digiuncle.co.in/product/create',
        formData,
        { headers: { 
          "Content-Type" : "multipart/form-data",
          Authorization: `espsadmin ${token}`
       } } 
      );
      toast.success(response.data.message);
      console.log(response.data.message); // Log the response data
    } catch (error) {
      console.error(error);
    }
  };
  
 
const deleteProductHandler = async (id,data) => {
  
  try {
    const response = await axios.delete(
      `https://api.digiuncle.co.in/product//delete/${id}`,{headers:{images_url:data,Authorization:`espsadmin ${token}`}}
    );
    toast.success(response.data.message);
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

const CreateCategory = async (formdata) => {
  try{
    const res = await axios.post("https://api.digiuncle.co.in/category/create",formdata,{headers:{
      Authorization:`espsadmin ${token}`
    }})
    toast.success(res.data.data.message);
  }catch(err){
    console.log(err)
  }
}

const DeleteCategory = async (id,data) => {
  try{
    const res = await axios.delete(`https://api.digiuncle.co.in/category/delete/${id}`,{headers:{
      image_path:data,
      Authorization:`espsadmin ${token}`
    }})
    toast.success(res.data.message);
    console.log(res)
  }catch(err){
    console.log(err)
  }
}




  return (
    <ProductContext.Provider value={{ product, categories, allLoader, addProductHandler, deleteProductHandler,CreateCategory,DeleteCategory }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
