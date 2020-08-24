import React, { useEffect } from 'react';
import './App.css';
const cedar = require('./cedar/src/index');

const App = () => {
  useEffect(() => {
    const definition = {
      type: 'bar',
      datasets: [
        {
          url:
            'https://services.arcgis.com/uDTUpUPbk8X8mXwl/arcgis/rest/services/Public_Schools_in_Onondaga_County/FeatureServer/0',
          name: 'Number_of_SUM',
          query: {
            orderByFields: 'Number_of_SUM DESC',
            groupByFieldsForStatistics: 'Type',
            outStatistics: [
              {
                statisticType: 'sum',
                onStatisticField: 'Number_of',
                outStatisticFieldName: 'Number_of_SUM',
              },
            ],
          },
        },
      ],
      series: [
        {
          category: { field: 'Type', label: 'Type' },
          value: { field: 'Number_of_SUM', label: 'Number of Students' },
          source: 'Number_of_SUM',
        },
      ],
    };
    const chart = document.getElementById('chart');
    const test = chart.getContext('2d');
    var cedarChart = new cedar.Chart(test, definition);
    cedarChart.show();
  }, []);

  return (
    <>
      <div
        class='chart-container'
        style={{ height: '300px', position: 'relative' }}
      >
        <canvas id='chart'></canvas>
      </div>
    </>
  );
};

export default App;
