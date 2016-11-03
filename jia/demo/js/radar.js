function drawRadarChart() {

	var data = {
				labels:["SDG1","SDG2","SDG3","SDG4","SDG5","SDG6","SDG7","SDG8","SDG9","SDG10","SDG11","SDG12","SDG13","SDG14","SDG15","SDG16","SDG17"],
				datasets:[
					{
						label:"Bangladesh",
						backgroundColor:"rgba(0,96,255,0.2)",
						borderColor:"rgba(0,96,255,1)",
						pointBackgroundColor:"rgba(0,96,255,1)",
						pointBorderColor:"#0060ff",
						pointHoverBackgroundColor:"#0060ff",
						pointHoverBorderColor:"rgba(0,96,255,1)",
						hitRadius:5,
						data:[65,59,90,81,56,55,40,65,59,90,81,56,55,40,66,34,100]
					},
					
					{
						label:"Cambodia",
						backgroundColor:"rgba(226,208,0,0.2)",
						borderColor:"rgba(226,208,0,1)",
						pointBackgroundColor:"rgba(226,208,0,1)",
						pointBorderColor:"#e2d000",
						pointHoverBackgroundColor:"#e2d000",
						pointHoverBorderColor:"rgba(226,208,0,1)",
						hitRadius:5,
						data:[28,48,40,19,96,27,100,28,48,40,19,96,27,100,33,33,100]
					},
					
					{
						label:"China",
						backgroundColor:"rgba(1,255,135,0.2)",
						borderColor:"rgba(1,255,135,1)",
						pointBackgroundColor:"rgba(1,255,135,1)",
						pointBorderColor:"#00ff87",
						pointHoverBackgroundColor:"#00ff87",
						pointHoverBorderColor:"rgba(1,255,135,1)",
						hitRadius:5,data:[2,48,65,19,79,34,54,2,48,65,19,79,34,54,98,33,11]
					},
					{
						label:"India",
						backgroundColor:"rgba(135,255,255,0.2)",
						borderColor:"rgba(135,255,255,1)",
						pointBackgroundColor:"rgba(135,255,255,1)",
						pointBorderColor:"#87ffff",
						pointHoverBackgroundColor:"#87ffff",
						pointHoverBorderColor:"rgba(135,255,255,1)",
						hitRadius:5,data:[98,45,40,32,96,79,34,98,45,40,32,96,79,34,55,66,77]
					},
					
					{
						label:"Indonesia",
						backgroundColor:"rgba(255,255,0,0.2)",
						borderColor:"rgba(255,255,0,1)",
						pointBackgroundColor:"rgba(255,255,0,1)",
						pointBorderColor:"#ffff00",
						pointHoverBackgroundColor:"#ffff00",
						pointHoverBorderColor:"rgba(255,255,0,1)",
						hitRadius:5,data:[99,89,67,19,32,1,65,99,89,67,19,32,1,65,11,22,33]
					},
					{
						label:"Japan",
						backgroundColor:"rgba(255,158,255,0.2)",
						borderColor:"rgba(255,158,255,1)",
						pointBackgroundColor:"rgba(255,158,255,1)",
						pointBorderColor:"#fe9ef2",
						pointHoverBackgroundColor:"#fe9ef2",
						pointHoverBorderColor:"rgba(255,158,255,1)",
						hitRadius:5,
						data:[32,54,89,19,23,57,92]
					},
					
					{
						label:"Korea, Rep.",
						backgroundColor:"rgba(255,158,114,0.2)",
						borderColor:"rgba(255,158,114,1)",
						pointBackgroundColor:"rgba(255,158,114,1)",
						pointBorderColor:"#ff9e72",
						pointHoverBackgroundColor:"#ff9e72",
						pointHoverBorderColor:"rgba(255,158,114,1)",
						hitRadius:5,data:[28,48,2,19,34,27,12,28,48,2,19,34,27,12,55,44,33]
					},
					{
						label:"Philippines",
						backgroundColor:"rgba(255,158,34,0.2)",
						borderColor:"rgba(255,158,34,1)",
						pointBackgroundColor:"rgba(255,158,34,1)",
						pointBorderColor:"#ff9e22",
						pointHoverBackgroundColor:"#ff9e22",
						pointHoverBorderColor:"rgba(255,158,34,1)",
						hitRadius:5,
						data:[28,23,3,67,32,27,39,28,23,3,67,32,27,39,44,44,44]
					},
					
					{
						label:"Vietnam",
						backgroundColor:"rgba(232,99,34,0.2)",
						borderColor:"rgba(232,99,34,1)",
						pointBackgroundColor:"rgba(232,99,34,1)",
						pointBorderColor:"#e86322",
						pointHoverBackgroundColor:"#e86322",
						pointHoverBorderColor:"rgba(232,99,34,1)",
						hitRadius:5,data:[25,48,40,19,96,56,32,25,48,40,19,96,56,32,33,33,44]
					}
				]
			};
			var options = {
			    // 値のラインが棒グラフの値の上にかぶさるようにするか    
			    scaleOverlay : true,
			    // 値の開始値などを自分で設定するか
			    scaleOverride : false,
			    
			    // 以下の 3 オプションは scaleOverride: true の時に使用
			    // 値のステップ数
			    scaleSteps : 10,
			    // 値のステップする大きさ
			    scaleStepWidth : 10,
			    // 値の始まりの値
			    scaleStartValue : 0,
			    // 値の円ラインの表示
			    scaleShowLine : true,
			    // 円ラインの色
			    scaleLineColor : "rgba(0, 0, 0, .1)",
			    // 円ラインの幅
			    scaleLineWidth : 1,
			    // ラベルの表示
			    scaleShowLabels : false,
			    // ラベルの表示フォーマット
			    scaleLabel : "<%=value%>%",
			    // ラベルのフォント
			    scaleFontFamily : "'Arial'",
			    // ラベルのフォントサイズ
			    scaleFontSize : 12,
			    // ラベルのフォントスタイル, normal, italic など
			    scaleFontStyle : "italic",
			    // ラベルの文字色
			    scaleFontColor : "#666",    
			    // ラベルの背景色を塗りつぶすか
			    scaleShowLabelBackdrop : true,
			    // ラベルの背景色
			    scaleBackdropColor : "rgba(255, 255, 255, 0.8)",
			    // ラベルの Padding 上下
			    scaleBackdropPaddingY : 5,
			    // ラベルの Padding 左右
			    scaleBackdropPaddingX : 5,
			    // 中央からポイントラベルに向かう線の表示
			    angleShowLineOut : true,
			    // 中央からポイントラベルに向かう線の色
			    angleLineColor : "rgba(0, 0, 0, .1)",
			    // 中央からポイントラベルに向かう線の幅
			    angleLineWidth : 1,            
			    // ポイントラベルのフォント
			    pointLabelFontFamily : "'Arial'",
			    // ポイントラベルのフォントスタイル
			    pointLabelFontStyle : "normal",
			    // ポイントラベルのサイズ
			    pointLabelFontSize : 12,
			    // ポイントラベルの色
			    pointLabelFontColor : "#999",
			    // 値の点の表示
			    pointDot : true,
			    // 値の点の大きさ
			    pointDotRadius : 2,
			    // 値の点の線の幅
			    pointDotStrokeWidth : 1,
			    // データ部分の枠線の表示？変化がなかった
			    datasetStroke : true,
			    // データ部分の枠線の幅
			    datasetStrokeWidth : 1,
			    // データ部分の塗りつぶし？変化がなかった
			    datasetFill : true,
			    // 表示の時のアニメーション
			    animation : false,
			    // アニメーションの速度 ( ステップ数 )
			    animationSteps : 60,
			    // アニメーションの種類, 以下が用意されている
			    // linear, easeInQuad, easeOutQuad, easeInOutQuad, easeInCubic, easeOutCubic,
			    // easeInOutCubic, easeInQuart, easeOutQuart, easeInOutQuart, easeInQuint,
			    // easeOutQuint, easeInOutQuint, easeInSine, easeOutSine, easeInOutSine,
			    // easeInExpo, easeOutExpo, easeInOutExpo, easeInCirc, easeOutCirc, easeInOutCirc,
			    // easeInElastic, easeOutElastic, easeInOutElastic, easeInBack, easeOutBack,
			    // easeInOutBack, easeInBounce, easeOutBounce, easeInOutBounce
			    animationEasing : "easeOutQuad",
			    // アニメーション終了後に実行する処理
			    // animation: false の時にも実行されるようです
			    // e.g. onAnimationComplete : function() {alert('complete');}
			    onAnimationComplete : null
			};
	var ctx = document.getElementById("myRadarChart");
	var datas = {
			type:'radar',
			data:data
		};
	var myRadarChart = new Chart(ctx,datas);
}

