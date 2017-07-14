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
		case "[object Arguments]":
			return 'Arguments';
			break;
		case "[object String]":
			return 'String';
			break;
		case "[object Number]":
			return 'Number';
			break;
		case "[object Error]":
			return 'Error';
			break;
		case "[object Date]":
			return 'Date';
			break;
		case "[object RegExp]":
			return 'RegExp';
			break;
		case "[object Boolean]":
			return 'Boolean';
			break;
		case "[object Null]":
			return 'Null';
			break;	
		case "[object Undefined]":
			return 'Undefined';
			break;	
	}
}

/**
 * [keys 检索object拥有的所有可枚举属性的名称]
 * @param  {Object} object       
 */
_.keys = function(obj){
	var result = [];
	if(_.type(obj)==='Object'){
		result = Object.keys(obj);
	}
	if(_.type(obj)==='Array'){
		for(var i =0;i<obj.length;i++){
			result.push(i+'');
		}
	}
	return result;
}

// _.keys方法测
// var keys = _.keys({one: 1, two: 2, three: 3});
// console.log(keys);
// var keys2 = _.keys([1,2,3,44]);
// console.log(keys2);
// var keys3 = _.keys('a','bbb');
// console.log(keys3);

/**
 * [allKeys 检索object拥有的和继承的所有属性的名称。]
 * @param  {Object}   object   
 * @return {Array}         
 */
_.allKeys = function(obj) {
	var result = [];
	if(_.type(obj)==='Object'){
		for(var item  in obj){ 
			result.push(item)
		}
	}
	if(_.type(obj)==='Array'){
		for(var i =0;i<obj.length;i++){
			result.push(i+'');
		}
	}
	return result;
}

// _allKeys方法测试
// function Stooge(name) {
//   this.name = name;
// }
// Stooge.prototype.silly = true;
// var allkeys = _.allKeys(new Stooge("Moe"));
// console.log(allkeys);
// console.log(_.allKeys([1,33,2]));
// console.log(_.allKeys('xxx'));

/**
 * [values 返回object对象所有的属性值。]
 * @param  {Object}   obj 
 * @return {Array}      
 */
_.values = function(obj) {
	var result = [];
	if(_.type(obj)==='Object'){
		for(var i  in obj){ 
			result.push(obj[i])
		}
	}
	if(_.type(obj)==='Array'){
		result = obj;
	}
	return result;
}
//_.values方法测试
// var vals = _.values({one: 1, two: 2, three: 3});
// var vals2 = _.values([2,33,34]);
// var vals3 = _.values('a','b');
// console.log(vals);
// console.log(vals2);
// console.log(vals3);

/**
 * [mapObject 它类似于map，但是这用于对象。转换每个属性的值。]
 * @param  {Object} obj    
 * @param  {Function} iteratee  
 * @param  {Object} [context] 
 * @return {Object}      
 */
_.mapObject = function(obj, iteratee, context) {
	var currentObj = context || obj;
	for(var item in currentObj){
		currentObj[item] = iteratee(currentObj[item],item);
	}
	console.log(currentObj);
	return currentObj;
}

// _.mapObject方法测试
// _.mapObject({start: 5, end: 12}, function(val, key) {
//   return val + 5;
// });

/**
 * [pairs 把一个对象转变为一个[key, value]形式的数组。]
 * @param  {Object}   obj 
 * @return {Array}
 */
_.pairs = function(obj) {
	var result = [];
	if(_.type(obj)==='Object'){
		for(var item  in obj){ 
			result.push([item,obj[item]]);
		}
	}
	if(_.type(obj)==='Array'){
		for(var i=0;i<obj.length;i++){
			result.push([i+'',obj[i]]);
		}
	}
	return result;
}

//_.paires方法测试
// var l1 = _.pairs({one: 1, two: 2, three: 3});
// console.log(l1);
// var l2 = _.pairs([1,33,2,'a','bbbb']);
// console.log(l2);
// var l3 = _.pairs(null);
// console.log(l3);


/**
 * [invert 返回一个object副本，使其键（keys）和值（values）对换。]
 * @param  {Object} obj 
 * @return {Object}     
 */
_.invert = function(obj){
	var objBak = {}
	if(_.type(obj)==='Object'){
		for(var item  in obj){ 
			objBak[obj[item]] = item;
		}
	}
	if(_.type(obj)==='Array'){
		for(var i=0;i<obj.length;i++){
			objBak[obj[i]] = i;
		}
	}
	return objBak;
}
//_.invert方法测试
// var o1 = _.invert({Moe: "Moses", Larry: "Louis", Curly: "Jerome"});
// console.log(o1);
// var o2 = _.invert(['a',2,'ccc',344532]);
// console.log(o2);
// var o3 = _.invert(undefined);
// console.log(o3);


