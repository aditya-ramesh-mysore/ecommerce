import { AuthProvider } from "./components/Auth";
import "./App.css";
import Nav from "./components/Nav";

function App() {
  return (
    <AuthProvider>
      <Nav />
    </AuthProvider>
  );
}

export default App;
