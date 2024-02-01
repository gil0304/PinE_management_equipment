import React, { useEffect, useState } from "react";
import axios from "axios";
import { Equipment } from "@/interfaces/Equipment";
import { Category } from "@/interfaces/Category";

const EquipmentList = () => {
  const [equipments, setEquipments] = useState<Equipment[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:3000/categories");
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories", error);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetcEquipments = async () => {
      try {
        const response = await axios.get("http://localhost:3000/equipments");
        setEquipments(response.data);
      } catch (error) {
        console.error("Error fetching equipments:", error);
      }
    };
    fetcEquipments();
  }, []);

  const getCategoryName = (categoryId: number): string => {
    const category = categories.find((c) => c.id === categoryId);
    return category ? category.name : "Unknown";
  };

  return (
    <div>
      <h1>Equipments List</h1>
      <ul>
        {equipments.map((equipment) => (
          <li key={equipment.id}>
            {equipment.name} (Model: {equipment.model_number}) - Category:{" "}
            {getCategoryName(equipment.category_id)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EquipmentList;
