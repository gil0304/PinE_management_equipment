import React, { useEffect, useState } from "react";
import axios from "axios";

interface Equipment {
  id: number;
  name: string;
  category: string;
  project_name: string;
  studio_name: string;
  start_time: string;
  end_time: string;
  user_id: number;
}

const EquipmentList = () => {
  const [equipments, setEquipments] = useState<Equipment[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/equipments")
      .then((response) => setEquipments(response.data))
      .catch((error) => console.error("Error fetching equipments:", error));
  }, []);

  return (
    <div>
      <h1>Equipments List</h1>
      <ul>
        {equipments.map((equipment) => (
          <li key={equipment.id}>{equipment.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default EquipmentList;
