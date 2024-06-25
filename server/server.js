

require('dotenv').config();
// console.log('MONGODB_URI:', process.env.MONGODB_URI); // Add this line to check the URI

const express = require("express");
const cors = require('cors');
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const hotelserviceRoute = require("./router/hotelservice-router");
const adminRoute = require("./router/admin-router");
const app = express();
const connectDb = require("./utils/db");
const errorMiddleware = require('./middlewares/error-middleware');


// Tackle cors
const corsOptions = {
    origin: ['https://hotel-booking-site-frontend.vercel.app', 'http://localhost:5173'],
    methods: "GET,POST,PUT,DELETE,PATCH,OPTIONS",
    credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());


app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", hotelserviceRoute);

// Admin routes
app.use("/api/admin", adminRoute);

app.use(errorMiddleware);
const PORT = process.env.PORT || 5000;
connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
