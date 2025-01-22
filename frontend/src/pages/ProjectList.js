import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUserData } from "../api/auth"; // Example function to fetch user data
// import TaskList from "./TaskList"; // A component to display tasks
// import ProjectList from ".."; // A component to display projects

const ProjectList = () => {
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
    // Link to login if user is not authenticated
    return <Link to="/login" />;
  }

  return (
    <div className="dashboard">
      {/* <h1>Welcome to Your Dashboard, {user.name}!</h1> */}
      <div className="dashboard-content">
        <div className="projects">
        <p>project 1</p> 
          <p>project 2</p> 
          <p>project 3</p> 
          <p>project 4</p> 
          <p>project 5</p> 
        </div>
        
      </div>
    </div>
  );
};

export default ProjectList;
