import React, { useState, useEffect } from "react";
import axios from "axios";
import { Category } from "@/interfaces/Category";

const CreateEquipmentForm = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectCategoryId, setSelectCategoryId] = useState<number | string>("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:3000/categories");
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const [name, setName] = useState("");
  const [modelNumber, setModelNumber] = useState("");
  const [makerName, setMakerName] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/equipments", {
        name,
        model_number: modelNumber,
        maker_name: makerName,
        description,
        stock,
        category_id: selectCategoryId,
      });
      setName("");
      setModelNumber("");
      setMakerName("");
      setDescription("");
      setStock("");
      window.location.reload();
    } catch (error) {
      console.error("Error adding equipment:", error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Equipment Name"
      />
      <input
        type="text"
        value={modelNumber}
        onChange={(e) => setModelNumber(e.target.value)}
        placeholder="Model Number"
      />
      <input
        type="text"
        value={makerName}
        onChange={(e) => setMakerName(e.target.value)}
        placeholder="Maker"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <input
        type="number"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
        placeholder="Stock"
      />
      <select
        value={selectCategoryId}
        onChange={(e) => setSelectCategoryId(e.target.value)}
      >
        <option value="">Select Category</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      <button type="submit">Create Equipment</button>
    </form>
  );
};

export default CreateEquipmentForm;
