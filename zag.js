function page(){
//setTimeout("document.getElementById('poupou').style.opacity='1'",500);
//setTimeout("document.getElementById('down-line').style.opacity='1'",200);



//	setTimeout(function(){ 
//document.getElementById('YourID').innerHTML = '.intperemen {width: 58px;	/*background:#5d84ae;*/		transition: 0.45s linear;		border-bottom: 1px solid #fff;}'
//	}, 2000);
//	setTimeout(function(){ 
//document.getElementById('YourID').innerHTML = '.intperemen {width: 42px;	background: transparent;	transition: 0.35s linear;		border-bottom: 1px solid #595555;}'
//	}, 3500);





setTimeout(function(){
	var f1 = document.getElementsByClassName('intperemen')
	for (var i=0; i<f1.length; i++){



document.getElementsByClassName('intperemen')[i].style.background = 'pink';

document.getElementsByClassName('intperemen')[i].style.height = '20px';

}
}, 10);



														setTimeout(function(){
													var f1 = document.getElementsByClassName('intperemen')
													for (var i=0; i<f1.length; i++){
															document.getElementsByClassName('intperemen')[i].style.background = '#fff';

															document.getElementsByClassName('intperemen')[i].style.height = '20px';
														}
														}, 20);








        var anchors = document.getElementsByClassName('tex2');
        for(var i = 0; i < anchors.length; i++) {
            var anchor = anchors[i];
            anchor.onclick = function() {
                //alert(anchor[0]);



															//	setTimeout(function(){
																	var f1 = document.getElementsByClassName('intperemen')
																	for (var i=0; i<f1.length; i++){
																document.getElementsByClassName('intperemen')[i].style.background = 'pink';



																}
																				setTimeout(function(){
																										var f1 = document.getElementsByClassName('intperemen')
																	for (var i=0; i<f1.length; i++){
																				document.getElementsByClassName('intperemen')[i].style.background = '#fff';
																			}
																				}, 2500);
															//	}, 2500);



            }
        }





																setTimeout(function(){
																	var f1 = document.getElementsByClassName('for')
																	for (var i=0; i<f1.length; i++){
																document.getElementsByClassName('for')[i].style.color = 'black';
									//							document.getElementsByClassName('for')[i].style.fontSize = '20px';







																}
																}, 2500);




/*function loadjscssfile(fil, css) {
if (filetype == "css") { //if filename is an external CSS file
    var fileref = document.createElement("link")
    fileref.setAttribute("rel", "stylesheet")
    fileref.setAttribute("type", "text/css")
    fileref.setAttribute("href", "fil.css")
  }
  if (typeof fileref != "undefined")
    document.getElementsByTagName("head")[0].appendChild(fileref)
}
*/
function loadCss(href) {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
}
loadCss("fil.css");















    /*    var anchors = document.getElementsByClassName('tex2');
        for(var i = 0; i < anchors.length; i++) {
            var anchor = anchors[i];



            anchor.onclick = function() {

				document.getElementsByClassName('intperemen')[i-1].style.background = 'green';


}}*/



/*var anchors = document.getElementsByClassName('intperemen');
for(var i = 0; i < (anchors.length); i++) {
var anchor = anchors[i];

//if (i < 3) { alert(i);  }

//document.getElementsByClassName('tex2')[i].addEventListener("mouseover", function(){anchor.style.background = "#c00";this.addEventListener("mouseout", function(){anchor.style.background = "";});});
//document.getElementsByClassName('tex2')[anchor].addEventListener("mouseover", function(){document.getElementsByClassName('intperemen')[anchor].style.background = "#c00";this.addEventListener("mouseout", function(){document.getElementsByClassName('intperemen')[anchor].style.background = "";});
//});
document.getElementsByClassName('tex2')[i].addEventListener("mouseover", function(){i.style.background = "#c00";this.addEventListener("mouseout", function(){i.style.background = "";});});


}*/










}