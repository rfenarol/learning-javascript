var array = []
function pushToArray(n){
	for(var c=1; c<=n; c++){
		array.push(c);
	}
	var array = array.filter(function(item){return(item%2===0)});
	var array = array.map(function(item){return(item*2)});
	var array = array.map(function(item){if(item%4===0){return item}});
	var array = array.reduce(function(prev, cur){return prev + cur});
}

