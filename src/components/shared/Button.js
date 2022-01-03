import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
  align-items: center;
  background-color: ${({ background }) => (background ? background : '#C28F19')};
  border: unset;
  border-radius: 5px;
  color: ${({ color }) => (color ? color : '#fff')};
  cursor: pointer;
  display: flex;
  font-weight: 600;
  gap: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
  height: 36px;
  margin-left: ${({ background }) => (background === 'transparent' ? '12px' : '0')};
  margin-right: ${({ background }) => (background === 'transparent' ? '12px' : '0')};
  padding-left: ${({ background }) => (background === 'transparent' ? '0' : '12px')};
  padding-right: ${({ background }) => (background === 'transparent' ? '0' : '12px')};
  width: ${({ isFullWidth }) => (isFullWidth ? '100%' : 'unset')};
  :hover {
    
  }
`;

const Button = ({
  background,
  color,
  icon,
  icon2,
  iconSize,
  link,
  text,
  isFullWidth,
  isAnchor
}) => {
  let _iconSize = 24;

  const jump = (link) => {
    window.location.href = link;
  }

  return (
    <Container
      isFullWidth={isFullWidth}
      background={background}
      color={color}
      onClick={(e) => {
        e.preventDefault();

        isAnchor
          ? jump(link)
          : window.open(link);
      }}
    >
      {icon ?
        <img
          height={iconSize ? iconSize : _iconSize}
          width={iconSize ? iconSize : _iconSize}
          src={icon}
        />
        :
        <></>
      }

      {icon2 ?
        <img
          height={iconSize ? iconSize : _iconSize}
          width={iconSize ? iconSize : _iconSize}
          src={icon2}
        />
        :
        <></>
      }

      {text}
    </Container>
  )
}

export default Button;
