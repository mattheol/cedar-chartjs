const line = {
  type: 'line',
  datasets: [
    {
      url:
        'https://services.arcgis.com/bkrWlSKcjUDFDtgw/arcgis/rest/services/DC_Crashes/FeatureServer/0',
      query: {
        where: "REPORTDATE > '2007-01-01' AND REPORTDATE < '2018-01-01'",
        groupByFieldsForStatistics: 'EXTRACT(YEAR from REPORTDATE)',
        outStatistics: [
          {
            statisticType: 'sum',
            onStatisticField: 'MAJORINJURIES',
            outStatisticFieldName: 'MAJORINJURIES_SUM',
          },
          {
            statisticType: 'sum',
            onStatisticField: 'MINORINJURIES',
            outStatisticFieldName: 'MINORINJURIES_SUM',
          },
        ],
        orderByFields: 'EXTRACT(YEAR from REPORTDATE) ASC',
        sqlFormat: 'standard',
      },
    },
  ],
  series: [
    {
      category: { field: 'EXPR_1', label: 'Year' },
      group: true,
      value: {
        field: 'MAJORINJURIES_SUM',
        label: 'Major Injuries',
      },
    },
    {
      category: { field: 'EXPR_1', label: 'Year' },
      value: {
        field: 'MINORINJURIES_SUM',
        label: 'Minor Injuries',
      },
      group: true,
    },
  ],
  overrides: {
    categoryAxis: {
      guides: [
        {
          category: '2015',
          lineColor: '#CC0000',
          lineAlpha: 1,
          dashLength: 2,
          inside: true,
          labelRotation: 90,
          label: 'VisionZero Started',
        },
        {
          category: '2024',
          lineColor: '#CC0000',
          lineAlpha: 1,
          dashLength: 2,
          inside: true,
          labelRotation: 90,
          label: 'VisionZero Goal',
        },
      ],
    },
  },
};
const bar = {
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
const barGrouped = {
  type: 'bar',
  datasets: [
    {
      url:
        'https://services.arcgis.com/uDTUpUPbk8X8mXwl/arcgis/rest/services/Public_Schools_in_Onondaga_County/FeatureServer/0',
      name: 'Jordan',
      query: {
        where: "City='Jordan'",
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
      join: 'Type',
    },
    {
      url:
        'https://services.arcgis.com/uDTUpUPbk8X8mXwl/arcgis/rest/services/Public_Schools_in_Onondaga_County/FeatureServer/0',
      name: 'Dewitt',
      query: {
        where: "City='Dewitt'",
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
      join: 'Type',
    },
    {
      url:
        'https://services.arcgis.com/uDTUpUPbk8X8mXwl/arcgis/rest/services/Public_Schools_in_Onondaga_County/FeatureServer/0',
      name: 'Fayetteville',
      query: {
        where: "City='Fayetteville'",
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
      join: 'Type',
    },
  ],
  series: [
    {
      category: { field: 'Type', label: 'Type' },
      value: { field: 'Number_of_SUM', label: 'Jordan Students' },
      source: 'Jordan',
    },
    {
      category: { field: 'Type', label: 'Type' },
      value: { field: 'Number_of_SUM', label: 'Dewitt Students' },
      source: 'Dewitt',
    },
    {
      category: { field: 'Type', label: 'Type' },
      value: { field: 'Number_of_SUM', label: 'Fayetteville Students' },
      source: 'Fayetteville',
    },
  ],
};

const pie = {
  type: 'pie',
  datasets: [
    {
      url:
        'https://services.arcgis.com/uDTUpUPbk8X8mXwl/arcgis/rest/services/Public_Schools_in_Onondaga_County/FeatureServer/0',
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
      value: {
        field: 'Number_of_SUM',
        label: 'Number of Students',
      },
    },
  ],
};

export const charts = [
  { label: 'Line', chart: line },
  { label: 'Bar', chart: bar },
  { label: 'Bar grouped', chart: barGrouped },
  { label: 'Pie', chart: pie },
];
