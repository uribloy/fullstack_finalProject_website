import Product from "./ProductManage/product";
function ProductList({ filteredProducts }) {
  return (
    <>
      {filteredProducts.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </>
  );
}

export default ProductList;
