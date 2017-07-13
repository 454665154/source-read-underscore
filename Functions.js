var _ = {};

_.type = function(obj){
	switch (Object.prototype.toString.call(obj)){
		case "[object Array]":
			return 'Array';
			break;
		case "[object Object]":
			return 'Object';
			break;
		case "[object Function]":
			return 'Function';
			break;
		case "[object String]":
			return 'String';
			break;
		case "[object Number]":
			return 'Number';
			break;
		case "[object Null]":
			return 'Null';
			break;	
		case "[object Null]":
			return 'Undefined';
			break;	
	}
}
/**
 * [bind 绑定函数 function 到对象 object 上, 也就是无论何时调用函数, 函数里的 this 都指向这个 object]
 * @param  {Function}    fn   
 * @param  {Object}      object     
 * @param  {Object}      [*args]
 */
_.bind = function(	fn, object, args){
	var currentArgs = [];
	_.type(args)==='Array' ? currentArgs = args :currentArgs = Array.prototype.slice.call(arguments,2);
	return function(){
		console.log(fn.apply(object,currentArgs));
	}
}
//_.bind方法测试
// var func = function(greeting,a,b){ return greeting +a+b+ ': ' + this.name };
// func = _.bind(func, {name: 'moe'}, 'hi',' lyne&& ','eee'); //一个一个传参
// func();

// var func2 = function(greeting,a,b){ return greeting +a+b+ ': ' + this.name };
// func2 = _.bind(func2, {name: 'moe'}, ['hi',' wangqing&& ','www']); //传参是一个数组
// func2();


/**
 * [bindAll 把methodNames参数指定的一些方法绑定到object上，这些方法就会在对象的上下文环境中执行。]
 * @param  {Object}  object      
 * @param  {String}  methodNames 
 */
_.bindAll = function(object, methodNames){
	if(!methodNames){
		throw new Error('bindAll must be passed function names');
	}
	var funcs = Array.prototype.slice.call(arguments, 1);
    for (var i = 0; i < funcs.length; i++) {
        object[funcs[i]] = _.bind(object[funcs[i]],object);
    }
    return object;
}

//_.bindAll方法测试
// var buttonView = {
//   label  : 'underscore',
//   onClick: function(){ console.log('clicked: ' + this.label); },
//   onHover: function(){ console.log('hovering: ' + this.label); },
//   onDoubleClick: function(){ console.log('doubleclicked: ' + this.label); }
// };
// _.bindAll(buttonView, 'onClick','onHover');
// jQuery('#underscore_button').bind('click', buttonView.onClick);

/**
 * [partial 局部应用一个函数填充在任意个数的 arguments，不改变其动态this值。]
 * @param  {Function} fn         
 * @param  {[type]}   *arguments 
 */
_.partial = function(fn, arguments){
	
}
