import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import AchatForm from "./components/AchatForm";
import ListeAchats from "./components/ListeAchats";
import Facture from "./components/Facture";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-lg">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between">
              <div className="flex space-x-7">
                <div>
                  <Link to="/" className="flex items-center py-4 px-2">
                    <span className="font-semibold text-gray-500 text-lg">Gestion Achats</span>
                  </Link>
                </div>
              </div>
              <div className="hidden md:flex items-center space-x-1">
                <Link to="/" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Achats</Link>
                <Link to="/facture" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Facture</Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={
              <>
                <AchatForm />
                <ListeAchats />
              </>
            } />
            <Route path="/facture" element={<Facture />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}