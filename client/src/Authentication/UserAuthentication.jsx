// import axios from "axios";
// import { createContext, useContext, useEffect, useState } from "react";
// const userAuthentication = createContext();

// export function UserAuthentication({children}) {
//     const [user, setUser] = useState(getLocalStorage());

//     function signup(email, password, Fname, Lname, shipping_address){
//       const user_details = {
//         email: email,
//         password: password,
//         Fname: Fname,
//         Lname: Lname,
//         shipping_address: shipping_address,
//         id: 0
//       };

//       axios.post("http://localhost:8800/signup", {
//         email: email,
//         password: password,
//         Fname: Fname,
//         Lname: Lname,
//         shipping_address: shipping_address
//       }).then((response) => {
//         user_details.id = response.data.body.lastinsertId
//         setUser(user_details);
//         // setUser(prev => ({...prev, id: response.data.body.lastinsertId}));
//         setLocalStorage(user_details);
//       });
//     };

//     function login(email, password){
//       axios.get("http://localhost:8800/login", {
//         email: email,
//         password: password
//       }).then((response) => {
//         console.log(response);
//         if (response.data.body.length > 0) {
//           setUser(response.data.body[0]);
//           setLocalStorage(response.data.body[0]);
//         } else {
//           window.alert("Invalid login details, please try again.");
//         }
//       });
//     }

//     function getLocalStorage(){
//       const localstorage = localStorage.getItem("session");
//       return localstorage ? JSON.parse(localstorage) : null;
//     }

//     function setLocalStorage(user) {
//       localStorage.setItem("session", JSON.stringify(user));
//     }

//     function logout(){
//       localStorage.removeItem("session");
//       setUser(null);
//     }

//     useEffect(() => {
//       console.log("user set:", user);
//     }, [user]);

//     return (
//         <userAuthentication.Provider value={{ user, signup, login, logout }}>
//             {children}
//         </userAuthentication.Provider>
//     )
// }

// export function useUserAuth() {
//     return useContext(userAuthentication);
// }