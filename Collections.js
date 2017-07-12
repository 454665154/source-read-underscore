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
 * each循环
 * @param  {Object,Array}   obj
 * @param  {Function}       fn
 * @param  {Object,Array}   [context]
 */
_.each = function(obj,fn,context){
	var currentObj = context || obj;
	if(_.type(obj)==='Array'){
		for(var i=0;i<currentObj.length;i++){
			fn.call(currentObj,currentObj[i],i,currentObj);
		}
		return currentObj;
	}
	if(_.type(obj)==='Object'){
		for(item in currentObj){
			fn.call(currentObj,currentObj[item],item,currentObj);
		}
		return currentObj;
	}
}

//_.each方法测试
// _.each([1,2,3],console.log,[4,5,6,7]); 
// _.each({a:'aa',b:'bb'},console.log,{d:'dd',e:'ee',f:'ff'});
// _.each([1,2,3],console.log); 


/**
 * map循环
 * @param  {Object,Array}   obj
 * @param  {Function}       fn
 * @param  {Object,Array}   [context]
 */
_.map = function(obj,fn,context){
	var currentObj = context || obj;
	if(_.type(obj)==='Array'){
		for(var i=0;i<currentObj.length;i++){
			console.log(fn.call(currentObj,currentObj[i]));
		}
		return currentObj;
	}
	if(_.type(obj)==='Object'){
		for(item in currentObj){
			console.log(fn.call(currentObj,currentObj[item]));
		}
		return currentObj;
	}
}
//_.map方法测试
// _.map([1, 2, 3], function(num){ return num * 3; },[4,5,6,7]);
// _.map([1, 2, 3], function(num){ return num * 3; });
// _.map({one: 10, two: 20, three: 30}, function(num, key){ return num * 3; },{four:40});
// _.map({one: 10, two: 20, three: 30}, function(num, key){ return num * 3; });


/**
 * reduce
 * @param  {Array}      list
 * @param  {Function}   fn
 * @param  {Number}     memo 初始值
 * @param  {Array}      [context] 上下文
 * @return {Number}     返回相加后的结果
 */
_.reduce = function(list, fn, memo, context){
	var currentObj = context || list;
	var result = 0;
	for(var i=0;i<currentObj.length;i++){
		result +=currentObj[i];
	}
	result = memo ? memo+result : result;
	fn.call(currentObj,memo,result);
	console.log(result);
	return result;
}
//_.reduce方法测试
// var a = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
// var b = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 1);
// var c = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0,[10,20,30]);
// var d = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 1,[10,20,30]);


/**
 * reduceRight 从右向左合并数组,如果有memo参数则显示在数组最前面
 * @param  {Array}      list
 * @param  {Function}   fn
 * @param  {Array}      memo 初始值
 * @param  {Array}      [context] 上下文
 */
_.reduceRight = function(list, fn, memo, context){
	var currentObj = context || list;
	currentObj = memo ? currentObj.concat(memo) : currentObj;
	var result = [];
	for(var i=currentObj.length-1;i>=0;i--){
		result.push(currentObj[i])
	}
	fn.call(currentObj,result)
	console.log(result);
	return result;
}

//_.reduceRight方法测试
// var list = [[0, 1], [2, 3], [4, 5]];
// var a = _.reduceRight(list, function(a, b) { return a.concat(b); },['a','b'], [[7,8],[9,10,11]]);
// var b = _.reduceRight(list, function(a, b) { return a.concat(b); },['a','b']);
// var c = _.reduceRight(list, function(a, b) { return a.concat(b); });

/**
 * find 返回第一个通过predicate迭代函数真值检测的元素值
 * @param  {Array}      list
 * @param  {Function}   predicate
 * @param  {Array}      [context] 上下文
 * @return {Number}     num 返回第一个通过predicate迭代函数真值检测的数字
 */
_.find = function(list, predicate, context){
	var currentObj = context || list;
	var isFind = false;
	var num = undefined;
	for(var i =0;i<currentObj.length;i++){
		isFind = predicate.call(currentObj,currentObj[i]);
		if(isFind) {
			num = currentObj[i];
			return num;
		}
	}
}
//_.find方法测试
// var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 3 == 0; });
// console.log(even);
// var b = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 7 == 0; });
// console.log(b);

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

/**
 * where 遍历list中的每一个值，返回一个数组，这个数组包含properties所列出的属性的所有的 键 - 值对。
 * @param  {Array} list    
 * @param  {Object} properties 
 */
