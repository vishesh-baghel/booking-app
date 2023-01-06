import "./featured.css";

function Featured() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="hotel"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Delhi 500 hotels</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="hotel"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Mumbai 120 hotels</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
          alt="hotel"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Chennai 140 hotels</h1>
        </div>
      </div>
    </div>
  );
}

export default Featured;
