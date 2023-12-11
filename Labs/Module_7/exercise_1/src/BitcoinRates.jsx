import { useState } from "react";
import { useFetchExchangeRate } from "./hooks/useFetchExchangeRate";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const exchangeRate = useFetchExchangeRate(currency);
 
  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));
  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      <div>
        <p>BTC Exchange Rate: <b>{currency} {exchangeRate}</b></p>
      </div>
    </div>
  );
}

export default BitcoinRates
