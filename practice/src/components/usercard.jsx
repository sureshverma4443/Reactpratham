const UserCard = ({ user }) => {
  return (
    <div>
      <h6>{user?.name}</h6>
      <h6>{user?.age}</h6>
      <h6>{user?.gender}</h6>
    </div>
  );
};

export default UserCard;
