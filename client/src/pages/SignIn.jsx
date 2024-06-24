import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";


export const SignIn = () => {

    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser({
            ...user, [name]: value
        });
    };

    const navigate = useNavigate();
    const { storeTokenInLS } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            });

            console.log("login", response);
            const data = await response.json();
            // localStorage.setItem("token",data.token);
            if (response.ok) {
                toast.success("Login Successful");
                storeTokenInLS(data.token);

                setUser({
                    email: "",
                    password: ""
                });
                navigate("/");
            }
            else {
                toast.error(data.extraDetails ? data.extraDetails:data.message);
                console.log("invalid credential");
            }
        }
        catch (error) {
            console.log("login", error);
        }
    };

    return (
        <>
            <section>
                <main>
                    <div className="section-login">
                        <div className="container grid grid-two-cols">
                            <div className="registration-image">
                                <img src="/images/signup_signin.png" alt="A girl looking for hotel" height={400} width={500} ></img>
                            </div>
                            <div className="login-form">
                                <h1 className="main-heading mb-3">Login form</h1>
                                <br />
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Enter your email"
                                            id="email"
                                            required
                                            autoComplete="off"
                                            value={user.email}
                                            onChange={handleInput}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="password">Password</label>
                                        <input
                                            type="text"
                                            name="password"
                                            placeholder="password"
                                            id="password"
                                            required
                                            autoComplete="off"
                                            value={user.password}
                                            onChange={handleInput}
                                        />
                                    </div>
                                    <br />
                                    <button type="submit" className="btn btn-submit">SignIn</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </section >
        </>
    )
};

// export default {Home};