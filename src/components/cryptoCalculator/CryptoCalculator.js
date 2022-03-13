import React from 'react';
import { Form, Row, Container } from 'react-bootstrap';
import { BsCashCoin } from 'react-icons/bs'

export default class CoinsList extends React.Component {
    constructor(props) {
        super(props);
        this.moneyInput = React.createRef();
        this.currencyInput = React.createRef();
        this.coinInput = React.createRef();
        this.convert = this.convert.bind(this);
        this.resultText = React.createRef();
        this.state = {
            error: null,
            isLoaded: false,
            CoinData: [],
            CurrencyData: [],
            result: 1
        }
    }

    convert() {
        const { CoinData, CurrencyData } = this.state;
        let cryptoPrices = CoinData.map(coin => {
            return parseFloat(coin.price_usd)
        });
        let CurrencyArray = Object.values(CurrencyData);
        let currencyPrices = CurrencyArray.map(currency => {
            return parseFloat(currency)
        })
        let CurrencyInput = this.currencyInput.current;
        let MoneyInput = this.moneyInput.current;
        let money = parseFloat(MoneyInput.value.replace(',', '.'))
        let coinPrice = parseFloat(cryptoPrices[this.coinInput.current.value])
        if (!isNaN(money)) {
            this.setState({ result: parseFloat(1 / currencyPrices[CurrencyInput.value] * money / coinPrice).toFixed(6) })
        } else {
            this.setState({ result: '0.00' })
        }
    }


    componentDidMount() {
        fetch("https://api.coinlore.net/api/tickers/?limit=50")
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
        fetch("https://api.exchangerate.host/latest?base=usd&symbols=USD,EUR,PLN,GBP")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        CurrencyData: result.rates
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
        const { error, isLoaded, CoinData, CurrencyData, result } = this.state;
        if (error) {
            return <div>API Error</div>
        } else if (!isLoaded) {
            return <div className='loader'></div>
        } else {
            return (
                <Container>
                    <Row className='m-3 justify-content-center'>
                        <div className="col-md-6 col-sm-6 m-5">
                            <div className="wrapper calculator">
                                <span className="converterHeader">Currency Converter</span>
                                <div className="pricingInfo calculator">
                                    <ul className='m-4 justify-content-center'>
                                        <li>
                                            <div className='timeIcon noselect'>Amount</div>
                                            <Form.Control type="email" onChange={this.convert} ref={this.moneyInput} placeholder="1.00" />
                                        </li>
                                        <hr />
                                        <li>
                                            <div className='timeIcon noselect'>From</div>
                                            <Form.Select ref={this.currencyInput} onChange={this.convert} aria-label="Default select example">
                                                <option value={3}>USD</option>
                                                <option value={0}>EUR</option>
                                                <option value={1}>GBP</option>
                                                <option value={2}>PLN</option>
                                            </Form.Select>
                                        </li>
                                        <hr />
                                        <li>
                                            <div className='timeIcon noselect'>To</div>
                                            <Form.Select ref={this.coinInput} onChange={this.convert} aria-label="Default select example">
                                                {CoinData.map((coin, index) => {
                                                    return (<option key={index}  value={index}>{coin.symbol}</option>)
                                                })}

                                            </Form.Select>
                                        </li>
                                        <hr />
                                        <li><div className='timeIcon'><BsCashCoin size={36} /></div> <span className='percentPrice'>Result:</span></li>
                                        <li className='price' ref={this.resultText}>{result}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
            )
        }
    }
}
