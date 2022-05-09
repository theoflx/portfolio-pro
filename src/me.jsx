import React from "react";

import { Navbar } from "./navbar";

import stmalo from '../img/saint-malo.jpg'
import me from '../img/moi2.png'
import code from '../img/code.jpg'


export const Me = () => {
  return (
    <>
      <div className="me">
        <div className="box_parts_of_page">
          <div className="left_part_me">
            <div className="logo">
              <p className="text_logo">TF</p>
            </div>

            <h1 className="title_page_me">Petite présentation</h1>

            <p className="text_page_me">
              Je m'appel Théo j'ai 22ans et je suis situé sur Saint-Malo.
              Développeur Web depuis quelques mois, j'ai obtenu mon titre
              professionel suite à un an de formation à l'IMTS de Dinard.
              Toujours en formation ayant pour but de devenir concepteur
              développeur d'application, je cherche à réaliser des projects web
              de petites ou moyennes envergure afin d'alimenter mon portfolio.
            </p>

            <p className="text_page_me_second">
              Si vous souhaitez echangez avec moi merci de passer par la partie
              'Contact' du site :)
            </p>
          </div>

          <div className="right_part_me">
            <div className="box_pictures">
                <img src={stmalo} className="picture_1"></img>
                <img src={me} className="picture_2"></img>
                <img src={code} className="picture_3"></img>
            </div>
          </div>
        </div>
      </div>

      <Navbar />
    </>
  );
};
