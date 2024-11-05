import React, { useState } from "react";

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    if (username) {
      onLogin(username); // volá funkciu `onLogin` s menom používateľa
    }
  };

  return (
    <div>
      <h2>Prihlásenie</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Zadajte meno používateľa"
      />
      <button onClick={handleLogin}>Prihlásiť sa</button>
    </div>
  );
};

export default LoginPage;

