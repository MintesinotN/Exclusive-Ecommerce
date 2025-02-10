import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

  const navigate = useNavigate()

  const url = import.meta.env.VITE_BACKEND_URL;
  const [token,setToken] = useState(sessionStorage.getItem("token") || "")
  const [allProducts, setAllProducts] = useState([]);
  const [selected, setSelected] = useState('')
  const [sum,setSum] = useState(0);
  const [cart, setCart] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);

  const [detail,setDetail] = useState(()=>JSON.parse(sessionStorage.getItem("detail")) || {});

  useEffect(() => {
    const totalSum = (Array.isArray(cart) ? cart : []).reduce((accumulator, cartItem) => {
      const item = allProducts.find((data) => data.id === cartItem.id);
      return item ? accumulator + item.price * cartItem.count : accumulator;
    }, 0);
    setSum(totalSum);
  }, [cart]);

  const AddToCart = async (itemId) => {
    const val = cart.find(item => item.id === itemId)
    if (token && !val) {
      setCart((prev)=>([...prev,{id:itemId, count:1}]))
      await axios.post(url+"/api/cart/firstAdd",{itemId},{headers:{token}})    }
    }

  const Increment = async (itemId) => {

    if (isDisabled) return;

    if (token) {
      setIsDisabled(true);
      setCart((prev)=>prev.map((item) => 
        item.id === itemId ? {...item, count: item.count + 1} : item))
      await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
      setTimeout(() => setIsDisabled(false), 2000);
    }
  }

  const Decrement = async (itemId) => {

    if (isDisabled) return;

    const val = cart.find(item => item.id === itemId);
    const countVal = val.count
    if (token && countVal > 1) {
      setIsDisabled(true);
      setCart((prev)=>prev.map((item) => 
        item.id === itemId ? {...item, count: item.count - 1} : item))
      await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
      setTimeout(() => setIsDisabled(false), 1000);
    }
  }

  const Remover = async (itemId) => {
    const val = cart.findIndex(item => item.id === itemId);
    if (val === -1) return;
    setCart(cart => cart.toSpliced(val,1));
    if (token) {
      await axios.post(url+"/api/cart/totalRemove",{itemId},{headers:{token}})
    }
  }

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((response)=>setAllProducts(response.data))
  },[])

  const loadCartData = async (token) => {
    const response = await axios.post(url+"/api/cart/get",{},{headers:{token}})
    setCart(response.data.cartData);
  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      loadCartData(token);
    }
  },[token])

  const productDetail = (itemId) => {
    const product = allProducts.find(pro => pro.id === itemId);
    setDetail(product);
    navigate('/product-details');
    AddToCart(itemId);
  }

  useEffect(()=>sessionStorage.setItem("detail",JSON.stringify(detail)),[detail])

  const contextValue = {
    token,
    setToken,
    detail,
    productDetail,
    sum,
    Increment,
    Decrement,
    Remover,
    cart,
    AddToCart,
    url,
    allProducts,
    selected,
    setSelected,
  }

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )

}

export default StoreContextProvider;