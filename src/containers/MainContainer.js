import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state = {
    stocks: [],
    boughtStocks: [],
    filterTerm: 'All'
  }
componentDidMount(){
  fetch('http://localhost:3000/stocks')
  .then(res => res.json())
  .then(stockArr => this.setState({stocks: stockArr}))
}

buyStock = (stock) => {
  if(this.state.boughtStocks.includes(stock)){
    return this.state.stocks
  }
  else{
   this.setState({boughtStocks: [...this.state.boughtStocks, stock]})
  }
}

dropStock = (stock) => {
  let rem = this.state.boughtStocks.filter(s => s !== stock)
  this.setState({boughtStocks: rem})
}

sortStocksAlph = () => {
  let sortt = this.state.stocks.sort((a, b) => (a.name > b.name) ? 1 : -1)
  this.setState({stocks: sortt})
  let sort = this.state.boughtStocks.sort((a, b) => (a.name > b.name) ? 1 : -1)
  this.setState({boughtStocks: sort})
}

sortStocksNum = () => {
  let sortt = this.state.stocks.sort((a, b) => (a.price > b.price) ? 1 : -1)
  this.setState({stocks: sortt})
  let sort = this.state.boughtStocks.sort((a, b) => (a.price > b.price) ? 1 : -1)
  this.setState({boughtStocks: sort})
}

changeFilter = (e) => {
  this.setState({filterTerm: e.target.value})
}

filterStocks = () => {
  if(this.state.filterTerm === 'All'){
    return this.state.stocks
  }
  else{
return this.state.stocks.filter(stock => stock.type === this.state.filterTerm)
  }
}

  render() {
    return (
      <div>
        <SearchBar
        sortStocksAlph={this.sortStocksAlph}
        sortStocksNum={this.sortStocksNum}
        changeFilter={this.changeFilter}
        />

          <div className="row">
            <div className="col-8">

              <StockContainer
              stocks={this.filterStocks()}
              buyStock={this.buyStock}
              />

            </div>
            <div className="col-4">

              <PortfolioContainer
              buyStock={this.dropStock}
              boughtStocks={this.state.boughtStocks}
              />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;

