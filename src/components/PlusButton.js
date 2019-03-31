import styled from 'styled-components';
import plusPng from 'components/assets/plus.png';

const PlusButton = styled.button`
  background: url("${plusPng}") no-repeat center;
  background-size: contain;
  height: 20px;
  width: 20px;

  border: none;
  outline: none;
  cursor: pointer;
`;

export default PlusButton;
