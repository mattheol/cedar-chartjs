export const barHorizontal = {
  type: 'bar',
  theme: 'calcite',
  rotate: true,
  chartCursor: {
    leaveCursor: true,
    valueLineEnabled: true,
    categoryBalloonEnabled: false,
  },
  graphs: [
    {
      type: 'column',
    },
  ],
  legend: {},
  valueAxes: [
    {
      gridAlpha: 0.2,
      stackType: 'regular',
    },
  ],
  export: {
    enabled: true,
  },
};

export default barHorizontal;
