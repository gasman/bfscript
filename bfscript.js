/*
 *    bfscript: Enterprise-level web scripting in Brainfuck
 */

(function(){
	var onload = function(){
		var scripts = document.getElementsByTagName("script");
		for(var i = 0; scripts[i]; i++){
			var script = scripts[i];		
			if(script.type == "text/brainfuck"){
				var newScript = document.createElement("script");
				newScript.type = "text/javascript";
				jsOutput = 'mem = [];pc=0;'
				
				chars = script.text.split('');
				for (var i = 0; i < chars.length; i++) {
					switch (chars[i]) {
						case '>':
							jsOutput += 'pc++;';
							break;
						case '<':
							jsOutput += 'pc--;';
							break;
						case '+':
							jsOutput += 'mem[pc] = (mem[pc] || 0) + 1;';
							break;
						case '-':
							jsOutput += 'mem[pc] = (mem[pc] || 0) - 1;';
							break;
						case '[':
							jsOutput += 'while (mem[pc]) {';
							break;
						case ']':
							jsOutput += '}';
							break;
						case '.':
							jsOutput += 'document.write(String.fromCharCode(mem[pc]));';
							break;
						case ',':
							/* no input yet */
							jsOutput += 'mem[pc] = 0;';
							break;
					}
				}
				
				newScript.text = jsOutput;
				script.parentNode.replaceChild(newScript, script);
			}
		}
	};
	if (window.addEventListener){ window.addEventListener("load", onload, false); }
	else if(window.attachEvent){ window.attachEvent("onload", onload); }
}());
