import React, { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";

const Auth = () => {
  const { login, register } = useContext(AuthContext);
  const [form, setForm] = useState({ email: "", password: "", username: "" });
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await login({ email: form.email, password: form.password });
      } else {
        await register(form);
        alert("Registration successful! Please log in.");
        setIsLogin(true);
      }
    } catch (err) {
      alert(err.response.data.error || "An error occurred.");
    }
  };

  return (
    <div>
      <h2>{isLogin ? "Login" : "Register"}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <input
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button type="submit">{isLogin ? "Login" : "Register"}</button>
        <p onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
        </p>
      </form>
    </div>
  );
};

export default Auth;
