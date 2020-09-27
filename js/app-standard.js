// JavaScript Document
var Main = {

	data() {
		'use strict';
		  return {
 			 dialogverify: false,
 			 dialoglogin:false,
 			 input:'',
 			 activeName: 'second',
      };
	}
};
  
var Ctor = Vue.extend(Main);
new Ctor().$mount('#app');