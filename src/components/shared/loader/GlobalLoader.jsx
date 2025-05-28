import React from "react";
import { Triangle } from "react-loader-spinner";
import { useLoading } from "../../../context/loadingContext";

const GlobalLoader = () => {
  const { loading } = useLoading();

  if (!loading) return null;

  return (
    <div className="global-loader-overlay">
      <Triangle
        height="90"
        width="90"
        color="var(--primary-button"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default GlobalLoader;
