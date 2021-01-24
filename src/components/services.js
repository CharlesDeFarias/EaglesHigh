import React from 'react';
import ServiceBox from './serviceBox';
import {serviceList} from "../data/serviceList";
//todo: turn this into a scrolling carousel that has a card for each service
//todo: add a main list that contains all services
//todo: add img carousel for each service

class Services extends React.Component {
  render() {
    return (
      <div id="wrapper3">
        <div id="portfolio" className="container">
          <div className="title">
            <h2>Our Services</h2>
            <span className="byline">Not sure we provide the service you're looking for? We probably do. Check our main list, or scroll through to see more information about each of the services we provide</span>
          </div>
          <div>
            {serviceList.map((service, index) => (
              <ServiceBox
                className={`column${index + 1}`}
                Title={service.title}
                Description={service.description}
                imgUrl={service.imgUrl}
                imgSrc={service.imgSrc}
                imgAlt={service.imgAlt}
                btnUrl={service.btnUrl}
                btnText={service.btnText}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Services;