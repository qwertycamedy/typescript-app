import axios from "axios";
import React, { useState } from "react";
import { IProduct } from "../models";
import ErrorMessage from "./ErrorMessage";


const newProduct: IProduct = {
  title: '',
  price: 13.5,
  description: 'lorem ipsum set',
  image: 'https://i.pravatar.cc',
  category: 'electronic',
  rating: {
    rate: 42,
    count: 10
  }
}

interface CreateProductProps {
  onCreate: (product:IProduct) => void
}

const CreateProduct = ({onCreate} :CreateProductProps) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState('');

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if(value.trim().length === 0) {
      setError('Please enter valid title')
      return
    }

    newProduct.title = value;
    const response = await axios.post<IProduct>('https://fakestoreapi.com/products', newProduct);
    onCreate(response.data)
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={submitHandler}>
      <input
        type="text"
        className="border py-2 px-4 mb-2 w-full outline-none"
        placeholder="Type some.."
        value={value}
        onChange={changeHandler}
      />
      {
        error && <ErrorMessage error={error} />
      }
      <button
        type="submit"
        className="flex items-center justify-center bg-yellow-300 hover:bg-yellow-500 p-2 outline-none"
      >
        Create
      </button>
    </form>
  ); 
};

export default CreateProduct;
