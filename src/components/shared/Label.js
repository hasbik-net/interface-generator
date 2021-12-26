import React from 'react';

const Label = ({
  imageSource,
  imageSize,
  imageStyle,
  hasAction,
  text,
  textSize,
  textColor,
}) => {

  return (
    <span
      style={{
        display: 'flex',
        fontSize: textSize,
        cursor: hasAction ? 'pointer' : 'unset',
        color: textColor ? textColor : 'var(--primary-text)'
      }}>
      <img
        src={imageSource}
        height={imageSize}
        width={imageSize}
        style={imageStyle} />
      {text}
    </span>
  )
}

export default Label;