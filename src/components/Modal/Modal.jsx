import "./Modal.css";

const Modal = ({ country, modalRef }) => {
  const {
    name,
    flags,
    capital,
    population,
    area,
    region,
    continents,
    currencies,
    languages,
    cca3,
  } = country;

  const currencyList = Object.values(currencies.currencies)
    .map((c) => c.name)
    .join(", ");
  const languageList = Object.values(languages.languages).join(", ");

  return (
    <dialog ref={modalRef} className="country-modal">
      <div className="modal-content">
        <div className="modal-hero">
          <img src={flags.flags.png} alt={flags.flags.alt} />
          <div className="modal-hero-info">
            <span className="modal-code">{cca3.cca3}</span>
            <h2>{name.common}</h2>
            <p className="modal-official">{name.official}</p>
          </div>
        </div>

        <div className="modal-grid">
          <div className="modal-stat">
            <span className="stat-label">🏙️ Capital</span>
            <span className="stat-value">{capital.capital[0]}</span>
          </div>
          <div className="modal-stat">
            <span className="stat-label">👥 Population</span>
            <span className="stat-value">
              {population.population.toLocaleString()}
            </span>
          </div>
          <div className="modal-stat">
            <span className="stat-label">📐 Area</span>
            <span className="stat-value">{area.area.toLocaleString()} km²</span>
          </div>
          <div className="modal-stat">
            <span className="stat-label">🌍 Region</span>
            <span className="stat-value">{region.region}</span>
          </div>
          <div className="modal-stat">
            <span className="stat-label">🗺️ Continent</span>
            <span className="stat-value">{continents.continents[0]}</span>
          </div>
          <div className="modal-stat">
            <span className="stat-label">💰 Currency</span>
            <span className="stat-value">{currencyList}</span>
          </div>
          <div className="modal-stat full-width">
            <span className="stat-label">🗣️ Languages</span>
            <span className="stat-value">{languageList}</span>
          </div>
        </div>

        <button
          className="modal-close"
          onClick={() => modalRef.current.close()}
        >
          ✕ Close
        </button>
      </div>
    </dialog>
  );
};

export default Modal;
