import React, { useState, useEffect } from "react";
import "./App.css";
import "./index.css";
import LoginForm from "./components/LoginForm";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Products from "./components/Products";
import SubmitForm from "./components/SubmitForm";
import HelpLine from "./components/HelpLine";

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  // Check if user is already logged in on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem("gymapp_user");
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        setIsLoggedIn(true);
        setUserName(userData.username);
      } catch (error) {
        console.error("Error parsing stored user data:", error);
      }
    }
  }, []);

  const handleLoginSuccess = (username) => {
    setIsLoggedIn(true);
    setUserName(username);
  };

  const handleLogout = () => {
    localStorage.removeItem("gymapp_user");
    setIsLoggedIn(false);
    setUserName("");
    setActiveTab("home");
  };

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <Home />;
      case "products":
        return <Products />;
      case "submitform":
        return <SubmitForm />;
      case "helpline":
        return <HelpLine />;
      default:
        return <Home />;
    }
  };

  // Show login form if not logged in
  if (!isLoggedIn) {
    return <LoginForm onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="bg-dark min-h-screen">
      <NavBar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        userName={userName}
        onLogout={handleLogout}
      />
      {renderContent()}
    </div>
  );
}

export default App;
