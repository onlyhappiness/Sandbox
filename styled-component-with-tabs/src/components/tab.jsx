import React, { useCallback, useState } from "react";
import styled from "styled-components";

const types = ["a", "b", "c"];

const TabGroup = () => {
  const [active, setActive] = useState(types[0]);
  const onClickActive = useCallback((e) => {
    // console.log(e.target.innerText);
    setActive(e.target.innerText);
  });

  return (
    <>
      <ButtonGroup>
        {types?.map((type) => (
          <Tab
            key={type}
            active={active === type} //
            onClick={onClickActive}
          >
            {type}
          </Tab>
        ))}
      </ButtonGroup>
      <p />

      <p>너가 누른 거: {active}</p>
    </>
  );
};

const Tab = styled.button`
  font-size: 20px;
  padding: 10px 60px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;

  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid black;
    opacity: 1;
  `}
`;

const ButtonGroup = styled.div`
  display: flex;
`;

export default TabGroup;
