var data = [{
  "name": "網路霸凌法",
  "vote": 48
}, {
  "name": "刑事制裁",
  "vote": 44
}, {
  "name": "學校法規",
  "vote": 45
}, {
  "name": "學校政策",
  "vote": 49
}, {
  "name": "包含校外",
  "vote": 17
}];

var imageMap = {
  '網路霸凌法': '',
  '刑事制裁': '',
  '學校法規': '',
  '學校政策': '',
  '包含校外': ''
};

var chart = new G2.Chart({
  container: 'usa',
  forceFit: true,
  height: 500,
  padding: [60, 20, 40, 60],
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
  vote: {
    max: 50
  }
});
chart.legend(false);
chart.axis('vote', {
  labels: null,
  title: null,
  line: null,
  tickLine: null,
  grid: {
    lineStyle: {
      stroke: '#ffffff', // 网格线的颜色
      lineWidth: 1, // 网格线的粗细
      lineDash: [4, 4] // 网格线的虚线配置，第一个参数描述虚线的实部占多少像素，第二个参数描述虚线的虚部占多少像素
    },
  }
});
chart.interval().position('name*vote').color('name', ['#7f8da9', '#db4c3c', '#fec514','#daf0fd', '#9BD782']);
chart.point().position('name*vote').size(50).shape('name', function(name) {
  return ['image', imageMap[name]];
});
chart.render();