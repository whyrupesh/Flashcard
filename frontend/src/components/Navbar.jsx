import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex items-center space-x-14">
        <div
          className="text-blue-600 text-3xl p-3 font-bold md:ml-48 cursor-pointer	 "
          onClick={() => navigate("/")}
        >
          FlashCards
        </div>
        <div className="text-white bg-blue-900 p-2 rounded-xl">
          <button onClick={() => navigate("/dashboard")}>Dashboard</button>
        </div>
      </div>
      <hr />
    </>
  );
}
