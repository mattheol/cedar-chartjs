import render from './render/render';

export function cedarChartjs(elementId: string, definition: any, data?: any[]) {
  if (
    (!elementId || !definition || !data) &&
    definition.type &&
    definition.type !== 'custom'
  ) {
    const err = new Error('Element Id, definition, and data are all required.');
    throw err;
  }

  if (definition.type && definition.type === 'custom') {
    return render.renderChart(elementId, definition);
  }
  return render.renderChart(elementId, definition, data);
}

export default cedarChartjs;
