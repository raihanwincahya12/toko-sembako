import React from 'react'
import DashboardTemplate from "./DashboardTemplate";
import Card from "../molecules/Card";
const Dashboard = () => {
    
    const user = {
        name: "Raihan",
        avatar: "https://i.pravatar.cc/150?img=3",
    };
    
    return (
        <DashboardTemplate user={user}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Card title="Sales" bgColor="bg-green-100">
                <p className="text-green-700">Rp 12.000.000</p>
            </Card>
            <Card title="Visitors" bgColor="bg-blue-100">
                <p className="text-blue-700">1.200 Pengunjung</p>
            </Card>
            <Card title="Feedback" bgColor="bg-yellow-100">
                <p className="text-yellow-700">87% Positif</p>
            </Card>
            </div>
        </DashboardTemplate>
    )
}

export default Dashboard