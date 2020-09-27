$(document).ready(function() {
	'use strict';
var datav=[10,22,35,44,56,60,65,72,80,88];
var option1 = {
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
			data: ['南京','苏州','淮安','盐城', '连云港','无锡','徐州','常州','扬州','泰州'],
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
            data: ['南京','苏州','淮安','盐城', '连云港','无锡','徐州','常州','扬州','泰州'],
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
            data: ["100", "100", "100", "100", "100","100", "100", "100", "100", "100"]
        },
    ]

};	
	
	
var myChart1 = echarts.init(document.getElementById('bar-box11'));
myChart1.setOption(option1);	

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

var option2 = {
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

		var myChart2 = echarts.init(document.getElementById('mapbox'));
		myChart2.setOption(option2);


	var myChart3 = echarts.init(document.getElementById('linepie-box31'));
	var option3 = {
		 color: ['#4765d4','#e1e3e4'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '40%',
        right: '4%',
        bottom: '5%',
        top:'15%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap: false,
            data : ['03-12', '03-13', '03-14', '03-15', '03-16', '03-17', '03-18'],
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
            name:'高危终端',
            type:'line',
            showSymbol: false,
            symbol: 'circle',
        	symbolSize: 2,
            areaStyle: {normal: {color:'#4765d4'}},
            itemStyle: {normal: {color:'#4765d4'}},
            data:[168,228,102,166,122,134,130]
        },{
         hoverAnimation: false, //设置饼图默认的展开样式
         center: ['18%', '50%'],
		 radius: ['46%', '60%'],
         name: '',
         type: 'pie',
        data: [{
            value: 13625,
            name: '占有率',
            tooltip: {
		        trigger: 'item',
		        formatter: "{b} : {c} ({d}%)"
		    },
            label: {
                normal: {
                	position: 'center',
                    formatter: '{a|{c}}\n\n{b|{d}%}',
                    textStyle: {
                    	color:'#3E4956',
                    	rich: {
			                a: {fontSize: 32,color:'#3E4956',},
			                b: {fontSize: 14,color:'#3E4956',},
                      	}
                    }
                 }   
 			},
 			labelLine:{normal:{show:false}},
            itemStyle: {
	            normal: {
	                borderWidth: 3,
	                borderColor: '#ffffff',
	            },
	            emphasis: {
	                borderWidth: 0,
	                shadowBlur: 5,
	                shadowOffsetX: 0,
	                shadowColor: 'rgba(0, 0, 0, 0.2)'
	            }
            }
        }, {
            value: 113625,
            name: '占位',
            label: {normal: {show:false,}},
            labelLine:{normal:{show:false},emphasis:{show:false}},
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#c4ced7',
                    borderWidth: 3,
	                borderColor: '#ffffff',
                },
                emphasis: {
                    color: '#c4ced7'
                }
            },
            hoverAnimation: false
        }]
     }]
	};
	myChart3.setOption(option3);

	var myChart4 = echarts.init(document.getElementById('linepie-box32'));
	var option4 = {
		 color: ['#33e6c2','#e1e3e4'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '40%',
        right: '4%',
        bottom: '5%',
        top:'15%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap: false,
            data : ['03-12', '03-13', '03-14', '03-15', '03-16', '03-17', '03-18'],
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
            name:'高危号码',
            type:'line',
            showSymbol: false,
            symbol: 'circle',
        	symbolSize: 2,
            areaStyle: {normal: {color:'#33e6c2'}},
            itemStyle: {normal: {color:'#33e6c2'}},
            data:[168,228,102,166,122,134,130]
        },{
         hoverAnimation: false, //设置饼图默认的展开样式
         center: ['18%', '50%'],
		 radius: ['46%', '60%'],
         name: '',
         type: 'pie',
        data: [{
            value: 65625,
            name: '占有率',
            tooltip: {
		        trigger: 'item',
		        formatter: "{b} : {c} ({d}%)"
		    },
            label: {
                normal: {
                	position: 'center',
                    formatter: '{a|{c}}\n\n{b|{d}%}',
                    textStyle: {
                    	color:'#3E4956',
                    	rich: {
			                a: {fontSize: 32,color:'#3E4956',},
			                b: {fontSize: 14,color:'#3E4956',},
                      	}
                    }
                 }   
 			},
 			labelLine:{normal:{show:false}},
            itemStyle: {
	            normal: {
	                borderWidth: 3,
	                borderColor: '#ffffff',
	            },
	            emphasis: {
	                borderWidth: 0,
	                shadowBlur: 5,
	                shadowOffsetX: 0,
	                shadowColor: 'rgba(0, 0, 0, 0.2)'
	            }
            }
        }, {
            value: 365625,
            name: '占位',
            label: {normal: {show:false,}},
            labelLine:{normal:{show:false},emphasis:{show:false}},
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#c4ced7',
                    borderWidth: 3,
	                borderColor: '#ffffff',
                },
                emphasis: {
                    color: '#c4ced7'
                }
            },
            hoverAnimation: false
        }]
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