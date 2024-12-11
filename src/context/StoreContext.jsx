import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const navigate = useNavigate()

    const url = import.meta.env.VITE_BACKEND_URL;
    const [allProducts, setAllProducts] = useState([]);
    const [selected, setSelected] = useState('')
    const [userId, setUserId] = useState(()=>sessionStorage.getItem("userId") || "");
    const [sum,setSum] = useState(0);
    const [cart, setCart] = useState(() => {
    const savedCart = sessionStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
      });

    const [detail,setDetail] = useState(()=>JSON.parse(sessionStorage.getItem("detail")) || {});
    
    useEffect(()=>sessionStorage.setItem("userId",userId),[userId])
    useEffect(() => {
        const fetchCartData = async () => {
          try {
            const response = await axios.get(`${url}/users`);
            const userCart = response.data.data.find(user => user._id === userId);
            if (userCart) {
              setCart(userCart.cartData);
              sessionStorage.setItem("cart", JSON.stringify(userCart.cartData));
            }
            else {
              console.log("Empty cart!")
            }
          } catch (error) {
            console.error("Error fetching cart data:", error.message);
          }
        };
    
        const savedCart = sessionStorage.getItem("cart");
        if (!savedCart) {
          fetchCartData();
        }
      }, [userId]);

      useEffect(() => {
        const totalSum = cart.reduce((accumulator, cartItem) => {
          const item = allProducts.find((data) => data.id === cartItem.id);
          return item ? accumulator + item.price * cartItem.count : accumulator;
        }, 0);
        setSum(totalSum);
      }, [cart]);

    const AddToCart = (itemId,countVal) => {
        setCart((prevCart) => 
            prevCart.some((item) => item.id === itemId) 
              ? prevCart 
              : [...prevCart, { id: itemId, count: (countVal ? countVal : 1) }]
          );
        }

    const Increment = (itemId) => {
                setCart((prevCart) => 
                    prevCart.map((item) => 
                    item.id === itemId ? { ...item, count: (item.count >= 10) ? item.count : (item.count + 1) } : item
                    )
                );
            }

    const Decrement = (itemId) => {
            setCart((prevCart) => 
                prevCart.map((item) => 
                item.id === itemId ? { ...item, count: (item.count === 1) ? item.count : (item.count - 1) } : item
                )
            );
        }

    const Remover = (itemId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
    }

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then((response)=>setAllProducts(response.data))
    },[])

    const productDetail = (itemId) => {
        const product = allProducts.find(pro => pro.id === itemId);
        setDetail(product);
        navigate('/product-details');
      }

    useEffect(()=>sessionStorage.setItem("detail",JSON.stringify(detail)),[detail])


    console.log(allProducts)

    const contextValue = {
        detail,
        productDetail,
        sum,
        Increment,
        Decrement,
        Remover,
        cart,
        AddToCart,
        userId,
        setUserId,
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