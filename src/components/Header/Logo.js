import styled from 'styled-components';
import logoPng from './assets/logo3.png';

const Logo = styled.div`
    height: 50px;
    width: 206px;

    background: url("${logoPng}") no-repeat center;
    background-size: contain;
`;

export default Logo;
