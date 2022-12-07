import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Supply = () => { 
    const [supplies, setSupplies] = useState([]);

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

    const supplyList = supplies.map((supply, index) => {
        return (
          <div key={index} className="p-5">
            <h2
              className="text-2xl hover:underline"
            >
            Product: {supply.product_id}    
            In stock: {supply.quantity}
            </h2>
          </div>
        );
      });

    return (
        <div>
            <h1>UCalgary Pet Store</h1>
            <div className="">
                {supplyList}
            </div>
            <button><Link to="/add">Add new supply</Link></button> 
        </div>
    )
}
export default Supply;