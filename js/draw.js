
function setup() {
	createCanvas(1320, 1000);

	rect(10,40,40,10);

}


//function granulate(float x){ }



function draw() {
	//quad(38, 31, 86, 20, 69, 63, 30, 76);
	const args = [];
	//push 8 points through these functions 
	for(let x = 0 ; x < 8 ; x++){
		//perform f(x) = x ** -1 
		args.push( x ** 2) ; 	
	}
	
	for ( let i = 0 ; i < 10 ; i++) {
		for(let j = 0 ; j < args.length; j++ ) 
			args[j] *= 2; 
		

		quad.apply(this,args);

	}
}

