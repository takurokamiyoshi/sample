(function(){
	var addcss = {
		// 初期設定
		defaults:{
			path: 'css/'
		},
		// css追加
		init:function(file){
			var self = this;
			var link = document.createElement('link');
			with(link) {
				href = self.defaults.path + file + '.css';
				type = 'text/css';
				rel = 'stylesheet';
			}
			var head = document.getElementsByTagName('head');
			head.item(0).appendChild(link);
		}
	};
	if($('body#pc').size() > 0){
		addcss.init('pc');
	} else if($('body#sp').size() > 0){
		addcss.init('sp');
	}
})();