import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, NavLink as Link } from "react-router-dom";
import { Competances } from './competances';

import { Home } from "./home"
import { Me } from "./me"
import { Projects } from "./projects"
import { Competances } from "./competances"
import { Contact } from "./contact"

export const App = () => {
    return (      
       <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/me" element={<Me />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/competances" element={<Competances />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
    </Routes>         
    )
}