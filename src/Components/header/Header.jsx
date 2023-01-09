import "./header.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendar,
  faCar,
  faPerson,
  faPlane,
  faPlateWheat,
  faSubway,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export default function Header({ type }) {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adults: 1,
    children: 0,
    room: 1,
  });
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const navigate = useNavigate();

  function handleOptions(name, operation) {
    setOptions((prev) => {
      if (operation === "inc") {
        return { ...prev, [name]: prev[name] + 1 };
      } else {
        return { ...prev, [name]: prev[name] - 1 };
      }
    });
  }

  function handleSearch() {
    navigate("/hotels", { state: { destination, date, options } });
  }

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faSubway} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlateWheat} />
            <span>Food</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">A lifetime of discounts!!</h1>
            <p className="headerDescription">Get rewarded for your travels</p>
            <button className="headerBtn">Sign-in/Register</button>

            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendar} className="headerIcon" />
                <span
                  onClick={() => {
                    setOpenDate(!openDate);
                  }}
                  className="headerSearchText"
                >
                  {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                    date[0].endDate,
                    "dd/MM/yyyy"
                  )}`}
                </span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="headerDateRange"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  onClick={() => {
                    setOpenOptions(!openOptions);
                  }}
                  className="headerSearchText"
                >{`${options.adults} adults, ${options.children} children, ${options.room} room`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionsItem">
                      <span className="optionsItemText">Adults</span>
                      <button
                        disabled={options.adults === 1}
                        className="optionsItemCounterBtn"
                        onClick={() => {
                          handleOptions("adults", "dec");
                        }}
                      >
                        -
                      </button>
                      <span className="optionsItemCounter">
                        {options.adults}
                      </span>
                      <button
                        disabled={options.adults === 5}
                        className="optionsItemCounterBtn"
                        onClick={() => {
                          handleOptions("adults", "inc");
                        }}
                      >
                        +
                      </button>
                    </div>
                    <div className="optionsItem">
                      <span className="optionsItemText">Children</span>
                      <button
                        disabled={options.children === 0}
                        className="optionsItemCounterBtn"
                        onClick={() => {
                          handleOptions("children", "dec");
                        }}
                      >
                        -
                      </button>
                      <span className="optionsItemCounter">
                        {options.children}
                      </span>
                      <button
                        disabled={options.children === 5}
                        className="optionsItemCounterBtn"
                        onClick={() => {
                          handleOptions("children", "inc");
                        }}
                      >
                        +
                      </button>
                    </div>
                    <div className="optionsItem">
                      <span className="optionsItemText">Room</span>
                      <button
                        disabled={options.room === 1}
                        className="optionsItemCounterBtn"
                        onClick={() => {
                          handleOptions("room", "dec");
                        }}
                      >
                        -
                      </button>
                      <span className="optionsItemCounter">{options.room}</span>
                      <button
                        disabled={options.room === 5}
                        className="optionsItemCounterBtn"
                        onClick={() => {
                          handleOptions("room", "inc");
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
