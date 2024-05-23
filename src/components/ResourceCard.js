import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'; // Make sure your App.css has appropriate styles if needed

const ResourceCard = ({ resource }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img src={resource.icon_url} alt={resource.title} className="card-img-top" style={{ maxHeight: '180px', objectFit: 'cover' }} />
      <div className="card-body">
        <h5 className="card-title">{resource.title}</h5>
        <p className="card-text">{resource.category}</p>
        <p className="card-text">{resource.description}</p>
        <a href={resource.link} className="card-link no-underline" target="_blank" rel="noopener noreferrer">
          {resource.link}
        </a>
      </div>
    </div>
  );
};

export default ResourceCard;
