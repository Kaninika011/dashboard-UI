import "./App.css";
import Dashboard from "./pages/Dashboard";
import AuthPage from './pages/AuthPage';
import { useAuth0 } from "@auth0/auth0-react";
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