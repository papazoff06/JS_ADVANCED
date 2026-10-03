function townsToJSON(arr){
    let result = [];
   
    for(let i = 1; i < arr.length; i++){
        
    let [value1, value2, value3] = arr[i].split(/\s*\|\s*/).filter(x => x !== '');
        let data = {
        Town: value1,
        Latitude: Number(value2).toFixed(2),
        Longitude: Number(value3).toFixed(2)
        }
        result.push(data);
    }

    for(let row of result){
        row.Latitude = Number(row.Latitude); 
        row.Longitude = Number(row.Longitude);
    }
    console.log(JSON.stringify(result));
}

townsToJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
);

// townsToJSON(['| Town | Latitude | Longitude |',
// '| Veliko Turnovo | 43.0757 | 25.6172 |',
// '| Monatevideo | 34.50 | 56.11 |']
// );