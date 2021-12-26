import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  border-radius: 8px;
  display: grid;
  grid-template-rows: 64px 32px auto;
  padding: 1em;
  background-image: ${({ hideBackground }) => (hideBackground ? 'unset' : 'linear-gradient(134deg, rgba(25,174,194,0.10) 0%, rgba(0,23,26,0.20) 100%) !important')};

`;

// background-image: ${({ hideBackground }) => (hideBackground ? 'unset' : 'linear-gradient(135deg, var(--secondary) 14%, var(--secondary-gradient) 100%)')};

export const CardTitle = styled.div`
`;

export const CardBody = styled.div`
  font-size: 0.8em;
  font-weight: 300;
`;

export const CardNumber = styled.span`
  color: var(--secondary-text);
`;

export const CardAction = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  margin-top: 1em;
`;

export const CardButton = styled.img`
  height: 0.9em;    
  width: 0.9em;
  margin-left: 8px;
  transform: translateY(2px);
`;

export const Cards = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
`;

export const CardItems = styled.div`
  margin-top: 2em;
  display: grid;
  gap: 1em;
`;

export const CardItem = styled.div`
  border-radius: 10px;
  padding: 1em;
  background: var(--black);
`;

export const CardItemTitle = styled.div`
  font-weight: 600;
  line-height: 2;
  opacity: ${({ opacity }) => (opacity ? opacity : 1)};
`;

export const CardItemBody = styled.div`
  font-size: 11px;  
  font-weight: 300;
`;

export const CardLinks = styled.div`
  margin-top: 1em;
  display: grid;
  gap: 0.5em;
  grid-template-columns: repeat(auto-fill, minmax(32px, 1fr));
`;

export const Social = styled.img`
  height: 32px;
  width: 32px;
  cursor: pointer;
`;

const Card = ({
  number,
  title,
  bodyContent,
  actionContent,
  hideBackground
}) => {

  return (
    <Content
      hideBackground={hideBackground}
    >
      {title ?
        <CardTitle>
          {title}
        </CardTitle>
        :
        <></>
      }

      {number ?
        <CardNumber>
          {number}
        </CardNumber>
        :
        <></>
      }

      <CardBody>
        {bodyContent === undefined ? <></> : bodyContent}
      </CardBody>

      <CardAction>
        {actionContent === undefined ? <></> : actionContent}
      </CardAction>
    </Content>
  )
};

export default Card;