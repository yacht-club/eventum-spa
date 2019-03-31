import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import Box from 'components/common/Box';

const Title = styled.h1`
  margin: 16px 0 0 0;
  padding: 0;
  font-weight: 800;
  font-size: 2rem;
`;

const SubTitle = styled.h2`
  margin: 8px 0 4px 0;
  padding: 0;
  font-weight: 700;
  font-size: 1.1rem;
  line-height: 1.5rem;
  color: #840f13;
`;

const Content = styled.div`
  padding: 20px 40px;
`;

const Separator = styled.div`
  border-bottom: 1px solid #e6e6e6;
`;
const CreateEvent = ({ className, history }) => {
  return (
    <div className={className}>
      <Box>
        <Content>
          <Title>Создать Что-то??</Title>
        </Content>
        <Separator />
        <Content>
          <SubTitle>Дата проведения</SubTitle>
        </Content>
        <Separator />
        <Content>
          <SubTitle>Описание</SubTitle>
        </Content>
      </Box>
    </div>
  );
};
const StyledCreateEvent = styled(CreateEvent)``;

export default withRouter(StyledCreateEvent);
