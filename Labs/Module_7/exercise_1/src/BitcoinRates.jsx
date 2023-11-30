import { useState, useEffect } from "react";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [exchangeRate, setExchangeRate] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function fetchExchangeRate() {
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`);
        const data = await response.json();
        console.log(data);

        if (ignore == false){
          setExchangeRate(data.bitcoin[currency.toLowerCase()]);
        }
    }

    fetchExchangeRate();

    return () => {
        ignore = true;
        console.log("this never runs");
    };
      
  }, [currency]);

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
