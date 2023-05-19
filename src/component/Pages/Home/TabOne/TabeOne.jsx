import { useEffect, useState } from "react";
import TabOneDataShow from "../TabOneDataShow/TabOneDataShow";

const TabeOne = () => {
    const [tabData, setTabData] = useState([])

    useEffect( () => {
        fetch('http://localhost:5000/tabdataOne')
        .then(res => res.json())
        .then(data => setTabData(data))
    }, [])

    return (
        <div className="grid gap-4 md:grid-cols-2">
            {
                tabData.map(data => <TabOneDataShow 
                    key={data.id}
                    data={data}
                    ></TabOneDataShow>)
            }
        </div>
    );
};

export default TabeOne;