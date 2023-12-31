import { useQuery } from "@tanstack/react-query";
import "./AllUsers.css";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import { useTheme } from "../../../ThemeProvider/ThemeProvider";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { theme, changesThemeTextColor, changesThemeBgColor } = useTheme(); // for using light and dark themes
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handleMakeAdmin = (user) => {
    fetch(
      `https://online-video-editing-platform-server.vercel.app/users/admin/${user._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${user.name} is an Admin now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleDelete = (user) => {
    Swal.fire({
      title: `Are you sure to delete ${user.name}?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://online-video-editing-platform-server.vercel.app/users/${user._id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>MingleMotion Express | All Users</title>
      </Helmet>
      <div className={`text-4xl w-full px-8 ${changesThemeTextColor()}`}>
        All User : {users.length}
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className={`${changesThemeTextColor()}`}>
                  <th>#</th>
                  <th className="text-lg text-bold">Name</th>
                  <th className="text-lg ">Email</th>
                  <th className="text-lg ">Status</th>
                  <th className="text-lg ">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user._id}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role === "admin" ? "admin" : "user"}</td>
                    <td>
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn-sm btn-success"
                      >
                        Admin
                      </button>
                      <button
                        onClick={() => handleDelete(user)}
                        className="btn-sm ms-2 bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllUsers;
