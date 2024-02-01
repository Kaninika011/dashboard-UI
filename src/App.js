import "./App.css";
import Dashboard from "./pages/Dashboard";

import { useAuth0 } from "@auth0/auth0-react";
import AuthPage from './pages/Dashboard/Login/index';
;

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <main className="container">
      {isAuthenticated ? <Dashboard /> : <AuthPage />}
  
    </main>
  );
}

export default App;