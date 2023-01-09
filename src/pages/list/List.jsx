import "./list.css";
import NavBar from "../../Components/navBar/NavBar";
import Header from "../../Components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import SearchItem from "../../Components/searchItem/SearchItem";

function List() {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);

  return (
    <div>
      <NavBar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listSearchTitle">Search</h1>
            <div className="listSearchItem">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="listSearchItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {format(date[0].startDate, "dd/MM/yyyy")} to
                {format(date[0].endDate, "dd/MM/yyyy")}
              </span>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="dateRange"
                  minDate={new Date()}
                />
              )}
            </div>
            <div className="listSearchItem">
              <label>Options</label>
              <div className="listSearchOptionItem">
                <span className="optionItemText">
                  Min price: <small>Per night</small>
                </span>
                <input type="number" className="optionItemInput" />
              </div>
              <div className="listSearchOptionItem">
                <span className="optionItemText">
                  Max price: <small>Per night</small>
                </span>
                <input type="number" className="optionItemInput" />
              </div>
              <div className="listSearchOptionItem">
                <span className="optionItemText">Adults</span>
                <input
                  min={1}
                  type="number"
                  className="optionItemInput"
                  placeholder={options.adults}
                />
              </div>
              <div className="listSearchOptionItem">
                <span className="optionItemText">Children</span>
                <input
                  min={0}
                  type="number"
                  className="optionItemInput"
                  placeholder={options.children}
                />
              </div>
              <div className="listSearchOptionItem">
                <span className="optionItemText">Number of rooms</span>
                <input
                  min={1}
                  type="number"
                  className="optionItemInput"
                  placeholder={options.room}
                />
              </div>
            </div>
            <button className="listSearchButton">Search</button>
          </div>
          <div className="listResults">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
