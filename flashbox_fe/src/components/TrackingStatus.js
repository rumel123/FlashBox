import React, { useState, useEffect } from 'react';
import ordered from '../images/statusTrack/ordered';
import inTransit from '../images/statusTrack/in_transit.png';
import delivered from '../images/statusTrack/delivered.png';
import pending from '../images/statusTrack/in_transit.png';
import arrived from '../images/statusTrack/arrivedAt.png';
import outForDelivery from '../images/statusTrack/delivered.png';
import notFound from '../images/statusTrack/notFound.png';
import './TrackingStatus.css';

const TrackingStatus = ({ trackingNumber }) => {
  const [trackingStatus, setTrackingStatus] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrackingStatus = () => {
      setLoading(true);
      setTrackingStatus([]);

      setTimeout(() => {
        const statuses = getTrackingStatus(trackingNumber);
        setTrackingStatus(statuses);
        setLoading(false);
      }, 2000);
    };

    fetchTrackingStatus();
  }, [trackingNumber]);

  return (
    <div>
      {loading && (
        <div className="loading-screen">
          <div className="loading-circle"></div>
        </div>
      )}
      {trackingStatus.length > 0 && !loading && (
        <div className="tracking-status">
          {trackingStatus.map((status, index) => (
            <div key={index} className="status-entry">
              <img src={status.image} alt={status.status} />
              <p>{status.status}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const getTrackingStatus = (number) => {
  const statusMap = {
    '12345': [
      { status: 'Ordered at May 01, 2024' },
      { status: 'In transit at May 05, 2024' },
      { status: 'Delivered at May 10, 2024' }
    ],
    '67890': [
      { status: 'Delivered at May 07, 2024' },
    ],
    '11111': [
      { status: 'Pending at May 03, 2024' },
    ],
    '22222': [
      { status: 'Arrived at destination at May 04, 2024' },
    ],
    '33333': [
      { status: 'Out for Delivery at May 06, 2024' },
    ],
  };

  const statuses = statusMap[number] || [{ status: 'Tracking number not found' }];
  return statuses.map(status => ({
    ...status,
    image: getImageForStatus(status.status)
  }));
};

const getImageForStatus = (status) => {
  const imageMap = {
    'ordered': ordered,
    'in transit': inTransit,
    'delivered': delivered,
    'pending': pending,
    'arrived': arrived,
    'out for delivery': outForDelivery,
    'not found': notFound
  };

  for (let key in imageMap) {
    if (status.toLowerCase().includes(key)) {
      return imageMap[key];
    }
  }
  return notFound;
};

export default TrackingStatus;