/**
 * [create 创建具有给定原型的新对象， 可选附加props 作为 own的属性。 基本上，和Object.create一样， 但是没有所有的属性描述符。]
 * @param  {Object} prototype 
 * @param  {Object} props     
 * @return {Object}           
 */
_.create = function(prototype, props) {
	var currentObj = new prototype.constructor;
	if(_.type(props)==='Object'){
		for(var item  in props){ 
			currentObj[item] = props[item];
		}
	}
	if(_.type(props)==='Array'){
		for(var i=0;i<props.length;i++){
			currentObj[i] = props[i];
		}
	}
	return currentObj;
}

//_.create方法测试
function Stooge(name) {
  this.name = name;
}
Stooge.prototype.silly = true;
// var moe = _.create(Stooge.prototype, {name: "Moe"});
// console.log(moe);
// var moe2 = _.create(Stooge.prototype, {name: "Lyne",sex:"female"});
// console.log(moe2);
// var moe3 = _.create(Stooge.prototype, [33,'fdsa',2,'uuuu']);
// console.log(moe3);


/**
 * [functions 返回一个对象里所有的方法名, 而且是已经排序的 — 也就是说, 对象里每个方法(属性值是一个函数)的名称]
 * @param  {Object} obj 
 */
_.functions = function(obj) {
	var result = [];
	if(_.type(obj)==='Object'){
		for(item in obj){
			if(_.type(obj[item])==='Function'){
				result.push(item);
			}
		}
	}
	return result.sort();
}

//_.functions方法测试
// var a = _.functions(_);
// console.log(a)


/**
 * [extend 复制source对象中的所有属性覆盖到destination对象上，并且返回 destination 对象. 复制是按顺序的, 所以后面的对象属性会把前面的对象属性覆盖掉]
 * @param  {Object} destination 
 * @param  {Object} *sources    
 */
_.extend = function(destination, sources) {
	
	if(_.type(destination)==='Object'){
		var sours = Array.prototype.slice.call(arguments,1);
		for(var j=0;j<sours.length;j++){
			for(var item in sours[j]){
				if(_.type(sours[j][item])!=='Function'){
					destination[item] = sours[j][item];
				}
			}
		}
	}
	return destination;
}
//_.extend方法测试
// var a = _.extend({name: 'moe'}, {age: 50}, {age: 55,f:function(){}},{sex:'female'});
// console.log(a);


/**
 * [extendOwn 类似于 extend, 但只复制[自己的]属性覆盖到目标对象。]
 * @param  {Object} destination 
 * @param  {[type]} *sources    
 * @return {[type]}             
 */
_.extendOwn = function(destination, sources){
	if(_.type(destination)==='Object'){
		var sours = Array.prototype.slice.call(arguments,1);
		for(var j=0;j<sours.length;j++){
			for(var item in sours[j]){
				if(_.type(sours[j][item])!=='Function' && sours[j].hasOwnProperty(item)){
					destination[item] = sours[j][item];
				}
				
			}
		}
	}
	return destination;
}
//_.extendOwn方法测试
// var a = _.extendOwn({name: 'moe'}, {age: 50}, {age: 55,f:function(){}},{sex:'female'});
// console.log(a);


/**
 * [pick 返回一个object副本，只过滤出keys(有效的键组成的数组)参数指定的属性值。或者接受一个判断函数，指定挑选哪个key]
 * @param  {Object} obj 
 * @param  {[type]} keys   
 * @return {[type]}        
 */
_.pick = function(obj, keys){
	var newObj = {};
	if(_.type(keys)==='Function'){
		for(var item in obj){
			if(keys(obj[item],item,obj)){
				newObj[item] = obj[item];
			}
		}
	}else{
		var keysList = Array.prototype.slice.call(arguments,1);
		for(var i=0;i<keysList.length;i++){
			if(obj[keysList[i]]){
				newObj[keysList[i]] = obj[keysList[i]];
			}
		}
	}
	return newObj;
}

//_.pick方法测试
// var a = _.pick({name: 'moe', age: 50, userid: 'moe1'}, 'name', 'age');
// console.log(a);
// var b = _.pick({name: 'moe', age: 50, userid: 'moe1'}, function(value, key, object) {
//   return isNaN(value)===false; //是数字
// });
// console.log(b);


