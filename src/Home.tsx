import { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, DocumentData, getDocs } from "firebase/firestore";

function Home() {
  const [users, setUsers] = useState([] as DocumentData[]);
  const [loading, setLoading] = useState(false);
  
  const fetchUsers = async () => {
    const usersCollection = collection(db, "users");
    const usersSnapshot = await getDocs(usersCollection);
    const usersList = usersSnapshot.docs.map((doc) => doc.data());
    setUsers(usersList);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    fetchUsers();
  }, []);

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-5 p-10">
      <div className="flex h-1/2 w-1/2 gap-5">
        <div className="hover:scale[1.03] h-full w-full rounded-md bg-gray-200 shadow-sm transition-all duration-300 hover:rounded-lg hover:shadow-lg">
          <h1 className="bg-slate-400 py-1 text-center text-2xl font-bold text-white">
            Create
          </h1>
        </div>
        <div className="hover:scale[1.03] h-full w-full rounded-md bg-gray-200 shadow-sm transition-all duration-300 hover:rounded-lg hover:shadow-lg">
          <h1 className="bg-slate-400 py-1 text-center text-2xl font-bold text-white">
            Read
          </h1>
          {(loading ? return (
            <h1>loading...</h1>
          ) : return (
            <ul>
              <li>test<li/>
            </ul>
          )
          )}
        </div>
      </div>
      <div className=" card flex h-1/2 w-1/2 gap-5">
        <div className="hover:scale[1.03] h-full w-full rounded-md bg-gray-200 shadow-sm transition-all duration-300 hover:rounded-lg hover:shadow-lg">
          <h1 className="bg-slate-400 py-1 text-center text-2xl font-bold text-white">
            Update
          </h1>
        </div>
        <div className="hover:scale[1.03] h-full w-full rounded-md bg-gray-200 shadow-sm transition-all duration-300 hover:rounded-lg hover:shadow-lg">
          <h1 className="bg-slate-400 py-1 text-center text-2xl font-bold text-white">
            Delete
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
