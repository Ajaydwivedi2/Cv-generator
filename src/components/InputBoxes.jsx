/* eslint-disable react/prop-types */
function InputBoxs({
  labelValue,
  type,
  placeholder,
  onChange,
  inputValue,
  valueToUpdate,
}) {
  function handleStateUpdate(value) {
    onChange((pre) => {
      return { ...pre, [valueToUpdate]: value };
    });
  }

  return (
    <>
      <div className="inputBox">
        <label className="formLabel">{labelValue}</label>
        <input
          type={type}
          className="formInput"
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => handleStateUpdate(e.target.value)}
        ></input>
      </div>
    </>
  );
}

export default InputBoxs;