_.where = function(list, properties){
	var result  = [];
	for(var i=0;i<list.length;i++){
		var isMatchAll = true;
		for(item in properties){
			if(properties[item]!==list[i][item]){
				isMatchAll = false;
			}
		}
		if(isMatchAll){
			result.push(list[i]);
		}
	}
	console.log(result);
	return result;
}
// var listOfPlays = [{author:"aaa",year:111},{author:'bbb',year:222},{author:'bbb',year:222,ccc:'ccc'}];
// _.where(listOfPlays, {author: "bbb", year: 222});


/**
 * 遍历整个list，返回匹配 properties参数所列出的所有 键 - 值 对的第一个值。
 * @param  {Array} list    
 * @param  {Object} properties 
 */
_.findWhere = function(list, properties){
	var result  = undefined;
	for(var i=0;i<list.length;i++){
		var isMatchAll = true;
		for(item in properties){
			if(properties[item]!==list[i][item]){
				isMatchAll = false;
			}
		}
		if(isMatchAll){
			result = list[i];
			console.log(result);
			return result;
		}
	}
	console.log(result);
	return result;
}
//_.findWhere方法测试
// var listOfPlays = [{author:"aaa",year:111},{author:'bbb',year:222},{author:'bbb',year:222,ccc:'ccc'}];
// _.findWhere(listOfPlays, {author: "bbb", year: 222});
// _.findWhere(listOfPlays, {author: "bbb", year: 222,nnn:"nnn"});


/**
 * reject 返回list中没有通过predicate真值检测的元素集合，与filter相反。
 * @param  {Array}    list
 * @param  {Function} predicate 
 * @param  {Array}    [context]
 * @return {Array}   
 */
_.reject = function(list, predicate, context){
	var currentObj = context || list;
	var isFind = false;
	var result = [];
	for(var i =0;i<currentObj.length;i++){
		isFind = predicate.call(currentObj,currentObj[i]);
		if(!isFind) {
			result.push(currentObj[i]);
		}
	}
	console.log(result);
	return result;
}
//_.reject方法测试
// var a = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// var b = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; },[7,8,9]);


/**
 * every 如果list中的所有元素都通过predicate的真值检测就返回true。
 * @param  {Array}     list      
 * @param  {Function}  [predicate]
 * @param  {Array}     [context]
 */
_.every = function(list, predicate, context) {
	var currentObj = context || list;
	var result = true;
	for(var i=0;i<currentObj.length;i++){
		if(predicate){
			if(!predicate.call(currentObj,currentObj[i])){
				result = false;
			}
		}else{
			if(!currentObj[i]){
				result = false;
			}
		}
		
	}
	console.log(result);
	return result;
}
//_.ervery方法测试
// _.every([true, 1, null, 'yes'], null ,[1,'a',true]);
// _.every([true, 1, null, 'yes'], function(item){} );
// _.every([1, 1, 1, 1], function(item){
// 	if(item==1){
// 		return true;
// 	}
// });

/**
 * some 如果list中有任何一个元素通过 predicate 的真值检测就返回true。一旦找到了符合条件的元素, 就直接中断对list的遍历
 * @param  {Array}    list      
 * @param  {Function} [predicate[] 
 * @param  {Array}    [context]  
 * @return {[type]}
 */
_.some = function(list, predicate, context){
	var currentObj = context || list;
	var result = false;
	for(var i=0;i<currentObj.length;i++){
		if(predicate){
			if(predicate.call(currentObj,currentObj[i])){
				result = true;
			}
		}else{
			if(currentObj[i]){
				result = true;
			}
		}
		
	}
	console.log(result);
	return result;
}

//_.some方法测试
// _.some([null, 0, 'yes', false]);
// _.some([null, 0, false]);
// _.some([null, 0, 'yes'],null,[null,0,false]);


/**
 * contains 如果list包含指定的value则返回true
 * @param  {Array}      list      
 * @param  {任意类型}   value     
 * @param  {Nunber index}     fromIndex 
 * @return {[type]}           
 */
_.contains = function(list, value, fromIndex){
	var i = fromIndex || 0;
	for(i;i<list.length;i++){
		if(value == list[i]){
			console.log(value);
			return value;
		}
	}
}
// _.contains方法测试
// _.contains([1, 2, 3], 2);
// _.contains([1, 2, 3], 3,2);

