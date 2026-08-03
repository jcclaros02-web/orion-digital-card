import { useState } from "react";
import ContactButton from "./ContactButton.jsx";
export default function ContactCard({
  nombre,
  contactos,
  textos
}) {

  const [abierto, setAbierto] = useState(false);

  return (

    <div className="contact-card">

      <h2>{nombre}</h2>

      <button
  className="contact-toggle"
  onClick={() => setAbierto(!abierto)}
>
  <span>{abierto ? "▲" : "▼"}</span>
{
  abierto
    ? ` ${textos.ocultarContacto}`
    : ` ${textos.verContacto}`
}
</button>

      <div className={`contact-list ${abierto ? "open" : ""}`}>
  {contactos.map((contacto) => (
    <ContactButton
      key={contacto.tipo}
      tipo={contacto.tipo}
      icono={contacto.icono}
      titulo={
        contacto.tipo === "email"
          ? textos.correo
          : contacto.titulo
      }
      valor={contacto.valor}
      enlace={contacto.enlace}
    />
  ))}
</div>

    </div>

  );

}