import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/Restaurantmenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";


// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loding
// On Demand Loading
// Dyanmic Import
const Grocery = lazy(()=> import("./components/Grocery"));
const About = lazy(()=> import("./components/About"));

const AppLayout = () => {
    const [userName, setUserName] = useState();

    useEffect(()=>{
        const data = {
            name: "Sonakshi"
        };
        setUserName(data?.name);
    },[])
    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
                <div className="app">
                    <Header/>
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path:'/',
        element: <AppLayout/>,
        children: [
            {
                path: '/',
                element: <Body/>
            },
            {
                path:'/about',
                element: <Suspense fallback={<div>Lazy loading about page</div>}><About/></Suspense>
            },
            {
                path:'/contact',
                element: <Contact/>
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<div>Loading Lazy</div>}><Grocery/></Suspense>
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ],
        errorElement: <Error/>
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);