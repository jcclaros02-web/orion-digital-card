import { Icon } from "@iconify/react";

export default function ContactButton({
  tipo,
  icono,
  titulo,
  valor,
  enlace
}) {

  let color = "#ece5db";

  if (tipo === "whatsapp") {
    color = "#DCFCE7";
  } else if (tipo === "instagram") {
    color = "#F5D0FE";
  } else if (tipo === "email") {
    color = "#FEE2E2";
  }

  return (

    <a
      href={enlace}
      className="contact-button"
      target="_blank"
      rel="noopener noreferrer"
    >

      <div
        className="icon"
        style={{ background: color }}
      >

        <Icon icon={icono} width={28} />

      </div>

      <div className="info">

        <h3>{titulo}</h3>

      </div>

    </a>

  );

}