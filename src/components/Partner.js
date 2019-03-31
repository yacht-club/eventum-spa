import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import Box from 'components/common/Box';
import Tag from 'components/common/Tag';
import TagContainer from 'components/common/TagContainer';

const Name = styled.div`
  font-weight: 700;
  font-size: 1.25rem;
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

const Partner = ({ className, name, partner_type, email, site_url, history, ext_id, tags }) => (
  <div className={className}>
    <Box onClick={() => history.push(`/partners/${ext_id}/`)}>
      <MetaContainer>
        <Name>{name}</Name>
        {partner_type === 'LEGAL' ? (
          <ContactSource href={site_url}>{site_url}</ContactSource>
        ) : (
          <ContactSource href={`malito:${email}`}>{email}</ContactSource>
        )}
      </MetaContainer>
      <TagContainer>{tags ? tags.map(tag => <Tag key={tag}>{tag}</Tag>) : null}</TagContainer>
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
