import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserModal = ({ onClose }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Disable scrolling when the modal is open
    document.body.style.overflow = "hidden";
    // Re-enable scrolling when the modal is closed
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const signOut = async () => {
    navigate("/signout");
  };

  const img = JSON.parse(localStorage.getItem("img"));
  const email = JSON.parse(localStorage.getItem("email"));
  const username = JSON.parse(localStorage.getItem("username"));
  const userId = JSON.parse(localStorage.getItem("userId"));

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-50"></div>
      <div
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center rounded-lg z-50 p-8 text-white"
        style={{ backgroundColor: "#101010" }}
      >
        <h1 className="text-3xl font-bold mb-4">Book Hub Web App</h1>
        <div
          className="flex items-center justify-center p-4 mb-4"
          style={{ backgroundColor: "#181818" }}
        >
          <div className="mr-4">
            <img src={img} alt="user" className="h-20 rounded-full" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-l font-bold mb-2">{username}</h1>
            <h2 className="text-l mb-2">{userId}</h2>
            <h2 className="text-l">{email}</h2>
          </div>
        </div>
        <button
          className="bg-transparent py-4 px-6 border-2 border-white text-sm text-white font-semibold cursor-pointer mx-auto hover:bg-yellow-400 hover:border-yellow-400 hover:text-black transition duration-300"
          onClick={signOut}
        >
          Sign Out
        </button>
        <button
          className="bg-transparent py-4 px-6 border-2 border-white text-sm text-white font-semibold cursor-pointer mx-auto my-4 hover:bg-red-600 hover:border-red-600 hover:text-black transition duration-300"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </>
  );
};

export default UserModal;
