import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';

import Cover from './Cover';
import UpcomingEvents from './UpcomingEvents';
import InfoCard from './InfoCard';
import ContactCard from './ContactCard';

import './front-page.styl'

export default class FrontPage extends React.Component {


  render() {
    // var divStyle = {
    //   color: 'white',
    //   backgroundImage: 'url(' + 'imgUrl' + ')',
    //   WebkitTransition: 'all', // note the capital 'W' here
    //   msTransition: 'all' // 'ms' is the only lowercase vendor prefix
    // }

    return (
      <div className="front-page">

        <Cover
          FB={ this.props.FB }
          openModal={ this.props.openModal }
          closeModal={ this.props.closeModal }
          token={ this.props.token }
        />


        <InfoCard
          FB={ this.props.FB}
          token={ this.props.token}
        />



        <UpcomingEvents
          FB={ this.props.FB }
          openModal={ this.props.openModal }
          closeModal={ this.props.closeModal }
          token={ this.props.token }
        />


        <div className="transparent-block" />

        <ContactCard />

        <div className="transparent-block" />

      </div>
    );
  }
}

          // <div style={divStyle}>inline style test</div>

