import React from "react";

import { Navbar } from "./navbar";

export const Contact = () => {

  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [firstname, setFirstname] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [error, setError] = React.useState("");

  const maxchar = 150;

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://formspree.io/f/mdobllvy", {
      method: "POST",
      body: JSON.stringify({ firstname, lastname, email, message }),
    }).then((res) => console.log(res));
  };

  React.useEffect(() => {
    textarea = document.querySelector("#input_for_post");
    textarea.addEventListener("input", autoResize, false);

    function autoResize() {
      this.style.height = "auto";
      this.style.height = this.scrollHeight + "px";
    }
  }, []);

//   const handleChange = e => {
//       if(e.target.value.length >= maxchar + 1) {
//         if(!error) setError('you have reach the limit')
//     } else {
//         setMessage(e.target.value)
//         setError()
//     }

const handleChange = e => {
    if(e.target.value.length >= maxchar + 1){
        if(!error) setError('Trop de caractère, doucement !')
    } else {
        setMessage(e.target.value)
        setError('')
    }
}

  return (
    <>
      <div className="contact">
        <div className="logo">
          <p className="text_logo">TF</p>
        </div>

        <h1 className="title_contact_page">Contactez moi !</h1>


        <form onSubmit={handleSubmit} className="contact_form">
          <div className="box_for_all">
            <div className="box_info_perso">
              <div className="box_firstname">
                <label>Votre prénom</label>
                <input
                  value={firstname}
                  type="text"
                  name="firstname"
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
              <div className="box_lastname">
                <label>Votre nom</label>
                <input
                  value={lastname}
                  type="text"
                  name="lastname"
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
            </div>
            <div className="box_email">
              <label>Votre email</label>
              <input
                value={email}
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="box_message">
              <label>Votre message</label>
              <textarea
                value={message}
                id="input_for_post"
                name="message"
                onChange={handleChange}
              ></textarea>
              <label className="compteur_carac">{message.length}/{maxchar}</label>
            </div>
            <button className="btn_send" type="submit">Envoyer</button>
            <div className="succes_message">Votre message à bien été envoyer</div>
          </div>
        </form>
      </div>

      <Navbar />
    </>
  );
};
