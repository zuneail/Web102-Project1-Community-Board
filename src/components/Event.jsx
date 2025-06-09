import React from "react";
const Event = (props) => {
  return (
    <div className={'Event ' + props.color}>
      <div className="event-image-container">
        <img src={props.image} alt={props.name} className="event-image" />
      </div>
      <div className="event-details">
        <h5>{props.name}</h5>
        <h6>{props.type}</h6>
      </div>
      <div className="event-link">
        <a 
          href={props.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="event-button"
        >
          Visit Website
        </a>
      </div>
    </div>
  );
}
export default Event;