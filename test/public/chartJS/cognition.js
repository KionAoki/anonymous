var data = [{
  city: '瑞典',
  type: '有網路霸凌意識',
  value: 0.91
}, {
  city: '瑞典',
  type: '沒有網路霸凌意識',
  value: 0.09
}, {
  city: '義大利',
  type: '有網路霸凌意識',
  value: 0.91
}, {
  city: '義大利',
  type: '沒有網路霸凌意識',
  value: 0.09
}, {
  city: '智利',
  type: '有網路霸凌意識',
  value: 0.89
}, {
  city: '智利',
  type: '沒有網路霸凌意識',
  value: 0.11
},  {
  city: '沙烏地阿拉伯',
  type: '有網路霸凌意識',
  value: 0.37
}, {
  city: '沙烏地阿拉伯',
  type: '沒有網路霸凌意識',
  value: 0.63
}, {
  city: '日本',
  type: '有網路霸凌意識',
  value: 0.56
}, {
  city: '日本',
  type: '沒有網路霸凌意識',
  value: 0.44
}, {
  city: '南韓',
  type: '有網路霸凌意識',
  value: 0.59
}, {
  city: '南韓',
  type: '沒有網路霸凌意識',
  value: 0.41
}];

var chart = new G2.Chart({
  container: 'cognition',
  forceFit: true,
  height: 600,
  padding: [20, 20, 50, 100]
});
chart.source(data, {
  value: {
    max: 1.0,
    min: 0.0,
    nice: false,
    alias: '占比（%）'
  }
});
chart.axis('city', {
  label: {
    textStyle: {
      fill: '#fff',
      fontSize: 12
    }
  },
  tickLine: {
    alignWithLabel: false,
    length: 0
  },
  line: {
    lineWidth: 0
  }
});
chart.axis('value', {
  label: null,
  title: {
    offset: 30,
    textStyle: {
      fontSize: 14,
      fontWeight: 300
    }
  },
  grid: {
    lineStyle: {
      lineWidth: 0
    }
  }
});
chart.legend({
  position: 'top-center'
});
chart.coord().transpose();
chart.intervalStack().position('city*value').color('type*city', function(type, city) {
  var color = void 0;
  if (type === '有網路霸凌意識') color = '#7f8da9';
  if (type === '沒有網路霸凌意識') color = '#ced4d9';
  if (type === '有網路霸凌意識' && city === '沙烏地阿拉伯') color = '#db4c3c';
  if (type === '有網路霸凌意識' && city === '日本') color = '#db4c3c';
  if (type === '有網路霸凌意識' && city === '南韓') color = '#db4c3c';
  return color;
}).size(26).opacity(1).label('value*type', function(val, t) {
  var color = t === "有網路霸凌意識" ? 'white' : '#47494b';
  if (val < 0.05) {
    return false;
  }
  return {
    position: 'middle',
    offset: 0,
    textStyle: {
      fontSize: 12,
      fill: color,
      shadowBlur: 2,
      shadowColor: 'rgba(0, 0, 0, .45)'
    }
  };
});
chart.render();