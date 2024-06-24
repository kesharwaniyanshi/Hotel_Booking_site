
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
                <div className="container grid grid-four-cols">
                    {hotels.map((curEle, index) => {
                        const { name, image, place, price, averageRating, datesAvailable } = curEle;
                        return (
                            <div className="card" key={index}>
                                <div className="card-img">
                                    <img src={image} width={300} height={200} alt={name} />
                                </div>
                                <div className="card-details">
                                    <div className="grid grid-two-cols">
                                        <p>{name}</p>
                                        <p><FaStar />{averageRating}</p>
                                    </div>
                                    <p>{place}</p>
                                    <p>{price}</p>
                                    <p>{datesAvailable}</p>
                                </div>
                            </div>);
                    })}

                </div>

            </section>
        </>
    )
};

// export default Sevice;