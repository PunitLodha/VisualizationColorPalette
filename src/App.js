import React, { useState } from 'react';
import GraphsContainer from './components/GraphsContainer';
import PaletteSelector from './components/PaletteSelector';

function App() {
  const [selected, setSelected] = useState('0');
  const [color, setColor] = useState('white');
  const colors = [
    ['#65E0E0', '#69B2F8', '#6FD39B', '#F77EB9', '#FDB16D'],
    [
      '#5f98cf',
      '#434348',
      '#49a65e',
      '#f45b5b',
      '#708090',
      '#b68c51',
      '#397550',
      '#c0493d',
      '#4f4a7a',
      '#b381b3',
    ],
    [
      '#a6f0ff',
      '#70d49e',
      '#e898a5',
      '#007faa',
      '#f9db72',
      '#f45b5b',
      '#1e824c',
      '#e7934c',
      '#dadfe1',
      '#a0618b',
    ],
    [
      '#7cb5ec',
      '#f7a35c',
      '#90ee7e',
      '#7798BF',
      '#aaeeee',
      '#ff0066',
      '#eeaaee',
      '#55BF3B',
      '#DF5353',
      '#7798BF',
      '#aaeeee',
    ],
    [
      '#00c0c7',
      '#5144d3',
      '#e8871a',
      '#da3490',
      '#9089fa',
      '#47e26f',
      '#2780eb',
      '#6f38b1',
      '#dfbf03',
      '#cb6f10',
      '#268d6c',
      '#9bec54',
    ],
    [
      '#1f77b4',
      '#ff7f0e',
      '#2ca02c',
      '#d62728',
      '#9467bd',
      '#8c564b',
      '#e377c2',
      '#7f7f7f',
      '#bcbd22',
      '#17becf',
    ],
    ['#66c2a5', '#fc8d62', '#8da0cb', '#e78ac3', '#a6d854', '#ffd92f', '#e5c494', '#b3b3b3'],
    [
      '#4e79a7',
      '#f28e2c',
      '#e15759',
      '#76b7b2',
      '#59a14f',
      '#edc949',
      '#af7aa1',
      '#ff9da7',
      '#9c755f',
      '#bab0ab',
    ],
    [
      '#FEBB00',
      '#F1396B',
      '#5638FF',
      '#67D4F7',
      '#EB82CE',
      '#9EC75E',
      '#5AD7C4',
      '#88B2B5',
      '#6882BA',
    ],
    ['#2fb4e1', '#ec7500', '#067db7', '#f69db7', '#26465b'],
    ['#e03e18', '#f8931f', '#fcbf10', '#67acbc', '#3f4553'],
    ['#8f7dac', '#e03e93', '#62b6d4', '#afc3c2', '#415d69'],
    ['#e75035', '#84b7ba', '#e7a51b', '#608156', '#175b8a'],
    ['#5fb6c7', '#ffd159', '#c9c77c', '#fa7413', '#e2e3e5'],
    ['#01b8aa', '#28383c', '#fd625e', '#f2c80f', '#5f6b6d', '#8ad4eb'],
    ['#f4a522', '#6092cd', '#61b546', '#aa4498', '#dccc77', '#89cdf0'],
  ];
  return (
    <div style={{ display: 'flex' }}>
      <PaletteSelector
        selected={selected}
        colors={colors}
        setSelected={setSelected}
        color={color}
        setColor={setColor}
      />
      <GraphsContainer selected={selected} colors={colors[Number(selected)]} color={color} />
    </div>
  );
}

export default App;
