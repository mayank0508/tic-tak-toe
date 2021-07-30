import React from 'react';

import { Button } from './Sqaure.styles';

const Sqaure = ({ value, onClick }) => {
  return (
    <Button type="button" onClick={onClick}>
      {value}
    </Button>
    
  );
};

export default Sqaure;
