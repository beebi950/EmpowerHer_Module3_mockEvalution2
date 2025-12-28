import React,{useState} from 'react';

const Sidebar = ({ addFleet }) => {
    const [fleetInfo, setFleetInfo] = useState({
        regNo: "",
        category:"",
        driver: "",
        status: "",

    });

    const handleSubmit = () => {
        if(
            !Form.regNo || !Form.category ||
            !Form.driver ||
            !Form.status 
        ){
            alert("Please fill all the fields");
            return;
        }

        addFleet({
            id: Date.now(),
            ...Form,
        });
        setFleetInfo({
            regNo: "",
            category:"",
            driver: "",
            status: "",

        });
    };

    return (
        <div className="sidebar">
            <h2>Add New Fleet</h2>

            <input
                placeholder='Vehicle Reg No'
                value={Form.regNo}
                onChange={(e) => setFleetInfo({ ...fleetInfo, regNo: e.target.value })}
            />

            <select 
            value={Form.category}
                onChange={(e)=>
                    setFleetInfo({...fleetInfo,category:e.target.value})
                }
            >
                <option value="">Select Category</option>
                <option value="car">Car</option>
                <option value="bus">Bus</option>
                <option value="truck">Truck</option>
            </select>

            <input
                placeholder='Driver Name'
                value={Form.driver}
                onChange={(e) => setFleetInfo({ ...fleetInfo, driver: e.target.value })}
            /> 

            <select
            value={Form.status}
            onChange={(e)=>
                setFleetInfo({...fleetInfo,status:e.target.value})
            }
            >

            <option value="">status</option>
            <option >Avalible</option>
            <option >UnAvalible</option>
            </select>

            <button onClick={handleSubmit}>Add Fleet</button>
        </div>

    );
};

export default Sidebar;