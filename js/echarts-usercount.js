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
	title:{
		text:['{a|受害用户}\x0d\x0d' + '{b|10,000}'],
		backgroundColor:'#f5f6f8',
		left:'center',
		padding:[5,10],
		textStyle: {
            
            rich: {
			    a: {fontSize: 14,color:'#000',},
			    b: {fontSize: 18,color:'#e83701',},
            }
        }
	},
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
var myChart2 = echarts.init(document.getElementById('radar-box61'));
	var option2 = {
    	tooltip: {
    		trigger: 'item',
		    backgroundColor: '#010204',
		    padding:10,
		    position: function (point, params, dom, rect, size) {
		       	// 鼠标右上
		      	return [point[0]+20, point[1] - 90];
    		},
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
	        name: '受害类型',
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
 	myChart2.setOption(option2);			

	var myChart3 = echarts.init(document.getElementById('bar-box61'));
var datav=[60,65,72,80,88];
var option3 = {
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
        top:'5%',
        left: 0,
        right: 0,
        bottom: 0,
        containLabel: true
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
			data: ['13563173151','13563173152','13563173153','13563173154', '13563173155'],
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
            data: ['13563173151','13563173152','13563173153','13563173154', '13563173155'],
        }
    ],
    series: [{
            name: '通话次数TOP',
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

	myChart3.setOption(option3);

	var myChart4 = echarts.init(document.getElementById('bar-box62'));
//var datav=[60,65,72,80,88];
var option4 = {
   color: ['#4b90e2'],
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
        top:'5%',
        left: 0,
        right: 0,
        bottom: 0,
        containLabel: true
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
			data: ['13563173151','13563173152','13563173153','13563173154', '13563173155'],
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
            data: ['13563173151','13563173152','13563173153','13563173154', '13563173155'],
        }
    ],
    series: [{
            name: '通话时长TOP',
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



	var myChart6 = echarts.init(document.getElementById('scatter-box62'));

var scatterdata ={
		"type": "scatter",
		"data": [
			[56.7,"2017-01-03 00:53:59"],
			[45.3,"2017-01-03 01:57:51"],
			[69.5,"2017-01-03 02:57:51"],
			[51.9,"2017-01-03 03:44:21"],
			[58.1,"2017-01-03 04:36:26"],
			[60.2,"2017-01-03 05:27:32"],
			[51.9,"2017-01-03 06:44:21"],
			[58.1,"2017-01-03 07:36:26"],
			[60.2,"2017-01-03 08:27:32"],
			[56.7,"2017-01-03 09:53:59"],
			[45.6,"2017-01-03 10:57:51"],
			[45.8,"2017-01-03 11:57:51"],
			[65.8,"2017-01-03 11:37:51"],
			[69.5,"2017-01-03 12:57:51"],
			[69.5,"2017-01-03 13:57:51"],
			[51.9,"2017-01-03 14:44:21"],
			[51.9,"2017-01-03 15:44:21"],
			[58.1,"2017-01-03 16:36:26"],
			[60.2,"2017-01-03 17:27:32"],
			[28.1,"2017-01-03 16:56:26"],
			[10.2,"2017-01-03 17:57:32"],
			[56.1,"2017-01-03 18:38:09"],
			[73.3,"2017-01-03 19:38:09"],
			[68.7,"2017-01-03 20:38:09"],
			[60.2,"2017-01-03 21:27:32"],
			[56.1,"2017-01-03 22:38:09"],
			[73.3,"2017-01-03 23:38:09"]
			],
	};
var option6 = {
        grid: {
            left: '3%',
            right: '5%',
            bottom: '3%',
            top: '20%',
            containLabel: true
        },
        tooltip: {
            trigger: 'item',
            showDelay: 0,
            formatter: function(params) {
                if (params.value.length > 1) {
                    return params.seriesName + ' :<br/>' +
                        params.value[0] + ' ' +
                        params.value[1] + ' ';
                } else {
                    return params.seriesName + ' :<br/>' +
                        params.name + ' : ' +
                        params.value + 'kg ';
                }
            },
            axisPointer: {
                show: true,
                type: 'cross',
                lineStyle: {
                    type: 'dashed',
                    width: 1
                }
            }
        },

        yAxis: [{
            type: 'time',
//          name: '时间',
            scale: true,

            axisTick: {show:false},
            axisLine:{show:false},
            splitLine:{lineStyle: {color: '#E1E3E4'}},
            axisLabel: {
            	color: '#3E4956',
                formatter: function (value, index) {
	                var date = new Date(value);
	                var texts = [date.getHours(), date.getMinutes()?date.getMinutes():'00'];
	                return texts.join('：');
            	}
            },
        }],
        xAxis: [{
            type: 'value',
//          name: '区间百分比',
            scale: true,
            min:0,
            max:100,
            splitNumber:5,
            axisLabel: {
            	color: '#3E4956',
                formatter: '{value}'
            },
            axisTick: {show:false},
            splitLine: {show:false},
            axisLine:{lineStyle: {color: '#E1E3E4'}},

        }],
        series: scatterdata
    };
myChart6.setOption(option6);

var myChart5 = echarts.init(document.getElementById('box63'));
var itemStyle = {
    normal: {
    },
    emphasis: {
        barBorderWidth: 1,
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: 'rgba(0,0,0,0.5)'
    }
};

var option5 = {
    color:['#990000','#ff0000','#ff9900','#ffff00'],
    legend: {
        data: ['呼入电话', '呼出电话', '收到短信', '发送短信'],
        left: 'center',
        bottom:0,
        itemWidth:15,
        itemHeight:15,
    },
	tooltip: {},
    xAxis: {
        data: ['3：00','6：00','9：00','11：00','14：00','17：00','21：00','24：00'],
        silent: false,
        axisLine: {onZero: true,lineStyle: {color: '#E1E3E4'}},
        splitLine: {show: false},
        splitArea: {show: false},
        axisTick: {show:false},
        axisLabel: {color: '#3E4956'},
    },
    yAxis: {
    	type:'value',
        splitArea: {show: false},
        axisTick: {show:false},
        axisLine:{lineStyle: {color: '#E1E3E4'}},
        axisLabel: {color: '#3E4956'},
    },
    grid: {
    	top:'5%',
        left: '5%',
        right:'5%',
        bottom:'15%',
        containLabel: true
    },

    series: [
        {
            name: '呼入电话',
            type: 'bar',
            stack: '总量1',
            barWidth: 15,
	        barGap: 1,
	        barCategoryGap: 10,
            itemStyle: itemStyle,
            data: [401,250,320,190,380,360,200,108]
        },
        {
            name: '呼出电话',
            type: 'bar',
            stack: '总量1',
            barWidth: 15,
	        barGap: 1,
	        barCategoryGap: 10,
            itemStyle: itemStyle,
            data: [-110,-250,-390,-255,-480,-440,-240,-120]
        },
        {
            name: '收到短信',
            type: 'bar',
            stack: '总量2',
            barWidth: 15,
	        barGap: 1,
	        barCategoryGap: 10,
            itemStyle: itemStyle,
            data: [270,200,100,470,360,460,410,320]
        },
        {
            name: '发送短信',
            type: 'bar',
            stack: '总量2',
            barWidth: 15,
	        barGap: 1,
	        barCategoryGap: 10,
            itemStyle: itemStyle,
            data: [-370,-200,-100,-280,-210,-270,-240,-190]
        }
    ]
};

	myChart5.setOption(option5);



	window.onresize = function() {
		myChart1.resize();
		myChart2.resize();
		myChart3.resize();
		myChart4.resize();
		myChart6.resize();
		myChart5.resize();
	};

});