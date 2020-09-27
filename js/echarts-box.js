$(document).ready(function() {
	'use strict';

	var myChart1 = echarts.init(document.getElementById('line-box1'));
	var option1 = {
		//	color:["#fff"],
		title: [{
				text: '2059',
				top: '20%',
				left: '4%',
				textStyle: {
					fontSize: '64',
					fontFamily: "HATTEN"
				}
			},
			{
				text: '累计高危终端数',
				top: '68%',
				left: '4%',
				textStyle: {
					color: '#9ea3b4',
					fontSize: '14',
				}
			}
		],
		tooltip: {
			trigger: 'axis',
			backgroundColor: '#010204',
		},
		grid: {
			left: '27%',
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
			name: '累计高危终端数',
			type: 'line',
			smooth: true, 
			symbol:'circle', 
			symbolSize:6,
			itemStyle: {
				normal: {
					color: "#4d71f7",  
					borderColor: "#fff"  
				}
			},
			lineStyle: {
				normal: {
					color: "#4d71f7"   
				}
			},
			data: [120, 132, 101, 134, 90, 130, 110]
		}, ]
	};
	// 使用刚指定的配置项和数据显示图表。
	myChart1.setOption(option1);

	var myChart2 = echarts.init(document.getElementById('line-box2'));
	var	option2 = {
		color:['#3498db','#2ecc71'],
		tooltip : {
			trigger: 'axis',
			backgroundColor: '#010204',
			axisPointer: {
				type: 'cross',
			}
		},
			legend: {
			bottom: "0",
			left: 'center',
			itemHeight:10,
			data: [{
					name: '高频呼出',
					icon: 'rect'
				},
				{
					name: '批量短信',
					icon: 'rect'
				},
			],
		},

			grid: {
				left: '2%',
				right:'2%',
				top:'5%',
				bottom: '18%',
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
					name:'高频呼出',
					type:'line',
					stack: '总量',
					symbol: 'circle',
					symbolSize: 1,
					showSymbol: true,
					areaStyle: {normal: {}},
					data:[40, 30, 26, 50, 36, 12, 53]
				},
				{
					name:'批量短信',
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

	var myChart3 = echarts.init(document.getElementById('line-box3'));
	var	option3 = {
		color:['#6c87ed','#12cbf6'],
		tooltip : {
			trigger: 'axis',
			backgroundColor: '#010204',
			axisPointer: {
				type: 'cross',
			}
		},
			legend: {
			bottom: "0",
			left: 'center',
			itemHeight:10,
			data: [{
					name: '发现',
					icon: 'rect'
				},
				{
					name: '关停',
					icon: 'rect'
				},
			],
		},

			grid: {
				left: '2%',
				right:'2%',
				top:'5%',
				bottom: '18%',
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
					name:'发现',
					type:'line',
					stack: '总量',
					symbol: 'circle',
					symbolSize: 1,
					showSymbol: true,
					areaStyle: {normal: {}},
					data:[40, 30, 26, 50, 36, 12, 53]
				},
				{
					name:'关停',
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

	myChart3.setOption(option3);

	var myChart4 = echarts.init(document.getElementById('bar-box1'));
var datav=[60,65,72,80,88];
var option4 = {
   color: ['#e83701'],
    tooltip: {
        trigger: 'axis',
        backgroundColor: '#010204',
        axisPointer: {
            type: 'line',
            lineStyle:{
            	color:'rgba(150,150,150,.3)',
            	width:30,
            }
        }
    },
    grid: {
        top:'15%',
        left: '5%',
        right: '10%',
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
			data: ['南京','苏州','淮安','盐城', '连云港'],
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
            	//color:'red',
            	formatter: function(val) {
	 					return(val.length > 15 ? (val.slice(0, 14) + "...") : val);
	 				},
                inside: true,
                padding: [-40, 0, 0, -5]
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
            data: ['南京','苏州','淮安','盐城', '连云港'],
        }
    ],
    series: [{
            name: '高危区域TOP',
            type: 'bar',
            barWidth: 15,
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
            barWidth: 15,
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
                	offset:[0,-20],
					formatter:function(d){
						return datav[d.dataIndex]
						}
				}
            },
            tooltip: {
                show: false
            },
            //背景值
            data: ["100", "100", "100", "100", "100"]
        },
    ]

};

	myChart4.setOption(option4);
	
var myChart5 = echarts.init(document.getElementById('radar-box1'));
	var option5 = {
    	tooltip: {
    		trigger: 'item',
		    backgroundColor: '#010204',
		    padding:10,
		    position: function (point, params, dom, rect, size) {
		       	// 鼠标右上
		      	return [point[0]+20, point[1] - 90];
    		},
//  		formatter: function (value, indicator) {
//  			console.log("value:" + value +",indicator:" +indicator)
//  return '【' + value + '】';
//}
    	},
	    radar: {
	        // shape: 'circle',
	        center: ['47%','50%'],
	        radius: '50%',
	        indicator: [
	           { name: '冒充公检法',max: 14},
	           { name: '冒充熟人',max: 14},
	           { name: '冒充领导',max: 14},
	           { name: '冒充中奖',max: 14},
	           { name: '冒充客服',max: 14},
	           { name: '冒充退税',max: 14},
	        ],
	        splitLine:{
	        	lineStyle:{color:'#e1e3e4',}
	        },
	        splitArea: {show: false },
	        axisLine:{ show:false},
	        name:{color:'rgba(0,0,0,1'}

	    },
	    series: [{
	        name: '欺诈类型分布',
	        type: 'radar',
	        symbol: 'circle',
	        symbolSize:4,
	        lineStyle:{ 
	        	normal:{color:'#e1e3e4',opacity:0.0}
	        	},
	        itemStyle: {
                normal: {color: '#e83701'}
            },
            areaStyle: {
                normal: {opacity: 0.8}
            },
	        data : [
	            {
	                value : [12, 8, 9, 2, 6,10],
	                name : '',
	                label:{
	                	normal:{
	                		show:false,
	                	}
	                }
	            },
	        ],
	    }]
	};
 	myChart5.setOption(option5);	

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

var option6 = {
			tooltip: {
				trigger: 'item',
				backgroundColor: '#010204',
//				showDelay: 0,
//				hideDelay: 0,
//				enterable: true,
//				transitionDuration: 0,
//				extraCssText: 'z-index:100',
//				formatter: function(params, ticket, callback) {
//					var res = "";
//					var name = params.seriesName;
//					var value = params.value;
//					var source = params.name;
//					var level = "高级";
//					var updatetime = "2017-11-23 11:00:18";
//					res = "<div style='border-top:5px solid #0066cc;background:#010204;padding:0 30px 10px 20px;font-weight:700;font-size:14;'><p style='color:#0066cc;'>恶意" +
//						name + "</p><p>IP：" +
//						value + "</p><p>来源：" +
//						source + "</p><p>等级：" +
//						level + "</p><p>更新时间：" +
//						updatetime + "</p></div>";
//					return res;
//				}
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
//					symbolSize: function(val) {
//						return((5 + val[2] / 10) * 2) >= 30 ? 30 : (5 + (val[2] / 10) * 2);
//					},
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

		var myChart6 = echarts.init(document.getElementById('mapbox'));
		myChart6.setOption(option6);


	window.onresize = function() {
		myChart1.resize();
		myChart2.resize();
		myChart3.resize();
		myChart4.resize();
		myChart5.resize();
		myChart6.resize();
	};

});