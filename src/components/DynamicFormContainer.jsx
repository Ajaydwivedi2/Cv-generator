import { useState } from "react";

/* eslint-disable react/prop-types */
function DynamicFormContainer({
  degreeDetailsArr,
  index,
  handleInputChange,
  onDeleteComponent,
  isPracticle,
  objectField,
}) {
  const [isTabOpen, setIsTabOpen] = useState(false);

  return (
    <>
      <div className="dynamic-Form-Container">
        <div className="dynamic-Form-TitleBox">
          <h2 className="dynamic-Form-Title">
            {isPracticle
              ? degreeDetailsArr[index].companyName
              : degreeDetailsArr[index].school}
          </h2>
          <span
            className="dynamic-Form-tab-icon"
            onClick={() => setIsTabOpen((pre) => !pre)}
          >
            <i
              className={`fa-solid ${
                !isTabOpen ? "fa-angle-down" : "fa-angle-up"
              }`}
            ></i>
          </span>
        </div>
        <div className={`dynamic-form ${!isTabOpen ? "tab-hidden" : ""}`}>
          <div className="inputBox">
            <label className="formLabel">
              {isPracticle ? "Company Name" : "School"}
            </label>
            <input
              type="text"
              className="formInput"
              placeholder={isPracticle ? "Company Name" : "School"}
              onChange={(e) =>
                handleInputChange(index, objectField[0], e.target.value)
              }
              value={degreeDetailsArr[index][objectField[0]]}
            ></input>
          </div>
          <div className="inputBox">
            <label className="formLabel">
              {isPracticle ? "Position Title" : "Degree"}
            </label>
            <input
              type="text"
              className="formInput"
              placeholder={objectField[1]}
              onChange={(e) =>
                handleInputChange(index, objectField[1], e.target.value)
              }
              value={degreeDetailsArr[index][objectField[1]]}
            ></input>
          </div>
          <div className="date-box-container">
            <div className="date-box">
              <div className="inputBox">
                <label className="formLabel">Start Date</label>
                <input
                  type="text"
                  className="formInput"
                  placeholder={objectField[2]}
                  onChange={(e) =>
                    handleInputChange(index, objectField[2], e.target.value)
                  }
                  value={degreeDetailsArr[index][objectField[2]]}
                ></input>
              </div>
            </div>
            <div className="date-box">
              <div className="inputBox">
                <label className="formLabel">End Date</label>
                <input
                  type="text"
                  className="formInput"
                  placeholder={objectField[3]}
                  onChange={(e) =>
                    handleInputChange(index, objectField[3], e.target.value)
                  }
                  value={degreeDetailsArr[index][objectField[3]]}
                ></input>
              </div>
            </div>
          </div>
          <div className="inputBox">
            <label className="formLabel">Location</label>
            <input
              type="text"
              className="formInput"
              placeholder="location"
              onChange={(e) =>
                handleInputChange(index, "location", e.target.value)
              }
              value={degreeDetailsArr[index].location}
            ></input>
          </div>
          {isPracticle ? (
            <div className="inputBox">
              <label className="formLabel">Description</label>
              <textarea
                className="formInput"
                placeholder="description..."
                onChange={(e) =>
                  handleInputChange(index, "description", e.target.value)
                }
                value={degreeDetailsArr[index].description}
              ></textarea>
            </div>
          ) : (
            ""
          )}
          <div className="action-container">
            <div className="action-box">
              <button
                className="btn btn-danger"
                onClick={() => onDeleteComponent(index)}
              >
                <span className="btn-icon">
                  <i className="fa-solid fa-trash"></i>
                </span>
                Delete
              </button>
            </div>
            <div className="action-box">
              <button
                className="btn"
                onClick={() => setIsTabOpen((pre) => !pre)}
              >
                Cancel
              </button>
              <button
                className="btn btn-safe"
                onClick={() => setIsTabOpen((pre) => !pre)}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DynamicFormContainer;
