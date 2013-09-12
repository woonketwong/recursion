// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
	// your code goes here
  	var result = '';
    
  	var processObj = function (currentObj) {
  	    var elementType = '';
  	    
  		if (currentObj instanceof Array){
  		     
  			result += '[';
  			if (currentObj.length != 0){	  
  				for (var i = 0; i < currentObj.length; i++){
					processObj(currentObj[i]); 
				}
  		    	//result += checkItem(currentObj[0]);
				result = result.replace(/,$/, '');
  				result += ']';
			}
			else {
				result += '],';
			}
  		}
  		else if (currentObj instanceof Object){
  		    currentObjLength = Object.keys(currentObj).length
  			result += '{';
  			if (currentObjLength != 0){	  
  				for (key in currentObj){
  					// check if it is a weird object
  					if ((typeof(currentObj[key]) == "function") || 
  					   (typeof(currentObj[key]) == "undefined")){
  					 	// do nothing  
  					}
  					else{ 
  						result += '"'+ key +'"'+':';
						processObj(currentObj[key]);
					}
				}
  		    	//result += checkItem(currentObj[0]);
				result = result.replace(/,$/, '');
  				result += '},';
			}
			else {
				result += '},';
			}
  		    
  			
  		}
  		
  		result += checkItem(currentObj);
  		
  	}
  		
  	var checkItem = function (item) {
  		var checkedResult = '';
  		
  		if (typeof(item) == 'number' || typeof(item) == 'boolean'){
  			checkedResult += item + ',';
  		}
  		
  		if (item === null){
  			checkedResult += "null" + ',';
  		}
  		
  		if (typeof(item) == 'string'){
  			checkedResult += '"' + item + '",';
  		}
  		
  		if (typeof(item) == 'undefined'){
  			checkedResult += '],';
  		}
  		
  		return checkedResult;
  	}
  	
  	processObj(obj);
  	result = result.replace(/,$/, '');
  	return result;
  
};
