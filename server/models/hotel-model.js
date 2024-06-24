const { Schema, model } = require("mongoose");

const hotelSchema = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    place: { type: String, required: true },
    price: { type: String, required: true },
    averageRating: { type: Number, required: true },
    datesAvailable: { type: String, required: true },
});

const Hotel = model("Hotel", hotelSchema);

module.exports = Hotel;