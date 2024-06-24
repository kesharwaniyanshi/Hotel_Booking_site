import { FaBookmark } from "react-icons/fa6";

export const About = () => {
   
   
    return (
        <>
            <section className="section-about">
                <div className="container grid grid-two-cols">
                    <div>
                       
                        <h2 className="main-heading" style={{ fontSize: "3.5rem" }}>
                            About Airbnb: What it is and how it works
                        </h2>
                        <p>Host anything, anywhere, so guests can enjoy everything, everywhere.</p>
                        <br></br>
                        <br></br>
                        <br></br>
                        <p>In this article
                        </p>
                        <br />
                        <ul >
                            <li><FaBookmark /><a href="#1"> A community built for belonging</a></li><br /><br />
                            <li><FaBookmark /><a href="#2"> Enjoy unique stays, Experiences, Adventures and more</a></li><br /><br />
                            <li><FaBookmark /><a href="#3"> Services you can trust</a></li><br /><br />
                            <li><FaBookmark /><a href="#4"> 24/7 support for Hosts and guests</a></li><br /><br />
                        </ul>
                        <hr></hr>
                        <br /><br /><br />
                        <div id="1">
                            <h2>A community built for belonging</h2>
                            <br />
                            <p>Airbnb began in 2008 when 2 designers who had space to share hosted 3 travellers looking for a place to stay. Now, millions of Hosts and guests have created free Airbnb accounts to enjoy each other’s unique view of the world.</p>
                        </div>
                        <br /><br /><br />
                        <div id="2">
                            <h2>Enjoy unique stays, Experiences, Adventures and more</h2>
                            <br />
                            <p>From cosy cottages to elegant penthouses, Hosts are happy to share their places. Whether it’s a work trip, weekend getaway, family holiday or a longer stay, there are millions of amazing places to visit.
                                <br /><br />
                                Then there are Airbnb Experiences, in-person or online activities hosted by inspiring local experts. From horse whispering to canyon hiking, Experience Hosts share their passion for cooking, art, music and so much more.
                                <br /><br />
                                Or local guides take small groups off the beaten trail into more unexplored territories with Airbnb Adventures for fully immersive expeditions.
                                <br /><br />
                                On the business front, Airbnb for Work has everything needed to do your job on the road, from top-rated places and collaborative spaces to team-building Experiences and administrative tools that make managing travel easier than ever.</p></div>
                        <br /><br /><br />
                        <div id="3">
                            <h2>Services you can trust</h2>
                            <br />
                            <p>We want your experience with Airbnb to be easy and enjoyable. Here’s how we’re working to help make you feel secure and protected:<br />
                                <ul >
                                    <li> Verified personal profiles and listings
                                    </li>
                                    <li>Smart messaging for Hosts and guests to safely communicate with confidence
                                    </li>
                                    <li>A trusted platform for collecting and transferring payments
                                    </li>
                                </ul>
                                Learn more about our commitment to your safety.
                            </p>
                        </div>
                        <br /><br /><br />
                        <div id="4">
                            <h2>24/7 support for Hosts and guests</h2><br />

                            <p>Got questions? Get answers in our Help Centre. You can learn about finding a place to stay, paying for your reservation and more.<br /><br />
                                Our guests and Hosts are always on the go, and so are we. Our global Community Support team is at the ready 24/7 in 11 different languages. Need help with rebooking, refunds, reimbursements and more? We also offer AirCover for Hosts, which is included every time you host and provides you with $3m in Host damage protection. Feel free to contact us.</p>
                        </div>
                        <br /><br /><br />

                    </div>
                    <div className="contactus">
                        <h2>
                            Need to get in touch?
                        </h2>
                        <p>We’ll start with some questions and get you to the right place.</p>
                        <button>Contact us</button>
                        <p>You can also <a href="/contact">give us feedback</a></p>
                    </div>
                </div>

            </section>
        </>
    )
};

// export default About;