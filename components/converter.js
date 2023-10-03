import React, { Component } from 'react';

// import '../assets/css/converter.css';
import AHeader from './afterloginheader';
import '../assets/css/order.css'

class Converter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fromCurrency: 'USD',
            toCurrency: 'INR',
            exchangeRate: 0,
            inputAmount: 1,
            outputAmount: 0,
        };
    }

    componentDidMount() {
        this.calculate();
    }

    handleExchangeClick = () => {
        const { fromCurrency, toCurrency } = this.state;
        this.setState(
            {
                fromCurrency: toCurrency,
                toCurrency: fromCurrency,
            },
            this.calculate
        );
    };

    handleAmountChange = (event) => {
        this.setState(
            {
                inputAmount: event.target.value,
            },
            this.calculate
        );
    };

    calculate = () => {
        const { fromCurrency, toCurrency, inputAmount } = this.state;

        fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
            .then((res) => res.json())
            .then((res) => {
                const rate = res.rates[toCurrency];
                const toAmount = (inputAmount * rate).toFixed(3);
                this.setState({
                    exchangeRate: rate,
                    outputAmount: toAmount,
                });
            });
    };

    render() {
        const {
            fromCurrency,
            toCurrency,
            inputAmount,
            exchangeRate,
            outputAmount,
        } = this.state;

        return (
            <div><AHeader />
                <div className="coreceiver_information"style={{marginTop:'100px'}}>
                    <div className="coreceiver_info">
                        <h3 className="ccboxhead">Send Money Online</h3>
                        <hr />

                        <div className="ccconverter">
                            <select
                                id="from_currency"
                                value={fromCurrency}
                                onChange={(e) => this.setState({ fromCurrency: e.target.value }, this.calculate)}
                            >
                                {/* Options for currency selection */}
                                <option value="AED">AED</option>
                                <option value="ARS">ARS</option>
                                <option value="AUD">AUD</option>
                                <option value="BGN">BGN</option>
                                <option value="BRL">BRL</option>
                                <option value="BSD">BSD</option>
                                <option value="CAD">CAD</option>
                                <option value="CHF">CHF</option>
                                <option value="CLP">CLP</option>
                                <option value="CNY">CNY</option>
                                <option value="COP">COP</option>
                                <option value="CZK">CZK</option>
                                <option value="DKK">DKK</option>
                                <option value="DOP">DOP</option>
                                <option value="EGP">EGP</option>
                                <option value="EUR">EUR</option>
                                <option value="FJD">FJD</option>
                                <option value="GBP">GBP</option>
                                <option value="GTQ">GTQ</option>
                                <option value="HKD">HKD</option>
                                <option value="HRK">HRK</option>
                                <option value="HUF">HUF</option>
                                <option value="IDR">IDR</option>
                                <option value="ILS">ILS</option>
                                <option value="INR">INR</option>
                                <option value="ISK">ISK</option>
                                <option value="JPY">JPY</option>
                                <option value="KRW">KRW</option>
                                <option value="KZT">KZT</option>
                                <option value="MXN">MXN</option>
                                <option value="MYR">MYR</option>
                                <option value="NOK">NOK</option>
                                <option value="NZD">NZD</option>
                                <option value="PAB">PAB</option>
                                <option value="PEN">PEN</option>
                                <option value="PHP">PHP</option>
                                <option value="PKR">PKR</option>
                                <option value="PLN">PLN</option>
                                <option value="PYG">PYG</option>
                                <option value="RON">RON</option>
                                <option value="RUB">RUB</option>
                                <option value="SAR">SAR</option>
                                <option value="SEK">SEK</option>
                                <option value="SGD">SGD</option>
                                <option value="THB">THB</option>
                                <option value="TRY">TRY</option>
                                <option value="TWD">TWD</option>
                                <option value="UAH">UAH</option>
                                <option value="USD" selected>USD</option>
                                <option value="UYU">UYU</option>
                                <option value="VND">VND</option>
                                <option value="ZAR">ZAR</option>
                            </select>
                            <button id="exchange" onClick={this.handleExchangeClick}>
                                <i className="fas fa-exchange-alt"></i>
                            </button>
                            <select
                                id="to_currency"
                                value={toCurrency}
                                onChange={(e) => this.setState({ toCurrency: e.target.value }, this.calculate)}
                            >
                                <option value="AED">AED</option>
                                <option value="ARS">ARS</option>
                                <option value="AUD">AUD</option>
                                <option value="BGN">BGN</option>
                                <option value="BRL">BRL</option>
                                <option value="BSD">BSD</option>
                                <option value="CAD">CAD</option>
                                <option value="CHF">CHF</option>
                                <option value="CLP">CLP</option>
                                <option value="CNY">CNY</option>
                                <option value="COP">COP</option>
                                <option value="CZK">CZK</option>
                                <option value="DKK">DKK</option>
                                <option value="DOP">DOP</option>
                                <option value="EGP">EGP</option>
                                <option value="EUR">EUR</option>
                                <option value="FJD">FJD</option>
                                <option value="GBP">GBP</option>
                                <option value="GTQ">GTQ</option>
                                <option value="HKD">HKD</option>
                                <option value="HRK">HRK</option>
                                <option value="HUF">HUF</option>
                                <option value="IDR">IDR</option>
                                <option value="ILS">ILS</option>
                                <option value="INR">INR</option>
                                <option value="ISK">ISK</option>
                                <option value="JPY">JPY</option>
                                <option value="KRW">KRW</option>
                                <option value="KZT">KZT</option>
                                <option value="MXN">MXN</option>
                                <option value="MYR">MYR</option>
                                <option value="NOK">NOK</option>
                                <option value="NZD">NZD</option>
                                <option value="PAB">PAB</option>
                                <option value="PEN">PEN</option>
                                <option value="PHP">PHP</option>
                                <option value="PKR">PKR</option>
                                <option value="PLN">PLN</option>
                                <option value="PYG">PYG</option>
                                <option value="RON">RON</option>
                                <option value="RUB">RUB</option>
                                <option value="SAR">SAR</option>
                                <option value="SEK">SEK</option>
                                <option value="SGD">SGD</option>
                                <option value="THB">THB</option>
                                <option value="TRY">TRY</option>
                                <option value="TWD">TWD</option>
                                <option value="UAH">UAH</option>
                                <option value="USD" selected>USD</option>
                                <option value="UYU">UYU</option>
                                <option value="VND">VND</option>
                                <option value="ZAR">ZAR</option>

                            </select>
                        </div>
                        <br />

                        <div className="ccamount">
                            <p className="ccconvert">
                                Send Amount:
                                <input
                                    type="number"
                                    id="original-currency-amount"
                                    placeholder="0"
                                    value={inputAmount}
                                    onChange={this.handleAmountChange}
                                />
                            </p>
                            <p className="ccexchange">
                                Receive Amount:
                                <input type="text" id="exchange-rate" value={exchangeRate} readOnly />
                            </p>
                        </div>

                        <button id="exchange_button" onClick={this.calculate}>
                            Exchange my money now!
                        </button>

                        <p id="output-text">
                            <span id="from">{inputAmount} {fromCurrency}</span> converted to <span id="to">{outputAmount} {toCurrency}</span>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Converter;
