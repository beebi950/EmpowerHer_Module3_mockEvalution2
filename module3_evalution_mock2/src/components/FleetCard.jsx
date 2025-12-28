import React from "react";

const FleetCard = React.memo(({ fleet, onUpdateDriver, onToggleAvailability, onDelete }) => {
    console.log("Rendering FleetCard:", fleet.regNo);

    const updateDriver = () => {
        const name = prompt("Enter new driver name:", fleet.driver);
        if(!name || !name.trim()){
            alert("Driver name cannot be empty");
            return;
        }
        onUpdateDriver(fleet.id, name);
    };

    const deleteVehicle = () => {
        if(window.confirm("Are you sure you want to delete this vehicle?")){
            onDelete(fleet.id);
        }
    };

    return (
        <div className="card">
            <img src="https://via.placeholder.com/150" alt="vehical" />
            <p><b>Reg No :</b>{fleet.regNo}</p>
            <p><b>Category :</b>{fleet.category}</p>
            <p><b>Driver :</b>{fleet.driver}</p>
            <p><b>Status :</b>{fleet.status}</p>

            <button onClick={updateDriver}>Update Driver</button>
            <button onClick={() => onToggleAvailability(fleet.id)}>
                Toggle Status
            </button>
            <button onClick={deleteVehicle}>Delete Vehicle</button>

        </div>
    );
});

export default FleetCard;