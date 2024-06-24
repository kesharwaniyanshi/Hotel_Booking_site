import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
export const SignUp = () => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",

    });
    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({ ...user, [name]: value });
    };
    const navigate = useNavigate();
    const { storeTokenInLS } = useAuth();


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);
        try {
            const response = await fetch(`http://localhost:5000/api/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            });
            const data = await response.json();
            console.log(data.extraDetails);
            if (response.ok) {
                storeTokenInLS(data.token);
                toast.success("Registration Successful");
                setUser({
                    username: "",
                    email: "",
                    phone: "",
                    password: ""

                });
                navigate("/");
            } else {
                toast.error(data.extraDetails ? data.extraDetails:data.message);
            }
        }
        catch (error) {
            console.log("register", error);
        }
    };

    return (
        <>
            <section>
                <main>
                    <div className="section-registration">
                        <div className="container grid grid-two-cols">
                            <div className="registration-image">
                                <img src="/images/sign-up-form.png" alt="A girl looking for hotel" height={500} width={500} ></img>
                            </div>
                            <div className="registration-form ">
                                <h1 className="main-heading mb-3" >Signup form</h1>
                                <br />
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="username">Username</label>
                                        <input
                                            type="text"
                                            name="username"
                                            placeholder="Enter your username"
                                            id="username"
                                            required
                                            autoComplete="off"
                                            value={user.username}
                                            onChange={handleInput}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="abc@gmail.com"
                                            id="email"
                                            required
                                            // autoComplete="off"
                                            value={user.email}
                                            onChange={handleInput}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="+91 8734214372"
                                            id="phone"
                                            required
                                            autoComplete="off"
                                            value={user.phone}
                                            onChange={handleInput}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="password">Password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Enter your password"
                                            id="password"
                                            required
                                            autoComplete="off"
                                            value={user.password}
                                            onChange={handleInput}
                                        />
                                    </div>
                                    <br />
                                    <button type="submit" className="btn btn-submit">Sign Up</button>
                                </form>

                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    )
};

// export default {Home};