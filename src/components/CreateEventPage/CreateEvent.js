import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import Box from 'components/common/Box';
import Button from 'components/common/Button';
import Input from 'components/common/Input';
import TextArea from 'components/common/TextArea';

const Title = styled.h1`
  margin: 16px 0 0 0;
  padding: 0;
  font-weight: 800;
  font-size: 2rem;

  @media (max-width: 450px) {
    font-size: 1.25rem;
  }
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
          <Title>Создать Мероприятие</Title>
        </Content>
        <Separator />
        <Content>
          <SubTitle>Дата проведения</SubTitle>
          <Input type="date" id="start" name="trip-start" defaultValue="2019-07-22" />

          <SubTitle>Местро проведения</SubTitle>
          <Input />
          <SubTitle>Описание</SubTitle>
          <TextArea />
          <br/>
          <Button>Создать</Button>
        </Content>
      </Box>
    </div>
  );
};
const StyledCreateEvent = styled(CreateEvent)``;

export default withRouter(StyledCreateEvent);
