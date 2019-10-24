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
  '被網路霸凌': 'https://zos.alipayobjects.com/rmsportal/mYhpaYHyHhjYcQf.png',
  '網路霸凌他人': 'https://zos.alipayobjects.com/rmsportal/JBxkqlzhrlkGlLW.png',
  '旁觀者': 'https://zos.alipayobjects.com/rmsportal/zlkGnEMgOawcyeX.png'
};
var chart = new G2.Chart({
  container: 'mountNode',
  forceFit: true,
  height: 500,
  padding: [60, 20, 40, 60]
});
chart.source(data, {
  vote: {
    min: 0
  }
});
chart.legend(false);
chart.axis('vote', {
  labels: null,
  title: null,
  line: null,
  tickLine: null
});
chart.interval().position('name*vote').color('name', ['#7f8da9', '#fec514', '#db4c3c', '#daf0fd']);
chart.point().position('name*vote').size(60).shape('name', function(name) {
  return ['image', imageMap[name]];
});
chart.render();