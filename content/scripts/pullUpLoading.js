//上拉加载更多
//获取滚动条高度
function getScrollTop(){
	var scrollTop = 0;
	if(document.documentElement && document.documentElement.scrollTop){
		scrollTop = document.documentElement.scrollTop;
	}else if(document.body){
		scrollTop = document.body.scrollTop;
	}
	return scrollTop;
}
//获取当前可视范围的高度
function getClientHeight(){
	var clientHeight = 0;
	if(document.body.clientHeight && document.documentElement.clientHeight){
		clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight);
	}else{
		clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight);
	}
	return clientHeight;
}
////获取文档完整的高度
function getScrollHeight(){
	return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
}
//滚动事件触发时判断是否要执行上拉加载
function isPullLoading(){
	var isLoading = false;
	if(getScrollTop() + getClientHeight() == getScrollHeight()){
		isLoading = true;
	}else {
		isLoading = false
	}
	return isLoading;
}
