import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import { charts } from './Charts';
import styled from 'styled-components';
const cedar = require('./cedar/src/index');

const StyledButton = styled.button`
  font-size: 18px;
`;

const App = () => {
  const [currentChart, setCurrentChart] = useState(charts[0]);
  useEffect(() => {
    let canvas = document.getElementById('chart');
    const parent = document.getElementById('chartContainer');
    parent.removeChild(canvas);
    parent.innerHTML = '<canvas id="chart"></canvas>';
    canvas = document.getElementById('chart');
    const context = canvas.getContext('2d');
    var cedarChart = new cedar.Chart(context, currentChart.chart);
    cedarChart.show();
  });

  return (
    <>
      {charts.map((chart, index) => (
        <StyledButton
          key={chart.label}
          onClick={() => {
            setCurrentChart((state) => charts[index]);
          }}
        >
          {chart.label}
        </StyledButton>
      ))}
      <div
        id='chartContainer'
        className='chart-container'
        style={{ height: '300px' }}
      >
        <canvas id='chart'></canvas>
      </div>
    </>
  );
};

export default App;
