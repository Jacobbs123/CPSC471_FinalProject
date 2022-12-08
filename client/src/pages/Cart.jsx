import {React, useState, useEffect} from 'react';
import { useUserAuth } from '../Authentication/UserAuthentication';
import NavBar from '../Navbar/NavBar';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Cart = () => { 
    const [cart, setCart] = useState([]);
    const { user } = useUserAuth(); 

    useEffect(() => { 
    const getCart = async ()=> {
        
        try {
            // Makes an API request to this link
            const res = await axios.get("http://localhost:8800/cart", {
                params: { 
                    user_id: user.user_id
                }
            });
            setCart(res.data);
            // console.log(res);
        } catch (err) {
            console.log(err);
        }
    }
    getCart()
    }, [user, cart]);

    const removeCart = (event, product_id) => {
        const addCart = async ()=> {
            try {
                console.log(user.user_id);
                // Makes an API request to this link
                const res = await axios.post("http://localhost:8800/cartRemove", {
                    product_id: product_id,
                    user_id: user.user_id,
                    quantity: 1,
                });
                console.log(res);
            } catch (err) {
                console.log(err);
            }
        }
        addCart()
      };
   
    const cartList = cart.map((cart, index) => {
        return (
          <div key={index} className="p-5">
            <h2>{cart.product_name}</h2>
            <p>Price: ${cart.price}</p>
            <h3 onClick={event => removeCart(event, cart.product_id)}>Remove</h3>
          </div>
        );
    });

    return (
        <div>
            <NavBar />
            <h1>Cart</h1>
            <div className="cart">
                {cartList}
             </div>
            <div> 
                <Link to="/payment">Buy Cart</Link>
            </div>
        </div>
    );
} 
export default Cart;