// File: frontend/src/pages/Login.js
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const CreateProj = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    creation_date: null,
    project_owner: ''
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          title: formData.title,
          description: formData.description,
          creation_date: formData.creation_date,
          project_owner: formData.CreateProj
        }
      );

      // Store the token in localStorage
      localStorage.setItem("token", response.data.token);

      setSuccess("Project creation successful! Redirecting to Project List ...");
      setTimeout(() => navigate("/projectlist"), 2000);
    } catch (err) {
      setError(
        err.response?.data?.message || "Login failed. Please try again."
      );
    }
  };

  return (
    <div>
      <h2>Project Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="creation_date">Creation Date</label>
          <input
            type="date"
            name="creation_date"
            id="creation_date"
            value={formData.creation_date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="project_owner">Project Owner</label>
          <input
            type="project_owner"
            name="project_owner"
            id="project_owner"
            value={formData.project_owner}
            onChange={handleChange}
            required
          />
        </div>
        {error && <p style={styles.error}>{error}</p>}
        {success && <p style={styles.success}>{success}</p>}
        <button type="submit" style={styles.button}>
          Create Project
        </button>
      </form>
    </div>
  );
};

const styles = {
    container: {
      width: "100%",
      maxWidth: "400px",
      margin: "0 auto",
      padding: "20px",
      textAlign: "center",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    inputGroup: {
      display: "flex",
      flexDirection: "column",
      textAlign: "left",
    },
    button: {
      padding: "10px",
      fontSize: "16px",
      backgroundColor: "#007BFF",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    error: {
      color: "red",
    },
    success: {
      color: "green",
    },
  };

export default CreateProj;
