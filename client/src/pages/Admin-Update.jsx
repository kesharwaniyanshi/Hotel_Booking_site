import { useEffect, useState } from "react"
import { useAuth } from "../store/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export const AdminUpdate = () => {
    const { authorizationToken } = useAuth();
    const params = useParams();
    const [data, setData] = useState({
        username: "",
        phone: "",
        email: ""
    });
    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setData({
            ...data, [name]: value
        });
    };

    const getSingleUserData = async (id) => {
        try {
            const response = await fetch(`${API}/api/admin/users/${params.id}`, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            });
            const userData = await response.json();
            console.log('Single user data', userData);
            setData(userData.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getSingleUserData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${API}/api/admin/users/update/${params.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type":"application/json",
                    Authorization: authorizationToken,
                },
                body: JSON.stringify(data),
            });
            const updateData = await response.json();
            if (response.ok) {
                toast.success("Updates Successfully");
            }
else{
    toast.error("Updates Unsuccessful");
    console.log(updateData);

}
        } catch (error) {
            console.log(error);
        }
    }

    return <section>
        <div className="section-contact">
            <div className="contact-content container ">
                <h1 className="main-heading">Update Guest Details <br /></h1>
            </div>
            <div className="container grid grid-two-cols">
                <section className="section-form">
                    <form onSubmit={handleSubmit} >
                        <div>
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                name="username"
                                // placeholder="username"
                                id="username"
                                required
                                autoComplete="off"
                                value={data.username}
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
                                value={data.email}
                                onChange={handleInput}
                            />
                        </div>
                        <div>
                            <label htmlFor="Phone">Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                // placeholder="Enter your phone"
                                id="phone"
                                required
                                autoComplete="off"
                                value={data.phone}
                                onChange={handleInput}
                            />
                        </div>
                        <br />
                        <button type="submit" >Update</button>
                    </form>
                </section>


            </div>

        </div>
    </section>
}