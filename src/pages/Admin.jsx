import React, { useState } from 'react';
import { useProductContext } from '../context';
import Pagination from '../components/pagination/Pagination';

const Admin = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { product, deleteProductHandler } = useProductContext();
 

  const productsPerPage = 10;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentData = product?.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(product?.length / productsPerPage);
  const showingFrom = indexOfFirstProduct + 1;
  const showingTo = Math.min(indexOfLastProduct, product?.length);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container-fluid">
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Product Name</th>
              <th scope="col">Created At</th>
              <th scope="col">Updated At</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentData?.map((productItem, idx) => (
              <tr key={idx}>
                <td>{productItem?.name?.slice(0, 30)}</td>
                <td>{productItem?.createdAt?.slice(0, 16)}</td>
                <td>{productItem?.updatedAt?.slice(0, 16)}</td>
                <td className="d-flex align-items-center gap-2">
                  <button onClick={() => deleteProductHandler(productItem.product_id,productItem.image)} className="btn btn-danger">Delete</button>
                  <button className="btn btn-primary">Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={product?.length}
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
        <div>
          Showing {showingFrom} to {showingTo} of {product?.length} products
        </div>
        
      </div>
    </div>
  );
};

export default Admin;
