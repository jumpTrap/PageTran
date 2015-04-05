//判断正整数
var isNaNZhen = /^[1-9]+[0-9]*]*$/;
var parameter = [];
parameter.startDate = "startDate";
parameter.endDate = "endDate";
var toDay = new Date();
/**
 * 两数获取百分比
 * 
 * @param num
 * @param total
 * @returns
 */
function getPercent(num, total) {
	num = parseFloat(num);
	total = parseFloat(total);
	if (isNaN(num) || isNaN(total)) {
		return "-";
	}
	return total <= 0 ? "0%" : (Math.round(num / total * 10000) / 100.00 + "%");
}
/**
 * 检测用户是否过期
 */
function checkUserLogion() {
	var token = getCookie("token");
	if (token == null) {
		for (var i = 0; i < uriArr.length; i++) {
			if (url.indexOf(uriArr[i]) > 0) {
				return;
			}
		}
		alert("您身份过期或者再别处登陆,点击跳转到登陆页面");
		location.href = path + "/user/login/page/html.do";
	}
	setInterval(checkUserLogion, 1000 * 30);// 这里的1000表示1秒有1000毫秒,1分钟有60秒,5表示总共5分钟
}
/**
 * 柱状表单
 * 
 * @param to
 * @param p
 */
function postwith(to, p) {
	var $post = $("<form></form>");
	$post.attr("methed", "post");
	$post.attr("action", to);
	for ( var k in p) {
		if (k == 'userId') {
			sessionStorage.noUserId = p[k];
		}
		var $input = $("<input type='text' name=" + k + " value=" + p[k]
				+ "></input>");
		$post.append($input);
	}
	$post.submit();
}
/**
 * 迭代添加html缓存 并跳转
 * 
 * @param url
 * @param jsonP
 */
function h5Local(url, jsonP) {
	for ( var k in jsonP) {
		sessionStorage.setItem(k, jsonP[k]);
	}
	window.location.href = url;
}
function JsonSort(json, key) {
	for (var j = 1, jl = json.length; j < jl; j++) {
		var temp = json[j], val = temp[key], i = j - 1;
		while (i >= 0 && json[i][key] > val) {
			json[i + 1] = json[i];
			i = i - 1;
		}
		json[i + 1] = temp;

	}
	return json;
}

// 浏览器返回
function goBack() {
	sessionStorage.clear();
}
/**
 * 获取头像
 * 
 * @param uri
 */
function getLogoUrl(uri) {
	if (uri == null || uri == "") {
		return path + "/viewFile/img/logo/user/userDefault.png";
	}
	var falg = uri.indexOf("http");
	if (falg == 0) {
		return uri;
	} else {
		return "http://" + window.location.host + path + uri;
	}
}
/**
 * 获取头像
 * 
 * @param uri
 */
function getAppLogoUrl(uri) {
	if (uri == null || uri == "") {
		return path + "/viewFile/img/logo/user/userDefault.png";
	}
	var falg = uri.indexOf("http");
	if (falg == 0) {
		return uri;
	} else {
		return path + uri;
	}
}

// 写cookies
function setCookie(name, value) {
	var Days = 30;
	var exp = new Date();
	exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
	document.cookie = name + "=" + encodeURIComponent(value) + ";expires="
			+ exp.toGMTString() + ";path=/";
}

// 读取cookies
function getCookie(name) {
	var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

	if (arr = document.cookie.match(reg))

		return unescape(arr[2]);
	else
		return null;
}

// 删除cookies
function delCookie(name) {
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval = getCookie(name);
	if (cval != null)
		document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}
function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null)
		return unescape(r[2]);
	return null;
}
// js获取项目根路径，如： http://localhost:8083/uimcardprj
function getRootPath() {
	// 获取当前网址，如： http://localhost:8083/uimcardprj/share/meun.jsp
	var curWwwPath = window.document.location.href;
	// 获取主机地址之后的目录，如： uimcardprj/share/meun.jsp
	var pathName = window.document.location.pathname;
	var pos = curWwwPath.indexOf(pathName);
	// 获取主机地址，如： http://localhost:8083
	var localhostPaht = curWwwPath.substring(0, pos);
	// 获取带"/"的项目名，如：/uimcardprj
	var projectName = pathName
			.substring(0, pathName.substr(1).indexOf('/') + 1);
	return (localhostPaht + projectName);
}
/**
 * 判断str1字符串是否以str2为结束
 * 
 * @param str1
 *            原字符串
 * @param str2
 *            子串
 * @author pansen
 * @return 是-true,否-false
 */
function endWith(str1, str2) {
	if (str1 == null || str2 == null) {
		return false;
	}
	if (str1.length < str2.length) {
		return false;
	} else if (str1 == str2) {
		return true;
	} else if (str1.substring(str1.length - str2.length) == str2) {
		return true;
	}
	return false;
}
/**
 * 判断str1字符串是否以str2为开头
 * 
 * @param str1
 *            原字符串
 * @param str2
 *            子串
 * @author pansen
 * @return 是-true,否-false
 */
