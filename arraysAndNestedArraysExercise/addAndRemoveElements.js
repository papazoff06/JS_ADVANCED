function addAndRemoveElements(arr){
    let result = [];
    let count = 1;
    for (let el of arr){
        
        if(el === 'add'){
            result.push(count)
            count += 1
        }else if(el === 'remove'){
            result.pop(count)
            count += 1
        }
    }
    if (result.length > 0){
        console.log(result.join('\n'))
    }else
        console.log('Empty')
    
}

addAndRemoveElements(['add', 
'add', 
'add', 
'add']
)
addAndRemoveElements(['add', 
'add', 
'remove', 
'add', 
'add']
)

addAndRemoveElements(['remove', 
'remove', 
'remove']
)