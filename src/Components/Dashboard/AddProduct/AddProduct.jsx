
import Swal from "sweetalert2";
import Title from "../Title";
import axios from "axios";


const AddProduct = () => {
    const handleProduct=(e)=>{
        e.preventDefault();
        const data = new FormData(e.currentTarget);

        const product_name = data.get("product_name");
        const product_price = data.get("product_price");
        const product_color = data.get("product_color");
        const product_image = data.get("product_image");
        const product_discount = data.get("product_discount");
        const product_details = data.get("product_details");

        const product={
          product_name,
          product_price,
          product_color,
          product_image,
          product_discount,
          product_details
        };
        console.log(product)
        
      axios
        .post("http://localhost:3000/product", product, {
          withCredentials: true,
        })
        .then((res) => {
          if (res.data.acknowledged) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: ` ${product_name} added sucessfull`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((error) => console.log(error));

    }
    return (
      <div>
        <Title>Add a Product</Title>
        <div className="hero bg-base-100 h-96">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <div className="card mt-10 bg-base-100 w-full  shadow-2xl">
                <form onSubmit={handleProduct} className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Product Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Product Name"
                      name="product_name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Product price</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Product Price"
                      name="product_price"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Product color</span>
                    </label>
                    <input
                      type="color"
                      placeholder="Product "
                      name="product_color"
                      className="input input-bordered w-full"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Product Image</span>
                    </label>
                    <input
                      type="url"
                      placeholder="Product Discount"
                      name="product_image"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Product Discount</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Product Discount"
                      name="product_discount"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Product details</span>
                    </label>
                    <textarea
                      className="textarea textarea-accent"
                      placeholder="Bio"
                      name="product_details"
                    ></textarea>
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Add Product</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AddProduct;