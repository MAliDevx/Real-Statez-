import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import house from "../../../assets/Images/house-placeholder.jpg";
import {
  Card,
  CardBodyTop,
  CardBodyBottom,
  CardImg,
} from "../../../styles/CommanClasses";
import { FaLocationDot } from "react-icons/fa6";
import {
  FaBath,
  FaBed,
  FaInbox,
  FaMap,
  FaRegHeart,
  FaHeart,
  FaTrashAlt,
   
} from "react-icons/fa";
import { useUserContext } from "../../../context/UserContext";
import API from "../../../api/axios";

const PropertyCard = ({ item, isError, isFavoritePage,fetchProperties }) => {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);
  const { addFevorite, deleteFavorite } = useUserContext();
  const [isLoading, setIsLoading] = useState(false);

  const handleFavoriteClick = async (e) => {
    e.stopPropagation();

    if (isLoading) return;
    setIsLoading(true);

    try {
      if (isFavorite || item.isFavorite) {
        await deleteFavorite(item._id);

        setIsFavorite(false);
      } else {
        await addFevorite({ propertyId: item._id });
        setIsFavorite(true);
      }
    } catch (error) {
      console.error("Error updating favorite:", error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleDeleteFavorite = async (e) => {
    e.stopPropagation();
    try {
      const res = await deleteFavorite(item._id);
      fetchProperties()
    } catch (err) {}
  };
  const image = `${API.defaults.baseURL}${item?.images?.[0]}`;


  return (
    <Card onClick={() => navigate(`/propertydetails/${item._id}`)}>
      {!isError && <button className="property-feature">{item?.status}</button>}
      {!isError && <button className="isForSale">{item?.purpose}</button>}

      <div style={{ height: "300px" }}>
        {!isError && <CardImg src={image} alt={item?.propertyType} />}
        {isError && <CardImg src={house} />}
      </div>

      {!isError && (
        <CardBodyTop>
          <button className="isHouse">{item?.propertyType}</button>
          <div className="add-fevorite">
            <h4 className="property-name">{item?.name}</h4>
            {!isFavoritePage && (
              <span onClick={handleFavoriteClick}>
                {isFavorite || item.isFavorite ? (
                  <FaHeart
                    style={{
                      color: "red",
                      cursor: "pointer",
                      fontSize: "25px",
                    }}
                  />
                ) : (
                  <FaRegHeart
                    style={{
                      color: "gray",
                      cursor: "pointer",
                      fontSize: "25px",
                    }}
                  />
                )}
              </span>
            )}
            {isFavoritePage && (
              <span onClick={handleDeleteFavorite}>
                <FaTrashAlt
                  style={{ color: "gray", cursor: "pointer", fontSize: "20px" }}
                />
              </span>
            )}
          </div>
          <div className="property-location">
            <FaLocationDot /> <span  className="truncate-text">{item?.fullAddress}</span>
          </div>
        </CardBodyTop>
      )}

      {!isError && (
        <CardBodyBottom>
          <div className="bath-box">
            <div>Baths</div>
            <div className="bottom-box">
              <FaBath /> {item?.bathrooms}
            </div>
          </div>
          <div className="beds-box">
            <div>Beds</div>
            <div className="bottom-box">
              <FaBed /> {item?.bedrooms}
            </div>
          </div>
          <div className="room-box">
            <div>Rooms</div>
            <div className="bottom-box">
              <FaInbox /> {item?.rooms}
            </div>
          </div>
          <div className="area-box">
            <div>Area</div>
            <div className="bottom-box">
              <FaMap /> {item?.area}
            </div>
          </div>
        </CardBodyBottom>
      )}

      {!isError && (
        <div className="property-profile">
          <div className="property-profile__info">
            <figure>
              <img
                src={item?.agencyImage}
                alt="Owner"
                className="property-profile__image"
              />
            </figure>
            <p className="property-profile__name">{item?.agencyName}</p>
          </div>
          <div className="property-profile__price">{item?.price}.00</div>
        </div>
      )}

      {isError && (
        <div
          className="fallback-message"
          style={{
            textAlign: "center",
            color: "gray",
            marginTop: "10px",
            height: "100px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {item.name}
        </div>
      )}
    </Card>
  );
};

export default PropertyCard;
