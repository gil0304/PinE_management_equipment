import EquipmentList from "@/components/equipments/Equipments";
import AddEquipmentForm from "@/components/equipments/AddEquipmentForm";

export default function Home() {
  return (
    <div>
      <AddEquipmentForm />
      <EquipmentList />
    </div>
  );
}
