var data = [{
  year: '2011',
  type: '印度',
  value: 32
}, {
  year: '2011',
  type: '巴西',
  value: 20
}, {
  year: '2011',
  type: '美國',
  value: 15
}, {
  year: '2011',
  type: '比利時',
  value: 12
}, {
  year: '2011',
  type: '南非',
  value: 10
},  {
  year: '2016',
  type: '印度',
  value: 32
}, {
  year: '2016',
  type: '巴西',
  value: 19
}, {
  year: '2016',
  type: '美國',
  value: 34
}, {
  year: '2016',
  type: '比利時',
  value: 13
}, {
  year: '2016',
  type: '南非',
  value: 25
}, {
  year: '2018',
  type: '印度',
  value: 37
}, {
  year: '2018',
  type: '巴西',
  value: 29
}, {
  year: '2018',
  type: '美國',
  value: 26
}, {
  year: '2018',
  type: '比利時',
  value: 25
}, {
  year: '2018',
  type: '南非',
  value: 26
}];

var chart = new G2.Chart({
  container: 'lineChart',
  forceFit: true,
  height: 400,
  padding: 'auto'
});
chart.source(data, {
  year: {
    type: 'timeCat',
    range: [0, 1]
  }
});
chart.axis('year', {
  label: {
    textStyle: {
      fill: '#F2F2F2'
    }
  }
});
chart.axis('value', {
  label: {
    textStyle: {
      fill: '#F2F2F2'
    },
    formatter: function formatter(text) {
      return text.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
    }
  }
});
chart.legend({
  useHtml: true,
  position: 'right',
  reactive: true,
  legendStyle: {
    MARKER_CLASS: {
      width: '18px',
      height: '18px',
      lineHeight: '18px',
      borderRadius: '50px',
      display: 'inline-block',
      marginRight: '4px',
      textAlign: 'center',
      fontZize: '10px',
      marginTop: '3px',
      color: 'white',
      float: 'left',
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: '#F2F2F2'
    }
  },
  containerTpl: '<div class="g2-legend">家長通報孩子為網路霸凌受害者<div class="g2-legend-list"></div></div>',
  itemTpl: function itemTpl(value, color, checked, index) {
    var markerDom = '<div class="g2-legend-marker" style="background-color:' + color + '">' + (index + 1) + '</div>';
    var nameDom = '<div class="legend-item-name">' + value + '</div>';
    return '<div class="g2-legend-list-item" data-value="' + value + '">' + markerDom + nameDom + '</div>';
  }
});
chart.line().position('year*value').color('type', ['#db4c3c', '#fec514', '#9BD782', '#daf0fd', '#7f8da9']);
chart.render();
