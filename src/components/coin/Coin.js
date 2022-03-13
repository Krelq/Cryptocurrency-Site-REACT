import React from 'react';
import { RiTimeLine, RiTimer2Line } from 'react-icons/ri';
import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai'
import { FaBitcoin } from 'react-icons/fa'

export default class Coin extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            
            <div className="col-md-3 col-sm-6 m-3 coin">
                <div className="wrapper wrapperhover">
                    <div className="cryptoInfo">
                        <div><img className='noselect' src={require(`../coin/${this.props.name}.webp`)} width='128' /><span className="month noselect">{this.props.name}</span></div>
                    </div>
                    <h3 className="price">${this.props.price}</h3>
                    <div className="pricingInfo">
                        <ul>
                            <li>
                                <div className='timeIcon noselect'>1h<RiTimeLine size={28} /></div>
                                <span className='percentPrice' style={{ color: this.props.price1h > 0.00 ? '#00e640' : '#ff4c30' }}>{this.props.price1h}%</span>
                                {this.props.price1h > 0.00 ? <AiFillCaretUp /> : <AiFillCaretDown />}
                            </li>
                            <hr />
                            <li>
                                <div className='timeIcon noselect'>24h<RiTimer2Line size={28} /></div>
                                <span className='percentPrice' style={{ color: this.props.price24h > 0.00 ? '#00e640' : '#ff4c30' }}>{this.props.price24h}%</span>
                                {this.props.price24h > 0.00 ? <AiFillCaretUp /> : <AiFillCaretDown />}
                            </li>
                            <hr />
                            <li>
                                <div className='timeIcon noselect'>7d<RiTimeLine size={28} /></div>
                                <span className='percentPrice' style={{ color: this.props.price7d > 0.00 ? '#00e640' : '#ff4c30' }}>{this.props.price7d}%</span>
                                {this.props.price7d > 0.00 ? <AiFillCaretUp /> : <AiFillCaretDown />}
                            </li>
                            <hr />
                            <li><div className='timeIcon'><FaBitcoin size={28} /></div> <span className='percentPrice'>{this.props.pricebtc}</span></li>
                            <li>Price in Bitcoin</li>
                        </ul>
                    </div>
                    <div className="button">
                        <a className='noselect' href={'https://www.coinbase.com/price/' + this.props.nameid}>Buy</a>
                    </div>
                </div>
            </div>
        )
    }
}

