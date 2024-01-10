import Users from "@/components/Users";
import CreateUserForm from "@/components/CreateUserForm";
import LoginForm from "@/components/LoginForm";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Users />
      <CreateUserForm />
      <LoginForm />
    </div>
  );
}
