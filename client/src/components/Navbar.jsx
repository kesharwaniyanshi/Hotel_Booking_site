import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth";
export const Navbar = () => {

    const { isLoggedIn } = useAuth();
    return (
        <>
            <header>
                <div className="container">
                    <div className="logo-brand">
                        <a href="/">BookHotel</a>
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">Contact</NavLink>
                            </li>
                            <li>
                                <NavLink to="/hotels">Hotels</NavLink>
                            </li>

                            {isLoggedIn ? (
                                <li>
                                    <NavLink to="/logout">Logout</NavLink>
                                </li>
                            ) :
                                (<> <NavLink to="/signup"><button>SignUp</button></NavLink>

                                    <NavLink to="/signin"><button>SignIn</button></NavLink>
                                </>)
                            }
                            {/* <NavLink to="/signup"><button>SignUp</button></NavLink>

                            <NavLink to="/signin"><button>SignIn</button></NavLink> */}
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};