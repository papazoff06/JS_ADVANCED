function findStringLength(arg_1, arg_2, arg_3) {

    let result = arg_1.length + arg_2.length + arg_3.length;
    let avg_result = Math.floor(result / 3);

    console.log(result);
    console.log(avg_result);
}


findStringLength('chocolate', 'ice cream', 'cake')
findStringLength('pasta', '5', '22.3')
