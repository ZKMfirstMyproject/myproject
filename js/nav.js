$(function(){
	'use strict';
	$(".sub-navigation").css("display", "none");
    var sidebar = $('aside.left-panel');
    sidebar.toggleClass('collapsed');
	$("ul.treeview-menu").addClass('hidden');
	$("#navbar-toggle").on('click', function(){
		sidebar.toggleClass('collapsed');
   		$("ul.sidebar-one > li").addClass('tip-disable');
			if(sidebar.hasClass('collapsed')){
				if($(".content").hasClass('b')) {
					$(".content").removeClass('b');
					$(".content").addClass('a');
				}else {
					$(".content").removeClass('b');
					$(".content").removeClass('contentNoClassCollapsed');
					$(".content").addClass('contentHasClassCollapsed');
				}
				$("ul.sidebar-one > li").removeClass('tip-disable');
			}else{
				if($(".content").hasClass('a')){
					$(".content").removeClass('a');
					$(".content").addClass('b');
				}else {
					$(".content").removeClass('contentHasClassCollapsed');
					$(".content").addClass('contentNoClassCollapsed');
				}
			}
	});
	//二级菜单收起
	$("#sidebar-subnav-collapse").on('click', function(){
		if($(".content").hasClass('a')){
			$(".sub-navigation").hide();
			$(".content").removeClass('a');
		}else if ($(".content").hasClass('b') && !sidebar.hasClass('collapsed')) {
			$(".sub-navigation").hide();
			$(".content").removeClass('b');
			$(".content").addClass('contentNoClassCollapsed');


		}else if ($(".content").hasClass('b') && sidebar.hasClass('collapsed')) {
			$(".sub-navigation").hide();
			$(".content").removeClass('b');
			$(".content").addClass('a');
		}


	});

	$(document).ready(function(){
			$("nav.sub-navigation").niceScroll({
						cursorcolor: '#8e909a',
						cursorborder: '0px solid #fff',
						cursoropacitymax: '0.5',
						cursorborderradius: '0px'
				});
	});

  //treeview active
	$("ul.sidebar-one li.nav-item").click(function(){
		$("ul.second-mune").each(function(){
			if(!($(this).hasClass('hidden'))){
				$(this).addClass('hidden');
			}
			$("li.nav-item").removeClass('active');
		});
		if(sidebar.hasClass('collapsed') && $(".content").hasClass('contentHasClassCollapsed')){
			$(".content").removeClass('contentHasClassCollapsed');
			$(".sub-navigation").css("display", "block");
			var index = $("li.nav-item").index(this);
			$(this).addClass('active');
			var text = $(this).text();
			$('span.sidebar-subnav-title').html(text);
			if($("ul.second-mune").length>index &&  $("ul.second-mune").eq(index).find('li.cascade').length>0){
				$("ul.second-mune").eq(index).removeClass('hidden');
				$(".sub-navigation").css("display", "block");
				$(".content").addClass('a');
			}else {
					$(".sub-navigation").css("display", "none");
					$(".content").removeClass('contentHasClassCollapsed');
			}
		}else if (sidebar.hasClass('collapsed') && !$(".content").hasClass('contentHasClassCollapsed')) {
			var index = $("li.nav-item").index(this);
			$(this).addClass('active');
			var text = $(this).text();
			$('span.sidebar-subnav-title').html(text);
			if($("ul.second-mune").length>index && $("ul.second-mune").eq(index).find('li.cascade').length>0){
				$("ul.second-mune").eq(index).removeClass('hidden');
				$(".sub-navigation").css("display", "block");

				$(".content").addClass('a');
			}else {
					$(".sub-navigation").css("display", "none");
					$(".content").removeClass('a');
			}


		}else {
			$(".content").removeClass('contentNoClassCollapsed');
			$(".sub-navigation").css("display", "block");
			var index = $("li.nav-item").index(this);
			$(this).addClass('active');
			var text = $(this).text();
			$('span.sidebar-subnav-title').html(text);
			if($("ul.second-mune").length>index &&  $("ul.second-mune").eq(index).find('li.cascade').length>0){
				$("ul.second-mune").eq(index).removeClass('hidden');
				$(".sub-navigation").css("display", "block");

				$(".content").addClass('b');
			}else {
					$(".sub-navigation").css("display", "none");
					$(".content").removeClass('b');
					$(".content").addClass('contentNoClassCollapsed');
			}
		}

  });
	  var animationSpeed = 300;
	  $("nav.sub-navigation").on('click', 'li a', function(e) {
	    var $this = $(this);
	    var checkElement = $this.next();

	    if (checkElement.is('.treeview-menu') && checkElement.is(':visible')) {
	      checkElement.slideUp(animationSpeed, function() {
	      });
	      checkElement.parent("li").removeClass("treeview active");
	    }
	    else if ((checkElement.is('.treeview-menu')) && (!checkElement.is(':visible'))) {
	      var parent = $this.parents('ul');
	      var ul = parent.find('ul:visible').slideUp(animationSpeed);
	      var parent_li = $this.parent("li");
	      checkElement.slideDown(animationSpeed, function() {
	        parent.find('li').removeClass('treeview active');
	        parent_li.addClass('treeview active');
	      });
	    }
			else if (!checkElement.is('.treeview-menu') && $this.parent("li").is('.cascade')) {
				var parent_li = $this.parent("li");
				var parent = $this.parents('ul');
				var ul = parent.find('ul:visible').slideUp(animationSpeed);
					parent.find('li').removeClass('treeview active');
					parent_li.addClass('treeview active');
			}
			else if (!checkElement.is('.treeview-menu') && !$this.parent("li").is('.cascade')) {
				var parent_li = $this.parent("li");
				var parent = $this.parents('ul.treeview-menu');
				parent.find('li').removeClass('treeview active');
				parent_li.addClass('treeview active');
			}
	    if (checkElement.is('.treeview-menu')) {
	      e.preventDefault();
	    }
	  });










});//总函数结束