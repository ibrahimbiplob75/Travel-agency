import { useQuery } from "@tanstack/react-query";


const ProductHook = () => {

    const {data,isLoading,isFetching,refetch} = useQuery({
      queryKey: ["product"],
      queryFn: async () => {
        const product = await fetch("http://localhost:3000/product");
        return product.json();
      },
    });
    return { data, isLoading, isFetching, refetch };
};

export default ProductHook;