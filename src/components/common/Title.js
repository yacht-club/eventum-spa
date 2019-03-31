import styled from 'styled-components';

const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: 900;
  font-size: 2rem;
  
  @media (max-width: 450px) {
    font-size: 1.25rem;
    margin-bottom: 10px;
  }
`;

export default Title;
