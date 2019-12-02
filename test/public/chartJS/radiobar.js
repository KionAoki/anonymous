var data = [{
  "term": "刪除社群帳號",
  "count": 26
}, {
  "term": "有過自殺念頭",
  "count": 26
}, {
  "term": "失望感的增加",
  "count": 37
}, {
  "term": "社交焦慮的增加",
  "count": 41
}];
var chart = new G2.Chart({
  container: 'radialBar',
  forceFit: true,
  height: 500,
  padding: [0, 0],
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
  count: {
    max: 100
  }
});
chart.coord('theta', {
  innerRadius: 0.2,
  endAngle: Math.PI
});
chart.interval().position('term*count').color('#F1C320').shape('line').select(false).style({
  lineAppendWidth: 10
}); // 线状柱状图
chart.point().position('term*count').color('#F1C320').shape('circle');
for (var i = 0, l = data.length; i < l; i++) {
  var obj = data[i];
  chart.guide().text({
    position: [obj.term, 0],
    content: obj.term + ' ',
    style: {
      textAlign: 'right'
    }
  });
}
chart.guide().text({
  position: ['50%', '50%'],
  content: '影響',
  style: {
    textAlign: 'center',
    fontSize: 24,
    fill: '#F1C320'
  }
});
chart.render();