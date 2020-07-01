var data = [{
  item: '被霸凌者',
  count: 19.6,
  percent: 0.196
}, {
  item: '霸凌者',
  count: 10,
  percent: 0.10
}, {
  item: '旁觀者',
  count: 54.7,
  percent: 0.547
}];
var chart = new G2.Chart({
  container: 'mountNode',
  forceFit: true,
  height: 500
});
chart.source(data, {
  percent: {
    formatter: val => {
      val = (val * 100) + '%';
      return val;
    }
  }
});
chart.coord('theta');
chart.tooltip({
  showTitle: false
});
chart.intervalStack()
  .position('percent')
  .color('item',['#7f8da9', '#db4c3c', '#fec514'])
  .label('percent', {
    offset: -40,
    // autoRotate: false,
    textStyle: {
      textAlign: 'center',
      shadowBlur: 2,
      shadowColor: 'rgba(0, 0, 0, .45)',
      fill: '#fff'
    }
  })
  .tooltip('item*percent', (item, percent) => {
    percent = percent * 100 + '%';
    return {
      name: item,
      value: percent
    };
  })
  .style({
    lineWidth: 1,
    stroke: '#fff'
  });
chart.render();