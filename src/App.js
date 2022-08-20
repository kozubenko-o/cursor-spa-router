import React from "react";
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./pages/header/header";
import Main from "./pages/main/main";
import Publication from "./pages/publication/publication";
import Contacts from "./pages/contacts/contacts";
import Photo from "./pages/photos/photos";
import Contact from "./pages/contacts/contact";

function App() {
  return (
      <div className="document-width">
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="cursor-spa-router/" element={<Main />}/>
                <Route path="cursor-spa-router/publication" element={<Publication />}/>
                <Route path="cursor-spa-router/photos" element={<Photo />}/>
                <Route path="cursor-spa-router/contacts" element={<Contacts />}/>
                <Route path="cursor-spa-router/contact/:id" element={<Contact />}/>
            </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
