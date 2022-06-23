const CurrencySection = ({ currencyOptions, selectedCurrency, onChangeCurrency, amount, onChangeAmount }) => {
    return (
        <div className="flex justify-center text-gray-700">
            <input className="p-2 w-3/5 outline-purple-600 shadow-md shadow-gray-400" type="number" min="1" value={String(amount)} onChange={onChangeAmount} />
            <select className="ml-2 shadow-md shadow-gray-400 outline-purple-600" value={selectedCurrency} onChange={onChangeCurrency}>
                {currencyOptions.map((option, idx) => (
                    <option key={idx} value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}

export default CurrencySection;