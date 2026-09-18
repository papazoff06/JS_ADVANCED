function pieceOfPie(arr, target1, target2){
    let start = arr.indexOf(target1);
    let end = arr.indexOf(target2) + 1;
    let result = arr.slice(start, end)
    return result
}

pieceOfPie(['Pumpkin Pie',
 'Key Lime Pie',
 'Cherry Pie',
 'Lemon Meringue Pie',
 'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
)
pieceOfPie(['Apple Crisp',
 'Mississippi Mud Pie',
 'Pot Pie',
 'Steak and Cheese Pie',
 'Butter Chicken Pie',
 'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
)