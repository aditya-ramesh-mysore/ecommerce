import React from 'react';
import { Link } from 'react-router-dom';
import "./adminPage.css"

function AdminPage() {

  return (
    <div className="admin-page">
      <h1>Admin Dashboard</h1>
      <Link to="/create-product"><button>Create Product</button></Link>
      <Link to="/remove-product"><button>Remove Product</button></Link>
      <Link to="/orders"><button>View Orders</button></Link>
    </div>
  );
}

export default AdminPage;
