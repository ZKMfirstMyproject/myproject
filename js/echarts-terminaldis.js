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
		text:['{a|疑似终端}\x0d\x0d' + '{b|10,000}'],
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
var myChart2 = echarts.init(document.getElementById('radar-box71'));
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
	var myChart3 = echarts.init(document.getElementById('bar-box71'));
	var option3 = {
		 color: ['#06b790'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '2%',
        right: '5%',
        bottom: '5%',
        top:'20%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['江苏', '湖南', '福建', '山西', '成都', '上海', '广州','北京','安徽','天津'],
            axisTick: {show:false},
            axisLine:{lineStyle: {color: '#E1E3E4'}},
            axisLabel:{ textStyle: {color: '#3E4956'}}
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLine:{show:false},
            axisTick:{show:false},
        }
    ],
    series : [
        {
            name:'',
            type:'bar',
            barWidth: '30%',
            data:[{name:'江苏',value:98,itemStyle:{normal:{color:'#21eabe'}}},
            88,78,65,55,43,35,22,18,9]
        }]
	};
	myChart3.setOption(option3);	

	var myChart4 = echarts.init(document.getElementById('scatter-box72'));

var scatterdata =[
			[56.7,800],
			[45.3,2000],
			[69.5,500],
			[51.9,1200],
			[58.1,3200],
			[60.2,5800],
			[51.9,4300],
			[58.1,1750],
			[60.2,2230],
			[56.7,6660],
			[45.6,7230],
			[45.8,2250],
			[65.8,3638],
			[69.5,5544],
			[69.5,3320],
			[51.9,1100],
			[51.9,333],
			[58.1,4678],
			[60.2,4321],
			[28.1,3123],
			[10.2,7760],
			[56.1,6666],
			[73.3,5678],
			[68.7,5900],
			[60.2,4535],
			[56.1,2100],
			[73.3,300]
			];

var option4 = {
//	color:['#9fdf61','#ffd905']
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
            scale: true,
            splitNumber:5,
			interval:2000,
            axisTick: {show:false},
            axisLine:{show:false},
            splitLine:{lineStyle: {color: '#E1E3E4'}},
            axisLabel: {
            	color: '#3E4956',
            },
        }],
        xAxis: [{
            type: 'value',
            scale: true,
            min:0,
            max:100,
            splitNumber:5,
            axisLabel: {
            	color: '#3E4956',
//              formatter: '{value}'
            },
            axisTick: {show:false},
            splitLine: {show:false},
            axisLine:{lineStyle: {color: '#E1E3E4'}},

        }],
        series: [{
	        type: 'scatter',
	        data: scatterdata,
	        symbolSize: function (scatterdata) {
	        	console.log((scatterdata[1] >6000)?20:10);
	            return (scatterdata[1] >6000)?20:10;
	        },
	        itemStyle: {
	            normal: {
	                shadowBlur: 10,
	                shadowColor: 'rgba(120, 36, 50, 0.5)',
	                shadowOffsetY: 5,
	                color: function (param) {
	                	console.log(param);
	            		return (param.data[1] >6000)?'#ffd905':'#9fdf61';
	        		},
	            }
	        }
	    }]
    };
myChart4.setOption(option4);


	window.onresize = function() {
		myChart1.resize();
		myChart2.resize();
		myChart3.resize();
		myChart4.resize();
	};

});