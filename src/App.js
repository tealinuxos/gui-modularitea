import React, {useEffect} from 'react';
import { 
  Row,
  Col,
 } from "reactstrap";
import Hero from './components/Hero';
import Module from './components/Module';
import BgWeb from './assets/img/module-01.png';
import BgMultimedia from './assets/img/module-02.png';
import BgMobile from './assets/img/module-03.png';

const appList = [
  {
    name: 'Web Development',
    url: 'localhost:3333/api/web',
    background: BgWeb,
  },
  {
    name: 'UI Designer',
    url: 'localhost:3333/api/multimedia',
    background: BgMultimedia,
  },
  {
    name: 'Mobile Apps',
    url: 'localhost:3333/api/mobile',
    background: BgMobile,
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
