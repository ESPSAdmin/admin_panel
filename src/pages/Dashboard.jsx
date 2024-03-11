import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useAuthContext } from '../context'

const Dashboard = () => {
    const {logoutHandler} = useAuthContext();
  return (
    <>
        <div className="container-fluid">
            <div className="row main-container">
                <div className="col-3 d-flex flex-column justify-content-between bg-main">
                    <ul className='nav flex-column'>
                        <li className="nav-item">
                            <Link to='/admin' className='nav-link text-light fw-bold'>Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/addproducts' className='nav-link text-light fw-bold'>Add Product</Link>
                        </li>
                    </ul>
                    <ul className='nav flex-column'>
                        <li className='nav-item'>
                            <Link onClick={logoutHandler} className='nav-link h4 fw-bold text-light'>Logout</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-lg">
                    <Outlet />
                </div>
            </div>
        </div>
    </>
  )
}

export default Dashboard