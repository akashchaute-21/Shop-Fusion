import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from '../components/CartItem'
import { useEffect, useState } from "react";

const Cart = () => {

  const {cart} = useSelector( (state) => (state));
  console.log("Printing cart");
  console.log(cart );
  const[totalAmount, setAmount] = useState(0);

  useEffect(() => {
    setAmount( cart.reduce( (acc, curr) => acc + curr.price, 0) );  //amount calculation
  }, [cart])  //change if changes in cart

  return (
  <div>
  {
    cart.length > 0 ?
    (<div className="flex justify-center items-start gap-x-28  mt-28 mb-16 w-[100%]">

      <div className="h-fit flex flex-col gap-20 w-[33%]">
        {
          cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />
          })
        }
      </div>

      <div className="flex flex-col items-start justify-between h-[480px] ">
        <div className="text-2xl font-semibold text-green-700 ">Your Cart</div>
        <div className="text-6xl font-bold text-green-700 uppercase mb-48">Summary</div>
        <p className="text-[23px] text-black font-semibold ">
          <span> Total Items: {cart.length} </span>
        </p>

        <div className="flex flex-col items-start gap-y-4">
          <p className="text-[23px]">Total Amount: 
          <span className="font-semibold ml-1">${totalAmount}</span>
          </p>
        </div>
        <button className="bg-green-700 text-white px-20 py-2 rounded-md">
          Checkout Now
        </button>

      </div>

    </div>):
    (<div className="flex flex-col justify-center items-center w-screen h-screen gap-10">
      <h1 className="text-2xl">Cart is Empty :(</h1>
      <NavLink to={"/"}>
        <button className="bg-green-700 text-white px-4 py-2 rounded-md mb-20">
          Shop Now
        </button>
      </NavLink>
      </div>)
  }
  </div>
  );
};

export default Cart;