function init(){
	initCountries();
	initLogo();
	initGoals();
	initTargets();
	initIndicators();
	initLevels();
}

function initCountries(){
    $countries = $('.div-countries');
	for (var i = 0; i < G_COUNTRIES.length; i++){
    	$countries.append('<input type="checkbox" name="goals-checkbox" value="'+ G_COUNTRIES[i]["id"]+'" onclick="drawRadarChart(this);">'+G_COUNTRIES[i]["name"]+'');
    	$countries.append('<br>');
	}
}

function initLogo(){
    $home = $('.div-home');
	for (var i = 1; i < 10; i++){
    	var elem = "<div id=\"liu" + i + "\" class=\"liu\" onclick=\"cg(this.id)\" alt=\"Methodology\">" + i;
		elem = elem + "<div class=\"left\" id=\"liu"+i+"z\"></div>";
		elem = elem + "<div class=\"right\" id=\"liu"+i+"y\"></div>";
		elem = elem + "</div>";
    	$home.append(elem);
	}
	$('#liu1').css({'left':'60px', 'top':'0px'});
	$('#liu2').css({'left':'150px', 'top':'0px'});
	$('#liu3').css({'left':'10px', 'top':'30px'});
	$('#liu4').css({'left':'10px', 'top':'87px'});
	$('#liu5').css({'left':'60px', 'top':'115px'});
	$('#liu6').css({'left':'150px', 'top':'115px'});
	$('#liu7').css({'left':'200px', 'top':'88px'});
	$('#liu8').css({'left':'248px', 'top':'116px'});
	$('#liu9').css({'left':'298px', 'top':'90px'});
}