/**
 * invoke 在list的每个元素上执行methodName方法。 任何传递给invoke的额外参数，invoke都会在调用methodName方法的时候传递给它
 * @param  {Array}     list       
 * @param  {Function}  methodName 
 * @param  {}          *arguments 
 */
_.invoke = function(list, methodName, arguments) {
	for(var i=0;i<list.length;i++){
		Array.prototype[methodName].apply(list[i],arguments);
	}
	console.log(list);
	return list;
}

//_.invoke方法测试
// _.invoke([[5, 1, 7], [3, 2, 1]], 'sort',['bb','cc']);


/**
 * pluck pluck也许是map最常使用的用例模型的简化版本，即萃取数组对象中某属性值，返回一个数组]
 * @param  {Array}    list         
 * @param  {String}   propertyName              
 */
_.pluck = function(list, propertyName) {
	var result = [];
	for(var i=0;i<list.length;i++){
		var isIn = false;
		for(item in list[i]){
			if(propertyName===item){
				isIn = true;
				result.push(list[i][item]);
			}
		}
		if(!isIn){
			result.push(undefined);
		}
	}
	console.log(result);
	return result;
}

//_.pluck方法测试
// var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
// _.pluck(stooges, 'name'); //[ 'moe', 'larry', 'curly' ]
// _.pluck(stooges, 'xxx'); //[undefined, undefined, undefined]

/**
 * max 返回list中的最大值。如果传递iteratee参数，iteratee将作为list中每个值的排序依据。如果list为空，将返回-Infinity
 * @param  {Array} list       
 * @param  {Function} [iteratee] 
 * @param  {Array} [context]  
 * @return {}            
 */
_.max = function(list, iteratee, context){
	var currentObj = context || list;
	if(currentObj.length>0){
		if(iteratee){
			function mySort(){
				return function(a, b) {
	                var value1 = iteratee.call(a,a);
	                var value2 = iteratee.call(b,b);
	                return value1 - value2;
	            }
			}
			var myMax = currentObj.sort(mySort());
			console.log(myMax[myMax.length-1]);
			return myMax[myMax.length-1];
			
		}else{
			var max = Math.max.apply(null, currentObj);
			console.log(max);
			return max;
		}
	}else{
		console.log('-Infinity');
		return '-Infinity';
	}
}
//_.max方法测试
// var a = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 20}];
// _.max(a, function(stooge){ return stooge.age; });
// var b = [];
// _.max(b, function(stooge){ return stooge.age; });
// var c = [321,54,2,5,5];
// _.max(c);


/**
 * min 返回list中的最小值。如果传递iteratee参数，iteratee将作为list中每个值的排序依据。如果list为空，将返回-Infinity
 * @param  {Array} list       
 * @param  {Function} [iteratee] 
 * @param  {Array} [context]  
 * @return {}            
 */
_.min = function(list, iteratee, context){
	var currentObj = context || list;
	if(currentObj.length>0){
		if(iteratee){
			function mySort(){
				return function(a, b) {
	                var value1 = iteratee.call(a,a);
	                var value2 = iteratee.call(b,b);
	                return value2 - value1;
	            }
			}
			var myMin = currentObj.sort(mySort());
			console.log(myMin[myMin.length-1]);
			return myMin[myMin.length-1];
			
		}else{
			var min = Math.min.apply(null, currentObj);
			console.log(min);
			return min;
		}
	}else{
		console.log('-Infinity');
		return '-Infinity';
	}
}

//_.min方法测试
// var numbers = [10, 5, 100, 2, 1000];
// _.min(numbers);
// var a = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 20}];
// _.min(a, function(stooge){ return stooge.age; })


/**
 * sortBy 返回一个排序后的list拷贝副本。如果传递iteratee参数，iteratee将作为list中每个值的排序依据。迭代器也可以是字符串的属性的名称进行排序的
 * @param  {Array,Object} list      
 * @param  {Function}     iteratee  
 * @param  {Array,Object} [context] 上下文
 * @return {}           
 */
_.sortBy = function(list, iteratee, context) {
	var currentObj = context || list;
	var result = [];
	if(_.type(iteratee)==='Function'){
		for(var i=0;i<currentObj.length;i++){
			result.push(iteratee.call(null,currentObj[i]));
		}
		console.log(result);
		return result;
	}else{
		
	}
}

//_.sortBy方法测试
_.sortBy([1, 2, 3, 4, 5, 6], function(num){ return Math.sin(num); });
var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
_.sortBy(stooges, 'name');