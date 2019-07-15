data = [['倉敷', '2016', '4', '119', '143', '1449', '546', '428', '4800', '4752', '1093', '1378', '713', '5892', '21313'],
        ['倉敷', '2016', '5', '119', '143', '737', '6225', '6273', '4063', '4039', '1236', '665', '95', '3231', '26825'],
        ['倉敷', '2016', '6', '24', '71', '333', '2685', '2804', '523', '499', '1117', '642', '119', '689', '9504'],
        ['倉敷', '2016', '7', '24', '71', '285', '95', '143', '1069', '903', '1140', '523', '143', '1069', '5465'],
        ['倉敷', '2016', '8', '48', '24', '48', '119', '119', '285', '285', '1164', '665', '119', '285', '3160']
      ]

      var array = [119, 143, 1449, 546, 428, 4800, 4752, 1093, 1378, 713, 5892];

      array.sort(function(a,b){
          return (a < b ? 1 : -1);
        });

var column_name = ['名', '年度', '月', '制服冬上', '制服冬下', 'Yシャツ', `制服夏上`, '制服夏下', '体操服上', '体操服下', '靴下', 'シューズ', '帽子', '体操帽', '合計']

function _show_chart(dom){
  var myPieChart = new Chart(dom, {
 type: 'pie',
 data: {
   labels: ['制服冬上', '制服冬下', 'Yシャツ', `制服夏上`, '制服夏下', '体操服上', '体操服下', '靴下', 'シューズ', '帽子', '体操帽'],
   datasets: [{
       backgroundColor: [
           "#e2ecff",
           "#d2ecff",
           "#c2ecff",
           "#a2ecff",
           "#82ecff",
           "#62ecff",
           "#42ecff",
           "#22ecff",
           "#19e3ff",
           "#18c3ff",
           "#10acff",
       ],
       data: array
   }]
 },
 options: {
   responsive: true,
   maintainAspectRatio: false,
   title: {
     //display: true,
     text: '血液型 割合'
   }
 }
});
}

/*
// Define a plugin to provide data labels
Chart.plugins.register({
    afterDatasetsDraw: function (chart, easing) {
        // To only draw at the end of animation, check for easing === 1
        var ctx = chart.ctx;

        chart.data.datasets.forEach(function (dataset, i) {
            var meta = chart.getDatasetMeta(i);
            if (!meta.hidden) {
                meta.data.forEach(function (element, index) {
                    // Draw the text in black, with the specified font
                    ctx.fillStyle = 'rgb(0, 0, 0)';

                    var fontSize = 16;
                    var fontStyle = 'normal';
                    var fontFamily = 'Helvetica Neue';
                    ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

                    // Just naively convert to string for now
                    //var dataString = dataset.data[index].toString();
                    var dataString = chart.data.labels[index];

                    // Make sure alignment settings are correct
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';

                    var padding = 5;
                    var position = element.tooltipPosition();
                    ctx.fillText(dataString, position.x, position.y - (fontSize / 2) - padding);
                });
            }
        });
    }
});
*/
