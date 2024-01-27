import { UserType } from "../../types/User";

//Userひとつを表示するコンポーネント
const User = ({ user }: { user: UserType }) => {
  return (
    <div className="focus:outline-none mb-7 bg-white p-6 shadow rounded">
      <div className="flex items-center border-b border-gray-200 pb-6">
        <div className="flex items-start justify-between w-full">
          <div className="pl-3">
            <p className="focus:outline-none text-lg font-medium leading-5 text-gray-800">
              {user.name}
            </p>
          </div>
        </div>
      </div>
      <div className="px-2">
        <p className="focus:outline-none text-sm leading-5 py-4 text-gray-600">
          {user.employee_number}
        </p>
      </div>
    </div>
  );
};

export default User;
