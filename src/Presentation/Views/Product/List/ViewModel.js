import { useState } from "react"

export default function ProductListViewModel({ GetProductsUseCase }) {

    const [error, setError] = useState("");
    const [products, setProducts] = useState([]);
    const [productDetail, setProductDetail] = useState([]);

    async function getProducts() {
        const { result, error } = await GetProductsUseCase.execute();
        setError(error)
        setProducts(result)
    }
    async function findProductDetail(id){
        for(var p in products){
            if(p.id == id){
                setProductDetail(p);
            }
        }
    }

    return {
        error,
        getProducts,
        products,
        findProductDetail,
        productDetail
    }
}