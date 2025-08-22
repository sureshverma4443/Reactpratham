import { useEffect, useState, useRef } from "react";

function Products1() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef(null);

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

  useEffect(() => {
    if (!loaderRef.current || !hasMore) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      {
        rootMargin: "100px",
      }
    );
    observer.observe(loaderRef.current);
    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [hasMore, page]);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} style={{ marginBottom: "20px" }}>
            <img src={product.image} alt={product.title} width="100" />
            <p>
              <strong>{product.title}</strong>
            </p>
            <p>₹{product.price}</p>
          </li>
        ))}
      </ul>
      {hasMore && (
        <div ref={loaderRef} className="h-10 mt-6 text-center text-gray-500">
          Loading more...
        </div>
      )}
      {!hasMore && (
        <div className="text-center mt-6 font-semibold">All Products loaded</div>
      )}
    </div>
  );
}

export default Products1;
