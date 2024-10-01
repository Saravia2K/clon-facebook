import { Route } from "wouter";
import "./App.css";
import Login from "./pages/Login";

function App() {
  return <Route path="/login" component={Login} />;
}

export default App;
