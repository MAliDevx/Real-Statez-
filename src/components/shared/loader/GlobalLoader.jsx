import React from "react";
import { Triangle,ThreeDots } from "react-loader-spinner";
import { useLoading } from "../../../context/loadingContext";

const GlobalLoader = () => {
  const { loading } = useLoading();

  if (!loading) return null;

  return (
    <div className="global-loader-overlay">
      <ThreeDots
  visible={true}
  height="100"
  width="100"
  color="var(--primary-button)"
  radius="9"
  ariaLabel="three-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
      />
    </div>
  );
};

export default GlobalLoader;
