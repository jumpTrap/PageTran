/**
 * jquery ajax
 * 获取页面工具类
 */
(function($) {
	/**
	 * AJAX同步获取页面内容并返回
	 * @param {Object} url http地址 'http://www.baidu.com'
	 * @param {Object} parm 参数 '{name:value}'
	 * @param {Object} method 请求方法 'get'/'post'
	 */
	function getHtmlforAjax(url, parm, method) {
		var html;
		$.ajax({
			type: method,
			url: url,
			async: false,
			data: parm,
			success: function(data) {
				html = data;
			},
			error: function() {
				html = "<h1>页面不存在</h1>";
			}
		});
		return html;
	};
	/**
	 * AJAX同步获取页面内容并返回
	 * 	1)请求方式GET
	 * 
	 * @param {Object} url http地址 'http://www.baidu.com'
	 * @param {Object} parm 参数 '{name:value}'
	 */
	function getHtmlforAjaxByGet(url, parm, method) {
		return getHtmlforAjax(url, parm, "get");
	};

	//开发方法
	$.aHtml = getHtmlforAjaxByGet;
	$.aHtmlMethod = getHtmlforAjax;
})(jQuery);