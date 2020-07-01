import React from 'react';
import './LSComponent.css';

interface ContainerProps { }

const LSComponent: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
    <strong>Lusosystems</strong>
    <p>Link to <a target="_blank" rel="noopener noreferrer" href="https://www.createaclickablemap.com/">website</a></p>
  </div>
  );
};

export default LSComponent;