/**
 * [omit 返回一个object副本，只过滤出除去keys参数指定的属性值。 或者接受一个判断函数，指定忽略哪个key。]
 * @param  {Object} obj 
 * @param  {Object} keys   
 */
_.omit = function(obj, keys) {
	var newObj = {};
	if(_.type(keys)==='Function'){
		for(var item in obj){
			if(!keys(obj[item],item,obj)){
				newObj[item] = obj[item];
			}
		}
	}else{
		var keysList = Array.prototype.slice.call(arguments,1);
		for(var item in obj){
			if(keysList.indexOf(item)==-1){ //说明参数中没有这个key
				newObj[item] = obj[item];
			}
		}
	}
	return newObj;
}

//_.omit方法测试
// var a = _.omit({name: 'moe', age: 50, userid: 'moe1'}, 'userid');
// console.log(a);
// var b = _.omit({name: 'moe', age: 50, userid: 'moe1'}, function(value, key, object) {
//   return isNaN(value)===false;
// });
// console.log(b);


/**
 * [defaults 用defaults对象填充object 中的undefined属性。 并且返回这个object。一旦这个属性被填充，再使用defaults方法将不会有任何效果。]
 * @param  {Object} obj   
 * @param  {Object} defaults 
 */
_.defaults = function(obj, defaults){
	if(_.type(defaults)==='Object'){
		for(var item in defaults){
			if(!obj[item]){
				obj[item] = defaults[item];
			}
		}
	}
	if(_.type(defaults)==='Array'){
		for(var i=0;i<defaults.length;i++){
			obj[i] = defaults[i];
		}
	}
	return obj;
}
//_.defaults方法测试
// var iceCream = {flavor: "chocolate"};
// var a = _.defaults(iceCream, {flavor: "vanilla", sprinkles: "lots"});
// console.log(a);
// var iceCream2 = {flavor: "chocolate"};
// var b = _.defaults(iceCream2, ['aaa',23,'bbb']);
// console.log(b);


/**
 * [clone 创建 一个浅复制（浅拷贝）的克隆object。任何嵌套的对象或数组都通过引用拷贝，不会复制。]
 * @param  {Object,Array} obj 
 */
_.clone = function(obj){
	return obj;
}
//_.clone方法测试
// var o = {name: 'moe'};
// _.clone(o);
// console.log(o);
// var l = [1,2,3];
// _.clone(l);
// l.push(4);
// console.log(l)


/**
 * [tap 用 object作为参数来调用函数interceptor，然后返回object。这种方法的主要意图是作为函数链式调用 的一环, 为了对此对象执行操作并返回对象本身]
 * @param  {Object} obj         [description]
 * @param  {Function} interceptor [description]
 * @return {[type]}             [description]
 */
_.tap = function(obj, interceptor) {
	interceptor(obj);
	return obj;
}
//_.tap方法测试
// var o = {k1:'xxx',k2:[1,2,3,200]};
// var a = _.tap(o,console.log);
// console.log(a);


/**
 * [has 对象是否包含给定的键吗？]
 * @param  {Object}  obj 
 * @param  {String}  key 
 * @return {Boolean}     
 */
_.has = function(obj, key) {
	return(Object.prototype.hasOwnProperty.call(obj,key))
}

//_.has方法测试
// var a = _.has({a: 1, b: 2, c: 3}, "b");
// console.log(a);
// var b = _.has({a: 1, b: 2, c: 3}, "dd");
// console.log(b);


/**
 * [property 返回一个函数，这个函数返回任何传入的对象的key属性。]
 * @param  {Stirng} key 
 */
_.property = function(key) {
	return function(argObj){
		return argObj[key];
	}
}

//_.property方法测试
// var stooge = {name: 'moe'};
// console.log('moe' === _.property('name')(stooge));


/**
 * [propertyOf 和_.property相反。需要一个对象，并返回一个函数,这个函数将返回一个提供的属性的值。]
 * @param  {Object} obj 
 */
_.propertyOf = function(obj) {
	return function(key){
		return obj[key];
	}
}
//_.propertyOf方法测试
// var stooge = {name: 'moe'};
// console.log(_.propertyOf(stooge)('name'));


/**
 * filter 遍历list中的每个值，返回包含所有通过predicate真值检测的元素值
 * @param  {Array}      list
 * @param  {Function}   predicate
 * @param  {Array}      [context] 上下文
 * @return {Array}      result 返回数组
 */
