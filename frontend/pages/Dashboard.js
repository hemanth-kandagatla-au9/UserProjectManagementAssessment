import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { getUserData } from "./api"; // Example function to fetch user data
import TaskList from "./TaskList"; // A component to display tasks
import ProjectList from "./ProjectList"; // A component to display projects

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getUserData();
        setUser(data);
      } catch (err) {
        setError("Failed to fetch user data");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!user) {
    // Redirect to login if user is not authenticated
    return <Redirect to="/login" />;
  }

  return (
    <div className="dashboard">
      <h1>Welcome to Your Dashboard, {user.name}!</h1>
      <div className="dashboard-content">
        <div className="tasks">
          <h2>Your Tasks</h2>
          <TaskList />
        </div>
        <div className="projects">
          <h2>Your Projects</h2>
          <ProjectList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
