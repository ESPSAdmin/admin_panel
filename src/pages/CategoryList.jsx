import React from 'react'
import { useProductContext } from '../context'

const CategoryList = () => {

    const { categories,DeleteCategory } = useProductContext()


    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Image</th>
                        <th scope="col">Category Name</th>
                        <th scope="col">action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        categories?.map((item, index) => {
                            return (
                                <tr key={index} >
                                    <th scope="row">{index + 1}</th>
                                    <td>
                                        <div  >
                                            <img src={item.image_url} alt='category' height="100px" width="100px" />
                                        </div>
                                    </td>
                                    <td>{item.category_name}</td>
                                    <td className="d-flex align-items-center gap-2">
                                        <button className="btn btn-danger" onClick={()=>DeleteCategory(item.category_id,item.image_url)} >Delete</button>
                                        <button className="btn btn-primary">Update</button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}

export default CategoryList