import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import Box from 'components/common/Box';

const Name = styled.div`
  font-weight: 700;
  font-size: 1.25rem;
`;

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

const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 100%;
  overflow: scroll;
`;

const ContactSource = styled.a`
  color: #555;
  outline: none;

  &:hover,
  &:focus,
  &:active {
    color: rgb(224, 42, 69);
  }
`;

const MetaContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Partner = ({ className, name, partnerType, email, site, history, id }) => (
  <div className={className}>
    <Box onClick={() => history.push(`/partners/${id}/`)}>
      <MetaContainer>
        <Name>{name}</Name>
        {partnerType === 'LEGAL' ? (
          <ContactSource href={site}>{site}</ContactSource>
        ) : (
          <ContactSource href={`malito:${email}`}>google@google.com</ContactSource>
        )}
      </MetaContainer>
      <TagContainer>
        <Tag>Партнер</Tag>
        <Tag>Благотворительность</Tag>
        <Tag>Интегратор</Tag>
      </TagContainer>
    </Box>
  </div>
);

const StyledPartner = styled(Partner)`
  ${Box} {
    padding: 20px;
    transition: all 0.1s ease-in-out;

    &:hover {
      box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
    }
  }

  ${MetaContainer} {
    margin-bottom: 16px;
  }

  cursor: pointer;
`;

export default withRouter(StyledPartner);
