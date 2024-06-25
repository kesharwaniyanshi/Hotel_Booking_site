import { useState } from "react";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import Lottie from 'react-lottie';
import animationData from "../lotties/customer-review.json";

export const Contact = () => {


    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const [contact, setContact] = useState({
        username: "",
        email: "",
        message: ""
    });
    const [userData, setUserData] = useState(true);
    const { user,API } = useAuth();

    if (userData && user) {
        setContact({
            username: user.username,
            email: user.email,
            message: "",
        });
        setUserData(false);
    }

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setContact({ ...contact, [name]: value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(user);
        try {
            const response = await fetch(`${API}/api/form/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(contact),
            });
            const data = await response.json();
            if (response.ok) {
                toast.success("Sent Feedback");
                console.log(data);
                setContact({
                    username: user.username,
                    email: user.email,
                    message: "",
                });
            }
            else {
                toast.error(`Couldn't send Feedback ,${data.message}`);
                console.log(data.message || "Sending review failed");
            }
        }
        catch (error) {
            console.log("Feedback", error);
        }

    }

    return (
        <>
            <section>
                <div className="section-contact">
                    <div className="contact-content container ">
                        <h1 className="main-heading">GIVE US <br />YOUR FEEDBACK</h1>
                    </div>
                    <div className="container grid grid-two-cols">
                        <div className="feedback-image">
                            {/* <img src="/images/feedback.png" alt="People giving feedback" ></img> */}
                            <Lottie
                                options={defaultOptions}
                                height={500}
                                width={500}
                            />
                        </div>

                        <section className="section-form">
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="username">Username</label>
                                    <input
                                        type="text"
                                        name="username"
                                        // placeholder="username"
                                        id="username"
                                        required
                                        autoComplete="off"
                                        value={contact.username}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        // placeholder="Enter your email"
                                        id="email"
                                        required
                                        autoComplete="off"
                                        value={contact.email}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message">Write review</label>
                                    <textarea
                                        name="message"
                                        // placeholder="Enter your review"
                                        id="message"
                                        value={contact.message}
                                        autoComplete="off"
                                        cols={30}
                                        rows={3}
                                        onChange={handleInput}
                                        required />
                                </div>
                                <br />
                                <div>
                                    <label htmlFor="rateus">Rate Us</label>
                                    <Stack spacing={10}>
                                        <Rating className="stars" name="half-rating" defaultValue={3} precision={0.5} size="large" />
                                    </Stack>
                                </div>

                                <br />
                                <button type="submit" >Send Feedback</button>
                            </form>
                        </section>


                    </div>

                </div>
            </section>
        </>
    )
};

// export default Contact;