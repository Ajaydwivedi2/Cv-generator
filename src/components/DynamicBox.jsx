import DynamicFormContainer from "./DynamicFormContainer";
import { rawData } from "../rawData";

/* eslint-disable react/prop-types */
function DynamicBox({
  degreeDetailsArr,
  setDegreeDetailsArr,
  boxTitle,
  isPracticle,
  boxIcon,
  objectField,
}) {
  const addComponent = function () {
    const newInitialInputDeg = rawData.newDegree;
    const newInitialInputPrac = rawData.newPrac;

    const newInitialInput = isPracticle
      ? newInitialInputPrac
      : newInitialInputDeg;
    const newInitialInputs = [...degreeDetailsArr, newInitialInput];
    setDegreeDetailsArr(newInitialInputs);
  };

  function deleteComponent(index) {
    setDegreeDetailsArr((pre) => {
      return pre.filter((obj, i) => i !== index);
    });
  }

  const handleInputChange = (index, field, value) => {
    setDegreeDetailsArr((prevDetArr) => {
      const newArr = [...prevDetArr];
      newArr[index] = {
        ...newArr[index],
        [field]: value,
      };
      return newArr;
    });
  };

  return (
    <>
      <div className="dynamicBox">
        <div className="boxTitle">
          <span className="boxIcon">
            <i className={`fa-solid fa-${boxIcon}`}></i>
          </span>
          <h2 className="boxHeading">{boxTitle}</h2>
        </div>
        {degreeDetailsArr.map((obj, index) => {
          return (
            <DynamicFormContainer
              degreeDetailsArr={degreeDetailsArr}
              key={index}
              index={index}
              handleInputChange={handleInputChange}
              onDeleteComponent={deleteComponent}
              isPracticle={isPracticle}
              objectField={objectField}
            />
          );
        })}
        <div className="add-more-container">
          <div className="add-more-box" onClick={addComponent}>
            <span className="add-more-icon">
              <i className="fa-solid fa-plus"></i>
            </span>
            <h2 className="add-more-title">
              {isPracticle ? "Experience" : "Education"}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default DynamicBox;
