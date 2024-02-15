import React from "react";
import './App.css'
import TabGroup from "./TabGroup";
import Sidebar from "./components/Sidebar";

export default function App() {
  return <div className="container">
    

    <Sidebar/>
    <TabGroup />
  </div>;
}

