import React, { useEffect, useState } from "react";
import { useUserContext } from "../../context/UserContext";
import PropertyCard from "../../components/shared/cards/Cards";
import {
  Wrapper,
  Header,
  CardGrid,
} from "./FavoritePageStyle";
import { CardJSON } from "../../healpers/card-json";
import { Pagination } from "../../styles/CommanClasses";
import DataNotFound from "../../components/shared/not-found";

const FavoritePage = () => {
  const { fetchAllFevorite } = useUserContext();
  const [favorites, setFavorites] = useState([]);
  const [isError, setIsError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const limit = 9;
  const [isFavoritePage, setFavoritePage] = useState(false)

  const totalPages = Math.ceil(totalCount / limit);
    const fetchProperties = async () => {
      try {
        const response = await fetchAllFevorite(currentPage, limit);        
        if (response?.success && response?.data?.data) {
          setFavoritePage(true)
          setFavorites(response.data.data);
          setTotalCount(response.data.pagination.total);
        } else {
          setFavoritePage(false)
          setFavorites([]);
          setTotalCount(0);
        }
        setIsError(false);
      } catch (err) {
        setIsError(true);
        setFavorites([CardJSON, CardJSON, CardJSON]);
        setTotalCount(3); 
      }
    };
  useEffect(() => {
  fetchProperties();
  }, [currentPage,isFavoritePage]);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  return (
    <Wrapper>
      <Header>
        <h1>Your Favorite Properties</h1>
        <p>Explore all properties you've marked as favorite</p>
      </Header>
        {favorites.length === 0 ? (
          <DataNotFound message="No favorite property found" />
        ) : (
      <CardGrid>

          {favorites.map((item) => (
            <PropertyCard
             fetchProperties={fetchProperties}
              key={item._id || item.propertyId?._id || Math.random()}
              item={item.propertyId }
              isError={isError}
              isFavoritePage={isFavoritePage}
            />
          ))}
       
      </CardGrid>
 )}
      {totalPages > 1 && (
        <Pagination>
          <button 
            onClick={handlePrevious} 
            disabled={currentPage === 1}
          >
            ← Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button 
            onClick={handleNext} 
            disabled={currentPage === totalPages}
          >
            Next →
          </button>
        </Pagination>
      )}
    </Wrapper>
  );
};

export default FavoritePage;