// src/pages/PropertyListing.jsx
import React from 'react';

const PropertyListing = () => {
  const properties = [
    { id: 1, name: "Luxury Villa", price: "$1,500,000", location: "California, USA" },
    { id: 2, name: "Modern Apartment", price: "$350,000", location: "New York, USA" },
    { id: 3, name: "Beachfront House", price: "$2,000,000", location: "Florida, USA" },
    { id: 4, name: "Cozy Cottage", price: "$150,000", location: "Oregon, USA" }
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Property Listings</h1>
      <div className="row">
        {properties.map((property) => (
          <div key={property.id} className="col-md-4 mb-4">
            <div className="card">
              <img
                src="https://via.placeholder.com/300x200"
                className="card-img-top"
                alt="property"
              />
              <div className="card-body">
                <h5 className="card-title">{property.name}</h5>
                <p className="card-text">
                  <strong>Price: </strong>{property.price}<br />
                  <strong>Location: </strong>{property.location}
                </p>
                <button className="btn btn-primary">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PropertyListing;
