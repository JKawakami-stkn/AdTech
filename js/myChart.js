var myChartOne =　{
  type: 'bar', //棒グラフ ※typeに設定したらチャートを追加できる
  data: {
    datasets: [],
    labels: [   '制服冬上', '制服冬下', 'Yシャツ','制服夏上',
                '制服夏下', '体操服上', '体操服下', '靴下',
                'シューズ', '帽子', '体操帽'
            ]
  },
  options: { //オプション
    title: {
      display: true,
      text: '各店舗の商品別売上',
      fontSize: 25
    },
    scales: { //軸設定
      yAxes: [{ //y軸設定 ※xAxesもある
        ticks: { //最大値最小値設定
          beginAtZero: true
        }
      }]
    },
    responsive: true, //trueにするとレスポンシブにグラフの縦横幅を調整
    //今回は縦幅を指定しているので横幅だけ調整
  }
}


var myChartTwo = {
  type: 'pie',//グラフの指定
  data: {
    datasets: [{
      data: [],
      backgroundColor: [//グラフに描画する色の指定
          "#2490AD",
          "#3CA5B6",
          "#53C5D0",
          "#76DCE4",
          "#C8E8F2",
      ],
      label:'各店舗の売上の割合　単位（千円）',
    }],
    labels: []//ラベル名
  },
  options: {
    title: {
      display: true,
      text: '各店舗の売上の割合　単位（千円）',
      fontSize: 25
    },
    scales: { //軸設定
      // yAxes: [{ //y軸設定 ※xAxesもある
      //     ticks: { //最大値最小値設定
      //         beginAtZero: true
      //     }
      // }]
    },
    responsive: true

  }
}

var myChartThree = {  //myChartFour.data.datasets.
  type: 'line', //棒グラフ ※typeに設定したらチャートを追加できる
  data: {
    datasets: [],
    labels: []
  },
  options: { //オプション
    title: {
      display: true,
      text: '年毎の売り上げ推移',
      fontSize: 25
    },
    scales: { //軸設定
      yAxes: [{ //y軸設定 ※xAxesもある
        ticks: { //最大値最小値設定
          beginAtZero: false
        }
      }]
    },
    responsive: true, //trueにするとレスポンシブにグラフの縦横幅を調整
    //今回は縦幅を指定しているので横幅だけ調整
  }
}


var myChartFour = {  //myChartFour.data.datasets.
  type: 'line', //棒グラフ ※typeに設定したらチャートを追加できる
  data: {
    datasets: [],
    labels: []
  },
  options: { //オプション
    title: {
      display: true,
      text: '月毎の売り上げ推移',
      fontSize: 25
    },
    scales: { //軸設定
      yAxes: [{ //y軸設定 ※xAxesもある
        ticks: { //最大値最小値設定
          beginAtZero: false
        }
      }]
    },
    responsive: true, //trueにするとレスポンシブにグラフの縦横幅を調整
    //今回は縦幅を指定しているので横幅だけ調整
  }
}
/*
var myChartTwo = {
  type: 'pie', //円グラフ ※'doughnut'に指定するとドーナツチャートになる
  data: {
    labels: [],
    datasets: [{
      backgroundColor: [
        "#2490AD",
        "#3CA5B6",
        "#53C5D0",
        "#76DCE4",
        "#C8E8F2",
      ],
      data: []
    }]
  },
  options: { //オプション
    title: {
      display: true,
      text: '各店舗の売上の割合　単位（千円）',
      fontSize: 25
    },
    scales: { //軸設定
      // yAxes: [{ //y軸設定 ※xAxesもある
      //     ticks: { //最大値最小値設定
      //         beginAtZero: true
      //     }
      // }]
    },
    responsive: true
  }
}
*/
function show_chart1(ctx1){
  window.myBar = new Chart(ctx1, myChartOne);
}

function chart1_update(chart1_numlist, chart_colorlist){//毎度初期化して再び入れ直す
  myChartOne.data.datasets = [];//一度初期化
  for(var i = 0; i < chart1_numlist.length; i++){//色を授ける
    for(var j = 0; j < chart1_numlist[i].data.length; j++){
      chart1_numlist[i].backgroundColor.push(chart_colorlist[i]);
    }
  }
  for(i = 0; i < chart1_numlist.length; i++){
    myChartOne.data.datasets.push(chart1_numlist[i]);

  }

  window.myBar.update();
}

/*
var ctx2 = document.getElementById("myChart2").getContext('2d');
*/

function show_chart2(ctx2){
  window.myPie = new Chart(ctx2, myChartTwo);
}


function chart2_update(chart2_numlist){
  var sales_list = [];
  var company_list = [];
  console.log(chart2_numlist);
  for(company_info in chart2_numlist){
    sales_list.push(chart2_numlist[company_info].price);
    company_list.push(chart2_numlist[company_info].name);
  }
  myChartTwo.data.datasets[0].data = sales_list;
  myChartTwo.data.labels = company_list;
  window.myPie.update();
}


function show_chart3(ctx3){
  window.myLine1 = new Chart(ctx3, myChartThree);
}

