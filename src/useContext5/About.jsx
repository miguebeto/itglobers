import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const About = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <h3>About</h3>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  );
};
