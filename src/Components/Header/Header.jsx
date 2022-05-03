import React, { useEffect } from "react";
import Axios from "axios";
import { useState } from "react";
import BG_IMG from "../../images/pattern-bg.png";
import SUBMIT_BTN from "../../images/icon-arrow.svg";
import "./Header.scss";

const Header = (props) => {
  const [userEntry, setUserEntry] = useState(null);

  let url = "https://ipapi.co/" + userEntry + "/json/";

  if(userEntry === null) {
    url = "https://ipapi.co/json/"
  }

  useEffect(()=> {
    Axios.get(url).then((response) => {
      props.UserEntry(response.data);
    });
  }, [])

  function callAPI(event) {
    event.preventDefault();
    Axios.get(url).then((response) => {
      props.UserEntry(response.data);
    });
  }

  function handleChange(event) {
    const userInput = event.target.value;
    setUserEntry(userInput);
  }

  return (
    <div className="header_container">
      <div className="bg_img">
        <img src={BG_IMG} alt="backgroung img" />
      </div>
      <h1>IP Address Tracker</h1>
      <form>
        <input
          onChange={handleChange}
          type="text"
          placeholder="IP Address"
          name="ip_input"
          autoComplete="off"
        />
        <button onClick={callAPI}>
          <img src={SUBMIT_BTN} alt="submit arrow" />
        </button>
      </form>
    </div>
  );
};

export default Header;
