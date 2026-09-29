function heroicInventory(arr){
    let result = [];
    for(let el of arr){
        if (el === '') {
             continue; 
            }
        let data = el.split(' / ');
        let hero = {
        name: data[0],
        level: Number(data[1]),
        items: data[2] ? data[2].split(', ') : []
        };

        result.push(hero)

}
return JSON.stringify(result)
}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
)

heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']
)