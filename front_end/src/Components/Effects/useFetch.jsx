import { useEffect, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)


  useEffect(() =>{
    fetch(`http://localhost:7000/blogs`)
      .then((res) => {
        if (!res.ok) {
            console.log(res)
          throw Error("Couldn't recieve data");
        }
        res.json();
      })
      .then((data) => {
        setLoading(false);
        setData(data);
        setError(null);
      })
      .catch((err) => {
        setData(null);
        setLoading(false);
        setError(err.message);
      });
  },[])
    return {data, loading, error};
}
 
export default useFetch;