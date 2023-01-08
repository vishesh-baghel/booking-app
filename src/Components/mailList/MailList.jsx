import "./mailList.css";

function MailList() {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save Time, Save Money</h1>
      <span className="mailDescription">
        Sign up and we will send the best deals!!
      </span>
      <div className="mailContainer">
        <input
          type="text"
          placeholder="Enter your email"
          className="mailInput"
        />
        <button className="mailButton">Subscribe</button>
      </div>
    </div>
  );
}

export default MailList;