function chart3_update(chart3_numlist, chart_colorlist){
    myChartThree.data.datasets = [];
    myChartThree.data.labels = [];
    var year = [];//label
    //label作成 時間があれば新たにチャートの下地を作る関数を作ってそこに配置する（他のちゃーとも）
    if(chart3_numlist.length > 0){
      for(company_sales in chart3_numlist[0].sales){//0~2
        year.push(chart3_numlist[0].sales[company_sales].year);
      }
    }


    for(i in chart3_numlist){
      var sales = [];//3年分の売り上げ
      var dataset = {
        label: "", // 店名
        data: [], //年売り上げ数値 50000, 404000, 44000
        type: 'line',
        borderColor: "", //色
        lineTension: 0,
        fill: false
      }
      dataset.label = chart3_numlist[i].name;
      for(j in chart3_numlist[i].sales){
        sales.push(chart3_numlist[i].sales[j].allprice);
      }
      dataset.data = sales;
      dataset.borderColor = chart_colorlist[i];
      myChartThree.data.datasets.push(dataset);
      myChartThree.data.labels = year;
    }
    window.myLine1.update();
    /*
    // label
    dataset.label = chart3_numlist[chart3_numlist.length-1].name;

    // sales
    for(company_sales in chart3_numlist[chart3_numlist.length-1].sales){
        a = chart3_numlist[chart3_numlist.length-1].sales[company_sales];
        sales.push(a.allprice);
    }



    myChartThree.data.labels = year;
    //ここまで
    // color
    dataset.borderColor = chart_colorlist[chart3_numlist.length - 1];

    console.log(dataset.data);
    dataset.data = sales;
    myChartThree.data.datasets.push(dataset);
    myChartThree.data.labels = year;
    window.myLine1.update();
    */
      /*  [{name: "", sales:[ {year: "", allprice:  }, {year: "", allprice:  } ]}] //一つの会社の情報 */
}








function show_chart4(ctx4){
   window.myLine2= new Chart(ctx4, myChartFour);
}

function chart4_update(chart4_numlist, chart_colorlist){
  myChartFour.data.datasets = [];
  myChartFour.data.labels = [];
  var month = [];//label
  //label作成 時間があれば新たにチャートの下地を作る関数を作ってそこに配置する（他のちゃーとも）
  if(chart3_numlist.length > 0){
    for(company_sales in chart4_numlist[0].sales){
      month.push(chart4_numlist[0].sales[company_sales].month);
    }
  }
  for(i in chart4_numlist){
    var sales = [];//3年分の売り上げ
    var dataset = {
      label: "", // 店名
      data: [], //年売り上げ数値 50000, 404000, 44000
      type: 'line',
      borderColor: "", //色
      lineTension: 0,
      fill: false
    }
    dataset.label = chart4_numlist[i].name;
    for(j in chart4_numlist[i].sales){
      sales.push(chart4_numlist[i].sales[j].price);
    }
    dataset.data = sales;
    dataset.borderColor = chart_colorlist[i];
    myChartFour.data.datasets.push(dataset);
    myChartFour.data.labels = month;
  }
  window.myLine2.update();
  /*
  company_info = chart4_numlist[chart4_numlist.length-1];//一番最後に追加されたデータをチャートに渡す
  dataset.label = company_info.name;

  dataset.borderColor = chart_colorlist[chart4_numlist.length-1];
  for(company_sales in chart4_numlist[chart4_numlist.length-1].sales){
    sales.push(chart4_numlist[chart4_numlist.length-1].sales[company_sales].price);
  }
  console.log("sales   "+sales);
  dataset.data = sales;
  console.log(dataset);
  myChartFour.data.datasets.push(dataset);

  myChartFour.data.labels = month;
  */

/*label: 'A店',
  data: [1, 3, 8, 5, 12, 6, 2, 4, 11, 10, 9, 7],
  type: 'line', //折れ線グラフ
  borderColor: '#9FD9F6', //折れ線の色を設定
  lineTension: 0, //0を指定すると直線になる
  fill: false, //線の下をどのように塗りつぶすか ※'origin'で塗りつぶし*/


}





function delete_chart1(chart1_numlist, company_name, chart_colorlist){
  for(data in chart1_numlist){
    //console.log(chart1_numlist[data].label+company_name);
    if(chart1_numlist[data].label == company_name){
      chart1_numlist.splice(data, 1);
      break;
    }
  }
  for(i in chart1_numlist){
    //console.log(chart1_numlist[i].label);
  }
  chart1_update(chart1_numlist, chart_colorlist);
}



function delete_chart2(chart2_numlist, company_name, chart_colorlist){
  for(i in chart2_numlist){
    if(chart2_numlist[i].name == company_name){
      //console.log("削除します");
      chart2_numlist.splice(i, 1);
      break;
    }
  }
  /*
  for(i in chart1_numlist){
    console.log(chart2_numlist[i].name);
  }
  */
  chart2_update(chart2_numlist);
}


function delete_chart3(chart3_numlist, company_name, chart_colorlist){
  for(i in chart3_numlist){
    if(chart3_numlist[i].name == company_name){
      //console.log("削除します");
      chart3_numlist.splice(i, 1);
      break;
    }
  }
  chart3_update(chart3_numlist, chart_colorlist);
  /*
  for(i in chart3_numlist){
    console.log(chart3_numlist[i].name);
  }
  */
}


function delete_chart4(chart4_numlist, company_name, chart_colorlist){
  for(i in chart4_numlist){
    if(chart4_numlist[i].name == company_name){
      console.log("削除します");
      chart4_numlist.splice(i, 1);
      break;
    }
  }
  chart4_update(chart4_numlist, chart_colorlist);
}
