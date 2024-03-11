import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="container-fluid main-container d-flex justify-content-center align-items-center bg-main">
        <div className="col d-flex flex-column align-items-center justify-content-center gap-4">
          <h1 className='display-2 fw-bold text-center text-light'>Digiuncle Admin</h1>
          <button onClick={() => navigate('/dashboard')} className='btn btn-light  fs-3 rounded-0 w-25'>Get in</button>
        </div>
      </div>
    </>
  )
}

export default Home