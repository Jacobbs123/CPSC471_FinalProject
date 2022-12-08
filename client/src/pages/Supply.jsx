import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../Authentication/UserAuthentication';
import Navbar from '../Navbar/NavBar';
import axios from 'axios';

const Supply = () => { 
    const [supplies, setSupplies] = useState([]);
    const navigate = useNavigate();
    const { user } = useUserAuth();

    useEffect(() => {
        const fetchAllSupplies = async ()=> {
            try {
                // Makes an API request to this link
                const res = await axios.get("http://localhost:8800/supply");
                setSupplies(res.data);
                console.log(res);
            } catch (err) {
                console.log(err);
            }
        }
        fetchAllSupplies()
    }, []);


    const addCart = (event, product_id) => {
        const addCart = async ()=> {
            try {
                console.log(user.user_id);
                // Makes an API request to this link
                const res = await axios.post("http://localhost:8800/cart", {
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
        navigate('/cart');
      };

    const supplyList = supplies.map((supply, index) => {
        return (
          <div key={index} className="p-5">
            <h2
              className="text-md"
            >
            {/* <img src={supply.picture} className=""/> */}
            {supply.product_name}
            </h2>
            <p className="text-sm">{supply.description}</p>
            <p className="text-sm">Price: {supply.price}</p>
            <p className="text-sm">Quantity: {supply.quantity}</p>
            <h3 onClick={event => addCart(event, supply.product_id)} className="hover:font-bold hover:underline">Add to cart</h3>
          </div>
        );
      });

    return (
        <div>
            <Navbar />
            <div className="grid grid-cols-2">
                {supplyList}
            </div>
            {user.is_admin == 1 &&
                <button><Link to="/add">Add new supply</Link></button> 
            }   
        </div>
    )
}
export default Supply;