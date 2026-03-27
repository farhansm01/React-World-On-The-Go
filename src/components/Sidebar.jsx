import { FaXmark } from "react-icons/fa6";

const continents = [
  { label: "🌏 Asia", value: "Asia" },
  { label: "🌍 Europe", value: "Europe" },
  { label: "🌍 Africa", value: "Africa" },
  { label: "🌎 North America", value: "North America" },
  { label: "🌎 South America", value: "South America" },
  { label: "🌏 Oceania", value: "Oceania" },
  { label: "🧊 Antarctica", value: "Antarctica" },
];

const Sidebar = ({
  showSidebar,
  setShowSidebar,
  selectedContinent,
  setSelectedContinent,
}) => {
  const handleSelect = (value) => {
    setSelectedContinent(selectedContinent === value ? null : value);
    setShowSidebar(false);
  };

  return (
    <div className={`sidebar ${showSidebar ? "open" : ""}`}>
      <div className="sidebar-header">
        <span className="sidebar-title">Filter by Continent</span>
        <FaXmark className="crossIcon" onClick={() => setShowSidebar(false)} />
      </div>
      <ul>
        {continents.map((c) => (
          <li
            key={c.value}
            onClick={() => handleSelect(c.value)}
            style={{
              borderLeftColor:
                selectedContinent === c.value ? "#d4a843" : "transparent",
              color: selectedContinent === c.value ? "#d4a843" : "",
            }}
          >
            {c.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
