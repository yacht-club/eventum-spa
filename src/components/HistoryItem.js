import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import Box from 'components/common/Box';
import { getPartner } from '../apis/partners';

const Name = styled.div`
  font-weight: 700;
  font-size: 1.25rem;
`;

const MetaContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Comment = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 10px;
  font-weight: bold;
`;

const ChannelPhone = styled.div`
  font-weight: bold;
  color: #113DB2;
`;

const ChannelMeeting = styled.div`
  font-weight: bold;
  color: #FF7927;
`;

const ChannelEmail = styled.div`
  font-weight: bold;
  color: #44BF30;
`;

const getChannelName = channel => {
  switch (channel) {
    case `MEETING`:
      return <ChannelMeeting>Личная встреча</ChannelMeeting>;
    case `PHONE`:
      return <ChannelPhone>Телефонный разговор</ChannelPhone>;
    case `EMAIL`:
      return <ChannelEmail>Переписка по email</ChannelEmail>;
    default:
      return ``;
  }
};

const HistoryItem = ({
                       className,
                       partnerExtId,
                       comment,
                       channel,
                     }) => {

  console.log(`loading history for partner: ${partnerExtId}`);
  const [partner, setPartner] = useState({ isLoading: true, data: [] });

  useEffect(() => {
    getPartner({ id: partnerExtId }).then(data => setPartner({ isLoading: false, ...data }));
  }, []);

  return (
    <div className={className}>
      <Box>
        <MetaContainer>
          <Name>{partner.name}</Name>
          {getChannelName(channel)}
        </MetaContainer>
        {partner.description}
        <Comment>Комментарий:</Comment>
        {comment}
      </Box>
    </div>
  );
};

const StyledHistoryItem = styled(HistoryItem)`
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

export default withRouter(StyledHistoryItem);
