import { useQuery } from "@tanstack/react-query";
import Title from "../Title";
import SingleProduct from "./SingleProduct";
import ProductHook from "../../Hook/ProductHook";

const ManageProduct = () => {

    const {data,refetch}=ProductHook()
    return (
      <div>
        <Title>Manage Product</Title>
        <div  className="grid gap-4 mt-6">
          {data?.map((product) => (
            <SingleProduct
              key={product.id}
              refetch={refetch}
              product={product}
            ></SingleProduct>
          ))}
        </div>
      </div>
    );
};

export default ManageProduct;