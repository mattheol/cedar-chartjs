export const bar = {
  type: 'bar',
  rotate: false,
  theme: 'calcite',
  chartCursor: {
    categoryBalloonEnabled: false,
  },
  graphs: [
    {
      type: 'column',
      newStack: true,
    },
  ],
  legend: {
    valueAlign: 'left',
    spacing: 25,
  },
  valueAxes: [
    {
      stackType: 'regular',
    },
  ],
  export: {
    enabled: true,
  },
};

export default bar;
