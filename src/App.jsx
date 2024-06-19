import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import TransactionDetails from "./pages/TransactionDetails.jsx";
import CreateTransaction from "./pages/CreateTransaction.jsx";
import EditTransaction from "./pages/EditTransaction.jsx";
import DeleteTransaction from "./pages/DeleteTransaction.jsx";
import Login from "./pages/Login.jsx";
import Reports from "./pages/Reports.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/transaction/:id" element={<TransactionDetails />} />
        <Route exact path="/create-transaction" element={<CreateTransaction />} />
        <Route exact path="/edit-transaction/:id" element={<EditTransaction />} />
        <Route exact path="/delete-transaction/:id" element={<DeleteTransaction />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/reports" element={<Reports />} />
      </Routes>
    </Router>
  );
}

export default App;