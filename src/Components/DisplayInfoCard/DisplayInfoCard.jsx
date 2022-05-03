import React from "react";
import "./DisplayInfoCard.scss";

const DisplayInfoCard = (props) => {
  return (
    <div className="info_card">
      <div className="card_ip">
        <h1>IP ADDRESS</h1>
        <p>{props.ip}</p>
      </div>
      <div className="card_location">
        <div className="vertical_line"></div>
        <h1>LOCATION</h1>
        <div className="location_data">
          <div>
            <span>{props.city},</span>
            <span>{props.region}</span>
          </div>
          <div>
            <span>{props.postal},</span>
            <span>{props.country}</span>
          </div>
        </div>
      </div>
      <div className="card_timezone">
        <div className="vertical_line"></div>
        <h1>TIMEZONE</h1>
        <p>
          UTC {props.timezone.slice(0, 3)}:{props.timezone.slice(3)}
        </p>
      </div>
      <div className="card_isp">
        <div className="vertical_line"></div>
        <h1>ISP</h1>
        <p>{props.isp}</p>
      </div>
    </div>
  );
};

export default DisplayInfoCard;
