import styled from 'styled-components';

const TextArea = styled.textarea`
  border: none;
  font-size: 20px;
  outline: 0px;
  padding: 0px 0px 6px;
  border-radius: 0px;
  transition: all 50ms ease 0s;
  border-radius: 0px;
  border-bottom: 1px solid rgb(204, 204, 204);

  &:active,
  &:focus {
    border-bottom: 1px solid #692EBA;
  }

  resize: none;
`;

export default TextArea;
