var Shape = G2.Shape;
Shape.registerShape('point', 'pointer', {
  drawShape: function drawShape(cfg, group) {
    var point = cfg.points[0];
    var center = this.parsePoint({
      x: 0,
      y: 0
    });
    var target = this.parsePoint({
      x: point.x,
      y: 0.9
    });
    var dir_vec = {
      x: center.x - target.x,
      y: center.y - target.y
    };
    //normalize
    var length = Math.sqrt(dir_vec.x * dir_vec.x + dir_vec.y * dir_vec.y);
    dir_vec.x *= 1 / length;
    dir_vec.y *= 1 / length;
    //rotate dir_vector by -90 and scale
    var angle1 = -Math.PI / 2;
    var x_1 = Math.cos(angle1) * dir_vec.x - Math.sin(angle1) * dir_vec.y;
    var y_1 = Math.sin(angle1) * dir_vec.x + Math.cos(angle1) * dir_vec.y;
    //rotate dir_vector by 90 and scale
    var angle2 = Math.PI / 2;
    var x_2 = Math.cos(angle2) * dir_vec.x - Math.sin(angle2) * dir_vec.y;
    var y_2 = Math.sin(angle2) * dir_vec.x + Math.cos(angle2) * dir_vec.y;
    //polygon vertex
    var path = [['M', target.x + x_1 * 1, target.y + y_1 * 1], ['L', center.x + x_1 * 3, center.y + y_1 * 3], ['L', center.x + x_2 * 3, center.y + y_2 * 3], ['L', target.x + x_2 * 1, target.y + y_2 * 1], ['Z']];
    var tick = group.addShape('path', {
      attrs: {
        path: path,
        fill: cfg.color
      }
    });
    return tick;
  }
});

var data = [{
  type: '日本',
  value: 0.56
}, {
  type: '南韓',
  value: 0.59
}];
var chart = new G2.Chart({
  container: 'cognition_4',
  forceFit: true,
  height: 260,
  padding: 'auto'
});
chart.source(data);
chart.coord('polar', {
  startAngle: -10 / 8 * Math.PI,
  endAngle: 2 / 8 * Math.PI,
  radius: 0.75
});
chart.scale('value', {
  min: 0,
  max: 1,
  tickInterval: 1,
  nice: false
});
chart.axis(false);
chart.facet('rect', {
  fields: ['type'],
  showTitle: false,
  eachView: function eachView(view, facet) {
    var data = facet.data[0];
    //指针
    view.point().position('value*1').shape('pointer').color('#d8d8d8').active(false);
    //仪表盘背景
    view.guide().arc({
      zIndex: 0,
      top: false,
      start: [0, 1],
      end: [1, 1],
      style: {
        stroke: '#ebedf0',
        lineWidth: 10
      }
    });
    //仪表盘前景
    view.guide().arc({
      zIndex: 1,
      start: [0, 1],
      end: [data.value, 1],
      style: {
        stroke: '#db4c3c',
        lineWidth: 10
      }
    });
    //仪表盘信息
    var percent = parseInt(data.value * 100);
    view.guide().html({
      position: ['50%', '75%'],
      html: '<div class="g2-guide-html"><p class="title">' + data.type + '</p><p class="value">' + percent + '%</p></div>'
    });
  }
});
chart.render();