function startWith(str1, str2) {
	if (str1 == null || str2 == null) {
		return false;
	}
	if (str1.length < str2.length) {
		return false;
	} else if (str1 == str2) {
		return true;
	} else if (str1.substr(0, str2.length) == str2) {
		return true;
	}
	return false;
}
// js获取项目根路径，如： http://localhost:8083/uimcardprj
function getRootPathBase() {
	// 获取当前网址，如： http://localhost:8083/uimcardprj/share/meun.jsp
	var curWwwPath = window.document.location.href;
	// 获取主机地址之后的目录，如： uimcardprj/share/meun.jsp
	var pathName = window.document.location.pathname;
	var pos = curWwwPath.indexOf(pathName);
	// 获取主机地址，如： http://localhost:8083
	var localhostPaht = curWwwPath.substring(0, pos);
	// 获取带"/"的项目名，如：/uimcardprj
	var projectName = pathName
			.substring(0, pathName.substr(1).indexOf('/') + 1);
	return localhostPaht;
}
/** 日期格式化 */
Date.prototype.format = function(format) {
	var o = {
		"M+" : this.getMonth() + 1, // month
		"d+" : this.getDate(), // day
		"h+" : this.getHours(), // hour
		"m+" : this.getMinutes(), // minute
		"s+" : this.getSeconds(), // second
		"q+" : Math.floor((this.getMonth() + 3) / 3), // quarter
		"S" : this.getMilliseconds()
	// millisecond
	}
	if (/(y+)/.test(format))
		format = format.replace(RegExp.$1, (this.getFullYear() + "")
				.substr(4 - RegExp.$1.length));
	for ( var k in o)
		if (new RegExp("(" + k + ")").test(format))
			format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k]
					: ("00" + o[k]).substr(("" + o[k]).length));
	return format;
}
/** 时间相加减 */
function dateAddandsubtract(date, days) {
	var d = new Date(date);
	d.setDate(d.getDate() + days);
	var month = d.getMonth() + 1;
	var day = d.getDate();
	if (month < 10) {
		month = "0" + month;
	}
	if (day < 10) {
		day = "0" + day;
	}
	return d;
}
/** 时间错转日期并格式化 */
function toDateAndformat(ns, format) {
	return new Date(parseInt(ns)).format(format);
}
/** 时间错转日期并格式化 */
function toDateAndformat(ns) {
	return new Date(parseInt(ns)).format("yyyy-MM-dd");
}
function timeToDate(ns) {
	return new Date(parseInt(ns));
}
/**
 * 去除重复值
 */
Array.prototype.unique = function() {
	this.sort();
	var re = [ this[0] ];
	for (var i = 1; i < this.length; i++) {
		if (this[i] !== re[re.length - 1]) {
			re.push(this[i]);
		}
	}
	return re;
}
/**
 * 获取当前月的第一天
 */
function getCurrentMonthFirst() {
	var date = new Date();
	date.setDate(1);
	return date;
}
/**
 * 获取上月的第一天
 */
function getLastMonthFirst() {
	return new Date(getCurrentMonthFirst().setMonth(
			getCurrentMonthFirst().getMonth() - 1));
}
/**
 * 获取上月的最后一天
 */
function getLastMonthLast() {
	return new Date(getCurrentMonthFirst().setDate(
			getCurrentMonthFirst().getDate() - 1));
}
/**
 * 获取元素的位置
 * 
 * @param e
 * @returns {___anonymous7311_7368}
 */
function getElementOffset(e) {
	var t = e.offsetTop;
	var l = e.offsetLeft;
	var w = e.offsetWidth;
	var h = e.offsetHeight - 1;
	while (e = e.offsetParent) {
		t += e.offsetTop;
		l += e.offsetLeft;
	}
	return {
		top : t,
		left : l,
		width : w,
		height : h
	}
}
// 当天时间yyyy-MM-dd
var toDayYMD = toDay.format("yyyy-MM-dd");
function clone(myObj) {
	if (typeof (myObj) != 'object')
		return myObj;
	if (myObj == null)
		return myObj;

	var myNewObj = new Object();

	for ( var i in myObj)
		myNewObj[i] = clone(myObj[i]);

	return myNewObj;
}
/*
 * yyyy-MM-dd hh:mm:ss 再格式化日期
 * 
 * @param dataStr
 */
