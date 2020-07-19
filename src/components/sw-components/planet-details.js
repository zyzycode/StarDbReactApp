import React from 'react';
import ItemDetails from '../item-details';
import Record from '../item-details/item-details';
import { withSwapiService } from '../hoc-helpers';

const PlanetDetails = (props) => {
  return (
    <ItemDetails {...props}/>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage
  };
};

export default withSwapiService(mapMethodsToProps)(PlanetDetails);
