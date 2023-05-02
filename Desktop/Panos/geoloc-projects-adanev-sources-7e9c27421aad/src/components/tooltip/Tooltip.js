import React from 'react';
import ReactTooltip from 'react-tooltip';

const Tooltip = ({ id, Icon, title, bgColor }) => {
  return (
    <>
      <p className="cursor-pointer" data-tip data-for={id}>
        <Icon className="text-2xl" />
      </p>
      <ReactTooltip id={id} backgroundColor={bgColor}>
        <span className="text-sm font-medium">{title}</span>
      </ReactTooltip>
    </>
  );
};

export default Tooltip;
