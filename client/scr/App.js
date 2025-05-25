import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Plans from "./components/Plans";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import AdminPanel from "./components/AdminPanel";
import History from "./components/History";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/auth/user", { withCredentials: true })
      .then(res => setUser(res.data))
      .catch(err => console.log("Not logged in"));
  }, []);

  if (!user) {
    return <Login />;
  }

  const userEmail = user.emails[0].value;

  return (
    <Router>
      <div>
        <header style={{ padding: "10px", backgroundColor: "#f0f0f0" }}>
          <p>Welcome, {user.displayName}</p>
          <p>Email: {userEmail}</p>
          <a href="http://localhost:5000/auth/logout">
            <button>Logout</button>
          </a>
        </header>

        <Routes>
          <Route path="/dashboard" element={<Dashboard userEmail={userEmail} />} />
          <Route path="/plans" element={<Plans userEmail={userEmail} />} />
          <Route path="/history" element={<History userEmail={userEmail} />} />
          <Route path="/admin" element={<AdminPanel userEmail={userEmail} />} />
          <Route path="*" element={<Dashboard userEmail={userEmail} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
