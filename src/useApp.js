import { useEffect, useState } from 'react';
import axios from 'axios';

const BASE_URL = "https://api.apilayer.com/exchangerates_data/latest";

const useApp = () => {
    const [currencyOptions, setCurrencyOptions] = useState([]);
    const [fromCurrency, setFromCurrency] = useState();
    const [toCurrency, setToCurrency] = useState();
    const [exchangeRate, setExchangeRate] = useState();
    const [amount, setAmount] = useState(1);
    const [isAmountFromCurrency, setIsAmountFromCurrency] = useState(true);
    const [loading, setLoading] = useState(true);

    let toAmount, fromAmount;

    if (isAmountFromCurrency) {
        fromAmount = amount;
        toAmount = amount * exchangeRate;
    } else {
        toAmount = amount;
        fromAmount = amount / exchangeRate;
    }

    useEffect(() => {
        setLoading(true);
        axios.get(BASE_URL, {
            headers: {
                "apikey": process.env.REACT_APP_API_KEY,
            },
        })
            .then(res => {
                const firstCurrency = Object.keys(res.data.rates)[0];
                setCurrencyOptions([res.data.base, ...Object.keys(res.data.rates)]);
                setFromCurrency(res.data.base);
                setToCurrency(firstCurrency);
                setExchangeRate(res.data.rates[firstCurrency]);
                setLoading(false);
            })
    }, []);

    useEffect(() => {
        if (fromCurrency !== undefined && toCurrency !== undefined) {
            axios.get(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`, {
                headers: {
                    "apikey": process.env.REACT_APP_API_KEY,
                },
            })
                .then(res => {
                    setExchangeRate(res.data.rates[toCurrency]);
                })
        }
    }, [fromCurrency, toCurrency]);

    const handleFromAmountChange = e => {
        setAmount(e.target.value);
        setIsAmountFromCurrency(true);
    }
    const handleToAmountChange = e => {
        setAmount(e.target.value);
        setIsAmountFromCurrency(false);
    }

    return {
        currencyOptions,
        fromCurrency,
        toCurrency,
        setFromCurrency,
        setToCurrency,
        toAmount,
        fromAmount,
        handleFromAmountChange,
        handleToAmountChange,
        loading,
    };
}

export default useApp