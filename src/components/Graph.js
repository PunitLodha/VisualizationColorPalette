import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  background-color: #eee;
  padding: 4px 16px;
  font-size: px;
`;

const Graph = ({ title, colors, color }) => {
  const width = 550;
  const height = 250;
  const space = 10;
  const bars = [180, 215, 200, 160, 120];
  const barHeight = (height - space * 6) / bars.length;
  const columnWidth = (width - space * 6) / bars.length;
  const donuts = [25, 10, 30, 20, 15];
  const offsets = [25, 100, 90, 60, 40];

  const rects = bars.map((bar, index) => (
    <rect
      width={bar * 2}
      height={barHeight}
      y={10 + (space + barHeight) * index}
      fill={colors[index]}
    />
  ));

  const columns = bars.map((column, index) => (
    <rect
      fill={colors[index]}
      width={columnWidth}
      height={column}
      x={10 + (space + columnWidth) * index}
      y={height - column}
    />
  ));

  const getPercent = (val) => (630 * val) / 100;

  const donut = (
    <>
      <circle
        className="donut-hole"
        cx={width / 2}
        cy={height / 2}
        r="100"
        fill={color === 'white' ? 'white' : 'black'}
      />

      {donuts.map((val, index) => (
        <circle
          cx={width / 2}
          cy={height / 2}
          r="100"
          fill="transparent"
          stroke={colors[index]}
          strokeWidth="30"
          strokeDasharray={`${getPercent(val)} ${getPercent(100 - val)}`}
          strokeDashoffset={`${getPercent(offsets[index])}`}
        />
      ))}
    </>
  );

  const bubble = bars.map((val, index) => (
    <circle
      cx={bars[index] - 50 + index * 100}
      cy={height / 4 + offsets[index] - 30 * index + 50}
      r={val * 0.2}
      fill={colors[index]}
    />
  ));

  let graph;
  if (title === 'Bar') {
    graph = rects;
  } else if (title === 'Column') {
    graph = columns;
  } else if (title === 'Donut') {
    graph = donut;
  } else {
    graph = bubble;
  }

  return (
    <div style={{ border: '1px solid goldenrod' }}>
      <Title>{title}</Title>
      <svg width={width} height={height}>
        {graph}
      </svg>
    </div>
  );
};

export default Graph;
