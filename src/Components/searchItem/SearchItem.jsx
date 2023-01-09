import "./searchItem.css";

function SearchItem() {
  return (
    <div className="searchItem">
      <img
        src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
        className="searchItemImg"
      />
      <div className="searchItemDescription">
        <h1 className="siTitle">Tower heights Hotel</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiDetails">Free airport taxi</span>
        <span className="siSubtitle">Free wifi in all rooms</span>
        <span className="siSubtitle">Free parking</span>
        <span className="siSubtitle">Free breakfast</span>
        <span className="siSubtitle">Free gym</span>
      </div>
      <div className="searchItemDetails">Details</div>
    </div>
  );
}

export default SearchItem;
