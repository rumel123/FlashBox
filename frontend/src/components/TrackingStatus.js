import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ordered from '../images/statusTrack/ordered.png';
import inTransit from '../images/statusTrack/in_transit.png';
import delivered from '../images/statusTrack/delivered.png';
import pending from '../images/statusTrack/in_transit.png';
import arrived from '../images/statusTrack/arrivedAt.png';
import outForDelivery from '../images/statusTrack/delivered.png';
import notFound from '../images/statusTrack/notFound.png';
import './TrackingStatus.css';

// Optional: import a date formatting library
// import { format } from 'date-fns'; // If you choose to use date-fns

const TrackingStatus = ({ trackingNumber }) => {
  const [trackingStatus, setTrackingStatus] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrackingStatus = async () => {
      setLoading(true);
      try {
        const statuses = await getTrackingStatus(trackingNumber);
        console.log("Laman ng statuses: ", statuses);
        setTrackingStatus(statuses);
      } catch (error) {
        console.error('Error fetching tracking status:', error);
        setTrackingStatus([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTrackingStatus();
  }, [trackingNumber]);

  const formatTimestamp = (timestamp) => {
    // Using JavaScript's Date to format
    return new Date(timestamp).toLocaleString(); // e.g., "6/1/2023, 12:00:00 PM"
    // Or using date-fns for more complex formatting
    // return format(new Date(timestamp), "MMMM dd, yyyy HH:mm:ss");
  }

  return (
    <div>
      {loading ? (
        <div className="loading-screen">
          <div className="loading-circle"></div>
        </div>
      ) : (
        <div className="tracking-status">
          {trackingStatus.length > 0 ? (
            trackingStatus.map((status, index) => (
              <div key={index} className="status-entry">
                <img src={status.image} alt={status.remarks} />
                <p>{status.remarks} - {formatTimestamp(status.timestamp)}</p>
              </div>
            ))
          ) : (
            <p>No tracking information available.</p>
          )}
        </div>
      )}
    </div>
  );
};

const getTrackingStatus = async (number) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/v1/fbt/status/${number}`);
    const data = response.data || [];
    return data.map(val => ({
      ...val,
      image: getImageForStatus(val.remarks),
      timestamp: val.update_time  // Make sure timestamp is passed through
    }));
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

const getImageForStatus = (remarks) => {
  const imageMap = {
    'ordered': ordered,
    'in transit': inTransit,
    'delivered': delivered,
    'pending': pending,
    'arrived': arrived,
    'out for delivery': outForDelivery,
    'not found': notFound,
    'no tracking': notFound,
  };

  for (let key in imageMap) {
    if (remarks.toLowerCase().includes(key)) {
      return imageMap[key];
    }
  }
  return notFound;
};

export default TrackingStatus;