function dataStrFormat(dataStryMd, formatDate) {
	var dateTime = dataStryMd.split(/[- :]/);
	dateTime = new Date(dateTime[0], dateTime[1] - 1, dateTime[2], dateTime[3],
			dateTime[4], dateTime[5]).format(formatDate);
	return dateTime;
}
function dataStrFormatyMdhm(dataStr) {
	return dataStrFormat(dataStr, "yyyy-MM-dd hh:mm");
}
function currentDateAddDay(date, n) {
	var s, d, t, t2;
	t = date.getTime();
	t2 = n * 1000 * 3600 * 24;
	t += t2;
	d = new Date(t);
	s = d.getUTCFullYear() + "-";
	s += ("00" + (d.getUTCMonth() + 1)).slice(-2) + "-";
	s += ("00" + d.getUTCDate()).slice(-2);
	return s;
}
function currentDateAddDay(n) {
	currentDateAddDay(new Date(), n);
}
/*
 * 判断是否微信浏览器
 * 
 * @returns {Boolean}
 */
function isWeixin() {
	var ua = navigator.userAgent.toLowerCase();
	if (ua.match(/MicroMessenger/i) == "micromessenger") {
		return true;
	} else {
		return false;
	}
}
/**
 * 比较时间大小
 * 
 * @param date1
 * @param date2
 */
function dateComparisonSizeT(date1, date2) {
	if (date1.getTime() >= date2.getTime()) {
		return true;
	} else {
		return false;
	}
}
/**
 * 比较时间大小
 * 
 * @param date1
 * @param date2
 */
function dateComparisonSizeS(date1, date2, date3) {
	if (date1.getTime() >= date3.getTime()
			&& date2.getTime() <= date3.getTime()) {
		return true;
	} else {
		return false;
	}
}
/**
 * yyyy-MM-dd 转date
 * 
 * @param dateStr
 * @returns {Date}
 */
function dateY_M_dToDate(dateStr) {
	var dateArrs = dateStr.split("-");
	return new Date(dateArrs[0], dateArrs[1], dateArrs[2]);
}
/**
 * 比较时间大小
 * 
 * @param date1
 * @param date2
 */
function dateComparisonSizeSStr(date1, date2, date3) {
	return dateComparisonSizeS(dateY_M_dToDate(date1), dateY_M_dToDate(date2),
			dateY_M_dToDate(date3));
}
/**
 * 计算两时间相差天数
 * 
 * @param startDate
 * @param endDate
 * @returns
 */
function interval(startDate, endDate) {
	var time = endDate.getTime() - startDate.getTime();
	return parseInt(time / (1000 * 60 * 60 * 24));
}
/**
 * 计算两时间相差天数
 * 
 * @param startDate
 * @param endDate
 * @returns
 */
function intervalY_M_d(startDate, endDate) {
	return interval(dateY_M_dToDate(startDate), dateY_M_dToDate(endDate));
}
/**
 * 计算两时间相差天数绝对数
 * 
 * @param startDate
 * @param endDate
 * @returns
 */
function intervalY_M_dAbs(startDate, endDate) {
	return Math.abs(interval(dateY_M_dToDate(startDate),
			dateY_M_dToDate(endDate)));
}
/**
 * 判断值是否为空 <em>空返回true 反之返回false</em>
 * 
 * @param value
 *            判断的值
 * @returns {boolean} 空返回true 反之返回false
 */
function isEmpty(value) {
	if (value == null || value == "") {
		return true;
	} else {
		return false;
	}
}
/**
 * 成数字食品类型转换转换 枚举类型 1, "包装食品"2, "餐厅食品"3, "食堂食品"4, "公共食品"5, "自定义食品"6, "食材"999,
 * "其他"
 * 
 * @param foodTypeNumber
 *            食品类型数字
 * @returns {number} 食品类型字符串
 */
function foodTypeConvertForString(foodTypeNumber) {
	switch (foodTypeNumber) {
	case 1:
		return "PackageFood";
	case 2:
		return "RestaurantFood";
	case 3:
		return "Canteen";
	case 4:
		return "CommonFood";
	case 5:
		return "UserDefined";
	case 6:
		return "Material";
	default:
		return "UserDefined";
	}
}
function updateDietServings(selectedLi) {
	var value = selectedLi.attr("value");
	$("#valSpan").html(selectedLi.html());
	$("#nutritionList li").each(
			function(i) {
				var percentage = $(this).find(
						":last-child :first-child :first-child");
				var percentageNumber = percentage.attr("value").split("%")[0];
				var newPercentage = ((percentageNumber * value).toFixed(2))
						+ "%";
				percentage.html(newPercentage);
				$(percentage.next()).find(":first-child").attr("style",
						"width: " + newPercentage)
			});
}
function updateDietValueFen(value) {
	$("#nutritionList li").each(
			function(i) {
				var percentage = $(this).find(
						":last-child :first-child :first-child");
				var percentageNumber = percentage.attr("value").split("%")[0];
				var newPercentage = ((percentageNumber * value).toFixed(2))
						+ "%";
				percentage.html(newPercentage);
				$(percentage.next()).find(":first-child").attr("style",
						"width: " + newPercentage)
			});
}
