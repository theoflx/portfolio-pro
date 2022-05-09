import React from "react";

import { Navbar } from './navbar'
import photoWordpress from '../img/sitewordpressbonnetaille.jpg'
import photoAppartement from '../img/sitepriscillebonnetaille.jpg'


export const Projects = () => {

    return ( 
       <>
        <div className="projects">
            <div className="logo">
                <p className="text_logo">TF</p>
            </div> 

            <div className="grid_projects">
                <div className="project_1">
                    <h3 className="project_1_title">Site Wordpress pour Emeraude Gestion Privée</h3>
                    <img alt="Mianiature site réaliser pour Emeraude Gestion Privée" className="Miniature_wordpress" src= { photoWordpress }></img>
                </div>

                <div className="project_2">
                    <h3 className="project_2_title">Site vitrine réalisé pour une location d'appartement</h3>   
                        <img alt="Mianiature site réaliser pour une location d'appartement" className="Miniature_site_appartement" src= { photoAppartement }></img>
                </div>

                <div className="project_3">
                    <h3 className="project_3_title">Site e-commerce factice</h3>
                    <img alt="Mianiature site réaliser pour une location d'appartement" className="Miniature_site_appartement" src= { photoAppartement }></img>
                </div>

                {/* <div className="project_4">
                    <h3 className="project_4_title">Appli démonstrative en Kotlin</h3> 
                </div>

                <div className="project_5">
                    <h3 className="project_5_title">Blog sur les reptiles</h3> 
                </div>

                <div className="project_6">
                    <h3 className="project_6_title">Application réalisé en React-Native</h3> 
                </div> */}
            </div>      
        </div>
        
        
        <Navbar />
       </>
    )
}