var next=document.querySelectorAll('.next');
var current=document.querySelectorAll('.first');
var counter=0;
var tenThousands=0;
var thousands=0;
var hundreds=0;
var tens=0;
var ones=0;


function startCounter(){


	
	var endcount=document.getElementById('num').value;
	document.getElementById('num').value="";
	var interval= setInterval(function(){

		counter++;
		if(counter>endcount){
			clearInterval(interval)
			return;
		}
		updateCounter();
	},1000);
}

function updateCounter(){
	
	tenThousands=Math.floor(counter/10000)%10;
	thousands=Math.floor(counter/1000);
	hundreds=Math.floor(counter/100)%10;
	tens=Math.floor(counter/10)%10;
	ones=Math.floor(counter%10);
	
	
	
	next[4].innerHTML=ones;
	next[4].classList.add('animate');
	setTimeout(function(){
		current[4].innerHTML=ones;
		next[4].classList.remove('animate');

	},500);
		
	
		
			if(ones==0){

				next[3].innerHTML=tens;
				 
				next[3].classList.add('animate');
				setTimeout(function(){
				current[3].innerHTML=tens;
				next[3].classList.remove('animate');

				},500);

			}

			if(tens==0 && ones==0 && counter>10){
				next[2].innerHTML=hundreds;
				next[2].classList.add('animate');
				setTimeout(function(){
				current[2].innerHTML=hundreds;
				next[2].classList.remove('animate');

				},500);
			}

			if(hundreds==0 && tens==0 && ones==0 && counter>100){

				next[1].innerHTML=thousands;
				next[1].classList.add('animate');
				setTimeout(function(){
				current[1].innerHTML=thousands;
				next[1].classList.remove('animate');

				},500);

			}

			if(thousands==0 && hundreds==0 && tens==0 && ones==0 && counter>1000){

				next[0].innerHTML=tenThousands;
				next[0].classList.add('animate');
				setTimeout(function(){
				current[0].innerHTML=tenThousands;
				next[0].classList.remove('animate');

				},500);


			}
			
			

		
}



