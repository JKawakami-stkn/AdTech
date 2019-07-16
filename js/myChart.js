/*
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <!-- Chart.jsのCDNを記述 -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.bundle.js"></script>
</head>
<body>

  <h1>Chart.js Sample</h1>
  <!-- まずcanvasを用意する -->
  <canvas id="myChart1" width="500" height=""></canvas><br><br><br><br><br>
  <canvas id="myChart2" width="500" height="500"></canvas><br><br><br><br><br>
  <canvas id="myChart3" width="1200" height="500"></canvas><br><br><br><br><br>


  <script>
*/
/*
var ctx1 = document.getElementById('myChart1').getContext('2d'); //getContext("2D")オブジェクトは線、ボックス、円などを描画するメソッドを保持
ctx1.canvas.height = 450; //キャンバスの縦幅を指定
*/

//チャートオブジェクトの生成
function show_chart1(ctx1){
  var myChartOne = new Chart(ctx1, {
    type: 'bar', //棒グラフ ※typeに設定したらチャートを追加できる
    data: {
      datasets: [{
        label: '売上高(百万)', //グラフのラベル名を設定
        backgroundColor: [
          "#9FD9F6",
          "#61C1BE",
          "#00958D",
          "#005752",
        ],
        data: [20, 13, 5, 1] //グラフの座標を設定
      }],
      labels: ['A店', 'B店', 'C店', 'D店']
    },
    options: { //オプション
      title: {
        display: true,
        text: '各店舗の売上比較',
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
  });
}

/*
var ctx2 = document.getElementById("myChart2").getContext('2d');
*/
function show_chart2(ctx2){
  var myChartTwo = new Chart(ctx2, {
    type: 'pie', //円グラフ ※'doughnut'に指定するとドーナツチャートになる
    data: {
      labels: ["A店", "B店", "C店", "D店"],
      datasets: [{
        backgroundColor: [
          "#9FD9F6",
          "#61C1BE",
          "#00958D",
          "#005752",
        ],
        data: [20, 13, 5, 1]
      }]
    },
    options: { //オプション
      title: {
        display: true,
        text: '各商品の売上の割合',
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
  });
}

/*
var ctx3 = document.getElementById("myChart3").getContext('2d');
*/
function show_chart3(ctx3){
  var myChartThree = new Chart(ctx3, {
    type: 'line', //棒グラフ ※typeに設定したらチャートを追加できる
    data: {
      datasets: [{
          label: 'A店',
          data: [1, 3, 8, 5, 12, 6, 2, 4, 11, 10, 9, 7],
          type: 'line', //折れ線グラフ
          borderColor: '#9FD9F6', //折れ線の色を設定
          lineTension: 0, //0を指定すると直線になる
          fill: false, //線の下をどのように塗りつぶすか ※'origin'で塗りつぶし
        },
        {
          label: 'B店',
          data: [5, 7, 4, 10, 3, 1, 8, 2, 6, 11, 12, 9],
          type: 'line', //折れ線グラフ
          borderColor: '#61C1BE', //折れ線の色を設定
          lineTension: 0, //0を指定すると直線になる
          fill: false, //線の下をどのように塗りつぶすか ※'origin'で塗りつぶし
        },
        {
          label: 'C店',
          data: [1, 12, 3, 10, 5, 8, 7, 6, 9, 4, 11, 2],
          type: 'line', //折れ線グラフ
          borderColor: '#00958D', //折れ線の色を設定
          lineTension: 0, //0を指定すると直線になる
          fill: false, //線の下をどのように塗りつぶすか ※'origin'で塗りつぶし
        },
        {
          label: 'D店',
          data: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
          type: 'line', //折れ線グラフ
          borderColor: '#005752', //折れ線の色を設定
          lineTension: 0, //0を指定すると直線になる
          fill: false, //線の下をどのように塗りつぶすか ※'origin'で塗りつぶし
        }
      ],

      labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    },
    options: { //オプション
      title: {
        display: true,
        text: '売上の推移',
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
  });
}

/* var ctx4 = document.getElementById('myChart4').getContext('2d'); */
function show_chart4(ctx4){
  var myChartFour = new Chart(ctx4, {
    type: 'bar', //棒グラフ ※typeに設定したらチャートを追加できる
    data: {
        datasets: [{
            label: '売上高(百万)', //グラフのラベル名を設定
            backgroundColor: [
              "#9FD9F6",
              "#61C1BE",
              "#005752",
            ],
            data: [20, 13, 16] //グラフの座標を設定
        }],
        labels: ['2016年', '2017年', '2018年']
    },
      options: { //オプション
          title: {
              display: true,
              text: '年別売上比較',
              fontSize: 25
          },
          scales: { //軸設定
              yAxes: [{ //y軸設定 ※xAxesもある
                  ticks: { //最大値最小値設定
                      beginAtZero: true
                  }
              }]
          },
          responsive: false, //trueにするとレスポンシブにグラフの縦横幅を調整
                            //今回は縦幅を指定しているので横幅だけ調整
      }
    });
}
/*
  </script>

</body>
</html>
*/
