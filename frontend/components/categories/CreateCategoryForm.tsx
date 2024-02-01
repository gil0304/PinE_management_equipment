import React, { useState } from "react";
import axios from "axios";

const CreateCategoryForm = () => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/categories", { name, color });
      setName("");
      setColor("");
      window.location.reload();
    } catch (error) {
      console.error("Error creating category:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Category Name"
      />
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        placeholder="Color"
      />
      <button type="submit">Create Category</button>
    </form>
  );
};

export default CreateCategoryForm;
