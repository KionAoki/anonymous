var data = [{
  item: '被網路霸凌',
  count: 19.6,
  percent: 0.196
}, {
  item: '網路霸凌別人',
  count: 10,
  percent: 0.10
}, {
  item: '旁觀網路霸凌',
  count: 54.7,
  percent: 0.547
}];
var chart = new G2.Chart({
  container: 'mountNode',
  forceFit: true,
  height: 500,
  animate: false,
  theme: 'dark',
  background: {
    fill: '#3A4151', // 图表背景色
    fillOpacity: 0 // 图表背景透明度
  },
  plotBackground: {
    fill: '#3A4151', // 图表背景色
    fillOpacity: 0 // 图表背景透明度
  }
});
chart.source(data, {
  percent: {
    formatter: function formatter(val) {
      val = val * 100 + '%';
      return val;
    }
  }
});
chart.coord('theta', {
  radius: 0.75,
  innerRadius: 0.6
});
chart.tooltip({
  showTitle: false,
  itemTpl: '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
});
// 辅助文本
chart.guide().html({
  position: ['50%', '50%'],
  html: '<div style="color:#8c8c8c;font-size: 14px;text-align: center;width: 10em;">台灣網路霸凌情形</div>',
  alignX: 'middle',
  alignY: 'middle'
});
var interval = chart.intervalStack().position('percent').color('item', ['#7f8da9', '#db4c3c', '#fec514','#daf0fd', '#9BD782']).label('percent', {
  formatter: function formatter(val, item) {
    return item.point.item + ': ' + val;
  }
}).tooltip('item*percent', function(item, percent) {
  percent = percent * 100 + '%';
  return {
    name: item,
    value: percent
  };
}).style({
  lineWidth: 1,
  stroke: '#fff'
});
chart.render();
interval.setSelected(data[0]);