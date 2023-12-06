/* eslint-disable react/prop-types */
function BackDetailsContainer({ degreeDetails, isPracticle }) {
  return (
    <div className="background-details-box">
      <div className="background-details-box-1">
        <div className="background-details-date-box">
          <p className="background-details-para">{degreeDetails.startDate}</p>
          <span className="date-divider">-</span>
          <p className="background-details-para">{degreeDetails.endDate}</p>
        </div>
        <p className="background-details-para">{degreeDetails.location}</p>
      </div>
      <div className="background-details-box-2">
        <h3 className="organization-title">
          {isPracticle ? degreeDetails.companyName : degreeDetails.school}
        </h3>
        <p className="background-details-para">
          {isPracticle ? degreeDetails.positionTitle : degreeDetails.degree}
        </p>
        {isPracticle ? (
          <p className="background-details-para descriptionPara">
            {degreeDetails.description}
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default BackDetailsContainer;
