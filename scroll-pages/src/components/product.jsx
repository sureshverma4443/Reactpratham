import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

function Products() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const limit = 10;

  const fetchProducts = async () => {
    try {
      const res = await fetch(
        `https://fakestoreapi.com/products?limit=${limit}&offset=${(page - 1) * limit}`
      );
      const data = await res.json();
      return data;
    } catch (error) {
      console.log("Error fetching products", error);
      return [];
    }
  };

  const loadMore = async () => {
    const newItems = await fetchProducts();
    if (newItems.length === 0) {
      setHasMore(false);
      return;
    }
    setProducts((prev) => [...prev, ...newItems]);
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    loadMore(); 
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <InfiniteScroll
        dataLength={products.length}
        next={loadMore}
        hasMore={hasMore}
        loader={<h4 style={{ textAlign: "center" }}>Loading more...</h4>}
        endMessage={
          <p style={{ textAlign: "center", fontWeight: "bold" }}>
            All Products Loaded
          </p>
        }
      >
        <ul>
          {products.map((product) => (
            <li key={product.index} style={{ marginBottom: "20px" }}>
              <img src={product.image} alt={product.title} width="100" />
              <p>
                <strong>{product.title}</strong>
              </p>
              <p>₹{product.price}</p>
            </li>
          ))}
        </ul>
      </InfiniteScroll>
    </div>
  );
}

export default Products;
