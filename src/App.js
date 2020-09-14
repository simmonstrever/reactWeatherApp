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
        <Col> <h3> Test </h3></Col>
      </Row>
      <Row>
        <DayCard />

      </Row>
      <Row>

      </Row>
    </Wrapper>


  );
}

export default App;
