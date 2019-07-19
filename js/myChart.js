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
function chart1_update(chart1_numlist){
  myChartOne.data.datasets.push(chart1_numlist[chart1_numlist.length - 1]);
  console.log(myChartOne.data.datasets);

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

      var year = [];//label
      var sales = [];//3年分の売り上げ
      var dataset = {
        label: "", // 店名
        data: [], //年売り上げ数値 50000, 404000, 44000
        type: 'line',
        borderColor: "", //色
        lineTension: 0,
        fill: false
    }

    // label
    dataset.label = chart3_numlist[chart3_numlist.length-1].name;

    // sales
    for(company_sales in chart3_numlist[chart3_numlist.length-1].sales){
        a = chart3_numlist[chart3_numlist.length-1].sales[company_sales];
        sales.push(a.allprice);
    }

    //label作成 時間があれば新たにチャートの下地を作る関数を作ってそこに配置する（他のちゃーとも）
    for(company_sales in chart3_numlist[0].sales){//0~2
      year.push(chart3_numlist[0].sales[company_sales].year);
    }

    myChartThree.data.labels = year;
    //ここまで
    // color
    dataset.borderColor = chart_colorlist[chart3_numlist.length + 1];

    console.log(dataset.data);
    dataset.data = sales;
    myChartThree.data.datasets.push(dataset);
    myChartThree.data.labels = year;
    window.myLine1.update();

      /*  [{name: "", sales:[ {year: "", allprice:  }, {year: "", allprice:  } ]}] //一つの会社の情報 */




}








function show_chart4(ctx4){
   window.myLine2= new Chart(ctx4, myChartFour);
}
function chart4_update(chart4_numlist, chart_colorlist){
  var month = [];//label
  var sales = [];//3年分の売り上げ
  var dataset = {
    label: "",
    data: [],
    type: 'line',
    borderColor: '',
    lineTension: 0,
    fill: false
  }


  //label作成 時間があれば新たにチャートの下地を作る関数を作ってそこに配置する（他のちゃーとも）
  for(company_sales in chart4_numlist[0].sales){
    month.push(chart4_numlist[0].sales[company_sales].month);
  }

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

  window.myLine2.update();
/*label: 'A店',
  data: [1, 3, 8, 5, 12, 6, 2, 4, 11, 10, 9, 7],
  type: 'line', //折れ線グラフ
  borderColor: '#9FD9F6', //折れ線の色を設定
  lineTension: 0, //0を指定すると直線になる
  fill: false, //線の下をどのように塗りつぶすか ※'origin'で塗りつぶし*/


}





function delete_chart1(chart1_numlist, company_name){
  console.log("company_name   "+company_name);
  /*[[var newDataset = {
    backgroundColor: [],
    data: [],
    label: "",
    }]]*/







}
