import React, { useState } from "react";
import { useProductContext } from "../context";
import ImageInput from "../components/ImageInput/ImageInput";

const AddProduct = () => {
  const { categories, addProductHandler } = useProductContext();
  const [productData, setProductData] = useState({
    name: "",
    brand: "",
    MRP_price: 0,
    selling_price: 0,
    category: "",
    IN_stock: 0,
    Product_color: "",
    material: "",
    length: "",
    width: "",
    height: "",
    weight: "",
    description: "",
    image: null,

  })

  console.log(productData)


  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    // // Append product data fields to formData
    formData.append("name", productData.name);
    formData.append("brand", productData.brand);
    formData.append("MRP_price", productData.MRP_price);
    formData.append("selling_price", productData.selling_price);
    formData.append("category", productData.category);
    formData.append("IN_stock", productData.IN_stock);
    formData.append("Product_color", productData.Product_color);
    formData.append("material", productData.material);
    formData.append("length", productData.length);
    formData.append("width", productData.width);
    formData.append("height", productData.height);
    formData.append("weight", productData.weight);
    formData.append("description", productData.description);


    const images = productData.image
    for (let i = 0; i < images.length; i++) {
      formData.append('images', images[i]);
    }

  
    
    
    addProductHandler(formData);
  };


  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setProductData((prevData) => ({
  //     ...prevData,
  //     [name]: value
  //   }));
  // };

  return (
    <div className="container-fluid">
      <div className="container-sm">
        <h2>Add Products</h2>
      </div>
      <div className="container-sm">
        <form onSubmit={handleSubmit}>
          <div className="col mb-3">
            <label htmlFor="name" className="h6">
              Product Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={productData.name}
              onChange={(e) => setProductData({ ...productData, name: e.target.value })}
            />
          </div>
          <div className="col mb-3">
            <label htmlFor="brand" className="h6">
              Product Brand
            </label>
            <input
              type="text"
              className="form-control"
              id="brand"
              name="brand"
              value={productData.brand}
              onChange={(e) => setProductData({ ...productData, brand: e.target.value })}
            />
          </div>

          <div className="col mb-3">
            <label htmlFor="category" className="h6">
              Product Category
            </label>
            <select
              id="category"
              className="form-select"
              name="category"
              value={productData.category}
              onChange={(e) => setProductData({ ...productData, category: e.target.value })}
            >
              {categories?.map((cat, idx) => (
                <option key={idx} value={cat.category_name}>
                  {cat.category_name}
                </option>
              ))}
            </select>
          </div>
          <div className="col mb-3">
            <label htmlFor="description" className="h6">
              Product Description
            </label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              value={productData.description}
              onChange={(e) => setProductData({ ...productData, description: e.target.value })}
              rows={5}
            />
          </div>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button h6"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Shipping
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="row">
                    <div className="col-lg">
                      <label htmlFor="MRP_price" className="h6">
                        Product MRP Price
                      </label>
                      <input type="text"
                        className="form-control"
                        id="MRP_price"
                        name="MRP_price"
                        value={productData.MRP_price}
                        onChange={(e) => setProductData({ ...productData, MRP_price: e.target.value })}
                      />
                    </div>
                    <div className="col-lg">
                      <label htmlFor="selling_price" className="h6">
                        Product Selling Price
                      </label>
                      <input type="text"
                        className="form-control"
                        id="selling_price"
                        name="selling_price"
                        value={productData.selling_price}
                        onChange={(e) => setProductData({ ...productData, selling_price: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg">
                      <label htmlFor="IN_stock" className="h6">
                        Product Quantity
                      </label>
                      <input type="text"
                        className="form-control"
                        id="IN_stock"
                        name="IN_stock"
                        value={productData.IN_stock}
                        onChange={(e) => setProductData({ ...productData, IN_stock: e.target.value })}
                      />
                    </div>
                    <div className="col-lg">
                      <label htmlFor="product_selling_price" className="h6">
                        Product Stock
                      </label>
                      <input type="text"
                        className="form-control"
                        id="product_selling_price"
                        name="product_selling_price"

                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg">
                      <label htmlFor="Product_color" className="h6">
                        Color
                      </label>
                      <input type="text"
                        className="form-control"
                        id="Product_color"
                        name="Product_color"
                        value={productData.Product_color}
                        onChange={(e) => setProductData({ ...productData, Product_color: e.target.value })}
                      />
                    </div>
                    <div className="col-lg">
                      <label htmlFor="material" className="h6">
                        Matierial
                      </label>
                      <input type="text"
                        className="form-control"
                        id="material"
                        name="material"
                        value={productData.material}
                        onChange={(e) => setProductData({ ...productData, material: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg">
                      <label htmlFor="weight" className="h6">
                        Weight
                      </label>
                      <input type="text"
                        className="form-control"
                        id="weight"
                        name="weight"
                        value={productData.weight}
                        onChange={(e) => setProductData({ ...productData, weight: e.target.value })}
                      />
                    </div>
                    <div className="col-lg">
                      <label htmlFor="length" className="h6">
                        Dimension
                      </label>
                      <input type="text"
                        className="form-control"
                        id="length"
                        name="length"
                        value={productData.length}
                        onChange={(e) => setProductData({ ...productData, length: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button h6"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Product Image
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="row">
                    <div className="col-lg">
                      <div className="row align-items-center">
                        <div className="col">
                          <ImageInput setProductData={setProductData} productData={productData} />
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
