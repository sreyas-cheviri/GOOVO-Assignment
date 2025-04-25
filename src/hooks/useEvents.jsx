import { useState, useEffect } from 'react';
import axios from "axios";

const API_URL =import.meta.env.VITE_API_URL;

export const useEvents = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_URL);
      setProductList(response.data);
    } catch (error) {
      setError(error.message);
      setProductList([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { productList, loading, error, fetchProducts };
};

export default useEvents;
