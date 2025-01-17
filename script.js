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
    const tempArray1 = []; const tempArray2 = [];
    const tempArray3 = []; const tempArray4 = [];    
    const tempArray5 = []; const tempArray6 = [];
    const tempArray7 = [];

    // データをforループさせて新しい配列に転置する
    for (var i = 1 ; i < graphData.length - 1 ; i++) {
        tempArray1.push(graphData[i][0]);
        tempArray2.push(graphData[i][1]);
        tempArray3.push(graphData[i][2]);
        tempArray4.push(graphData[i][3]);
        tempArray5.push(graphData[i][4]);
        tempArray6.push(graphData[i][5]);
        tempArray7.push(graphData[i][6]);
    }   

    timedata.push(tempArray1);
    swadata.push(tempArray2);
    swtdata.push(tempArray3);
    yrdata.push(tempArray4);
    sadata.push(tempArray4);
    radata.push(tempArray5);
    pidata.push(tempArray6);
}

// グラフを描画するための関数
function processGraph(canId,labeldata,graphdata,xlabel,ylabel) {
    var ctx = document.getElementById(canId);  

    const plotObject = processObjectCreate(labeldata,graphdata);

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

function processObjectCreate(labeldata,graphdata) {
    const colormap = ["red","blue","green","olive","purple","black"];
    let labelname = "";
    const dataset = [];
    const result = {};

    result.labels = labeldata[0];

    for (var i = 0; i < labeldata.length ; i++) {
        labelname = `Data${i+1}`;
        createDataset(dataset,labelname,graphdata[i],colormap[i]);
    }

    result.datasets = dataset;
    return result;
}

function createDataset(dataset,labelname,graphData,color) {
    const tempdataset = {};

    tempdataset.label = labelname
    tempdataset.data = graphData.map(Number);
    tempdataset.borderColor = color;

    dataset.push(tempdataset);
}
