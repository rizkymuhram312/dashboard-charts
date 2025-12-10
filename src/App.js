import React, { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import Sidebar from "./components/SideBar";
import MetricCard from "./components/MetricCard";
import ChartCard from "./components/ChartCard";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <ThemeProvider>
      <div className="flex h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <Header toggleSidebar={toggleSidebar} />

          {/* Page Content */}
          <main className="flex-1 overflow-y-auto p-6 w-full">
            <div className="w-full">
              {/* Charts Section */}
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="w-full md:w-[30%]">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-colors">
                    <MetricCard gridCols="grid-cols-1 lg:grid-cols-2" />
                  </div>
                </div>
                <div className="w-full md:w-[70%]">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-colors">
                    <ChartCard gridCols="grid-cols-1" />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
