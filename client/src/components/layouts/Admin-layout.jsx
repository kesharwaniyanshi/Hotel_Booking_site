import { NavLink, Navigate, Outlet } from "react-router-dom"
import { VscFeedback } from "react-icons/vsc";
import { RiHotelLine } from "react-icons/ri";
import { LuUsers } from "react-icons/lu";
import { IoHomeOutline } from "react-icons/io5";
import { useAuth } from "../../store/auth";


export const AdminLayout = () => {

    if(isLoading)
        {
            return <h1>Loading...</h1>
        }


    const {user}=useAuth();
    if(!user.isHost){
        return <Navigate to="*"/>
    }
    return (
        <>
            <header>
                <div className="container">
                    <nav>
                        <ul>
                            <li><NavLink to="/admin/users"><LuUsers /> Users</NavLink></li>
                            <li><NavLink to="/admin/contacts"><VscFeedback /> Feedbacks</NavLink></li>
                            <li><NavLink to="/admin/hotel"><RiHotelLine /> Hotel</NavLink></li>
                            <li><NavLink to="/"><IoHomeOutline /> Home</NavLink></li>

                        </ul>
                    </nav>

                </div>
            </header>
            <Outlet />
        </>
    )
}