import React, { useState } from 'react'
import { useProductContext } from '../context'

const Category = () => {

    const {CreateCategory} = useProductContext()

    const [data,setdata] = useState({
        category_name:null,
        image:null,
    })


    const handleSubmit = (e)=>{
        e.preventDefault()
        const formData = new FormData()
        formData.append("category_name",data.category_name)
        formData.append("image",data.image)
        CreateCategory(formData)
    }

  return (
    <div className="container-fluid">
      <div className="container-sm">
        <h2>Add Products</h2>
      </div>
      <div className="container-sm">
        <form>
          <div className="col mb-3">
            <label htmlFor="name" className="h6">
              Category Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder='category name'
              onChange={(e)=>setdata({...data,category_name:e.target.value})}
            />
          </div>
          <div className="col mb-3">
            <label htmlFor="name" className="h6">
              Category Image
            </label>
            <input
              type="file"
              className="form-control"
              id="name"
              name="name"
              onChange={(e)=>setdata({...data,image:e.target.files[0]})}
            />
          </div>
          

          <div className="col">
            <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Category