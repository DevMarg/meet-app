import { useState } from "react"
import PropTypes from 'prop-types'


const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false)

  if (!event) {
    return null; 
  }

  return (
    <li className='event'>
      <span className='eventSummary'>
        <h2>{event.summary}</h2>
        <p className="location">{event.location}</p>
        <p className="originalStartTime">{event && (new Date(event.originalStartTime.dateTime)).toUTCString()}</p>
      </span>
      {showDetails ? (
        <div className='details' id="details" >
          <p>{event.description}</p>
          <a href={event.htmlLink}>See details on Google Calendar</a>
        </div> 
      ) : null}
      <button 
        id="show-details-btn"
        className='details-btn'
        name="Show Details" 
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
    </li>
  )
}

Event.propTypes = {
    event: PropTypes.object.isRequired
  }

export default Event;

