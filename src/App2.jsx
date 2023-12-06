import { useState } from "react";
import RawBox from "./components/RawBox";
import ResumeBox from "./components/ResumeBox";
import { rawData } from "./rawData";

/* eslint-disable react/prop-types */
function App() {
  const [personalDetails, setPersonalDetails] = useState(
    rawData.personalDetails
  );
  const [degreeDetailsArr, setDegreeDetailsArr] = useState([rawData.education]);
  const [practicleDetailsArr, setPracticleDetailsArr] = useState([
    rawData.experience,
  ]);

  return (
    <div className="container">
      <RawBox
        personalDetails={personalDetails}
        setPersonalDetails={setPersonalDetails}
        degreeDetailsArr={degreeDetailsArr}
        setDegreeDetailsArr={setDegreeDetailsArr}
        practicleDetailsArr={practicleDetailsArr}
        setPracticleDetailsArr={setPracticleDetailsArr}
      ></RawBox>
      <ResumeBox
        personalDetails={personalDetails}
        degreeDetailsArr={degreeDetailsArr}
        practicleDetailsArr={practicleDetailsArr}
      ></ResumeBox>
    </div>
  );
}

export default App;
