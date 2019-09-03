import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.props.boughtStocks.map(bs => {
              return <Stock stock={bs} key={bs.id} buyStock={this.props.buyStock} />
            })
          }
      </div>
    );
  }

}

export default PortfolioContainer;
