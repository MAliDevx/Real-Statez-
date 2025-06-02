import React from "react";
import { useNavigate } from "react-router-dom";
// import { FaBath, FaBed, FaInbox, FaMap } from "react-icons/fa";
// import { MdLocationOn } from "react-icons/md";
import house from '../../../assets/Images/house-placeholder.jpg'
import {
  Card,
  CardBodyTop,
  CardBodyBottom,
  CardImg
} from "../../../styles/CommanClasses"; 
import { MdLocationOn } from "react-icons/md";
import { FaBath, FaBed, FaInbox, FaMap } from "react-icons/fa";
const PropertyCard = ({ item, isError })  => {
  const navigate = useNavigate();

  const image = item.images?.[0] || "https://images.app.goo.gl/J6ARXTWhwAJWFyKi8";

  return (
    <Card onClick={() => navigate(`/propertydetails/${item._id
}`)}>
   { !isError && ( <button className="property-feature">{item.status}</button>)}
    { !isError &&  ( <button className="isForSale">{item.purpose}</button> )}
      <div style={{height:"300px"}}>

   { !isError &&  (  <CardImg src={image} alt={item.propertyType} /> )}
    { isError &&  ( <CardImg src= {house}  /> )}
      </div>

    { !isError && (  <CardBodyTop>
        <button className="isHouse">{item.propertyType}</button>
        <h4 className="property-name">{item.name}</h4>
        <p className="property-location">
          <MdLocationOn /> {item.fullAddress}
        </p>
      </CardBodyTop> )}

   { !isError &&   ( <CardBodyBottom>
        <div className="bath-box">
          <div>Baths</div>
          <div className="bottom-box">
            <FaBath /> {item.bathrooms}
          </div>
        </div>
        <div className="beds-box">
          <div>Beds</div>
          <div className="bottom-box">
            <FaBed />
            {item.bedrooms}
          </div>
        </div>
        <div className="room-box">
          <div>Rooms</div>
          <div className="bottom-box">
            <FaInbox />
            {item.rooms}
          </div>
        </div>
        <div className="area-box">
          <div>Area</div>
          <div className="bottom-box">
            <FaMap />
            {item.area}
          </div>
        </div>
      </CardBodyBottom>)}

   { !isError &&  (  <div className="property-profile">
        <div className="property-profile__info">
          <figure>
            <img
              src={item.agencyId?.image}
              alt="Owner"
              className="property-profile__image"
            />
          </figure>
          <p className="property-profile__name">{item.agencyId?.name}</p>
        </div>
        <div className="property-profile__price">
          {item.price}.00
        </div>
      </div>)}
            {isError && (
        <div className="fallback-message" style={{ textAlign: "center", color: "gray", marginTop: "10px", height:'100px', display:'flex', alignItems:'center' }}>
           {item.name}
        </div>
      )}
    </Card>
  );
};

export default PropertyCard;
