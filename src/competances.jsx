import React from "react";

import { Navbar } from './navbar'

import logoReact from '../img/react-logo-color.png';
import logoNode from '../img/node-logo-color.png';
import logoMongo from '../img/mongo-logo.png'
import logoAndroid from '../img/android-studio-color.png'
import logoFigma from '../img/logo-figma-color.png'
import logoPostgres from '../img/logo-postgres-color.png'

export const Competances = () => {
return (
<>

  <div className="competances">
    <div className="logo">
      <p className="text_logo">TF</p>
    </div>
    <div className="box_parts_of_page">
      <div className="left_part_competances">

        <h1 className="title_page_competances">Mes compétances</h1>

        <div className="box_for_skill">
          <p className="skill_text">HTML</p>
          <div className="skill_container">
            <div className="skills html">70%</div>
          </div>

          <p className="skill_text">CSS</p>
          <div className="skill_container">
            <div className="skills css">60%</div>
          </div>

          <p className="skill_text">JavaScript</p>
          <div className="skill_container">
            <div className="skills js">55%</div>
          </div>

          <p className="skill_text">PHP</p>
          <div className="skill_container">
            <div className="skills php">40%</div>
          </div>
        </div>
      </div>


      <div className="right_part_competances">

        <h1 className="second_title_page_competances">Autres compétances</h1>
        
        <div className="box_for_grid">
          <div className="up_part">
            <div className="box1">
                <img alt="logo-react" className="logo_react" src={logoReact}></img>
            </div>

            <div className="box2">
                <img alt="logo-node" className="logo_react" src={logoNode}></img>
            </div>

            <div className="box3">
                 <img alt="logo-android-studio" className="logo_android" src={logoAndroid}></img>
            </div>
          </div>
          
          <div className="bottom_part">
            <div className="box4">
              <img alt="logo-postgres" className="logo_postgres" src={logoPostgres}></img>
            </div>

            <div className="box5">
              <img alt="logo-mongoDB" className="logo_mongo" src={logoMongo}></img>
            </div>

          <div className="box6">
              <img alt="logo-figma" className="logo_figma" src={logoFigma}></img>
          </div>
          </div>
        </div>

      </div>
    </div>
  </div>


  <Navbar />
</>
)
}