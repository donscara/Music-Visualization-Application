function Spectrum(){
	this.name = "spectrum";

	this.draw = function(){
		push();
		var spectrum = fourier.analyze();
		noStroke();
		
		fill(0,255,0)
		for (var i = 0; i< spectrum.length; i++){
			var x = map(spectrum[i], 0, 255, 0, width);
		    var h = map(i, 0, spectrum.length, 0, height);
            colormap = map(spectrum[i],0,255,255,0);
            fill(spectrum[i]*2,colormap,0);
		    rect(0, h, x, height / spectrum.length);
  		}
	
		pop();
	};
}
