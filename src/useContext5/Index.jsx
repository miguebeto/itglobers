import React, { useContext } from "react";
import { login } from "./login";
import { UserContext } from "./UserContext";

export const Index = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h3>Home</h3>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      {user ? (
        <button onClick={() => setUser(null)}>Logout</button>
      ) : (
        <button
          onClick={async () => {
            const user = await login();
            setUser(user);
          }}
        >
          Login
        </button>
      )}
    </div>
  );
};
