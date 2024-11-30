import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function MyAccount() {
  const [user,setUser]=useState(JSON.parse(localStorage.getItem('user')))
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate=useNavigate()
  const handleSaveChanges = (e) => {
    e.preventDefault();
    setError("");
    if (currentPassword !== user.pass) {
      setError("Incorrect current password.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setError("New password and confirm password do not match.");
      return;
    }
    const updatedUser = { ...user, password: newPassword };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);

    alert("Password updated successfully login again!");
    navigate("/login");
  };

  const handleCancel = () => {
    navigate("/");
  };
  return (
    <>
      <div className="container my-5">
        <nav aria-label="breadcrumb" className="mb-4 d-flex justify-content-between">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              Home
            </li>
            <li className="breadcrumb-item active" aria-current="page" style={{fontWeight:"bold"}}>
              My Account
            </li>
          </ol>
          <div>
            Welcome! <span className="text-danger">{user.name}</span>
          </div>
        </nav>

        <div className="row">
          <div className="col-lg-3">
            <h5>Manage My Account</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-danger fw-bold">
                  My Profile
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-dark">
                  Address Book
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-dark">
                  My Payment Options
                </a>
              </li>
            </ul>
            <h5>My Orders</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-dark">
                  My Returns
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-dark">
                  My Cancellations
                </a>
              </li>
            </ul>
            <h5>My Wishlist</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-dark">
                  My Wishlist
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-9">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="mb-4 text-danger">Edit Your Profile</h5>
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleSaveChanges}>
                  <div className="row mb-3">
                    <div className="col-md-12">
                      <label for="firstName" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        value={user.name}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label for="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={user.email}
                      readOnly
                    />
                  </div>
                  <h6 className="mt-4 mb-3">Password Changes</h6>
                  <div className="mb-3">
                    <label for="currentPassword" className="form-label">
                      Current Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="currentPassword"
                      onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="newPassword" className="form-label">
                      New Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="newPassword"
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="confirmPassword" className="form-label">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                  <div className="d-flex justify-content-end">
                    <button type="button" className="btn me-3" onClick={handleCancel}>
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-danger">
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyAccount;
