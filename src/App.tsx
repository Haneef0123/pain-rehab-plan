import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import Dashboard from "./pages/Dashboard";
import Dashboard2 from "./pages/Dashboard2";
import Ergonomics from "./pages/Ergonomics";
import Nutrition from "./pages/Nutrition";
import Progress from "./pages/Progress";
import RedFlags from "./pages/RedFlags";
import Settings from "./pages/Settings";
import Travel from "./pages/Travel";
import Week from "./pages/Week";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased">
      <div className="flex">
        <Navigation />
        <main className="flex-1 ml-64 p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard2 />} />
            <Route path="/ergonomics" element={<Ergonomics />} />
            <Route path="/nutrition" element={<Nutrition />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/red-flags" element={<RedFlags />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/week" element={<Week />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
