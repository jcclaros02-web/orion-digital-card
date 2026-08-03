export default function LanguageSwitcher({ idioma, setIdioma }) {

  return (

    <div className="language-switcher">

      <button
  className={idioma === "es" ? "active" : ""}
  onClick={() => setIdioma("es")}
>
  <span>ES</span>
</button>

      <span>|</span>

      <button
  className={idioma === "en" ? "active" : ""}
  onClick={() => setIdioma("en")}
>
  <span>EN</span>
</button>

    </div>

  );

}