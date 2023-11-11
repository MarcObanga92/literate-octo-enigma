import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import du style Bootstrap
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './image';
import product from './product';

const firstName = "marc"; // Remplacez par votre prénom

const App = () => {
  return (
    <div>
      <Card style={{ width: '18rem', margin: '20px' }}>
        <Image />
        <Card.Body>
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
      <p>Bonjour, {firstName ? firstName : 'là'} !</p>
    </div>
  );
};

export default App;
