import React from 'react';
import ItemDetails from '../item-details/';
import { withSwapiService } from '../hoc-helpers';


const PersonDetails = (props) => {
  return (
    <ItemDetails {...props} />
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage
  }
};

export default withSwapiService(mapMethodsToProps)(PersonDetails);
