var _G = G2,
  Shape = _G.Shape;

var data = [{
  sex: '男',
  sold: 0.18
}, {
  sex: '女',
  sold: 0.82
}];

Shape.registerShape('interval', 'radiusPie', {
  draw: function draw(cfg, container) {
    // 将归一化后的数据转换为画布上的坐标
    var points = cfg.origin.points;
    var path = [];
    for (var i = 0; i < cfg.origin.points.length; i += 4) {
      path.push(['M', points[i].x, points[i].y]);
      path.push(['L', points[i + 1].x, points[i + 1].y]);
      path.push(['L', points[i + 2].x, points[i + 2].y]);
      path.push(['L', points[i + 3].x, points[i + 3].y]);
      path.push(['L', points[i].x, points[i].y]);
      path.push(['z']);
    }
    path = this.parsePath(path, true);
    var rect = container.addShape('path', {
      attrs: {
        fill: cfg.color || '#00D9DF',
        path: path
      }
    });
    var minH = Math.min(path[1][7], path[2][2]);
    var minW = Math.min(path[1][6], path[2][1]);
    var diffH = Math.abs(path[1][7] - path[2][2]);
    var diffW = Math.abs(path[1][6] - path[2][1]);
    container.addShape('circle', {
      attrs: {
        x: minW + diffW / 2,
        y: minH + diffH / 2,
        fill: cfg.color,
        radius: diffH / 2
      }
    });

    var minHH = Math.min(path[3][7], path[4][2]);
    var minWW = Math.min(path[3][6], path[4][1]);
    var diffHH = Math.abs(path[3][7] - path[4][2]);
    var diffWW = Math.abs(path[3][6] - path[4][1]);
    container.addShape('circle', {
      attrs: {
        x: minWW + diffWW / 2,
        y: minHH + diffHH / 2,
        fill: cfg.color,
        radius: diffH / 2
      }
    });
    return rect;
  }
});

var chart = new G2.Chart({
  container: 'pieChart',
  forceFit: true,
  height: 500,
  padding: [20, 30, 30, 20]
});

var COLORS = ['#1890ff', '#f04864'];

chart.coord('theta', {
  radius: 0.8
});
chart.source(data);
chart.tooltip({
  showTitle: false
});
chart.intervalStack().position('sold').shape('radiusPie').color('sex', COLORS).label('sold', {
  useHtml: true,
  htmlTemplate: function htmlTemplate(text, item) {
    var src = item.sex === '女' ? 'https://gw.alipayobjects.com/zos/rmsportal/mweUsJpBWucJRixSfWVP.png' : 'https://gw.alipayobjects.com/zos/rmsportal/oeCxrAewtedMBYOETCln.png';
    var color = item.sex === '女' ? COLORS[1] : COLORS[0];
    var IMG = '<img style="width:40px" src="' + src + '" /><br/>';
    return '<div style="margin: 50px; text-align:center;color:' + color + '">' + IMG + (text * 100).toFixed(0) + '%</div>';
  }
});

chart.render();