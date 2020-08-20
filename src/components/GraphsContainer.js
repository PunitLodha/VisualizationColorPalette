import React from 'react';
import styled from 'styled-components';
import Graph from './Graph';

const Grid = styled.div`
  display: grid;
  padding: 32px 20px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, minmax(0, 300px));
  grid-gap: 10px;
  background-color: ${(props) => (props.color === 'white' ? 'white' : 'black')};
`;

const GraphsContainer = ({ colors, color }) => {
  return (
    <Grid color={color}>
      <Graph title="Bar" colors={colors} color={color} />
      <Graph title="Column" colors={colors} color={color} />
      <Graph title="Donut" colors={colors} color={color} />
      <Graph title="Bubble" colors={colors} color={color} />
    </Grid>
  );
};

export default GraphsContainer;
