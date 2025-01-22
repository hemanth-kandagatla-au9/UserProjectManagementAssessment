import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const location = useNavigate();
  
  const goToProjList = () => {
    location('/projectlist')
  }

  return (
    <div className="dashboard">
      <button onClick={goToProjList}>Go to Proj List</button>
      <h1>Welcome to Your Dashboard</h1>
    </div>
  );
};

export default Dashboard;