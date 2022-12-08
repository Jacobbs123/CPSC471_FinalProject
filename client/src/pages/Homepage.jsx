import {React, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Homepage = () => {
    return (
        <div><h1 className="text-6xl">Welcome to our Ucalgary petstore</h1>
        <p className="text-2xl">Please <Link to="/login" className="hover:underline">Sign in</Link> to continue</p></div>
    )
}
export default Homepage;