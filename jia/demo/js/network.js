
function addCountries(){
    $countries = $('.div-countries');
	for (var i = 0; i < countries.length; i++){
    	//$countries.append('<label for="radio'+ countries[i]["id"]+'">'+countries[i]["name"]+'</label>');
    	$countries.append('<input type="radio" name="countries-radio" value="'+ countries[i]["id"]+'" onclick="redrawNetworkChart()";>' + countries[i]["name"]+'');
    	$countries.append('<br>');
	}
}

function addGoals(){
    $countries = $('.div-goals');
	for (var i = 0; i < sdgsName.length; i++){
    	//$countries.append('<label for="checkbox'+ sdgsName[i]["id"]+'">'+sdgsName[i]["name"]+'</label>');
    	$countries.append('<input type="checkbox" name="goals-checkbox" value="'+ sdgsName[i]["id"]+'" onclick="clickGoalCheckbox(this);">'+sdgsName[i]["name"]+'');
    	//$countries.append('</label>');
    	$countries.append('<br>');
	}
}

function clickGoalCheckbox(goal){
	if (goal.checked){
		addTargets(goal.value);
	} else{
		deleteTargets(goal.value);
	}
}
function addTargets(goalId){
	var targetsId = getTargetsIdByGoalId(goalId);
	var targets = getTargets(targetsId);

    $target = $('.div-targets');
	for (var i = 0; i < targets.length; i++){
		var elem = "<div class=\"target-check-div\">";
    	elem = elem + "<input type=\"checkbox\" name=\"target-checkbox\" value=\""+ targets[i]["id"]+"\" onclick=\"redrawNetworkChart();\" checked >"+targets[i]["name"];
    	elem = elem + "<br>";
		var indicatorsId = getIndicatorsId(targets[i]["id"]);
		var indicators = getIndicators(indicatorsId);
		for (var j = 0; j < indicators.length; j++){
			elem = elem + "&nbsp;&nbsp;&nbsp;&nbsp;"+ indicators[j]['name'];
    		elem = elem + "<br>";
		}
		elem = elem + "</div>";
		$target.append(elem);
	}
	addIndicators();
	
	redrawNetworkChart();
}
function deleteTargets(goalId){
	var targetsId = getTargetsIdByGoalId(goalId);
	if(targetsId.length == 0){
		return;
	}
	$targets = $('.div-targets');
	for(var i = 0; i < targetsId.length; i++){
		$targets.find('.target-check-div').remove();
  	}
	addIndicators();
	
	redrawNetworkChart();
}


function addIndicators(){
	var targets = getSelectedAllTargets();
	if(targets.length == 0){
		return ;
	}
	var indicators = getIndicators(targets);
	// 重複を削除したリスト
	indicators = indicators.filter(function (x, i, self) {
	            return self.indexOf(x) === i;
	        });
    $indicator = $('.div-indicators');
	for (var i = 0; i < G_INDICATORS.length; i++){
    	$indicator.append('<input type="checkbox" name="goals-indicators" id="checkbox'+ G_INDICATORS[i]["id"]+'" onclick="redrawNetworkChart();" checked>'+G_INDICATORS[i]["name"]+'');
    	$indicator.append('<br>');
	}
}




function selectAllGoals(){
	
}

function getSelectedAllTargets(){
	var targets=[];
	$('[name="target-checkbox"]:checked').each(function(){
  		targets.push($(this).val());
	});
	return targets;
} 
function getSelectedAllGoals(){
	var goals=[];
	$('[name="goals-checkbox"]:checked').each(function(){
  		goals.push($(this).val());
	});
	return goals;
}

function getSelectedCountries(){
	return $('input[name=goals-checkbox]:checked').val();
}

function createNetworkChart(webData) {


}

function getSelectedCountries(){
	var countryId = $('input[name=countries-radio]:checked').val();
	return countryId;
}

function crateNodes (selectedTargets){
	// SDGs/Short name
    var nodes = new Array();
	for (var i = 0; i < targetsName.length; i++){
		var node = {};
		node['id'] = targetsName[i]['id'];
		node['label'] = targetsName[i]['id'];
		node['title'] = targetsName[i]['name'];
		node['color'] = getNodeColor(selectedTargets,targetsName[i]['id']);	
		node['value'] = 22;
		node['group'] = 24;
		node['x'] = random();
		node['y'] = random();
		nodes.push(node);
	}
	return nodes;
}

function getNodeColor (selectedTargets, checkTarget){
	var color = "#97C2FC";
    for (var i = 0; i < selectedTargets.length; i++){
		if(selectedTargets[i] == checkTarget){
			color =  "#FFFF00";
			break;
		}
	}
	return color;
}
function crateEdges (selectedIndex){
    var edges = new Array();
    var index = 0;
	for (var i = 0; i < G_NetWorkDdges.length; i++){
		var edge = {};
		edge['from'] = G_NetWorkDdges[i][0];
		edge['to'] = G_NetWorkDdges[i][1];
		edge['value'] = G_NetWorkDdges[i][selectedIndex+1];
		//edge['value'] = 1;	
		//edge['title'] = "ddd";	
		edges.push(edge);
	}
	return edges;
}

function random(){
	return ( Math.random() * ( ( 300 + 1 ) - (-300) ) ) + (-300);
}

function redrawNetworkChart() {
	var network;
	var selectedCountries = getSelectedCountries();
	if(selectedCountries.length == 0){
		return;
	}
	var selectedTargets = getSelectedAllTargets();
	if(selectedTargets.length == 0){
		return;
	}
	var data = {};
   	data['nodes'] = nodes = crateNodes(selectedTargets);
    data['edges'] = edges = crateEdges(selectedCountries);
    var container = document.getElementById('mynetwork');
    var options = {
		nodes: {
        	shape: 'circle',
        	scaling: {
          		min: 10,
          		max: 30,
          		label: {
            		min: 8,
            		max: 30,
            		drawThreshold: 12,
            		maxVisible: 20
          		}
        	},
        	font: {
          		size: 12,
          		face: 'Tahoma'
        	}
      	},
      	edges: {
        	width: 0.15,
        	color: {inherit: 'from'},
        	smooth: false
      	},
      	physics: false,
      	interaction: {
        	hideEdgesOnDrag: false,
        	tooltipDelay: 200,
        	hover:true
      	},
      	configure: {
        	filter: function (option, path) {
          		return false;
        	},
        	showButton: false
      	},
    };

    network = new vis.Network(container, data, options);
}