_.filter = function(list, predicate, context){
	var currentObj = context || list;
	var isFind = false;
	var result = [];
	for(var i =0;i<currentObj.length;i++){
		isFind = predicate.call(currentObj,currentObj[i]);
		if(isFind) {
			result.push(currentObj[i]);
		}
	}
	return result;
}

//_.filter方法测试
// var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// console.log(evens);
// 
/**
 * [matcher 返回一个断言函数，这个函数会给你一个断言可以用来辨别给定的对象是否匹配attrs指定键/值属性]
 * @param  {[type]} attrs [description]
 * @return {[type]}       [description]
 */
_.matcher = function(attrs) {
	return function(){
		
	}
}
//_.matcher方法测试
// var list = [1, 2, 3, 4, 5, false,{visible:false}];
// var ready = _.matcher({selected: true, visible: true});
// var readyToGoList = _.filter(list, ready);
// console.log(readyToGoList)

/**
 * [isEqual 执行两个对象之间的优化深度比较，确定他们是否应被视为相等。]
 * @param  {Object}  obj   
 * @param  {Object}  other 
 * @return {Boolean}       
 */
_.isEqual = function(obj, other) {
	return Object.prototype.toString.call(obj) === Object.prototype.toString.call(other);
}

//_isEqual方法测试
// var stooge = {name: 'moe', luckyNumbers: [13, 27, 34]};
// var clone  = {name: 'moe', luckyNumbers: [13, 27, 34]};
// console.log(_.isEqual(stooge, clone));

/**
 * [isMatch 告诉你properties中的键和值是否包含在object中。]
 * @param  {Object}  obj        
 * @param  {Object}  properties 
 * @return {Boolean}            
 */
_.isMatch = function(obj, properties) {
	var isMath = false;
	var list = [];
	for(var item in properties){
		if(obj[item] && obj[item]===properties[item]){
			list.push(true)
		}else{
			list.push(false);
		}
	}
	return isMath = list.indexOf(false)==-1 ? true : false;
}
//_.isMatch方法测试
// var stooge = {name: 'moe', age: 32};
// console.log(_.isMatch(stooge, {age: 32,name:'moe'}));
// console.log(_.isMatch(stooge, {age: 32,name:'moee'}));


/**
 * [isEmpty 如果object 不包含任何值(没有可枚举的属性)，返回true。 对于字符串和类数组（array-like）对象，如果length属性为0，那么_.isEmpty检查返回true。]
 * @param  {Object,Array}  obj 
 * @return {Boolean}        
 */
_.isEmpty = function(obj) {
	var isEmpty = true;
	if(_.type(obj)==='Object' && Object.keys(obj).length>0){
		isEmpty = false;
	}
	if(_.type(obj)==='String'||_.type(obj)==='Arguments' || _.type(obj)==='Array'){
		if(obj.length>0){
			isEmpty = false;
		}
	}

	return isEmpty;
}
// _.isEmpty方法测试
// console.log(_.isEmpty([1, 2, 3]));
// console.log(_.isEmpty({}));
// console.log(_.isEmpty('cc'));

/**
 * [isElement 如果object是一个DOM元素，返回true。]
 * @param  {Object}  obj 
 * @return {Boolean}     
 */
_.isElement = function(obj) {
	var isEle = false;
	if(obj!=undefined){
		obj = true;
	}
	return isEle;
}
//_.isElement方法测试
// _.isElement(jQuery('body')[0]);

/**
 * [isArray 如果object是一个数组，返回true。]
 * @param  {Array}  obj 
 * @return {Boolean}     
 */
_.isArray = function(obj) {
	var isArray = false;
	if(_.type(obj)==='Array'){
		isArray = true;
	}
	return isArray;
}
//_.isArray方法测试
// console.log((function(){ return _.isArray(arguments); })());
// console.log(_.isArray([1,2,3]));

/**
 * [isObject 如果object是一个对象，返回true。需要注意的是JavaScript数组和函数是对象，字符串和数字不是]
 * @param  {Object}  value 
 * @return {Boolean}       
 */
_.isObject = function(value) {
	var isObject = false;
	if(_.type(value)==='Object'){
		isObject = true;
	}
	return isObject;
}
// _.isObject方法测试
// console.log(_.isObject({}));
// console.log(_.isObject(1));

/**
 * [isArguments 如果object是一个参数对象，返回true。]
 * @param  {Arguments}  object 
 * @return {Boolean}        
 */
_.isArguments = function(object) {
	var isArguments = false;
	if(_.type(object)==='Arguments'){
		isArguments = true;
	}
	return isArguments;
}
// _.isArguments方法测试
// console.log((function(){ return _.isArguments(arguments); })(1, 2, 3));
// console.log(_.isArguments([1,2,3]));

