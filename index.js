let nomeHeroi = " goku "
let xpHeroi = 300000
let classeHeroi 

 for(let xp= 0; xp <= 10001; xp +=1000){
		

if(xpHeroi <= 1000){
	classeHeroi = " Ferro ";
   
}
else if (xpHeroi <= 2000){
	classeHeroi = " Bronze ";
    
}
else if (xpHeroi <= 5000){
	classeHeroi = " Prata ";
    
}
else if (xpHeroi <= 7000){
	classeHeroi = " Ouro ";
    
}
else if (xpHeroi <= 8000){
	classeHeroi = " Platina ";
    
}
else if (xpHeroi <= 9000){
	classeHeroi = " Ascendente ";
    
}
else if (xpHeroi <= 10000){
	classeHeroi = " Imortal ";
    
}
else{
	classeHeroi = " Radiante ";
    }
  
}
		console.log(" O heroi " + nomeHeroi + " esta no nivel " + classeHeroi)