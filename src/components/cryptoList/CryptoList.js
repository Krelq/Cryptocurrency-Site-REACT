import React from 'react';
import { Row, Container } from 'react-bootstrap';
import Coin from '../../components/coin/Coin'

export default class CoinsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            CoinData: []
        }
    }

    componentDidMount() {
        fetch("https://api.coinlore.net/api/tickers/?limit=4")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        CoinData: result.data
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    render() {
        const { error, isLoaded, CoinData } = this.state;
        if (error) {
            return <div>Błąd wczytywania API</div>
        } else if (!isLoaded) {
            return <div className='loader'></div>
        } else {
            return (
                <Container>
                <Row className='m-3 justify-content-center'>
                    <Coin name={CoinData[1].name} nameid={CoinData[1].nameid} price={CoinData[1].price_usd} pricebtc={CoinData[1].price_btc} price1h={CoinData[1].percent_change_1h} price24h={CoinData[1].percent_change_24h} price7d={CoinData[1].percent_change_7d}></Coin>
                    <Coin name={CoinData[0].name} nameid={CoinData[0].nameid} price={CoinData[0].price_usd} pricebtc={CoinData[0].price_btc} price1h={CoinData[0].percent_change_1h} price24h={CoinData[0].percent_change_24h} price7d={CoinData[0].percent_change_7d}></Coin>
                    <Coin name={CoinData[3].name} nameid={CoinData[3].nameid} price={CoinData[3].price_usd} pricebtc={CoinData[3].price_btc} price1h={CoinData[3].percent_change_1h} price24h={CoinData[3].percent_change_24h} price7d={CoinData[3].percent_change_7d}></Coin>
                </Row>
                </Container>
            )
        }
    }
}
