// JavaScript Document
var Main = {

	data() {
		'use strict';
		return {
			daytabs:'second',
  			activeName: 'first',
			currentPage1: 2,
			activeNames: ['1'],
			
			fraudnumber:'',
			swindleduser:'',
			fraudtype:'',
			isswindled:'',
			swindledamount:'',
			value1:'',
			value2:'',
			value3:'',
			radio1:1,
			radio2:3,
			phone:'',
			abnormaltype:'',
			city:'',
			state:'',
			dialogFordisposal:true,
			dialogter:false,
			activeName: 'second',
			checkList: ['IPHONE 6P'],
			fraudlist: [
				  {
				  fraudnumber: '07318893112',
				  swindleduser:'13305916363',
				  fraudtype:'冒充公检法',
				  isswindled:'识破',
				  swindledamount:'12369',
				  time1:'2017/04/09 11:49:12',
				  time2:'2017/04/09 11:49:12'
				},{
				  fraudnumber: '07318893112',
				  swindleduser:'13305916363',
				  fraudtype:'冒充熟人',
				  isswindled:'受骗',
				  swindledamount:'12369',
				  time1:'2017/04/09 11:49:12',
				  time2:'2017/04/09 11:49:12'
				},{
				  fraudnumber: '07318893112',
				  swindleduser:'13305916363',
				  fraudtype:'冒充银行',
				  isswindled:'识破',
				  swindledamount:'12369',
				  time1:'2017/04/09 11:49:12',
				  time2:'2017/04/09 11:49:12'
				},{
				  fraudnumber: '07318893112',
				  swindleduser:'13305916363',
				  fraudtype:'冒充中奖',
				  isswindled:'受骗',
				  swindledamount:'12369',
				  time1:'2017/04/09 11:49:12',
				  time2:'2017/04/09 11:49:12'
				},{
				  fraudnumber: '07318893112',
				  swindleduser:'13305916363',
				  fraudtype:'冒充退税',
				  isswindled:'识破',
				  swindledamount:'12369',
				  time1:'2017/04/09 11:49:12',
				  time2:'2017/04/09 11:49:12'
				},{
				  fraudnumber: '07318893112',
				  swindleduser:'13305916363',
				  fraudtype:'冒充公检法',
				  isswindled:'受骗',
				  swindledamount:'12369',
				  time1:'2017/04/09 11:49:12',
				  time2:'2017/04/09 11:49:12'
				},
		  ],
		  abnormallist: [
				  {
				  phone: '13305916363',
				  city:'江苏南京',
				  abnormaltype:'主叫异常',
				  number:'1350个',
				  state:'已处理',
				  time1:'2017/04/09 11:49:12',
				  time2:'2017/04/09 11:49:12'
				},{
				  phone: '13305916364',
				  city:'浙江杭州',
				  abnormaltype:'短信异常',
				  number:'1350条',
				  state:'未处理',
				  time1:'2017/04/09 11:49:12',
				  time2:'2017/04/09 11:49:12'
				},{
				  phone: '13305916365',
				  city:'福建福州',
				  abnormaltype:'开机异常',
				  number:'10天',
				  state:'已处理',
				  time1:'2017/04/09 11:49:12',
				  time2:'2017/04/09 11:49:12'
				},{
				  phone: '13305916363',
				  city:'江苏南京',
				  abnormaltype:'主叫异常',
				  number:'1350个',
				  state:'已处理',
				  time1:'2017/04/09 11:49:12',
				  time2:'2017/04/09 11:49:12'
				},{
				  phone: '13305916364',
				  city:'浙江杭州',
				  abnormaltype:'短信异常',
				  number:'1350条',
				  state:'未处理',
				  time1:'2017/04/09 11:49:12',
				  time2:'2017/04/09 11:49:12'
				},{
				  phone: '13305916365',
				  city:'福建福州',
				  abnormaltype:'开机异常',
				  number:'10天',
				  state:'已处理',
				  time1:'2017/04/09 11:49:12',
				  time2:'2017/04/09 11:49:12'
				},{
				  phone: '13305916363',
				  city:'江苏南京',
				  abnormaltype:'主叫异常',
				  number:'1350个',
				  state:'已处理',
				  time1:'2017/04/09 11:49:12',
				  time2:'2017/04/09 11:49:12'
				},{
				  phone: '13305916364',
				  city:'浙江杭州',
				  abnormaltype:'短信异常',
				  number:'1350条',
				  state:'未处理',
				  time1:'2017/04/09 11:49:12',
				  time2:'2017/04/09 11:49:12'
				},{
				  phone: '13305916365',
				  city:'福建福州',
				  abnormaltype:'开机异常',
				  number:'10天',
				  state:'已处理',
				  time1:'2017/04/09 11:49:12',
				  time2:'2017/04/09 11:49:12'
				}],
				hrisktable: [
				  {
				  time1:'2017/04/09 11:49:12',
				  phone: '13305916363',
				  terminalphone:'89786412345',
				  terminaltype:'IPhONE 6s PLUS',
				  sourceid:'终端识别',
				  sourceaddress:'江苏南京',
				  homecity:'江苏南京',
				  remark:'江苏南京',
				  time2:'2017/04/09 11:49:12',
				  liveness:56,
				},{
				  time1:'2017/04/09 11:49:12',
				  phone: '13305916363',
				  terminalphone:'89786412345',
				  terminaltype:'IPhONE 6s PLUS',
				  sourceid:'行为监测',
				  sourceaddress:'江苏南京',
				  homecity:'江苏南京',
				  remark:'江苏南京',
				  time2:'2017/04/09 11:49:12',
				  liveness:56,
				},{
				  time1:'2017/04/09 11:49:12',
				  phone: '13305916363',
				  terminalphone:'89786412345',
				  terminaltype:'IPhONE 6s PLUS',
				  sourceid:'地区测试',
				  sourceaddress:'江苏南京',
				  homecity:'江苏南京',
				  remark:'江苏南京',
				  time2:'2017/04/09 11:49:12',
				  liveness:56,
				},{
				  time1:'2017/04/09 11:49:12',
				  phone: '13305916363',
				  terminalphone:'89786412345',
				  terminaltype:'IPhONE 6s PLUS',
				  sourceid:'报案数据',
				  sourceaddress:'江苏南京',
				  homecity:'江苏南京',
				  remark:'江苏南京',
				  time2:'2017/04/09 11:49:12',
				  liveness:56,
				},{
				  time1:'2017/04/09 11:49:12',
				  phone: '13305916363',
				  terminalphone:'89786412345',
				  terminaltype:'IPhONE 6s PLUS',
				  sourceid:'机器学习',
				  sourceaddress:'江苏南京',
				  homecity:'江苏南京',
				  remark:'江苏南京',
				  time2:'2017/04/09 11:49:12',
				  liveness:56,
				},{
				  time1:'2017/04/09 11:49:12',
				  phone: '13305916363',
				  terminalphone:'89786412345',
				  terminaltype:'IPhONE 6s PLUS',
				  sourceid:'终端识别',
				  sourceaddress:'江苏南京',
				  homecity:'江苏南京',
				  remark:'江苏南京',
				  time2:'2017/04/09 11:49:12',
				  liveness:100,
				},{
				  time1:'2017/04/09 11:49:12',
				  phone: '13305916363',
				  terminalphone:'89786412345',
				  terminaltype:'IPhONE 6s PLUS',
				  sourceid:'行为监测',
				  sourceaddress:'江苏南京',
				  homecity:'江苏南京',
				  remark:'江苏南京',
				  time2:'2017/04/09 11:49:12',
				  liveness:90,
				},{
				  time1:'2017/04/09 11:49:12',
				  phone: '13305916363',
				  terminalphone:'89786412345',
				  terminaltype:'IPhONE 6s PLUS',
				  sourceid:'地区测试',
				  sourceaddress:'江苏南京',
				  homecity:'江苏南京',
				  remark:'江苏南京',
				  time2:'2017/04/09 11:49:12',
				  liveness:75,
				},{
				  time1:'2017/04/09 11:49:12',
				  phone: '13305916363',
				  terminalphone:'89786412345',
				  terminaltype:'IPhONE 6s PLUS',
				  sourceid:'报案数据',
				  sourceaddress:'江苏南京',
				  homecity:'江苏南京',
				  remark:'江苏南京',
				  time2:'2017/04/09 11:49:12',
				  liveness:50,
				},{
				  time1:'2017/04/09 11:49:12',
				  phone: '13305916363',
				  terminalphone:'89786412345',
				  terminaltype:'IPhONE 6s PLUS',
				  sourceid:'机器学习',
				  sourceaddress:'江苏南京',
				  homecity:'江苏南京',
				  remark:'江苏南京',
				  time2:'2017/04/09 11:49:12',
				  liveness:80,
				}],
				usertable: [
				  {
				  time1:'2017/04/09 11:49:12',
				  phone1: '13305916363',
				  phone2:'18978641234',
				  sourceaddress:'江苏南京',
				  homecity:'江苏南京',
				  type:'冒充公检法',
				  time2:'2017/04/09 11:49:12',
				}, {
				  time1:'2017/04/09 11:49:12',
				  phone1: '13305916363',
				  phone2:'18978641234',
				  sourceaddress:'江苏南京',
				  homecity:'江苏南京',
				  type:'冒充熟人',
				  time2:'2017/04/09 11:49:12',
				},{
				  time1:'2017/04/09 11:49:12',
				  phone1: '13305916363',
				  phone2:'18978641234',
				  sourceaddress:'江苏南京',
				  homecity:'江苏南京',
				  type:'冒充银行',
				  time2:'2017/04/09 11:49:12',
				}, {
				  time1:'2017/04/09 11:49:12',
				  phone1: '13305916363',
				  phone2:'18978641234',
				  sourceaddress:'江苏南京',
				  homecity:'江苏南京',
				  type:'冒充中奖',
				  time2:'2017/04/09 11:49:12',
				}, {
				  time1:'2017/04/09 11:49:12',
				  phone1: '13305916363',
				  phone2:'18978641234',
				  sourceaddress:'江苏南京',
				  homecity:'江苏南京',
				  type:'冒充退税',
				  time2:'2017/04/09 11:49:12',
				},{
				  time1:'2017/04/09 11:49:12',
				  phone1: '13305916363',
				  phone2:'18978641234',
				  sourceaddress:'江苏南京',
				  homecity:'江苏南京',
				  type:'冒充公检法',
				  time2:'2017/04/09 11:49:12',
				}, {
				  time1:'2017/04/09 11:49:12',
				  phone1: '13305916363',
				  phone2:'18978641234',
				  sourceaddress:'江苏南京',
				  homecity:'江苏南京',
				  type:'冒充熟人',
				  time2:'2017/04/09 11:49:12',
				},{
				  time1:'2017/04/09 11:49:12',
				  phone1: '13305916363',
				  phone2:'18978641234',
				  sourceaddress:'江苏南京',
				  homecity:'江苏南京',
				  type:'冒充银行',
				  time2:'2017/04/09 11:49:12',
				}, {
				  time1:'2017/04/09 11:49:12',
				  phone1: '13305916363',
				  phone2:'18978641234',
				  sourceaddress:'江苏南京',
				  homecity:'江苏南京',
				  type:'冒充中奖',
				  time2:'2017/04/09 11:49:12',
				}, {
				  time1:'2017/04/09 11:49:12',
				  phone1: '13305916363',
				  phone2:'18978641234',
				  sourceaddress:'江苏南京',
				  homecity:'江苏南京',
				  type:'冒充退税',
				  time2:'2017/04/09 11:49:12',
				},],
			 
		};//return 结束
	},//data结束

};//main 结束
  
var Ctor = Vue.extend(Main);
new Ctor().$mount('#app');













