import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import Box from 'components/common/Box';
import TextArea from 'components/common/TextArea';
import Fallback from 'components/common/Fallback';
import Loader from 'components/common/Loader';
import { getUsers } from 'apis/users';
import { getPartners } from 'apis/partners';
import { createTask } from 'apis/tasks';
import Button from 'components/common/Button';
import Select from 'components/common/Select';
import Input from 'components/common/Input';
import moment from 'moment';

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

const CreateTask = ({
  className,
  match: {
    params: { id },
  },
  history,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [managers, setManagers] = useState([]);
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    getUsers().then(setManagers);

    getPartners({ id })
      .then(setPartners)
      .then(() => setIsLoading(false));
  }, []);

  const nameRef = useRef(null);
  const deadlineRef = useRef(null);
  const managersRef = useRef(null);
  const partnersRef = useRef(null);
  const descriptionRef = useRef(null);

  const submit = () => {
    const name = managersRef.current.value;
    const deadline = moment(deadlineRef.current.value, 'YYYY-MM-DD').valueOf();
    const managerUid = managersRef.current.value;
    const partnerUid = partnersRef.current.value;
    const description = descriptionRef.current.value;

    createTask({
      name,
      deadlineTime: deadline,
      prsExtId: managerUid,
      partnerExtId: partnerUid,
      description,
      eventUid: id,
    }).then(x => history.push(`/tasks/${x.taskUid}/`));
  };

  return (
    <Fallback isLoading={isLoading} Component={Loader}>
      <div className={className}>
        <Box>
          <Content>
            <Title>Создать Задачу</Title>
          </Content>
          <Separator />
          <Content>
            <SubTitle>Название</SubTitle>
            <Input ref={nameRef} />

            <SubTitle>Дедлайн</SubTitle>
            <Input type="date" id="start" name="trip-start" defaultValue="2019-07-22" ref={deadlineRef} />

            <SubTitle>Менеджер</SubTitle>
            <Select ref={managersRef}>
              {managers.map(manager => (
                <option key={manager.user_ext_id} value={manager.user_ext_id}>
                  {manager.username}
                </option>
              ))}
            </Select>
            <SubTitle>Партнер</SubTitle>
            <Select ref={partnersRef}>
              {partners.map(partner => (
                <option key={partner.ext_id} value={partner.ext_id}>
                  {partner.name}
                </option>
              ))}
            </Select>
            <SubTitle>Описание</SubTitle>
            <TextArea ref={descriptionRef} />
          </Content>
          <Content>
            <Button onClick={submit}>Создать</Button>
          </Content>
        </Box>
      </div>
    </Fallback>
  );
};

const StyledCreateTask = styled(CreateTask)`
  ${Input}, ${TextArea} {
    min-width: 40%;
  }
`;

export default withRouter(StyledCreateTask);
