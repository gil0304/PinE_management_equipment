import React, { useState } from "react";
import axios from "axios";

const AddEquipmentForm = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [projectName, setProjectName] = useState("");
  const [studioName, setStudioName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [userId, setUserId] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/equipments", {
        name,
        category,
        project_name: projectName,
        studio_name: studioName,
        start_time: startTime,
        end_time: endTime,
        user_id: userId,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error adding equipment:", error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Add Equipment</button>
    </form>
  );
};

export default AddEquipmentForm;
