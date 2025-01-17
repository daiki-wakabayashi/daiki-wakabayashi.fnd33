'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// CSVデータを処理する関数
function processData(csvData) {
    // CSVデータを行に分割
    const rows = csvData.split("\r\n");
    // 各行をカンマで分割し、2次元配列に変換
    const data = rows.map(row => row.split(","));    
    // データを返す
    return data;
}

// 読み込んだCSVデータをグラフ用に処理する関数
function processGraphDataCreate(graphData) {
    // データをforループさせて新しい配列に転置する
    for (var i = 1 ; i < graphData.length - 1 ; i++) {
    timedata.push(graphData[i][0]);
    swadata.push(graphData[i][1]);
    swtdata.push(graphData[i][2]);
    yrdata.push(graphData[i][3]);
    xdata.push(graphData[i][5]);
    ydata.push(graphData[i][6]);
    }
}

// グラフを描画するための関数
function processGraph(canId,labelname,labeldata,graphdata,xlabel,ylabel) {
    var ctx = document.getElementById(canId);  

    const plotObject = processObjectCreate(labelname,labeldata,graphdata);

    var myGraph = new Chart(ctx,{
    type: 'line',
    data: plotObject,

    options: {
        scales: {
            x:{
                display: true,
                title:{
                    display: true,
                    text: xlabel
                }
            },  
            y:{
                display: true,
                title:{
                    display: true,
                    text: ylabel
                },      
            },
        }
    }
    }); 
}

function processObjectCreate(labelname,labeldata,graphdata) {
    const result = {
        labels: labeldata,
        datasets: [{
        label: labelname,
        data: graphdata.map(Number),
        borderColor: 'rgba(60, 190, 20, 0.8)'
        }],
    };
    return result;
}
