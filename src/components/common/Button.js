import styled from 'styled-components';

const StyledButton = styled.button`
  background: none;
  outline: none;
  color: #840f13;

  height: 47px;
  min-width: 7em;
  border-color: #eee;
  border-radius: 50px;
  padding: 11px 40px;
  font-size: 16px;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:focus,
  &:active {
    border: 1px solid #840f13;
  }
`;

export default StyledButton;
