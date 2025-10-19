import React from "react";
import Layout from "../../components/Shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
    const { user } = useSelector((state) => state.auth);
    return (
        <Layout>
            <div className="container">
                <div className="d-felx flex-column mt-4">
                    <h1>
                        Welcome Admin <i className="text-success">{user?.name}</i>
                    </h1>
                    <h3>Manage Blood Bank App </h3>
                    <hr />
                
                    <p>
    This is your central hub for managing the Blood Bank application. From here, you can oversee all registered users and entities to ensure the network runs smoothly.
    <br /><br />
    Use the navigation panel on the left to:
    <ul>
        <li>View and manage the <strong>Donor List</strong>.</li>
        <li>Review and verify the <strong>Hospital List</strong>.</li>
        <li>Monitor and approve the <strong>Organisation List</strong>.</li>
    </ul>
    Please ensure all information is kept up-to-date to maintain the integrity of our network.
</p>
                </div>
            </div>
        </Layout>
    );
};

export default AdminHome;