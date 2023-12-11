import { useState } from "react";
import { useFetchExchangeRate } from "../hooks/useFetchExchangeRate";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const exchangeRate = useFetchExchangeRate(currency);

  const options = currencies.map((curr) => (
    <MenuItem value={curr} key={curr}>
      {curr}
    </MenuItem>
  ));
  return (
    <div className="BitcoinRates componentBox">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <h3>Bitcoin Exchange Rate</h3>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <Select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                {options}
              </Select>
            </FormControl>
          </Box>
          <div>
            <p>
              BTC Exchange Rate:{" "}
              <b>
                {currency} {exchangeRate}
              </b>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default BitcoinRates;
