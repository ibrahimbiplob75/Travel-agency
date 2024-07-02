import axios from "axios";
import Swal from "sweetalert2";


const SingleProduct = ({ product, refetch }) => {
  const { _id, product_name, product_image, product_details } = product;
  const handleDelete = () => {
    axios.delete(`http://localhost:3000/product/${_id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: ` ${product_name} deleted sucessfull`,
          showConfirmButton: false,
          timer: 1500,
        });
        refetch()
      }
    });
  };
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl ">
        <figure>
          <img className="max-h-[200px]" src={product_image} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product_name}</h2>
          <p>{product_details}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Update</button>
            <button onClick={() => handleDelete()} className="btn btn-error">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;