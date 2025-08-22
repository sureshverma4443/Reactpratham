import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../redux/Actions/authAction";
import { useEffect, useState } from "react";
import { deleteUser, getUsers } from "../redux/Actions/userActions";

const Dashboard = () => {
  const logInUser = useSelector((state) => state.auth.user);
  const users = useSelector((state) => state.user.userData);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [editUserId, setEditUserId] = useState(null);
  const [editName, setEditName] = useState("");

  const fetchUser = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const parseData = await response.json();
      dispatch(getUsers(parseData));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const handleEdit = (id, currentName) => {
    setEditUserId(id);
    setEditName(currentName);
  };

  const handleSave = (id) => {
    // Yaha Redux update ka dispatch kar sakte ho
    console.log("Save user", id, "New name:", editName);
    setEditUserId(null);
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">
        Welcome, {logInUser?.name || "Guest"} to Dashboard
      </h1>

      <div className="row">
        {users.map((user) => (
          <div className="col-md-4 mb-4" key={user.id}>
            <div className="card shadow-sm h-100">
              <div className="card-body">
                {editUserId === user.id ? (
                  <>
                    <input
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                    />
                    <button
                      className="btn btn-success btn-sm"
                      onClick={() => handleSave(user.id)}
                    >
                      Save
                    </button>
                  </>
                ) : (
                  <>
                    <h4 className="card-title text-primary">{user.name}</h4>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {user.email}
                    </h6>
                    <p className="card-text mb-1">
                      {user.address.street}
                      {user.address.suite}
                      {user.address.city}
                    </p>
                    <div className="d-flex gap-2">
                      <button
                        className="btn btn-warning btn-sm"
                        onClick={() => handleEdit(user.id, user.name)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(user.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button onClick={handleLogout} className="btn btn-secondary mt-3">
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
