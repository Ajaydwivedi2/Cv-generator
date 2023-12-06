import InputBoxs from "./InputBoxes";
import DynamicBox from "./DynamicBox";

/* eslint-disable react/prop-types */
function RawBox({
  personalDetails,
  setPersonalDetails,
  degreeDetailsArr,
  setDegreeDetailsArr,
  practicleDetailsArr,
  setPracticleDetailsArr,
}) {
  return (
    <>
      <div className="rawBox">
        <FormBox
          title="Personal Details"
          icon={<i className="fa-solid fa-user"></i>}
        >
          <InputBoxs
            labelValue="Full name"
            type="text"
            placeholder="enter your name..."
            onChange={setPersonalDetails}
            inputValue={personalDetails.inputName}
            valueToUpdate="inputName"
          ></InputBoxs>
          <InputBoxs
            labelValue="Email"
            type="email"
            placeholder="enter your email..."
            onChange={setPersonalDetails}
            inputValue={personalDetails.inputEmail}
            valueToUpdate="inputEmail"
          ></InputBoxs>
          <InputBoxs
            labelValue="Phone number"
            type="text"
            placeholder="enter your phone number..."
            onChange={setPersonalDetails}
            inputValue={personalDetails.inputPhone}
            valueToUpdate="inputPhone"
          ></InputBoxs>
          <InputBoxs
            labelValue="Address"
            type="text"
            placeholder="enter your address..."
            onChange={setPersonalDetails}
            inputValue={personalDetails.inputAddre}
            valueToUpdate="inputAddre"
          ></InputBoxs>
        </FormBox>
        <DynamicBox
          degreeDetailsArr={degreeDetailsArr}
          setDegreeDetailsArr={setDegreeDetailsArr}
          isPracticle={false}
          boxTitle="Education"
          boxIcon="graduation-cap"
          objectField={["school", "degree", "startDate", "endDate", "location"]}
        />
        <DynamicBox
          degreeDetailsArr={practicleDetailsArr}
          setDegreeDetailsArr={setPracticleDetailsArr}
          isPracticle={true}
          boxTitle="Experience"
          boxIcon="briefcase"
          objectField={[
            "companyName",
            "positionTitle",
            "startDate",
            "endDate",
            "location",
            "description",
          ]}
        />
      </div>
    </>
  );
}

function FormBox({ title, children, icon }) {
  return (
    <>
      <div className="formBox">
        <h2 className="formMainHeading">
          <span className="formIcon">{icon}</span> {title}
        </h2>
        <form className="form">{children}</form>
      </div>
    </>
  );
}

export default RawBox;
