import React from 'react';
import { FaWifi, FaTv, FaParking, FaWater, FaCouch, FaFireExtinguisher, FaFirstAid, FaDoorOpen, FaStreetView, FaUtensils } from 'react-icons/fa';
import { GiFlowerEmblem, GiSmokeBomb } from 'react-icons/gi'; // Add more icons as needed
import { PiFan, PiHairDryer, PiThermometerHotLight, PiWashingMachine } from "react-icons/pi";
import { TbGrill, TbDeviceCctvOff } from "react-icons/tb";
import { MdOutlineCo2 } from "react-icons/md";
import { TbToolsKitchenOff } from "react-icons/tb";


export const AdminHotel = () => {
    const services = [
        {
            category: 'Scenic views', items: [
                { name: 'Bay view', icon: <FaWater /> },
                { name: 'Courtyard view', icon: <GiFlowerEmblem /> },
                { name: 'Canal view', icon: <FaStreetView /> },
                { name: 'Garden view', icon: <GiFlowerEmblem /> }
            ]
        },
        {
            category: 'Bathroom', items: [
                { name: 'Hair dryer', icon: <PiHairDryer /> },
                { name: 'Shampoo', icon: <FaCouch /> } // Replace with a more appropriate icon if available
            ]
        },
        {
            category: 'Bedroom and laundry', items: [
                { name: 'Essentials', icon: <FaCouch /> },
                { name: 'Towels, bed sheets, soap and toilet paper', icon: <FaCouch /> }
            ]
        },
        {
            category: 'Entertainment', items: [
                { name: 'TV', icon: <FaTv /> }
            ]
        },
        {
            category: 'Heating and cooling', items: [
                { name: 'Air conditioning', icon: <PiFan /> }
            ]
        },
        {
            category: 'Home safety', items: [
                { name: 'Smoke alarm', icon: <GiSmokeBomb /> },
                { name: 'Carbon monoxide alarm', icon: <MdOutlineCo2 /> },
                { name: 'Fire extinguisher', icon: <FaFireExtinguisher /> },
                { name: 'First aid kit', icon: <FaFirstAid /> }
            ]
        },
        {
            category: 'Internet and office', items: [
                { name: 'Wifi', icon: <FaWifi /> }
            ]
        },
        {
            category: 'Location features', items: [
                { name: 'Private entrance', icon: <FaDoorOpen /> },
                { name: 'Separate street or building entrance', icon: <FaStreetView /> }
            ]
        },
        {
            category: 'Outdoor', items: [
                { name: 'Outdoor dining area', icon: <FaUtensils /> },
                { name: 'BBQ grill', icon: <TbGrill /> }
            ]
        },
        {
            category: 'Parking and facilities', items: [
                { name: 'Free parking on premises', icon: <FaParking /> }
            ]
        },
        {
            category: 'Services', items: [
                { name: 'Self check-in', icon: <FaDoorOpen /> },
                { name: 'Building staff', icon: <FaCouch /> },
                { name: 'Someone is available 24 hours a day to let guests in', icon: <FaCouch /> }
            ]
        },
        {
            category: 'Not included', items: [
                { name: 'Exterior security cameras on property', icon: <TbDeviceCctvOff />, unavailable: true },
                { name: 'Kitchen', icon: <TbToolsKitchenOff />, unavailable: true },
                { name: 'Washing machine', icon: <PiWashingMachine />, unavailable: true },
                { name: 'Heating', icon: <PiThermometerHotLight />, unavailable: true },
            ]
        }
    ];

    return (
        <>
            <section className="hotel-admin-section">
                <div className="container">
                    <h1 className="main-heading">
                        Hotel Description
                    </h1>
                </div>
                <div className="container grid grid-two-cols">
                    <div>
                        <div>
                            <img src="/images/hotelexample.png"  alt="Hotel Example" />
                        </div>
                        <div className='grid grid-two-cols'>
                            <img src="/images/hemp1.png"  alt="Hotel Example" />
                            <img src="/images/hexp2.png"  alt="Hotel Example" />
                        </div><div className='grid grid-two-cols'>
                            <img src="/images/hexp3.png"  alt="Hotel Example" />
                            <img src="/images/hexmp4.png"  alt="Hotel Example" />
                        </div>
                    </div>
                    <div className='services'>
                        <h2 className='heading'>
                            What this place offers
                        </h2>
                        <div className="grid grid-two-cols service">
                            {services.map((service, index) => (
                                <div key={index}>
                                    <h2>{service.category}</h2>
                                    {service.items.map((item, idx) => (
                                        <div key={idx} className={`service-item ${item.unavailable ? 'unavailable' : ''}`}>
                                            {item.icon}
                                            <span>{item.name}</span>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
