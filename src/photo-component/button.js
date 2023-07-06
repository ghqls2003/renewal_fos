import React from 'react';
import { FaStop, FaThLarge, FaTh } from 'react-icons/fa';
import styled from 'styled-components';

const StyleButton = styled.span`
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    .icons {
      padding: 5px;
      color: white;
      background-color: black;
    }
  }
`;

function Button({ view }) {
  if (view === 'one')
    return (
      <StyleButton>
        <FaStop className="icons" size={30} />
      </StyleButton>
    );
  if (view === 'two')
    return (
      <StyleButton>
        <FaThLarge className="icons" size={30} />
      </StyleButton>
    );
  if (view === 'three')
    return (
      <StyleButton>
        <FaTh className="icons" size={30} />
      </StyleButton>
    );
}

export default Button;
