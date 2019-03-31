import React from 'react';
import styled from 'styled-components';
import ArchiveEvents from 'components/ArchivePage/ArchiveEvents';

const ArchivePage = ({ className }) => (
  <div className={className}>
    <ArchiveEvents/>
  </div>
);

const StyledArchivePage = styled(ArchivePage)``;

export default StyledArchivePage;