function initGoals(){
    $goals = $('.div-goals');
	for (var i = 0; i < G_SDGs.length; i++){
    	var elem = "<div id=\"goals-" + G_SDGs[i]['id'] + "\" class=\"liu\" onclick=\"addTargetsForRadar(this.id, this);\" text=\"1\" title=\""+G_SDGs[i]['name']+"\">" + (i+1);
		elem = elem + "<div class=\"left\" id=\"goals-"+G_SDGs[i]['id']+"z\"></div>";
		elem = elem + "<div class=\"right\" id=\"goals-"+G_SDGs[i]['id']+"y\"></div>";
		elem = elem + "</div>";
    	$goals.append(elem);
	}
	var left = 0;
	var top = 0;
	var step =40;
	for (var i = 0; i < G_SDGs.length; i++){
		if(i <= 2){
			left = left + 75;
			$('#goals-' + G_SDGs[i]['id']).css({'left':left +'px', 'top':'0px'});
			left = left + step;
			if(i==2){
				left = 0;
			}
		} else if(i > 2 && i <= 6){
			left = left + 25;
			$('#goals-' + G_SDGs[i]['id']).css({'left':left +'px', 'top':'30px'});
			left = left + step + 45;
			if(i==6){
				left = 0;
			}
		} else if(i > 6 && i <= 9){
			left = left + 75;
			$('#goals-' + G_SDGs[i]['id']).css({'left':left +'px', 'top':'60px'});
			left = left + step;
			if(i==9){
				left = 0;
			}
		} else if(i > 9 && i <= 13){
			left = left + 25;
			$('#goals-' + G_SDGs[i]['id']).css({'left':left +'px', 'top':'90px'});
			left = left + step + 45;
			if(i==13){
				left = 0;
			}
		} else{
			left = left + 75;
			$('#goals-' + G_SDGs[i]['id']).css({'left':left +'px', 'top':'120px'});
			left = left + step;
		}
	}
}

