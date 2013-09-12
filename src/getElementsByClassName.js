// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
    var result = [];
    
    currentNode = document.body;
    
    var containClass = function (currentNode){
    	var childNodesElem = currentNode.childNodes;
	    
		if (childNodesElem.length != 0) {
			for (var i = 0; i < childNodesElem.length; i++)
			{
				containClass(childNodesElem[i]);
			}
		}
		
		if ( typeof(currentNode.classList) != 'undefined') {
			if (currentNode.classList.contains(className)){
				result.push(currentNode);
			}
		}
    }
    
    containClass(currentNode);
    
    return result;
};