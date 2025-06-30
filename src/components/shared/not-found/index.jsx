import React from 'react';
import { NotFoundWrapper, NotFoundText } from './style';

const DataNotFound = ({ message = "Data Not Found" }) => {
  return (
    <NotFoundWrapper>
      <NotFoundText>{message}</NotFoundText>
    </NotFoundWrapper>
  );
};

export default DataNotFound;
