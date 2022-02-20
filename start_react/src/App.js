import "./App.css";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <div className="react">
      <Header />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
