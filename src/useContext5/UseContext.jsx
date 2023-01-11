import React, { useMemo, useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { UserContext } from "./UserContext";
import { Index } from "./Index.jsx";
import { About } from "./About.jsx";

export const UseContext = () => {
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <Router>
      <h3>-----USEMEMO AND USECONTEXT AS LOGIN/OUT----</h3>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
          </ul>
        </nav>
        <UserContext.Provider value={value}>
          <Route path="/about/" component={About} />
          <Route path="/" exact component={Index} />
        </UserContext.Provider>
      </div>
    </Router>
  );
};
