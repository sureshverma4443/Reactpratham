import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const About = () => {
  const { postid } = useParams(); // from route /about/:postid
  const [searchParams] = useSearchParams();
  const poId = searchParams.get("poId"); // query param ?poId=...

  const [productDetail, setProductDetail] = useState(null);

  const fetchPostDetails = async (id) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const parseData = await response.json();
      setProductDetail(parseData);
    } catch (error) {
      console.log("Error fetching product:", error);
    }
  };

  useEffect(() => {
    const idToFetch = poId || postid; // ✅ prefer query param if available
    if (idToFetch) {
      fetchPostDetails(idToFetch);
    }
  }, [postid, poId]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product Details</h1>
      <p>From URL param: {postid}</p>
      {poId && <p>From search param: {poId}</p>}

      {productDetail ? (
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "20px",
            maxWidth: "400px",
            background: "#f9f9f9",
          }}
        >
          <img
            src={productDetail.image}
            alt={productDetail.title}
            style={{ width: "100%", borderRadius: "10px", marginBottom: "15px" }}
          />
          <h2>{productDetail.title}</h2>
          <p><b>Price:</b> ${productDetail.price}</p>
          <p><b>Category:</b> {productDetail.category}</p>
          <p>{productDetail.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default About;
