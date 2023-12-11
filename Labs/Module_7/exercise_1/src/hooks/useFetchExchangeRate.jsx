import { useState, useEffect, useReducer } from 'react';

const initialExchangeRate = {"ExchangeRate":0};

const exchangeRateReducer = (state, action) => {
  switch (action.type) {
    case "setExchange":
      state = {"ExchangeRate": action.value};
      return state
    default:
      throw new Error();
  }
}

export const useFetchExchangeRate = (currency) => {
  const [state, dispatch] = useReducer(exchangeRateReducer, initialExchangeRate)

  useEffect(() => {
    let ignore = false;

    const fetchExchangeRate = async () => {
      const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`);
      const data = await response.json();

      if (!ignore) {
        dispatch({
          "type" : "setExchange",
          "value" : data.bitcoin[currency.toLowerCase()]
        })
      }
    };

    fetchExchangeRate();

    return () => {
      ignore = true;
    };
  }, [currency]);

  return state.ExchangeRate;
};
