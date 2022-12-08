import {React, useState, useEffect} from 'react';
import { useUserAuth } from '../Authentication/UserAuthentication';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Cart = () => { 
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const { user } = useUserAuth();  

    
    const getCart = async ()=> {
        try {
            // Makes an API request to this link
            const res = await axios.get("http://localhost:8800/cart", {
                params: { 
                    user_id: user.id
                }
            });
            setCart(res.data);
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    }
    getCart()
   
    const cartList = cart.map((cart, index) => {
        return (
          <div key={index} className="p-5">
            <h2
              className="text-md hover:underline"
              
            ></h2>
                </div>
        );
    });

    return (
        <div></div>
    );
} 
export default Cart;