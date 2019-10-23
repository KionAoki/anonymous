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
  height: window.innerHeight,
  padding: [20, 80]
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
chart.interval().position('term*count').color('#8543e0').shape('line').select(false).style({
  lineAppendWidth: 10
}); // 线状柱状图
chart.point().position('term*count').color('#8543e0').shape('circle');
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
    fill: '#8543e0'
  }
});
chart.render();