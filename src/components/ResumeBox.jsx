import BackDetailsContainer from "./BackDetailsContainer";

/* eslint-disable react/prop-types */
function ResumeBox({ personalDetails, degreeDetailsArr, practicleDetailsArr }) {
  return (
    <>
      <div className="resumeBox">
        <div className="personalDetBox">
          <h2 className="nameBox">{personalDetails.inputName}</h2>
          <div className="personalDeta">
            <p className="personPara">
              <span className="personIcon">
                <i className="fa-solid fa-envelope"></i>
              </span>
              {personalDetails.inputEmail}
            </p>
            <p className="personPara">
              <span className="personIcon">
                <i className="fa-solid fa-phone"></i>
              </span>
              {personalDetails.inputPhone}
            </p>
            <p className="personPara">
              <span className="personIcon">
                <i className="fa-solid fa-location-dot"></i>
              </span>
              {personalDetails.inputAddre}
            </p>
          </div>
        </div>
        <div className="background-details-container">
          <BackDetailsCon
            degreeDetailsArr={degreeDetailsArr}
            backTitle="Education"
            isPracticle={false}
          />
          <BackDetailsCon
            degreeDetailsArr={practicleDetailsArr}
            backTitle="Experience"
            isPracticle={true}
          />
        </div>
      </div>
    </>
  );
}

const BackDetailsCon = function ({ backTitle, degreeDetailsArr, isPracticle }) {
  return degreeDetailsArr.length !== 0 ? (
    <div className="background-details">
      <div className="background-details-title">
        <h2 className="background-heading">{backTitle}</h2>
      </div>
      {degreeDetailsArr.map((obj, index) => (
        <BackDetailsContainer
          key={index}
          degreeDetails={obj}
          isPracticle={isPracticle}
        />
      ))}
    </div>
  ) : null;
};

export default ResumeBox;
