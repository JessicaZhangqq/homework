const player ={
     name:null,
     energy:100,
     lifes: 3,
     loseEnergy: function(damage,){ 
        this.energy-=damage;
        if(this.energy<0){
            this.energy=0;
        }
     },
     recoveryEnergy:function(energyUp){
        this.energy+=energyUp;
        if (this.energy>=100){
            this.energy=100;
        }
     },
     looseLife:function(){
         this.lifes-=1;
         if(this.lifes<=0){
             this.liefes=0;
         }
    },
    recoveryLife: function(){
        this.lifes+=1;
     }
}
player.name='Nico';
player.looseLife();
player.loseEnergy(10);
player.loseEnergy(5);
player.loseEnergy(15);
player.loseEnergy(20);
player.recoveryEnergy(10);
player.loseEnergy(30);
player.loseEnergy(40);
player.looseLife();
player.recoveryLife();
player.recoveryLife();

var template=`The ${player.name} has ${player.energy} energy  and  ${player.lifes} lifes`;
console.log(template);
