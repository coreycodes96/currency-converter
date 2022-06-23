import CurrencySection from './components/CurrencySection/CurrencySection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownUpAcrossLine } from '@fortawesome/free-solid-svg-icons';
import useApp from './useApp';
import Spinner from './components/Spinner/Spinner';

const App = () => {
  const {
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
  } = useApp();

  if (loading) {
    return <Spinner />
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-gray-100 select-none">
      <div className="w-3/5 h-auto rounded shadow-md shadow-gray-400">
        <div className="w-full h-20 flex justify-center items-center bg-gradient-to-r from-purple-600 to-purple-700 text-white text-center">
          <h1 className="text-2xl font-semibold">Currency Converter</h1>
        </div>

        <div className="p-5">
          <CurrencySection
            currencyOptions={currencyOptions}
            selectedCurrency={fromCurrency}
            onChangeCurrency={e => setFromCurrency(e.target.value)}
            amount={fromAmount}
            onChangeAmount={handleFromAmountChange}
          />
          <div className="my-5 text-center text-purple-700">
            <FontAwesomeIcon icon={faArrowDownUpAcrossLine} size="lg" />
          </div>
          <CurrencySection
            currencyOptions={currencyOptions}
            selectedCurrency={toCurrency}
            onChangeCurrency={e => setToCurrency(e.target.value)}
            amount={toAmount}
            onChangeAmount={handleToAmountChange}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
