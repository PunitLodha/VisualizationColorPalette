import React from 'react';
import styled from 'styled-components';
import Graph from './Graph';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, minmax(0, 300px));
  grid-gap: 10px;
`;

const GraphsContainer = ({ colors }) => {
  return (
    <Grid>
      <Graph title="Bar" colors={colors} />
      <Graph title="Column" colors={colors} />
      <Graph title="Donut" colors={colors} />
      <Graph title="Bubble" colors={colors} />
    </Grid>
  );
};

export default GraphsContainer;
