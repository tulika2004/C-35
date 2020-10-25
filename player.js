class player{
    constructor(){

    }

    getCount(){
    var playercountref = database.ref('Playercount');
    playercountref.on("value",function(data){
    Playercount=data.val();
    })
    }

    update(name){
var playerIndex="player"+Playercount;

        database.ref(payerIndex).set({
   name:name
})

    }

    updateCount(){
        database.ref('/').update({
            Playercount:count

        })
        

    }
}