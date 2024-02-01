import { useState } from "react";
import axios from "axios";

// 会員登録フォームのコンポーネント
const CreateUserForm = () => {
  // フォームの入力値を管理するstate
  const [name, setName] = useState("");
  const [employeeNumber, setEmployeeNumber] = useState("");
  const [admin, setAdmin] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  // フォームの入力値を更新する関数
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // APIを呼び出して、ユーザーを登録する
      await axios.post("http://localhost:3000/users", {
        user: {
          name,
          employee_number: employeeNumber,
          admin,
          password,
          password_confirmation: passwordConfirmation,
        },
      });

      // ユーザーの登録に成功したら、フォームの入力値をリセットする
      setName("");
      setEmployeeNumber("");
      setAdmin(false);
      setPassword("");
      setPasswordConfirmation("");

      // ユーザーの登録に成功したら画面を更新する
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="space-y-6 w-3/4 max-w-lg py-10">
      <form onSubmit={handleSubmit} className="space-y-6">
        <label className="block text-xl font-bold text-gray-700">
          新規登録
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="名前"
          className="block w-full py-2 pl-3 pr-4 text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
        />
        <input
          type="text"
          value={employeeNumber}
          onChange={(e) => setEmployeeNumber(e.target.value)}
          placeholder="社員番号"
          className="block w-full py-2 pl-3 pr-4 text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
        />
        <div>
          <label className="block text-xl font-bold text-gray-700">
            管理者:
          </label>
          <input
            type="checkbox"
            checked={admin}
            onChange={(e) => setAdmin(e.target.checked)}
            className="mt-2"
          />
        </div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="パスワード"
          className="block w-full py-2 pl-3 pr-4 text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
        />
        <input
          type="password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          placeholder="パスワード確認"
          className="block w-full py-2 pl-3 pr-4 text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
        />
        <button
          type="submit"
          className="mt-3 ml-auto flex justify-center py-2 px-8 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          登録
        </button>
      </form>
    </div>
  );
};

export default CreateUserForm;
