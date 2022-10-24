import React from "react";
import "./App.css";
import { Route, Routes } from 'react-router-dom';
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Account from "./components/Account";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/account' element={
          <ProtectedRoute>
            <Account />
          </ProtectedRoute>}/>
        </Routes>
      </AuthContextProvider>

    </div>
  );
}

export default App;
