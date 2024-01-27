import { useEffect, useState } from "react";
import axios from "axios";
import { UserType } from "../../types/User";
import User from "./User";
import Link from "next/link";

//User一覧を表示するコンポーネント
const Users = () => {
  //User一覧を管理するState
  const [users, setUsers] = useState<UserType[]>([]);

  //User一覧を取得する関数
  const fetchUsers = async () => {
    // APIからTodo一覧を取得する
    try {
      const res = await axios.get<UserType[]>("http://localhost:3000/users");

      // 取得したTodo一覧をStateにセットする
      setUsers(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  //コンポーネントがマウントされたタイミングでUser一覧を取得する
  useEffect(() => {
    //User一覧を取得する関数を呼び出す
    fetchUsers();
  }, []);

  return (
    <div className="space-y-6 w-3/4 max-w-lg pt-10">
      <label className="block text-xl font-bold text-gray-700">User一覧</label>
      <div className="items-center justify-center">
        {users.map((user) => (
          <User user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
