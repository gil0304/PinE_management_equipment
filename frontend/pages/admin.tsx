import Users from "@/components/users/Users";
import CreateUserForm from "@/components/users/CreateUserForm";
import EquipmentList from "@/components/equipments/Equipments";
import CreateEquipmentForm from "@/components/equipments/CreateEquipmentForm";
import CreateCategoryForm from "@/components/categories/CreateCategoryForm";

export default function Admin() {
  return (
    <div>
      <div>
        <h1>ユーザー一覧</h1>
        <Users />
        <CreateUserForm />
      </div>
      <div>
        <h1>機材一覧</h1>
        <EquipmentList />
        <CreateCategoryForm />
        <CreateEquipmentForm />
      </div>
    </div>
  );
}
