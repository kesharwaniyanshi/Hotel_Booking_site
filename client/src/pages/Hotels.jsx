
import { FaStar } from "react-icons/fa";
import { useAuth } from "../store/auth";

export const Hotels = () => {


    const { hotels } = useAuth();


    return (
        <>
            <section className="section-hotel">
                <div className="container">
                    <h1 className="main-heading">
                        Hotels
                    </h1>

                </div>
                <div className="container grid grid-three-cols">
                    {hotels.map((curEle, index) => {
                        const { name, image, place, price, averageRating, datesAvailable } = curEle;
                        return (
                            <div className="card" key={index}>
                                <div className="card-img">
                                    <img src={image} width={300} height={200} alt={name} />
                                    <div className="card-heart">&#9829;</div>
                                </div>
                                <div className="card-details">
                                    <div className="grid grid-two-cols">
                                        <p className="name">{name}</p>
                                        <p><FaStar /> {averageRating}</p>
                                    </div>
                                    <p className="place">{place}</p>
                                    <p className="date">{datesAvailable}</p>
                                    <p className="price">{price}</p>
                                </div>
                            </div>);
                    })}

                </div>

            </section>
        </>
    )
};

// export default Sevice;