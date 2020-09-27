$(document).ready(function() {
	'use strict';
	

var geoCoordMap = {
        '南京市':[118.767413, 32.041544],
        '无锡市':[120.301663, 31.574729],
        '徐州市':[117.184811, 34.261792],
        '常州市':[119.946973, 31.772752],
        '苏州市':[120.619585, 31.299379],
        '南通市':[120.864608, 32.016212],
        '连云港市':[119.178821, 34.600018],
        '淮安市':[119.021265, 33.597506],
        '盐城市':[120.139998, 33.377631],
        '扬州市':[119.421003, 32.393159],
        '镇江市':[119.452753, 32.204402],
        '泰州市':[119.915176, 32.484882],
        '宿迁市':[118.275162, 33.963008],
'常熟':[120.43,31.39],
'丹阳':[119.32,32.00],
'东台':[120.19,32.51],
'高邮':[119.27,32.47],
'海门':[121.09,31.53],
'淮阴':[119.02,33.36],
'江都':[119.32,32.26],
'姜堰':[120.08,32.34],
'江阴':[120.17,31.54],
'靖江':[120.17,32.02],
'金坛':[119.33,31.46],
'昆山':[120.57,31.23],
'溧阳':[119.29,31.26],
'邳州':[117.59,34.19],
'启乐':[121.39,31.48],
'如皋':[120.33,32.23],
'太仓':[121.06,31.27],
'泰兴':[120.01,32.10],
'通州':[121.03,32.05],
'吴江':[120.39,31.10],
'兴化':[119.50,32.56],
'新沂':[118.20,34.22],
'徐州':[117.11,34.15],
'扬中':[119.49,32.14],
'宜兴':[119.49,31.21],
'仪征':[119.10,32.16],
'张家港':[120.32,31.52],
    };
var dataval = [
{name:'南京市',value:10},   
{name:'常熟',value:10},   
{name:'常州市',value:10},   
{name:'丹阳',value:10},   
{name:'东台',value:10},   
{name:'高邮',value:10},   
{name:'海门',value:10},   
{name:'淮安市',value:10},   
{name:'淮阴',value:10},   
{name:'江都',value:10},   
{name:'姜堰',value:10},   
{name:'江阴',value:10},   
{name:'靖江',value:10},   
{name:'金坛',value:10},  
{name:'昆山',value:10},   
{name:'连云港市',value:10}, 
{name:'溧阳',value:10},   
{name:'南通市',value:10},   
{name:'邳州',value:10},   
{name:'启乐',value:10},   
{name:'如皋',value:10},   
{name:'宿迁市',value:10},   
{name:'苏州市',value:10},   
{name:'太仓',value:10},   
{name:'泰兴',value:10},   
{name:'泰州市',value:10},   
{name:'通州',value:10},   
{name:'吴江',value:10},   
{name:'无锡市',value:10},   
{name:'兴化',value:10},   
{name:'新沂',value:10},   
{name:'徐州市',value:10},   
{name:'盐城市',value:10},   
{name:'扬中',value:10},   
{name:'扬州市',value:10},   
{name:'宜兴',value:10},   
{name:'仪征',value:10},   
{name:'张家港',value:10}, 
{name:'镇江市',value:10},   
];
var convertData = function(data) {
	var res = [];
	for(var i = 0; i < data.length; i++) {
		var geoCoord = geoCoordMap[data[i].name];
		if(geoCoord) {
			res.push({
				name: data[i].name,
				value: geoCoord.concat(data[i].value),
			});
		}
	}
	return res;
};

var option1 = {
			tooltip: {
				trigger: 'item',
				backgroundColor: '#010204',

			},
			animation: true,
			animationDurationUpdate: 1000,
			animationEasingUpdate: 'cubicInOut',

			geo: {
				name: '威胁情报中心',
				type: 'map',
				map: 'jiangsu',
				roam: true,
				label: {
					normal: {
						show: true
					},
					emphasis: {
						show: false
					}
				},
				itemStyle: {
					normal: {
						areaColor: '#7fbbd5',
						borderColor: '#52a9cc'
					},
					emphasis: {
						areaColor: '#e3e8eb'
					}
				},

			},

			series: [				 				
				{
					name: '反欺诈高危区域',
					type: 'scatter',
					coordinateSystem: 'geo',
					symbol: 'circle',
					symbolSize:8,
					hoverAnimation: true,
					itemStyle: {
						normal: {
							color: '#e83701',
							shadowBlur: 10,
							shadowColor: 'black'
						}
					},
					label: {
						normal: {
							show: false,

						},
						emphasis: {
							show: false
						}

					},
					data: convertData(dataval)
				}, 
				
			]
		};

		var myChart1 = echarts.init(document.getElementById('mapbox'));
		myChart1.setOption(option1);


var myChart2 = echarts.init(document.getElementById('line-box51'));
	var	option2 = {
		color:['#4765d4','#33e6c2'],
		tooltip : {
			trigger: 'axis',
			backgroundColor: '#010204',
			axisPointer: {
				type: 'cross',
			}
		},
			legend: {
			top: 0,
			left: 'center',
			itemHeight:10,
			itemWidth:10,
			itemGap:20,
			data: [{
					name: '通话',
					icon: 'circle'
				},
				{
					name: '短信',
					icon: 'circle'
				},
			],
		},

			grid: {
				left: '2%',
				right:'2%',
				top:'18%',
				bottom: '5%',
				containLabel: true
			},
			xAxis : [
				{
					type : 'category',
					boundaryGap : false,
					data: ['3-21', '3-22', '3-23', '3-24', '3-25', '3-26', '3-27'],
					axisLine: { 
							show: true,
							lineStyle: {color: '#E1E3E4'},
					},
					axisLabel: { textStyle: {color: '#3E4956',},},
				    axisTick: { show: false,},
				}
			],
			yAxis: [{
				type: 'value',
				min: 0,
				max:100,
				splitNumber: 5,
				splitLine: { 
						show: true,
						lineStyle: {color: '#E1E3E4'}
				},
				axisLine: { 
						show: false,
						lineStyle: {color: '#E1E3E4'},
				},
				axisLabel: {textStyle: {color: '#3E4956'},},
				axisTick: { show: false,},
			}],
			series : [
				{
					name:'通话',
					type:'line',
					stack: '总量',
					symbol: 'circle',
					symbolSize: 1,
					showSymbol: true,
					areaStyle: {normal: {}},
					data:[40, 30, 26, 50, 36, 12, 53]
				},
				{
					name:'短信',
					type:'line',
					stack: '总量',
					symbol: 'circle',
					symbolSize: 1,
					showSymbol: true,
					areaStyle: {normal: {}},
					data:[20, 34, 18, 36, 54, 5, 31]
				}
			]
	};

	myChart2.setOption(option2);

	var myChart3 = echarts.init(document.getElementById('line-box52'));
	var option3 = {
		
		tooltip: {
			trigger: 'axis',
			backgroundColor: '#010204',
		},
		grid: {
			left: '2%',
			right: '2%',
			top: '10',
			bottom: '10',
			containLabel: true
		},
		calculable: true,
		xAxis: [{
			type: 'category',
			data: ['3-21', '3-22', '3-23', '3-24', '3-25', '3-26', '3-27'],
			axisLine: { 
					show: true,
					lineStyle: {color: '#E1E3E4'},
			},
			axisLabel: { textStyle: {color: '#3E4956',},},
		    axisTick: { show: false,},
		}],
		yAxis: [{
			type: 'value',
			min: 0,
			max:200,
			splitNumber: 5,
			splitLine: { 
					show: true,
					lineStyle: {color: '#E1E3E4'}
			},
			axisLine: { 
					show: false,
					lineStyle: {color: '#E1E3E4'},
			},
			axisLabel: {textStyle: {color: '#3E4956'},},
			axisTick: { show: false,},
		}],
		series: [{
			name: '终端历史',
			type: 'line',
			smooth: true, 
			symbol:'circle', 
			symbolSize:6,
			itemStyle: {
				normal: {
					color: "#f9b53c",  
					borderColor: "#fff"  
				}
			},
			lineStyle: {
				normal: {
					color: "#f9b53c"   
				}
			},
			data: [120, 132, 101, 134, 90, 130, 110]
		}, ]
	};
	// 使用刚指定的配置项和数据显示图表。
	myChart3.setOption(option3);

	var myChart4 = echarts.init(document.getElementById('bar-box51'));
var datav=[{value:60,itemStyle:{normal:{color:'#50e2c2'}}},
{value:35,itemStyle:{normal:{color:'#4b90e2'}}},
{value:72,itemStyle:{normal:{color:'#fae450'}}},
{value:80,itemStyle:{normal:{color:'#9dde60'}}}];
var option4 = {
	title:{
		left:'center',
		top:0,
		text:'18018818818',
		textStyle:{
			fontSize:28,
			color:'#3e4956'
		}
	},
    tooltip: {
   		show:false
    },
    grid: {
        top:'25%',
        left: '5%',
        right: '5%',
        bottom: 0,
        containLabel: false
    },
    xAxis: [{
        type: 'value',
        position: 'top',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false,
        },

    }],
    yAxis: [{
            type: 'category',
			data: ['交际圈','稳定性','活跃性','平衡性',],
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                inside: true,
                padding: [-30, 0, 0, -5]
            }
        },
        //辅助x轴
        {
            type: 'category',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            },
            data: ['交际圈','稳定性','活跃性','平衡性',],
        }
    ],
    series: [{
            name: '',
            type: 'bar',
            barWidth: '20%',
            itemStyle: {
                normal: {
                    barBorderRadius: 20, //统计条弧度
                },
            },
       data: datav

        },
        //背景
        {
            name: '辅助',
            type: 'bar',
            barWidth: '20%',
            yAxisIndex: 1,
            //颜色透明度
            itemStyle: {
                normal: {
                    color: 'rgba(101, 101, 101,0.1)',
                    barBorderRadius: 20,
                }
            },
            label: {
                normal: {
                    show: true,
                    color:'#000000',
                    position:'insideRight',
                	offset:[0,-15],
					formatter:function(d){
						var value=datav[d.dataIndex].value;
						switch(true){
							case value < 60: 
								return "差";
								break;
							case value >=60 && value < 80 : 
								return "良好";
								break;
							case value >= 80: 
								return "优";
								break;
						}
					//	console.log(datav[d.dataIndex]);
						}
				}
            },
            tooltip: {
                show: false
            },
            //背景值
            data: ["100", "100", "100", "100"]
        },
    ]

};

	myChart4.setOption(option4);


	window.onresize = function() {
		myChart1.resize();
		myChart2.resize();
		myChart3.resize();
		myChart4.resize();
	};

});