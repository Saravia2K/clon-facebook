import { Route, Router } from "wouter";
import "./App.css";
import Login from "./pages/Login";
import { useHashLocation } from "wouter/use-hash-location";

function App() {
  return (
    <Router hook={useHashLocation}>
      <Route path="/login" component={Login} />
    </Router>
  );
}

export default App;
