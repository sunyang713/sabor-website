import React from 'react'
import CSSModules from 'react-css-modules'
import { ButtonToolbar, Button } from 'react-bootstrap'
import styles from 'assets/styles/blurb.styl'


class Blurb extends React.Component {

  handleClick() {
    return () => this.props.push('/about')
  }

  render() {

    return (
      <div className="section">
        <div className="container">
          <h3 className="section-heading">
            { "Columbia's Hottest Performers" }
          </h3>
          <p className="section-description">
            { "Sabor is Columbia University's First Latino Dance Troupe. Established in 2003, Sabor performs salsa, bachata, merengue, and many other styles of dance." }
          </p>

          <div className="center-block">
            <ButtonToolbar styleName="center-buttons">
              <Button bsStyle="primary" href="https://www.facebook.com/cusabor">{ 'Follow us' }</Button>
              <Button onClick={ this.handleClick() }>{ 'Learn more' }</Button>
            </ButtonToolbar>
          </div>

        </div>
      </div>
    )
  }
}

export default CSSModules(Blurb, styles)

// TODO either pull text, or put in config in assets.