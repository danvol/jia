function getTargetsByGoalId(goalId){
	var targets=[];
	if (goalId != ""){
		for(var i = 0; i < G_MAPPING.length; i++){
			if(goalId == G_MAPPING[i][0]){
				for(var j = 0; j < G_TARGETS.length; j++){
					if(G_MAPPING[i][1]== G_TARGETS[j]['id']){
						targets.push(G_TARGETS[j]);
					}
				}
			}
		}
	}
	return targets;
}

function getIndicatorsByTargetId(targetId){
	var indicators=[];
	if (targetId != ""){
		for(var i = 0; i < G_MAPPING.length; i++){
			if(targetId == G_MAPPING[i][1]){
				for(var j = 0; j < G_INDICATORS.length; j++){
					if(G_MAPPING[i][2]== G_INDICATORS[j]['id']){
						indicators.push(G_INDICATORS[j]);
					}
				}
			}
		}
	}
	return indicators;
}