function townPopulation(data){
    let townsInfo = {};
    for(let el of data){
        let newData  = el.split('<->');
        let name = newData[0];
        let pop = Number(newData[1]);

        if (townsInfo.hasOwnProperty(name) == false){
            townsInfo[name] = 0;
        }

        townsInfo[name] += pop;
    }
    for (let town in townsInfo){
        console.log(`${town}: ${townsInfo[town]}`)
    }
}

townPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
)
townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
)