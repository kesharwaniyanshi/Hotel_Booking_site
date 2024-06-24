import "./Footer.css";

export const Footer = () => {
    return (
        <footer>
        <div className="footer">
            <div className="top-part">
                <div >
                    <h3>Help</h3>
                    <ul>
                        <li>Help center</li>
                        <li>FAQs</li>
                        <li>Privacy policy</li>
                        <li>Cookie policy</li>
                        <li>Terms of use</li>
                        <li>Manage cookie settings</li>
                        <li>Digital Services Act (EU)</li>
                        <li>Content guidelines & reporting</li>
                    </ul>
                </div>
                <div>
                    <h3>Company</h3>
                    <ul>
                        <li>About us</li>
                        <li>Careers</li>
                        <li>Press</li>
                        <li>Blog</li>
                        <li>PointsMAX</li>
                    </ul>
                </div>
                <div>
                    <h3>Destinations</h3>
                    <ul>
                        <li>Countries/Territories</li>
                        <li>All Flight Routes</li>
                    </ul>
                </div>
                <div>
                    <h3>Partner with us</h3>
                    <ul>
                        <li>YCS partner portal</li>
                        <li>Partner Hub</li>
                        <li>Advertise on Agoda</li>
                        <li>Affiliates</li>
                        <li>Connectivity partners</li>
                    </ul>
                </div>
                <div>
                    <h3>Get the app</h3>
                    <ul>
                        <li>iOS app</li>
                        <li>Android app</li>
                    </ul>
                </div>
            </div>
            <div className="end-part">
                <p>All material herein © 2005–2024 Agoda Company Pte. Ltd. All Rights Reserved.</p>
                <p>Agoda is part of Booking Holdings Inc., the world leader in online travel & related services.</p>
                <ul>
                    <li className="icons"><img src="/images/airbnb.png"></img></li>
                    <li className="icons"><img src="/images/booking.png"></img></li>
                    <li className="icons"><img src="/images/hotel.com.png"></img></li>
                    <li className="icons"><img src="/images/trivago.png"></img></li>
                </ul>
            </div>
            </div>
        </footer>
    )
}