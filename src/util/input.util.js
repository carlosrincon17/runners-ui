import MaskedInput from "react-text-mask";

const renderFormInput = (name, label, handleInputChange, options = {}) => {
    let classInput = options.size == 'full'? 'w-full' : "w-1/2 md:w-full";
    const margins = 'px-3 pb-3';
    const defaultClasses = "bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500"
    const id = `form-input${name}`;
    let input = (
        <input type={options.type || 'text'} id={id} name={name}
            className={`${defaultClasses} ${margins}`}
            pattern={options.pattern || null}
            onChange={handleInputChange} /
        >);
    if (options.mask) {
        input = (
            <MaskedInput type={options.type || 'text'} id={id} name={name}
                className={`${defaultClasses} ${margins}`}
                mask={options.mask}
                guide={true}
                onChange={handleInputChange} /
            >);
    }
    return (
        <div className={`${classInput} px-4`}>
            <div className="mb-6 pt-3 rounded bg-gray-200">
                <label htmlFor={id} className="block text-gray-700 text-sm font-bold mb-2 ml-3">{label}</label>
                {input}
            </div>
        </div>
    );
}

export {renderFormInput};