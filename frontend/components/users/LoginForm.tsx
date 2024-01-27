import { useState } from "react";
import axios from "axios";

// ログインフォームのコンポーネント
const LoginForm = () => {
  // フォームの入力値を管理するstate
  const [employeeNumber, setEmployeeNumber] = useState("");
  const [password, setPassword] = useState("");

  // フォームの入力値を更新する関数
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // APIを呼び出して、ユーザーをログインさせる
      const response = await axios.post(
        "http://localhost:3000/sessions",
        {
          user: {
            employee_number: employeeNumber,
            password,
          },
        },
        {
          withCredentials: true,
        }
      );

      // ログインに成功したら何かの処理をする
      // 例えば、トークンを保存したり、ユーザーダッシュボードへリダイレクトする
      console.log(response.data);

      // ここに追加の処理を書く
      window.location.href = "/dashboard";
    } catch (error) {
      console.error("ログインエラー", error);
    }
  };

  return (
    <div className="space-y-6 w-3/4 max-w-lg py-10">
      <form onSubmit={handleSubmit} className="space-y-6">
        <label className="block text-xl font-bold text-gray-700">
          ログイン
        </label>
        <input
          type="text"
          value={employeeNumber}
          onChange={(e) => setEmployeeNumber(e.target.value)}
          placeholder="社員番号"
          className="block w-full py-2 pl-3 pr-4 text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="パスワード"
          className="block w-full py-2 pl-3 pr-4 text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
        />
        <button
          type="submit"
          className="mt-3 ml-auto flex justify-center py-2 px-8 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          ログイン
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
