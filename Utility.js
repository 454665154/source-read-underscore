var _ = {};

/**
 * 判断类型
 * @param  {任意类型对象}   obj
 */
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
 * [noConflict 放弃Underscore 的控制变量"_"。返回Underscore 对象的引用。]
 * @param  {Object} obj 
 */
_.noConflict = function() {
	var obj = _;
	return obj;
}

//_.noConflict方法测试
// var underscore = _.noConflict();
// console.log(underscore);

/**
 * [identity 返回与传入参数相等的值. 相当于数学里的: f(x) = x
	这个函数看似无用, 但是在Underscore里被用作默认的迭代器iterator.]
 * @param  {[type]} value 
 * @return {[type]}       
 */
_.identity = function(value) {
	return value;
}
//_.identity 方法测试
// var stooge = {name: 'moe'};
// console.log(stooge === _.identity(stooge));
// var l = [1,3,'xx','bb'];
// console.log(l === _.identity(l));
// => true

/**
 * [constant 创建一个函数，这个函数 返回相同的值 用来作为_.constant的参数。]
 * @param  {[type]} value [description]
 * @return {[type]}       [description]
 */
_.constant = function(value) {
	return function(){
		return value;
	}
}
//_.constant 方法测试
// var stooge = {name: 'moe'};
// console.log(stooge === _.constant(stooge)());

/**
 * [noop 返回undefined，不论传递给它的是什么参数。 可以用作默认可选的回调参数。]
 * @return {[type]} [description]
 */
_.noop = function() {
	// return undefined;
}
//_.noop 方法测试
// var obj ={}
// obj.initialize = _.noop;
// console.log(obj.initialize());

/**
 * [times 调用给定的迭代函数n次,每一次调用iteratee传递index参数。生成一个返回值的数组。 ]
 * @param  {[Number]}   n         
 * @param  {[Function]}   iteratee  
 * @param  {[type]}   [context] 
 * @return {[Array]}         
 */
_.times = function(n, iteratee, context) {
	var result = [];
	for(var i=0;i<n;i++){
		result.push(iteratee(i))
	}
	return result;
}

//_.times 方法测试
// var result = _.times(3,function(n){
// 	return n+1;
// })
// console.log(result);

/**
 * [random 返回一个min 和 max之间的随机整数。如果你只传递一个参数，那么将返回0和这个参数之间的整数。]
 * @param  {Number}   min 
 * @param  {Number}   max 
 * @return {Number}     
 */
_.random = function(min, max) {
	return min + Math.floor(Math.random()*(max - min));
}
//_.random 方法测试
// console.log(_.random(0, 100));
// console.log(_.random(10, 15));

/**
 * [mixin 允许用您自己的实用程序函数扩展Underscore。
 * 传递一个 {name: function}定义的哈希添加到Underscore对象，以及面向对象封装。]
 * @param  {Object}   obj 
 * @return {[type]}        
 */
_.mixin = function(obj) {
	for(var item in obj){
		_[item] = obj[item];
	}
}
//_.mixin 方法测试
// _.mixin({
//   capitalize: function(string) {
//     return string+' - xxx';
//   }
// });
// console.log(_.capitalize('fabio'));

/**
 * [iteratee 一个重要的内部函数用来生成可应用到集合中每个元素的回调， 
 * 	返回想要的结果 - 无论是等式，任意回调，属性匹配，或属性访问。]
 * @param  {String} value 
 * @return {Array}       
 */
_.map = function(obj,fn,context){
	var currentObj = context || obj;
	var result = [];
    if (currentObj.constructor === Array) {
        for (var i = 0; i < currentObj.length; i++) {
            result.push(fn.call(currentObj, currentObj[i], i, currentObj));
        }
    }
    if (currentObj.constructor === Object) {
        for (var i in currentObj) {
            result.push(fn.call(currentObj, currentObj[i], i, currentObj));
        }
    }
    return result;
}

_.iteratee = function(value,context) {
	var result = [];
	return function(obj,i,sourceObj){
		result.push(obj[value]) ;
		if(sourceObj.length===i+1){
			console.log(result);
			console.log('xxx');
		}
	}
}
//_.iteratee 方法测试
var stooges = [{name: 'curly', age: 25}, {name: 'moe', age: 21}, {name: 'larry', age: 23}];
_.map(stooges, _.iteratee('age'));

// [25, 21, 23]

