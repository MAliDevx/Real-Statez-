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
import { useUserContext } from "../../../Context/UserContext";
import API from "../../../api/axios";

const PropertyCard = ({ item, isError, isFavoritePage,fetchProperties }) => {
  const navigate = useNavigate();
  const { addFevorite, deleteFavorite } = useUserContext();

  const [isFavorite, setIsFavorite] = useState(item.isFavorite);
  const [isLoading, setIsLoading] = useState(false);

  const toggleFavorite = async (e) => {
    e.stopPropagation();
    if (isLoading) return;
    setIsLoading(true);
    setIsFavorite((prev) => !prev);

    try {
      if (isFavorite) {
        await deleteFavorite(item._id);
      } else {
        await addFevorite({ propertyId: item._id });
      }
      fetchProperties?.();
    } catch (err) {
      setIsFavorite((prev) => !prev);
    } finally {
      setIsLoading(false);
    }
  };
  const removeFromFavoritePage = async (e) => {
    e.stopPropagation();
    try {
      await deleteFavorite(item._id);
      fetchProperties?.(); 
    } catch {}
  };
  const image = `${API.defaults.baseURL}/public/${item?.images?.[0]}`;

  /* ────────── Render ────────── */
  return (
    <Card onClick={() => navigate(`/propertydetails/${item._id}`)}>
      {!isError && (
        <>
          <button className={`property-feature ${item.status?.toLowerCase()}`}>
            {item.status}
          </button>
          <button className="isForSale">{item.purpose}</button>
        </>
      )}

      {/* Image */}
      <div style={{ height: "300px" }}>
        {!isError && <CardImg src={image} alt={item?.propertyType} />}
        {isError && <CardImg src={house} />}
      </div>

      {/* Top section */}
      {!isError && (
        <CardBodyTop>
          <div className="property-type-container">
            <button className="isHouse">{item.propertyType}</button>

            {/* Heart / Trash icon */}
            {!isFavoritePage ? (
              <span>
                {isFavorite ? (
                  <FaHeart
                    onClick={toggleFavorite}
                    style={{ color: "red", cursor: "pointer", fontSize: 25 }}
                  />
                ) : (
                  <FaRegHeart
                    onClick={toggleFavorite}
                    style={{ color: "gray", cursor: "pointer", fontSize: 25 }}
                  />
                )}
              </span>
            ) : (
              <span onClick={removeFromFavoritePage}>
                <FaTrashAlt
                  style={{ color: "gray", cursor: "pointer", fontSize: 20 }}
                />
              </span>
            )}
          </div>

          <h4 className="property-name">{item.name}</h4>

          <div className="property-location">
            <FaLocationDot />
            <span className="truncate-text">{item?.fullAddress}</span>
          </div>
        </CardBodyTop>
      )}

      {/* Stats */}
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

      {/* Agency profile */}
      {!isError && (
        <div className="property-profile">
          <div className="property-profile__info">
            <figure>
              <img
                src={`${API.defaults.baseURL}/public/${item.agencyImage}`}
                alt="Owner"
                className="property-profile__image"
              />
            </figure>
            <p className="property-profile__name">{item?.agencyName}</p>
          </div>
          <div className="property-profile__price">{item?.price}.00</div>
        </div>
      )}

      {/* Fallback */}
      {isError && (
        <div
          className="fallback-message"
          style={{
            textAlign: "center",
            color: "gray",
            marginTop: 10,
            height: 100,
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
