import React, { useState } from "react";
import { IProduct } from "../models";

interface ProductProps {
  product: IProduct;
}

const Product = ({ product }: ProductProps) => {
  const [details, setDetails] = useState(false);

  function onDetails() {
    setDetails(prev => !prev);
  }

  return (
    <div className="w-4/12 flex flex-col items-center justify-center mx-auto gap-4 p-4 border-solid border-2 border-zinc-500">
      <img className="w-1/2" src={product.image} alt={product.title} />
      <h3 className="bold">{product.title}</h3>
      <button
        className="flex items-center justify-center bg-yellow-300 hover:bg-yellow-500 p-4"
        onClick={onDetails}
      >
        {details ? "Hide Descr" : "Show Descr"}
      </button>
      {details && (
        <div className="p-4 bg-slate-500 flex flex-col gap-4 text-slate-100">
          <p>{product.description}</p>
          {product?.rating?.rate && <p>Rate: {product?.rating?.rate}</p>}
        </div>
      )}
    </div>
  );
};

export default Product;
