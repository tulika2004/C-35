class form{
    constructor(){

    }
    display(){
        var title=createElement('h2');
        title.html("Car racing");
        title.position(130,0);
        
        var input=createInput("Name");
        input.position(130,160);

        var button=createButton('enter');
        button.position(200,200);

        var greeting = createElement('h3');
        
        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();
            Playercount=Playercount+1;
            Player.update(name);
            Player.updateCount(Playercount);

            greeting.html("Hello "+name);
            greeting.position(130,160);

        })
    }
}