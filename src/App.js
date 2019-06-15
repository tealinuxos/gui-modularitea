import React, {useEffect} from 'react';
import { 
  Row,
  Col,
 } from "reactstrap";
import Hero from './components/Hero';
import Module from './components/Module';

const appList = [
  {
    name: 'Web Development',
    url: 'localhost:3333/api/web',
    background: '',
  },
  {
    name: 'UI Designer',
    url: 'localhost:3333/api/multimedia',
    background: '',
  },
  {
    name: 'Mobile Apps',
    url: 'localhost:3333/api/mobile',
    background: '',
  },
];


function App() {
  useEffect(() => console.log(appList),[]);
  return (
    <div className="App h-100">
      <div className="d-flex flex-column align-content-stretch" style={{height: '100%'}}>
        <Row className="m-0">
          <Col xl="12" lg="12" md="12" sm="12" className="p-0">
            <Hero />
          </Col>
        </Row>
        <Row className="w-100 m-0 flex-fill">
          <Col xl="12" lg="12" md="12" sm="12" className="p-0">
            <Row className="h-100 m-0">
              {appList.map((datum, key) => {
                return <Module key={key} data={datum} />
              })}
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
