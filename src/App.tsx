import { useContext } from "react";
import CreateProduct from "./components/CreateProduct";
import ErrorMessage from "./components/ErrorMessage";
import LoadingMessage from "./components/LoadingMessage";
import Modal from "./components/Modal";
import Product from "./components/Product";
import { ModalContext } from "./context/ModalContext";
import { useProducts } from "./hooks/products";
import { IProduct } from "./models";

function App() {
  const { products, error, loading, addProduct } = useProducts();
  const {modal, open, close} = useContext(ModalContext)

  const createHandler = (product:IProduct) => {
    close()
    addProduct(product)
  }
  return (
    <div className="App p-4 flex justify-center">
      {error && <ErrorMessage error={error} />}
      {loading && <LoadingMessage />}
      {modal && (
        <Modal title="Create new product" onClose={close}>
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}
      <div className="flex flex-col gap-4 items-center justify-center">
        <button className="flex items-center justify-center bg-yellow-300 hover:bg-yellow-500 p-2 outline-none" onClick={open}>+</button>
        {products.map(product => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
