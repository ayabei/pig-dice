function myFunction() {
   
    var y = Math.floor((Math.random() * 6) + 1);
    
    
    $("#output").append(x);

    $("#output1").append(y);

}

function player(playerName,roundscore,tottalscore)
{
	this.playerName=playerName;
	this.roundscore=roundscore;
	this.tottalscore=tottalscore;
}

player.prototype.play= function(){
	 var rolled= Math.floor((Math.random() * 6) + 1);
	 if(rolled===1){
	 	this.roundscore =0;
	 }else{
	 	this.roundscore=this.roundscore +rolled;
	 }
	 return rolled;

}

player.prototype.score =function (){
	this.tottalscore = this.tottalscore+=this.roundscore;

}