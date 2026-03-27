import { useRef } from "react";
import Modal from "../Modal/Modal";
import "./Country.css";

const Country = ({ country }) => {
  const flagUrl = country.flags.flags.png;
  const modalRef = useRef(null);
  console.log(country);
  return (
    <div className="country">
      <img src={flagUrl} alt={country.name.common} />
      <div className="country-info">
        <h4>{country.name.common}</h4>
        <button onClick={() => modalRef.current?.showModal()}>Details</button>
        <Modal country={country} modalRef={modalRef} />
      </div>
    </div>
  );
};

export default Country;
