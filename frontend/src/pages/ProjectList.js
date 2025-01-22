import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getUserData } from "../api/auth"; // Example function to fetch user data
// import TaskList from "./TaskList"; // A component to display tasks
// import ProjectList from ".."; // A component to display projects
// import constants from "./constants";

const ProjectList = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useNavigate();

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const data = await getUserData();
  //       setUser(data);
  //     } catch (err) {
  //       setError("Failed to fetch user data");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchUserData();
  // }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>{error}</div>;
  // }

  // if (!user) {
  //   // Link to login if user is not authenticated
  //   return <Link to="/login" />;
  // }

  const goToCreateProj = () => {
    location('/createProj');
  }
  const backToDashboard = () => {
    location('/dashboard');
  }

  const assignTask = (proj_id) => {
    location('/createTask')
  }

  let ProjList = [
    {
      id: '001',
      title: 'a',
      description: 'des 1',
      creation_date: '21-01-2025',
      project_owner: 'Jhon 1'
    },
    {
      id: '002',
      title: 'ai',
      description: 'des 2',
      creation_date: '21-01-2025',
      project_owner: 'Jhon 2'
    }
  ]

  return (
    <div className="dashboard">
      {/* <h1>Welcome to Your Dashboard, {user.name}!</h1> */}
      <div className="dashboard-content">
        <div className="projects">
          <button onClick={goToCreateProj}> Create Project </button>
          
          {
            ProjList.map(each => 
              <div>
                <p> ID: {each.id} </p>
                <p> Title: {each.title} </p>
                <p> Project Owner: {each.project_owner} </p>
                <p> Created Date: {each.creation_date} </p>
                <button onClick={() => assignTask(each.id)}> Assign Task</button>
                <p><hr/></p>
              </div>
            )
          }

          <button onClick={backToDashboard}> Back to dashboard </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
