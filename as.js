/*
 *    AvastScript: Code Like a Pirate!
 */

(function(){
	var dictionary = {
		"cons'"		 : "const",
		"fer"		 : "for",
		"func'n"	 : "function",
		"instanceo'" : "instanceof",
		"typeo'"  	 : "typeof",
		"varrr"   	 : "var",
		"wi'"     	 : "with",
		"Arrray"  	 : "Array",
		"Ma'"		 : "Math",
		"Strin'"  	 : "String"
	};
	var patterns = [];
	for(entry in dictionary){ patterns.push(entry); }
	var regexp = new RegExp(patterns.join('|'), 'g');
	var onload = function(){
		var scripts = document.getElementsByTagName("script");
		for(var i = 0; scripts[i]; i++){
			var script = scripts[i];		
			if(script.type == "text/avastscript"){
				var newScript = document.createElement("script");
				newScript.type = "text/javascript";
				newScript.text = script.text.replace(regexp, function(match){
					return dictionary[match];
				});
				script.parentNode.replaceChild(newScript, script);
			}
		}
	};
	if (window.addEventListener){ window.addEventListener("load", onload, false); }
	else if(window.attachEvent){ window.attachEvent("onload", onload); }
}());
