import { Outlet } from "react-router-dom";
import NavbarPage from "../Navbar/Navbar";

function RootPage(){
    return<>
    <NavbarPage/>
    <Outlet/>
    </>
}
export default RootPage;