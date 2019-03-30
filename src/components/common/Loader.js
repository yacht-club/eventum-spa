import styled from 'styled-components';
import loaderSvg from 'components/assets/loader-big.svg';

const Loader = styled.span`
  position: relative;
  overflow: hidden;
  display: inline-block;
  text-align: center;
  font-weight: 500;
  color: #666666;
  width: 100px;
  height: 100px;
  line-height: 100px;
  font-size: 20px;
  width: 100%;
  text-align: center;
  margin-top: 40px;

  @keyframes loader {
    to {
      transform: rotate(360deg)
    }
  }

  &:before {
    background: url("${loaderSvg}") no-repeat;
    background-position: center;
    vertical-align: middle;
    animation-name: loader;
    animation-duration: 1500ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0%;
    left: 0%;
  }
`;

export default Loader;
