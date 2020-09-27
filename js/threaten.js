// JavaScript Document


$(function(){
	'use strict';

	//普通搜索与高级搜索切换
		$("#search-tag1").click(function(){
			 $(".senior-search").show();
		     $(".ordinary-search").hide();

		});

		$("#search-tag2").click(function(){
		  $(".ordinary-search").show();
		  $(".senior-search").hide();
		});

	// 折叠面板下拉icon去除
	$(".re-el-collapse>.el-collapse-item  .el-collapse-item__header > i").remove();
	

});