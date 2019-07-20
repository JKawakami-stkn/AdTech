
chart1_coloum = [   '名', '年度', '月', '制服冬上', '制服冬下', 'Yシャツ',
        '制服夏上', '制服夏下', '体操服上', '体操服下', '靴下',
        'シューズ', '帽子', '体操帽', '合計'
    ];
chart1_coloum = [  '名','制服冬上', '制服冬下', 'Yシャツ','制服夏上',
                    '制服夏下', '体操服上', '体操服下', '靴下',
                    'シューズ', '帽子', '体操帽'
                ];

function test(data){

        console.log(data[0])
        var sales_sum = 0;

        for(i in data){//iは数値が入っている
            //console.log(data[i]);
            sales_sum += Number(data[i][14]);
        }
        //console.log("売り上げ"+sales_sum+"千円");
    return
}

//chart1各店舗の商品ごとの売上比較用に整形する関数
function compersion_bar(data, chart1_numlist) {
  var shop_name = "";
  var sales_sumlist = [0,0,0,0,0,0,0,0,0,0,0];
  var newDataset = {
    backgroundColor: [],
    data: [],
    label: "",
  };
  shop_name = data[1][0];//店名獲得
  newDataset.label = shop_name;
  for(sale in data){
    for(i = 3,　j = 0; i <= 13; i++, j++){
      sales_sumlist[j] += Number(data[sale][i]);
    }
  }
  newDataset.data = sales_sumlist;
  console.log(sales_sumlist);
  chart1_numlist.push(newDataset);
  console.log(chart1_numlist);
}


//chart2　各店舗の3年分の売り上げの合計の割合
function compersion_pie(data, chart2_numlist){
  var image = {name:"",　price:0};

  image.name = data[1][0];//店名代入
  for(i in data){
      image.price += Number(data[i][14]);
  }
  chart2_numlist.push(image);
  if(chart2_numlist.length >= 2){
    chart2_numlist.sort(function(a,b){
      if(a.price > b.price) return -1;

      if(a.price < b.price) return 1;

      return 0;
    });
  }

}





function compersion_line1(data, chart3_numlist){
  image = {name:"", sales:[]};
  image.name = data[1][0];
  var sales_year_info = {year:"", allprice:0};
  sales_year_info.year = data[0][1]
  for(i in data){//0~35
    if(sales_year_info.year == data[i][1]){
      sales_year_info.allprice += Number(data[i][14]);
    }else{
      console.log(sales_year_info);
      image.sales.push(sales_year_info);
      var sales_year_info = {year:"", allprice:0};
      sales_year_info.year = data[i][1];
      sales_year_info.allprice += Number(data[i][14]);
    }

  }
  image.sales.push(sales_year_info);
  chart3_numlist.push(image);
  /*
  for(i in chart3_numlist){
    var daat = chart3_numlist[i];
    console.log("daatname   "+daat.name);
    for(test in daat.sales){
      console.log(daat.sales[test].year);
      console.log(daat.sales[test].allprice);
    }

  }
  */
}

function compersion_line2(data, chart4_numlist){
  var image = {name:"", sales:[]};
  var date = "";
  image.name = data[1][0];
  for(i in data){
    var sales_Month_info = {month:"",price:0};
    date = data[i][1]+"年 "+data[i][2]+"月";
    sales_Month_info.month = date;
    sales_Month_info.price = data[i][14];
    image.sales.push(sales_Month_info);
  }
  chart4_numlist.push(image);
  console.log("chart4_numlist   "+chart4_numlist);

}