function initTargets() {
	var targetsId=[];
	$target = $('.div-targets');
	var	elem = "<dl id=\"accordion\">";
	
	for(var i = 0; i < G_SDGs.length; i++){
		elem = elem + "<dt>" + G_SDGs[i]["name"] + "</dt>";
		elem = elem + "<div class=\"div-dt-target\">";
		var targets = getTargetsByGoalId(G_SDGs[i]["id"]);
		for (var j = 0; j < targets.length; j++){
			elem = elem + "<div class=\"targetcheckbox\"> <input type=\"checkbox\" name=\"goals-checkbox\" value=\""+ targets[j]["id"] + "\" onclick=\"drawRadarChart(this);\"></div>";
			elem = elem +"<dt>" +targets[j]["name"] + "</dt>";
			var indicators = getIndicatorsByTargetId(targets[j]["id"]);
			elem = elem + "<div class=\"div-dd-in\">";
			for (var n = 0; n < indicators.length; n++){
				elem = elem + "<dd>" + indicators[n]["name"] + "</dd>";
			}
			elem = elem + "</div>";
		}
		elem = elem + "</div>";
	}
	elem = elem + "</dl>";
	$target.append(elem);
}

function initIndicators(){
	$indicator = $('.goals-indicators');
	for (var i = 0; i < G_INDICATORS.length; i++){
    	$indicator.append('<input type="checkbox" name="goals-indicators" id="checkbox'+ G_INDICATORS[i]["id"]+'" onclick="redrawNetworkChart();" checked>'+G_INDICATORS[i]["name"]+'');
    	$indicator.append('<br>');
	}
}

function initLevels(){
	$leves = $('.div-simulation2');
	for (var i = 0; i < G_INDICATORS.length; i++){
		var	elem = "<div class=\"div-level-left\">";
    	elem = elem + "<div id=\"div-level-name\" class=\"level"+G_INDICATORS[i]["id"]+"\">"+G_INDICATORS[i]["name"]+"</div>";
    	elem = elem + "<div class=\"jquery-ui-slider\"></div>"
    	elem = elem + "<input type=\"text\" id=\"jquery-ui-slider-value\" size=\"3\" readonly/>";
    	elem = elem + "</div>";
		$leves.append(elem);
		break;
	}
	for (var i = 0; i < G_INDICATORS.length; i++){
		var level = 'level' + G_INDICATORS[i]["id"];
		var text = 'text' + G_INDICATORS[i]["id"];
		$('#'+level). slider( {
	        range: 'min',
	        min: 0,
			max: 5,
			step: 1,
			value: 3,
	        slide: function( event, ui ) {
	           // $('#'+text) . val( ui.value);
	        }
	    } );
	     // $( '#'+text) . val( jQuery('#'+level ) . slider( 'value' ) );
	     break;
	}
}
function onclickCountriesCheckBox(countries){
	if (countries.checked){
		addTargets(countries.value);
	} else{
		deleteTargets(countries.value);
	}
}

function addTargetsForRadar1(n,elm) {
	var n1=n+"z";
	var n2=n+"y";
	if(document.getElementById(n).style.backgroundColor == ""){
		document.getElementById(n).style.backgroundColor="darkgray";
		document.getElementById(n1).style.borderRight="15px solid darkgray";
		document.getElementById(n2).style.borderLeft="15px solid darkgray";
		addTargets(elm.innerText);
	} else {
		document.getElementById(n).style.backgroundColor="";
		document.getElementById(n1).style.borderRight="";
		document.getElementById(n2).style.borderLeft="";
	}
}

