const UserCard = ({ user }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-2 w-64 hover:scale-105 transition-transform">
      <h3 className="text-lg font-bold">{user.name}</h3>
      <p className="text-gray-600">Email: {user.email}</p>
      <p className="text-gray-600">City: {user.address.city}</p>
    </div>
  );
};

export default UserCard;
