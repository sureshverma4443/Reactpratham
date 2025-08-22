import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import { withTheme } from '@emotion/react';
import { PieChart } from '@mui/x-charts';

// Bar chart dataset
const dataset = [
  { month: 'Jan', london: 3, paris: 5, newYork: 8, seoul: 6 },
  { month: 'Feb', london: 4, paris: 6, newYork: 7, seoul: 5 },
  { month: 'Mar', london: 5, paris: 7, newYork: 9, seoul: 8 },
  { month: 'Apr', london: 6, paris: 8, newYork: 10, seoul: 7 },
];

const valueFormatter = (value) => `${value}`;
const chartSetting = { width: 500, height: 300 };

const Home = () => {
  const [products, setProducts] = useState([]);   
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); 

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const parseData = await response.json();
      setProducts(parseData);
    } catch (error) {
      console.log("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Products</h1>

      {/* Line Chart Example */}
      <div style={{ marginBottom: "30px", padding: "20px", borderRadius: "10px"  }}>
        <h2 style={{ color: "white" }}>Monthly Sales (Sample Chart)</h2>
        <PieChart
  series={[
    {
      data: [
        { id: 0, value: 120, label: 'Running' },
        { id: 1, value: 80, label: 'Cycling' },
        { id: 2, value: 60, label: 'Yoga' },
        { id: 3, value: 40, label: 'Swimming' },
      ],
    },
  ]}
  width={200}
  height={200}
/>
        <LineChart 
          xAxis={[{ 
            data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] 
          }]}
          series={[
            { 
              data: [200, 520, 200, 800, 150, 600, 850, 480, 790, 1000, 200, 140], 
              label: "Sales" 
            },
          ]}
          width={600}
          height={300}
          
        />
      </div>

      {/* Bar Chart Example */}
      <div style={{ marginBottom: "30px" }}>
        <h2>City Sales (Sample Chart)</h2>
        <BarChart
          dataset={dataset}
          xAxis={[{ dataKey: 'month' }]}
          series={[
            { dataKey: 'london', label: 'London', valueFormatter },
            { dataKey: 'paris', label: 'Paris', valueFormatter },
            { dataKey: 'newYork', label: 'New York', valueFormatter },
            { dataKey: 'seoul', label: 'Seoul', valueFormatter },
          ]}
          {...chartSetting}
          sx={{
    "& .MuiChartsAxis-root line, & .MuiChartsAxis-root path": {
      stroke: "white",      
    },
    "& .MuiChartsAxis-tickLabel": {
      fill: "white",       
    },
    "& .MuiChartsAxis-label": {
      fill: "white",       
    },
    "& .MuiChartsLegend-root text": {
      fill: "white",       
    },
  }}
        />
      </div>

      {/* Product Cards */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div 
          style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
            gap: "20px" 
          }}
        >
          {products.map(product => (
            <div 
              key={product.id} 
              onClick={() => navigate(`/about/${product.id}?poId=${product.id}`)} 
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "15px",
                backgroundColor: "#b99797ff",
                cursor: "pointer",
                transition: "0.3s",
              }}
            >
              <img 
                src={product.image} 
                alt={product.title} 
                style={{ 
                  width: "100%", 
                  borderRadius: "10px", 
                  marginBottom: "10px", 
                  height: "200px", 
                  objectFit: "contain" 
                }} 
              />
              <h3 style={{ color: "blue", marginBottom: "10px" }}>
                {product.title}
              </h3>
              <p><b>${product.price}</b></p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
