import { Icon } from "@iconify/react";

export default function ShareButton({ textos }) {

  async function compartir() {

    if (navigator.share) {

      try {

        await navigator.share({

          title: "Dámaris & Katerin",

          text: "Tarjeta digital de contacto",

          url: window.location.href,

        });

      } catch (error) {

        console.log("Compartir cancelado");

      }

    } else {

      alert("Compartir no está disponible en este entorno de desarrollo.");

    }

  }

 return (

  <button
    className="contact-button share-button"
    onClick={compartir}
  >

    <div
      className="icon"
      style={{ background: "#f5efe7" }}
    >

      <Icon
        icon="mdi:share-variant"
        width={28}
      />

    </div>

    <div className="info">

      <h3>{textos.compartir}</h3>

    </div>

  </button>

);

}