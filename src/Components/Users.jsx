import { useContext, useState } from "react";
import { FaEye, FaTrash } from "react-icons/fa";
import { IoPencil } from "react-icons/io5";
import { useLoaderData } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import Swal from "sweetalert2";

const Users = () => {
    const initialUsers = useLoaderData();
    const [users, setUsers] = useState(initialUsers);

    const { user, deleteCurrentUser } = useContext(AuthContext);

    const handleDeleteUser = (targetUserId, targetEmail) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                // First delete from your own DB
                fetch(`https://espresso-emporium-server-seven-sigma.vercel.app/users/${targetUserId}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount) {
                            const remainingUsers = users.filter((u) => u._id !== targetUserId);
                            setUsers(remainingUsers);

                            // ✅ Also delete from Firebase if it's the current user
                            if (user?.email === targetEmail) {
                                Swal.fire({
                                    title: "Re-enter Password",
                                    input: "password",
                                    inputLabel: "To delete your Firebase account",
                                    inputPlaceholder: "Enter your password",
                                    inputAttributes: {
                                        autocapitalize: "off",
                                        autocorrect: "off"
                                    },
                                    showCancelButton: true
                                }).then((pwResult) => {
                                    if (pwResult.isConfirmed) {
                                        const password = pwResult.value;
                                        deleteCurrentUser(targetEmail, password)
                                            .then(() => {
                                                Swal.fire("Deleted!", "Your Firebase account is removed.", "success");
                                            })
                                            .catch((err) => {
                                                Swal.fire("Error", err.message, "error");
                                            });
                                    }
                                });
                            } else {
                                Swal.fire("Deleted!", "User has been removed from DB.", "success");
                            }
                        }
                    });
            }
        });
    };

    return (
        <div
            className="min-h-[calc(100vh-540px)] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/assets/more/7.png')" }}
        >
            {/* Header */}
            <header className="text-center py-12">
                <h2 className="text-4xl font-extrabold py-6 text-white">All Users are here</h2>
                <p className="text-lg text-white max-w-2xl mx-auto">
                    Here is the list of all users. You can view their details and manage them as needed.
                </p>
            </header>

            {/* Table */}
            <div className="overflow-x-auto mx-auto max-w-7xl rounded-lg shadow-xl p-6 mt-10 bg-white text-[#331A15]">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr className="text-[#331A15] text-3xl rancho">
                            <th>No</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((userItem, index) => (
                            <tr key={userItem._id} className="text-[#331A15] text-xl">
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center gap-4">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img
                                                    src={userItem.photoUrl || "/default-avatar.png"}
                                                    alt={`${userItem.name || "User"}'s avatar`}
                                                    className="object-cover"
                                                    onError={(e) => (e.currentTarget.src = "/default-avatar.png")}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{userItem.name || "Unnamed User"}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{userItem.address || "N/A"}</td>
                                <td>{userItem.phone || "999"}</td>
                                <td>
                                    <div className="flex gap-2">
                                        <button className="btn btn-outline text-[#331A15] border-[#331A15] hover:bg-[#331A15] hover:text-white">
                                            <FaEye size={20} />
                                        </button>
                                        <button className="btn btn-outline text-[#331A15] border-[#331A15] hover:bg-[#331A15] hover:text-white">
                                            <IoPencil size={20} />
                                        </button>
                                        <button
                                            onClick={() => handleDeleteUser(userItem._id, userItem.email)}
                                            className="btn btn-outline text-[#331A15] border-[#331A15] hover:bg-[#331A15] hover:text-white"
                                        >
                                            <FaTrash size={20} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
