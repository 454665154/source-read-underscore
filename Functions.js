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
_.partial = function(fn){
	var args = Array.prototype.slice.call(arguments,1);
	return function(){
		var innerArgs = Array.prototype.slice.call(arguments);
		for(var i=0;i<args.length;i++){
			if(args[i]===_){
				args.shift();
			}
		}
		return fn.apply(null,args.concat(innerArgs));
	}
}

//_.partial方法测试
var subtract = function(a, b) { return b - a; };
sub5 = _.partial(subtract, 5);
sub5(20);
// => 15

// subFrom20 = _.partial(subtract, _, 20);
// subFrom20(5);
// => 15

/**
 * [ Memoizes方法可以缓存某函数的计算结果。对于耗时较长的计算是很有帮助的。
 	如果传递了 hashFunction 参数，就用 hashFunction 的返回值作为key存储函数的计算结果。
 	hashFunction 默认使用function的第一个参数作为key。]
 * @param  {Function} fn         
 * @param  {[type]}   hashFunction 
 */
_.memoize = function(fn, hashFunction) {

}


/**
 * [delay类似setTimeout，等待wait毫秒后调用 fn
 	如果传递可选的参数arguments，当函数function执行时， arguments 会作为参数传入。 ]
 * @param  {Function} fn         
 * @param  {[type]}   hashFunction 
 */
_.delay = function(fn, wait) {
	var args = Array.prototype.slice.call(arguments,2);
	setTimeout(function(){
		fn.call(apply,args);
	},wait);
}
//_.delay方法测试
// var log = _.bind(console.log, console);
// _.delay(log, 1000, 'logged later');


/**
 * [defer延迟调用function直到当前调用栈清空为止，类似使用延时为0的setTimeout方法。
 	对于执行开销大的计算和无阻塞UI线程的HTML渲染时候非常有用。 
 	如果传递arguments参数，当函数function执行时， arguments 会作为参数传入。]
 * @param  {Function} fn         
 * @param  {[type]}   hashFunction 
 */
_.defer = function(fn) {
	var args = Array.prototype.slice.call(arguments);
	var newFn;
	if(args.length>0){
		newFn = function(){
			return fn.apply(newFn,args);
		}
	}else{
		newFn = fn;
	}
	setTimeout(fn,0);
}
//_.defer方法测试
// _.defer(function(){ console.log('deferred'); });


/**
 * [throttle创建并返回一个像节流阀一样的函数，
 	当重复调用函数的时候，至少每隔 wait毫秒调用一次该函数。
 	对于想控制一些触发频率较高的事件有帮助。]
 * @param  {Function} fn  
 * @param  {Number}   wait
 * @param  {[type]}   [options] 
 */
_.throttle = function(fn, wait, options) {

}


/**
 * [debounce 返回 function 函数的防反跳版本, 
 	将延迟函数的执行(真正的执行)在函数最后一次调用时刻的 wait 毫秒之后. 
 	对于必须在一些输入（多是一些用户操作）停止到达之后执行的行为有帮助。 
 	例如: 渲染一个Markdown格式的评论预览, 当窗口停止改变大小之后重新计算布局, 等等]
 * @param  {Function} fn  
 * @param  {Number}   wait
 * @param  {Boolean}   [options] 
 */
_.debounce(fn, wait, immediate) {
	var timer = null;
	return function(){
		var _this=this;
		var args = arguments;
		if(immediate){
			fn.call(fn,args);
		}
		if(timer){
			clearTimeout(timer);
		}
		timer = setTimeout(function(){
			fn.call(_this,args);	
		},wait)
	}
	
}
//_.debounce方法测试
// var lazyLayout = _.debounce(calculateLayout, 300);
// $(window).resize(lazyLayout);

/**
 * [once 创建一个只能调用一次的函数。重复调用改进的方法也没有效果，只会返回第一次执行时的结果。 
 	作为初始化函数使用时非常有用, 不用再设一个boolean值来检查是否已经初始化完成.]
 * @param  {Function} fn  
 */

_.once = function(fn) {
	var num =0;
	return function(){
		if(num<1){
			num++;
			fn.apply(null,arguments);
		}
	}
}
//_.once方法测试
// var initialize = _.once(function(){console.log('xxx');});
// initialize();
// initialize();


/**
 * [after 创建一个函数, 只有在运行了 count 次之后才有效果. 
 	在处理同组异步请求返回结果时, 
 	如果你要确保同组里所有异步请求完成之后才 执行这个函数, 这将非常有用。]
 * @param  {Number}   count  
 * @param  {Function} fn  
 */
_.after = function(count, fn) {
	var num = 0;
	return function(){
		num++;
		if(num>=count){
			fn.call(null,arguments);
		}
	}
}
//_.afger方法测试
// var renderNotes = _.after(4, function(){
// 	console.log('xxxx');
// });
// for(var i=0;i<6;i++){
// 	renderNotes();
// }

/**
 * [before 创建一个函数,调用不超过count 次。 
 	当count已经达到时，最后一个函数调用的结果将被记住并返回。]
 * @param  {Number}   count  
 * @param  {Function} fn  
 */
_.before = function(count, fn) {
	var num =0;
	return function(){
		if(num<=count){
			num++;
			fn.call(null,arguments);
		}
	}
}
//_.before方法测试
// var renderNotes = _.after(4, function(){
// 	console.log('xxxx');
// });
// for(var i=0;i<6;i++){
// 	renderNotes();
// }

/**
 * [wrap 将第一个函数 function 封装到函数 wrapper 里面, 
 	并把函数 function 作为第一个参数传给 wrapper. 
 	这样可以让 wrapper 在 function 运行之前和之后 执行代码, 调整参数然后附有条件地执行.]
 * @param  {Function}  fn  
 * @param  {Function}    wrapper  
 */
_.wrap = function(fn, wrapper) {
	return function(){
		return wrapper.call(null,fn);
	}
}
//_.wrap方法测试
// var hello = function(name) { return "hello: " + name; };
// hello = _.wrap(hello, function(func) {
//   return "before, " + func("moe") + ", after";
// });
// console.log(hello());
// "before, hello: moe, after"

/**
 * [negate 返回一个新的predicate函数的否定版本。]
 * @param  {Function} fn  
 */
_.negate = function(fn) {
	return function(){
		return !fn.apply(this,arguments);
	}
}
//_.negate方法测试
// var isFalsy = _.negate(Boolean);
// console.log(isFalsy）;

/**
 * [compose 返回函数集 functions 组合后的复合函数, 
 	也就是一个函数执行完之后把返回的结果再作为参数赋给下一个函数来执行. 
 	以此类推. 在数学里, 把函数 f(), g(), 和 h() 组合起来可以得到复合函数 f(g(h()))。]
 * @param  {Function} fns(*functions)  
 */
_.compose = function() {
	var fns = Array.prototype.slice.call(arguments);
	return function(){
		var result = Array.prototype.slice.call(arguments);
		for (var i = fns.length - 1; i > -1; i--) {
            result = fns[i].call(null, result);
        };
        return result;
	}
}
//_.compose方法测试
var greet    = function(name){ return "hi: " + name; };
var exclaim  = function(statement){ return statement + "!"; };
var welcome = _.compose(greet, exclaim);
console.log(welcome('moe'));
// => 'hi: MOE!'

