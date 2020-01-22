function showPic(whichPic) {
	if (!document.getElementById("placeholder")) return false;
	// 获取a标签href值
	var source = whichPic.getAttribute("href");
	// 获取id为placeholder的img元素节点
	var placeholder = document.getElementById("placeholder");
	if(placeholder.nodeName != 'IMG') return false;
	// 给img节点src属性赋值
	placeholder.setAttribute("src", source);

	if (document.getElementById("description")) {
		// 获取a标签title的值赋给p标签的文本节点
		var text = whichPic.getAttribute("title") ? whichPic.getAttribute("title") : '' ;
		var description = document.getElementById("description");
		description.firstChild.nodeValue = text;
	}

	return true;	
}

/**
 * 给a标签绑定onclick事件
 */
function prepareGallery() {		
	if (!document.getElementsByTagName || !document.getElementById) return false;

	var gallery = document.getElementById("imagegallery");
	if (gallery) {
		var links = gallery.getElementsByTagName("a");
		for (var i = 0; i < links.length; i++) {
			links[i].onclick = function() {
			return	!showPic(this); // 防止删除id为placeholder的img标签，点击页面无反应问题
			}
			links[i].onkeypress = links[i].onclick;
		}
	}
}

/**
* 共享onload方法
*/
function addLoadEvent(func) {
	var oldload = window.onload
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		oldload();
		func();
	}
}

// window.onload = prepareGallery;
addLoadEvent(prepareGallery);
