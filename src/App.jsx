import React from "react";
import "./App.css";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Users App</h1>
      <UserList />
    </div>
  );
}

export default App;
