import React from 'react';
import styled from 'styled-components';

const Blob = styled.img`
    opacity: 0.6;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 553px;
    height: 511px;
    pointer-events: none;
    z-index: -100;
`;

const Blob1Bottom = styled.img`
    opacity: 0.6;
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 553px;
    height: 511px;
    pointer-events: none;
    z-index: -100;
`;

const Blob2 = styled.img`
    opacity: 0.4;
    position: absolute;
    top: 0px;
    right: 0px;
    pointer-events: none;
    z-index: -100;
`;

const Art = styled.img`
    position: absolute;
    opacity: 0.6;
    height: 358px;
    width: 358px;
    right: 0;
    bottom: 0;
    pointer-events: none;
    z-index: -100;

    @media (max-width: 480px) {
      display: none;
      width: 158px;
    }
`;

const Scatter = styled.img`
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: 0.45;
    pointer-events: none;
    z-index: -100;
`;

const Wave = styled.img`
    position: absolute;
    width: 100%;
    bottom: 0;
    pointer-events: none;
    z-index: -100;
`;

const Background = ({
  blob1,
  blob1Bottom,
  blob2,
  art,
  scatter,
  wave
}) => {

  return (
    <>
      {blob1 === undefined ? <></> : <Blob src={blob1} />}
      {blob1Bottom === undefined ? <></> : <Blob1Bottom src={blob1Bottom} />}
      {blob2 === undefined ? <></> : <Blob2 src={blob2} />}
      {art === undefined ? <></> : <Art src={art} />}
      {scatter === undefined ? <></> : <Scatter src={scatter} />}
      {wave === undefined ? <></> : <Wave src={wave} />}
    </>
  )
}

export default Background;