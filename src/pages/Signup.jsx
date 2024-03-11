import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    
  return (
    <>
      <div className="container-fluid bg-main">
        <div className="container">
          <div className="row main-container align-items-center justify-content-center">
            <div className="col-lg-6 px-2 py-4 rounded bg-light">
              <h2 className="h2 fw-bold">Sign form</h2>
              <p>Already a user ? <Link to='/login'>Login here</Link></p>
              <form action="">
                <div className="form-group mb-2">
                  <label htmlFor="email" className="h6">First Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="email" className="h6">Last Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="email" className="h6">Mobile</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="email" className="h6">Email</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="email" className="h6">Password</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group mb-2">
                  <button className="btn btn-primary w-25 rounded-0">Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup