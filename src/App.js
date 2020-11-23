import React from 'react';
import { Row, Col } from 'reactstrap';
import SearchBar from './components/Search';
import DayCard from './components/DayCard';
import { Wrapper } from './styles';

const App = () => {
  return (
    <Wrapper>
      <Row>
        <Col> <SearchBar /></Col>
      </Row>
      <Row>
        <Col> </Col>
      </Row>
        <DayCard /> 
    </Wrapper>


  );
}

export default App;
