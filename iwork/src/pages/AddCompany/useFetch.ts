import { useState, useEffect } from 'react';
import axios from 'axios';

const fetchFormConfig = async () => {
  const response = await axios.get('http://jsonblob.com/1351559948064186368');
  console.log(response.data, response, 'response');
  return response.data;
};

export const useFetchFormConfig = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchFormConfig();
        setData(result);
      } catch (error: any) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, error, isLoading };
};