/**
 * [uniqueId 为需要的客户端模型或DOM元素生成一个全局唯一的id。如果prefix参数存在， id 将附加给它。]
 * @return {[type]} 
 */
_.uniqueId = function(prefix) {
	var id = 'uniqueId'+_.random(1,10000);
	return prefix ? prefix+id : id;
}

//_.uniqueId 方法测试
// console.log(_.uniqueId('contact_'));

/**
 * [escape 转义HTML字符串，替换&, <, >, ", ', 和 /字符]
 * @param  {String}   string 
 * @return {[type]}        
 */
_.escape = function(string) {
	var escapeMap = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#x27;',
	    '`': '&#x60;'
	};
	var regKey = [];
	var regVal = [];
	for(var item in escapeMap){
		regKey.push(item);
		regVal.push(escapeMap[item]);
	}
	for(var i=0;i<regKey.length;i++){
		var re =new RegExp(regKey[i],"gm"); 
		string = string.replace(re,regVal[i]);
	}
	return string;
}
//_.escape方法测试
// console.log(_.escape('Curly, Larry & Moe'));
//=> "Curly, Larry &amp; Moe"

/**
 * [unescape 和escape相反。转义HTML字符串，替换&, &lt;, &gt;, &quot;, &#96;, 和 &#x2F;字符。]
 * @param  {[type]} string [description]
 * @return {[type]}        [description]
 */
_.unescape = function(string) {
	var escapeMap = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#x27;',
	    '`': '&#x60;'
	};
	var regKey = [];
	var regVal = [];
	for(var item in escapeMap){
		regKey.push(item);
		regVal.push(escapeMap[item]);
	}
	for(var i=0;i<regKey.length;i++){
		var re =new RegExp(regVal[i],"gm"); 
		string = string.replace(re,regKey[i]);
	}
	return string;
}
//_.unescape 方法测试
// console.log(_.unescape('Curly, Larry &amp; Moe'));

/**
 * [result 如果指定的property 的值是一个函数，那么将在object上下文内调用它;
 * 	否则，返回它。如果提供默认值，并且属性不存在，那么默认值将被返回。
 *  如果设置defaultValue是一个函数，它的结果将被返回。]
 * @param  {Object} obj         
 * @param  {String} property       
 * @param  {String} [defaultValue] 
 * @return {[type]}                
 */
_.result = function(obj, property, defaultValue) {
	for(var item in obj){
		if(obj[property] && _.type(obj[property])==='String'){
			return obj[property];
		}else if(obj[property] && _.type(obj[property])==='Function'){
			return obj[property]();
		}else{
			return defaultValue;
		}
	}
}
//_.result 方法测试
// var object = {cheese: 'crumpets', stuff: function(){ return 'nonsense'; }};
// var a = _.result(object, 'cheese');// => "crumpets"
// var b = _.result(object, 'stuff');// => "nonsense"
// var c = _.result(object, 'meat', 'ham');// => "ham"
// console.log(a+" : "+b+" : "+c);

/**
 * [now 一个优化的方式来获得一个当前时间的整数时间戳。可用于实现定时/动画功能。]
 * @return {Number} 
 */
_.now = function() {
	return (new Date).getTime();
}
//_.now 方法测试
// console.log(_.now())


/**
 * [template 将 JavaScript 模板编译为可以用于页面呈现的函数, 
 * 	对于通过JSON数据源生成复杂的HTML并呈现出来的操作非常有用。]
 * @param  {String}   templateString 
 * @param  {[type]}   [settings]     
 * @return {[type]}                
 */
_.template = function(templateString, settings) {
	return function(obj){
		for(var item in obj){
			var re =new RegExp('<%= '+item+' %>',"gm"); 
			templateString = templateString.replace(re,obj[item]);

			var reEscape =new RegExp('<%- '+item+' %>',"gm"); 
			templateString = templateString.replace(reEscape,_.escape(obj[item]));

		}
		return templateString;
	}
}
//_.template 方法测试
// var compiled = _.template("hello: <%= name %>");
// var a = compiled({name: 'moe'});// => "hello: moe"
// console.log(a);

// var template = _.template("<b><%- value %></b>");
// var b = template({value: '<script>'});// => "<b>&lt;script&gt;</b>"
// console.log(b);

// var compiled = _.template("<% console.log('Hello ' + epithet); %>");
// var c = compiled({epithet: "stooge"});
// console.log(c);