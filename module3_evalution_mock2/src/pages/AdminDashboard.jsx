
import React ,{useState,useCallback} from 'react';
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import FleetCard from "../components/FleetCard";
import App from "../App";

const AdminDashboard = () => {
    const [fleets, setFleets] = useState([]);

    const addFleet =(fleet) => {
        setFleets((prev) => [...prev, fleet]);
    };

    const updateDriver = useCallback((id, updatedDriver) => {
        setFleets((prev) =>
        prev.map((f) => 
        f.id === id ? { ...f, driver: updatedDriver } : f
    )
);
    },[]);

    const toggleAvailability = useCallback((id) => {
        setFleets((prev)=>
        prev.map((f) =>
        f.id === id ? { ...f, status: f.status === "available" ? "unavailable" : "available" } : f
    )
);    },[]);

const deleteFleet = useCallback((id) => {
    setFleets((prev) => prev.filter((f) => f.id !== id));
},[]);


    return (
        <div>
            <Navbar />
            <div className="admin-dashboard">
                <Sidebar addFleet={addFleet} />
                <div className="content">
                    <div className="grid">
                        {fleets.map((fleet) => (
                            <FleetCard
                                key={fleet.id}
                                fleet={fleet}
                                onupdateDriver={updateDriver}
                                onToggleAvailability={toggleAvailability}
                                onDelete={deleteFleet}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

};

export default AdminDashboard;


