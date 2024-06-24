import { LuBedDouble } from "react-icons/lu";
import { FaCalendarAlt } from "react-icons/fa";
import { Contact } from "./Contact";
import Destinations from "./Destination";
import { useAuth } from "../store/auth";

import React, { useEffect, useState } from 'react';

const Counter = ({ target, duration }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = target;
        if (start === end) return;

        const increment = end < 100 ? 1 : Math.ceil(end / 100);
        const incrementTime = (duration * 1000) / (end / increment);

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                start = end;
                clearInterval(timer);
            }
            setCount(start);
        }, incrementTime);

        return () => clearInterval(timer);
    }, [target, duration]);


    return <h2>{count}+</h2>;
};

export const Home = () => {
    const { user } = useAuth();

    return (
        <>
            <main>
                <section className="section-hero">
                    <div className="container grid grid-two-cols">
                        {/* SECTION 1 */}
                        <div className="hero-content">
                            <h1>Hey {user.username} !!</h1>
                            <h1>Find your next stay</h1>
                            <p >
                                Search low prices on hotels, homes and much more...
                            </p>
                            <form className="grid grid-four-cols">
                                <div>
                                    <label>Enter you destination</label>
                                    <div className="input-wrapper">
                                        <LuBedDouble className="icon" />
                                        <input type="text" placeholder=" Enter you destination"></input>
                                    </div>
                                </div>
                                <div>
                                    <label>Check-in date</label>
                                    <div className="input-wrapper">
                                        <FaCalendarAlt className="icon" />
                                        <input type="date" placeholder="Check-in date"></input>
                                    </div>
                                </div>
                                <div>
                                    <label>Check-out date</label>
                                    <div className="input-wrapper">
                                        <FaCalendarAlt className="icon" />
                                        <input type="date" placeholder="Check-out date"></input>
                                    </div>
                                </div>
                                <button type="submit" className="submit">Search</button>
                            </form>
                        </div>
                        <div>
                            <img src="/images/home.webp" width={600} ></img>
                        </div>
                    </div>
                </section>
            </main>
            {/* SECTION 2 */}
            <section className="section-analytics">
                <div className="container grid grid-four-cols">
                    <div className="div1">
                        <Counter target={100} duration={2} />
                        <p>Registered Homestays</p>
                    </div>
                    <div className="div1">
                        <Counter target={50000} duration={2} />
                        <p>Happy Customers</p>
                    </div>
                    <div className="div1">
                        <Counter target={20} duration={2} />
                        <p>Instant Discounts</p>
                    </div>
                    <div className="div1 last-child">
                        <h2>24/7</h2>
                        <p>Service</p>
                    </div>
                </div>
            </section>
            {/* Section 3 */}
            <section className="section-offer">
                <div className="offer-content">
                    <div className="main-heading">
                        <h1 style={{ fontSize: "30px" }}>Offers</h1>
                        <p>Promotions, deals and special offers for you</p>
                    </div>
                </div>
                <div className="container grid grid-two-cols">
                    <div className="container grid grid-two-cols">
                        <div>
                            <h2>Fly away to your dream holiday.</h2>
                            <br />
                            <p>Get inspired, compare and book flights with more flexibility</p>
                            <br />
                            <button >Search for Flights</button>
                        </div>
                        <div>
                            <img src="/images/aeroplane.png" width={150} height={100}></img>
                        </div>
                    </div>
                    <div className="container grid grid-two-cols">
                        <div>
                            <h2>Planning a trip to the 2024 Summer Games?
                            </h2>
                            <br />
                            <p> Brussels is a quick train ride from all the action</p>
                            <br />
                            <button >Explore Brussels</button>
                        </div>
                        <div>
                            <img src="/images/palace.png" width={150} height={130}></img>
                        </div>
                    </div>
                </div>
            </section>

            <Destinations />
            {/* SECTION 4 */}
            <Contact />


        </>
    )
};

// export default {Home};