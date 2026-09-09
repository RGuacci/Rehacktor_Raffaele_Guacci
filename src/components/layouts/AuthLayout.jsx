import { Outlet } from "react-router";
import Navbar from "../LayoutComponents/Navbar";
import Footer from "../LayoutComponents/Footer";

function AuthLayout() {


    return(
        <>
        <Navbar />
        <Outlet />
        <Footer />
        </>
    )
}

export default AuthLayout;