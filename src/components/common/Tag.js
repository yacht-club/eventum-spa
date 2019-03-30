import styled from 'styled-components';

const Tag = styled.div`
  font-size: 0.8rem;
  font-weight: 600;
  padding: 5px 10px;
  border-radius: 100px;
  background-color: #eee;

  & + & {
    margin-left: 10px;
  }
`;

export default Tag;