/**
 * [isFunction 如果object是一个函数（Function），返回true。]
 * @param  {Function}  object 
 * @return {Boolean}        
 */
_.isFunction = function(object) {
	var isFunction = false;
	
	if(_.type(object)==='Function'){
		isFunction = true;
	}
	return isFunction;
}
//_.isFunction方法调用
// console.log(_.isFunction(console.log));

/**
 * [isString 如果object是一个字符串，返回true。]
 * @param  {String}  object 
 * @return {Boolean}        
 */
_.isString = function(object) {
	var isString = false;
	
	if(_.type(object)==='String'){
		isString = true;
	}
	return isString;
}
//_.isString方法测试
// console.log(_.isString("moe"));

/**
 * [isString 如果object是一个数值，返回true (包括 NaN)。]
 * @param  {Number}  object 
 * @return {Boolean}        
 */
_.isNumber = function(object) {
	var isNumber = false;
	
	if(_.type(object)==='Number'){
		isNumber = true;
	}
	return isNumber;
}
//_.isNumber方法测试
// console.log(_.isNumber(8.4 * 5));
// console.log(_.isNumber(NaN));


/**
 * [isFinite 如果object是一个有限的数字，返回true。]
 * @param  {Number}  object 
 * @return {Boolean}       
 */
_.isFinite = function(object) {
	var isFinite = false;
	
	if(object!='-Infinity' && object!='Infinity'){
		isFinite = true;
	}
	return isFinite;
}

//_.isFinite方法测试
// console.log(_.isFinite(-101));
// console.log(_.isFinite(-Infinity));


/**
 * [isBoolean 如果object是一个布尔值，返回true，否则返回false。]
 * @param  {isBoolean}  object 
 * @return {Boolean}        
 */
_.isBoolean = function(object) {
	var isBoolean = false;
	
	if(_.type(object)==='Boolean'){
		isBoolean = true;
	}
	return isBoolean;
}
//_.isBoolean方法测试
// console.log(_.isBoolean(null));
// console.log(_.isBoolean(true));


/**
 * [isDate Returns true if object is a Date.]
 * @param  {isBoolean}  object 
 * @return {Boolean}        
 */
_.isDate = function(object) {
	var isDate = false;
	
	if(_.type(object)==='Date'){
		isDate = true;
	}
	return isDate;
}
//_.isDate 方法测试
// console.log(_.isDate(new Date()));


/**
 * [isRegExp 如果object是一个正则表达式，返回true.]
 * @param  {Date}  object 
 * @return {Boolean}        
 */
_.isRegExp = function(object) {
	var isRegExp = false;
	
	if(_.type(object)==='RegExp'){
		isRegExp = true;
	}
	return isRegExp;
}
//_.isRegExp方法测试
// console.log(_.isRegExp(/moe/));

/**
 * [isError 如果object继承至 Error 对象，那么返回 true。]
 * @param  {Date}  object 
 * @return {Boolean}        
 */
_.isError = function(object) {
	var isError = false;
	
	if(_.type(object)==='Error'){
		isError = true;
	}
	return isError;
}
//_.isError方法测试
// try {
//   throw new TypeError("Example");
// } catch (o_O) {
//   console.log(_.isError(o_O))
// }

/**
 * [isNaN 这和原生的isNaN 函数不一样，如果变量是undefined，原生的isNaN 函数也会返回 true ]
 * @param  {Number}  object 
 * @return {Boolean}        
 */
_.isNaN = function(object) {
	var isn = false;
	if(_.type(object)!=='Undefined'){
		isn = isNaN(object);
	}
	
	return isn;
}

// console.log(_.isNaN(NaN));
// console.log(_.isNaN(undefined));

/**
 * [isNull 如果object的值是 null，返回true。]
 * @param  {Null}  object 
 * @return {Boolean}        
 */
_.isNull = function(object) {
	var isNull = false;
	
	if(_.type(object)==='Null'){
		isNull = true;
	}
	return isNull;
}
//_.isNull方法测试
// console.log(_.isNull(null))
// console.log(_.isNull(undefined));


/**
 * [isUndefined 如果value是undefined，返回true。]
 * @param  {Undefined}  object 
 * @return {Boolean}        
 */
_.isUndefined = function(object) {
	var isUndefined = false;
	
	if(_.type(object)==='Undefined'){
		isUndefined = true;
	}
	return isUndefined;
}
//_.isUndefined方法测试
// var a;
// console.log(_.isUndefined(a));
