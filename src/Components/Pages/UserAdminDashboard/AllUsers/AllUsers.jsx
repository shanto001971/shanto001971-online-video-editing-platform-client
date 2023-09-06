import { useEffect, useState } from "react";
import './AllUsers.css'

const AllUsers = () => {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://online-video-editing-platform-server.vercel.app/users")
        .then(res => res.json())
        .then(data => {
            setUsers(data)
            console.log(data)
        })
    }, [])

    return (
        <div className="text-4xl w-full">
            All User : {users.length}
            <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className=" ">
        <th>#</th>
        <th className="text-lg text-bold">Name</th>
        <th className="text-lg ">Email</th>
        <th className="text-lg ">Status</th>
        <th className="text-lg ">Actions</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user, index) =>  <tr key={user._id}  className="">
            <td>{index + 1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>User</td>
            <td>Delete</td>
          </tr>
          )}
      
       
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default AllUsers;