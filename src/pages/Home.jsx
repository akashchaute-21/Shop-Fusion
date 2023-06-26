import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import img from "../assets/rounded_logo.png"

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  
  async function fetchProductData() {
    setLoading(true);

    try{
      const res = await fetch(API_URL);
      const data = await res.json();
      // data came in many object form
      setPosts(data);
    }
    catch (error) {
        console.log("Error aa gya");
        setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() =>{
    fetchProductData();
  }, []) // bringing data only once
  return (
  <div>
    { 
      loading ? <Spinner/> :
      posts.length > 0 ? 
      (<div>
        <div className="flex justify-center flex-col items-center">
        <p className="border-dashed border-4 border-indigo-600  text-6xl font-semibold mt-10 p-4 rounded-2xl">Shop Fusion</p>
      </div>
      <div className= "grid  xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
        {
        posts.map( (post) => (
          <Product key= {post.id} post={post} />
        ))
        }
      </div>
      </div>) :
      <div className="flex justify-center items-center">
       <p>No data found</p>
      </div>
    }
  </div>
  );
};

export default Home;
