import Schedule from "./Schedule";
import { Info, Wrapper } from "./styles";
import React, { useEffect } from "react";

function Profissional() {
  let companyStartTime = 8;
  const companyHours = 8;

  useEffect(() => {}, []);

  return (
    <Wrapper>
      <Info>
        <img src={require("../../assets/test/person1.jpg")} alt="foto" />
        <p>André Sérgio Costa Rodrigues</p>
      </Info>
      {/* {Array(companyHours)
        .fill(0)
        .map(() => {
          companyStartTime += 1;
          return <Schedule time={companyStartTime} />;
        })} */}
    </Wrapper>
  );
}

export default Profissional;
