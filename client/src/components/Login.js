import React from "react";

const Login = () => {
  const handleGoogleLogin = () => {
    // opens your backend Google OAuth route in the same tab
    window.open("http://localhost:5000/auth/google", "_self");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "#f5f5f5",
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ marginBottom: 20 }}>Login to Image Search</h1>
      <button
        onClick={handleGoogleLogin}
        style={{
          backgroundColor: "#4285F4",
          color: "#fff",
          padding: "12px 24px",
          borderRadius: 6,
          border: "none",
          cursor: "pointer",
          fontSize: 16,
        }}
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
