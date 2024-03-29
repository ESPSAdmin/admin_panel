import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
// import Swal from "sweetalert2";
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("Admintoken"));
  const [loader, setLoader] = useState(false)

  const loginHandler = async (data) => {

    try {
      setLoader(true)
      const response = await axios.post('https://api.digiuncle.co.in/user/login', data);
      if (response.data.data.type === "admin") {
        const { token: newToken } = response.data;
        setLoader(false)
        toast.success(response.data.message);
        console.log(response)
        setToken(newToken);
        localStorage.setItem("Admintoken", newToken);
      } else {
        toast.error("Invalid credentials")
      }

    } catch (error) {
      toast.error(error.response?.data.message || "An error occurred");
    } finally {
      setLoader(false)
    }
  };

  const registerHandle = async (data) => {

    setLoader(true)
    try {
      const res = await axios.post('https://api.digiuncle.co.in/user/create/', data)
      if (res.data.data.type === "admin") {
        const { token: newToken } = res.data;
        toast.success(res.data.message);
        window.location.href = "/dashboard"
        setToken(newToken);
        localStorage.setItem("Admintoken", newToken);
      }else{
        toast.error("Invalid credentials")
      }

    } catch (err) {
      toast.error(err.response?.data.message || "An error occurred");
    } finally {
      setLoader(false)
    }
  }

  const logoutHandler = () => {
    Swal.fire({
      title: "Do you want to Logout ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#23b1a5",
      cancelButtonColor: "#eb2632",
      confirmButtonText: "Yes",
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
      }
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Logout Successfully!",
          icon: "success"
        });
        localStorage.removeItem('Admintoken');
        setToken(null);
        window.location.href = "/"
      }
    })
  }



  return (
    <AuthContext.Provider value={{ token, loginHandler, registerHandle, loader, logoutHandler }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
