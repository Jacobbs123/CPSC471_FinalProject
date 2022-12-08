import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { useNavigate, Link } from "react-router-dom";
import { useUserAuth } from "../Authentication/UserAuthentication";

export default function Example() {
  const [openNav, setOpenNav] = useState(false);
  const { user, logout } = useUserAuth();
  const navigate = useNavigate();

  const logoutUser = () => {
    navigate("/");
    logout();
  }

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
      <ul className="mb-4 mt-2 flex flex-row gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        
      </ul>
  );

  return (
    <Navbar
      className="bg-red-900 bg-cover py-4 px-4 lg:px-8 lg:py-10 text-white text-xl shadow-2xl"
    >
      <div className="container mx-auto flex items-center justify-around">
        <Typography
          as="a"
          href="/"
          variant="small"
          className="cursor-pointer px-10 font-normal"
        >
          <span>Home</span>
        </Typography>
        <Typography
          as="a"
          variant="small"
          color="blue-gray"
          className="px-10 font-normal"
        >
          <Link to="/supply" className="flex items-center">
            Shop
          </Link>
        </Typography>
        <Typography
          as="a"
          variant="small"
          color="blue-gray"
          className="px-10 font-normal"
        >
          <Link to="/cart" className="flex items-center">
            Cart
          </Link>
        </Typography>
        {user && (<Button
          variant="gradient"
          size="sm"
          color="blue-gray"
          onClick={logoutUser}
          className="lg:inline-lock px-10 font-normal"
        >
          <span>Logout</span>
        </Button>)}
      </div>
    </Navbar>
  );
}