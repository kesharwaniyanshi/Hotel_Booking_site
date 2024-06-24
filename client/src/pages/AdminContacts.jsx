import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import {toast} from "react-toastify";

export const AdminContacts = () => {
    const [messages, setMessages] = useState([]);

    const { authorizationToken } = useAuth();

    const getAllUsersMessage = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/admin/contacts", {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,  
                }
            });
            const data = await response.json();
            console.log('API response:', data); // Check the response
            if (Array.isArray(data.messages)) {
                setMessages(data.messages);
            } else {
                console.error('Unexpected data format:', data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const deleteMsg = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/admin/contacts/delete/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: authorizationToken,
                },
            });
            const data = await response.json();
            console.log('API response:', data);
            if (response.ok) {
                getAllUsersMessage();
                toast.success("Deleted Successfully");
            }
            else{
                toast.error("Deletion Unsuccessful!");

            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllUsersMessage();
    }, []);

    return (
        <>
            <section className="admin-feedback-section">
                <div className="container">
                    <h1 className="main-heading">
                        Admin message panel
                    </h1>
                </div>
                <div className="container admin-feedback">
                    <table>
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Feedback</th>
                                <th>Delete</th>

                            </tr>
                        </thead>
                        <tbody>
                            {messages.map((curUser, index) => {
                                return <tr key={index}>
                                    <td>
                                        {curUser.username}
                                    </td>
                                    <td>
                                        {curUser.email}
                                    </td>
                                    <td>
                                        {curUser.message}
                                    </td>

                                    <td>
                                        <button onClick={()=>deleteMsg(curUser._id)}>Delete</button>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </section>



        </>
    );
};
