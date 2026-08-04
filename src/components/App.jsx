import { useState } from "react";
import { personas } from "../data/personas";
import { textos } from "../data/textos.js";

import ContactCard from "./ContactCard";
import ShareButton from "./ShareButton";
import LanguageSwitcher from "./LanguageSwitcher";

export default function App() {

  const [idioma, setIdioma] = useState("es");

  return (

    <>

      <LanguageSwitcher
        idioma={idioma}
        setIdioma={setIdioma}
      />

      {
        personas.map((persona) => (

          <ContactCard
            key={persona.nombre}
            nombre={persona.nombre}
            contactos={persona.contactos}
            textos={textos?.[idioma]}
          />

        ))
      }

      <ShareButton
        textos={textos?.[idioma]}
      />

      <footer className="signature">

  <p>{textos?.[idioma]?.desarrolladoPor}</p>

  <strong>Juan Carlos Claros</strong>

  <p>{textos?.[idioma]?.impulsadoPor}</p>

</footer>

    </>

    

  );

}