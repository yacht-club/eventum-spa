import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Box from 'components/common/Box';
import { getPartner } from 'apis/partners';
import OptionalRender from 'components/OptionalRender';
import TagContainer from 'components/common/TagContainer';
import Tag from 'components/common/Tag';

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

const Text = styled.div`
  line-height: 1.2rem;
`;

const Content = styled.div`
  padding: 20px 40px;
`;

const Separator = styled.div`
  border-bottom: 1px solid #e6e6e6;
`;

const Description = styled.div``;

const Event = ({
  className,
  match: {
    params: { id },
  },
}) => {
  const [event, setEvent] = useState({ isLoading: true });

  useEffect(() => {
    getPartner({ id }).then(data => setEvent({ isLoading: false, ...data }));
  });

  return (
    <div className={className}>
      <Box>
        <Content>
          <Title>{event.name}</Title>
          {event.tags ? (
            <TagContainer>
              {event.tags.map(tag => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </TagContainer>
          ) : null}
        </Content>
        <Separator />
        <Content>
          <OptionalRender when={event.inn}>
            <SubTitle>ИНН</SubTitle>
            <Text>{event.inn}</Text>
          </OptionalRender>

          <OptionalRender when={event.site_url}>
            <SubTitle>Сайт</SubTitle>
            <Text>{event.site_url}</Text>
          </OptionalRender>

          <OptionalRender when={event.email}>
            <SubTitle>Электронная почта</SubTitle>
            <Text>{event.email}</Text>
          </OptionalRender>

          <OptionalRender when={event.phone}>
            <SubTitle>Телефон</SubTitle>
            <Text>+{event.phone}</Text>
          </OptionalRender>
        </Content>
        <Separator />
        <Content>
          <SubTitle>Описание</SubTitle>
          <Description>{event.description}</Description>
        </Content>
      </Box>
    </div>
  );
};

const StyledEvent = styled(Event)`
  ${Title} {
    margin-bottom: 10px;
  }
`;

export default StyledEvent;
