var data = [{
  "name": "被網路霸凌",
  "vote": 19.6
}, {
  "name": "網路霸凌他人",
  "vote": 10
}, {
  "name": "旁觀者",
  "vote": 54.7
}];
var imageMap = {
  '被網路霸凌': 'img/victim_chart.svg',
  '網路霸凌他人': 'img/bully_chart.svg',
  '旁觀者': 'img/bystander_chart.svg'
};
var chart = new G2.Chart({
  container: 'mountNode',
  forceFit: true,
  height: 500,
  padding: [60, 20, 40, 60],
  theme: 'dark',
  background: {
    fill: '#3A4151', // 图表背景色
    fillOpacity: 0.1 // 图表背景透明度
  },
  plotBackground: {
    fill: '#3A4151', // 图表背景色
    fillOpacity: 0.1 // 图表背景透明度
  }
});
chart.source(data, {
  vote: {
    max: 100
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
chart.interval().position('name*vote').color('name', ['#7f8da9', '#fec514', '#db4c3c']);
chart.point().position('name*vote').size(50).shape('name', function(name) {
  return ['image', imageMap[name]];
});
chart.render();