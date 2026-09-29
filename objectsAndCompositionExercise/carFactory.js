function carFactory(obj){
    result = {
        model:'',
        engine: {},
        carriage: {},
        wheels: []
    };


    function choiceEngine(data){
        engine = {};
        if(data.power <= 90){
            engine.power = 90;
            engine.volume = 1800;
            return engine;
        }else if (data.power <= 120){
            engine.power = 120;
            engine.volume = 2400;
            return engine;
        }else if (data.power >= 200){
            engine.power = 200;
            engine.volume = 3500;
            return engine;
        }
       
        }

        function getCarriage(data){
            let res = {};
            res.type = data.carriage;
            res.color = data.color;
            return res;
        }

        function getWheels(data){
            let wheels = [];
            
            for(let i = 0; i < 4; i++){
            if(data.wheelsize % 2 === 0){
                wheels.push(data.wheelsize - 1)
            }else{
                wheels.push(data.wheelsize);
            }
        }
            return wheels;
    }
    result.model = obj.model;
        result.engine = choiceEngine(obj);
        result.carriage = getCarriage(obj);
        result.wheels = getWheels(obj);
        return result;


}



carFactory({ model: 'VW Golf II',
  power: 90,
  color: 'blue',
  carriage: 'hatchback',
  wheelsize: 14 }
)

carFactory({ model: 'Opel Vectra',
  power: 110,
  color: 'grey',
  carriage: 'coupe',
  wheelsize: 17 }
)

carFactory({
    model: 'Ferrari',
    power: 200,
    color: 'red',
    carriage: 'coupe',
    wheelsize: 21
})