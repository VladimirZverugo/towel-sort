module.exports = function towelSort (matrix) {
    let arr = [] ;
    let temp2 = [];
    let temp4= [];
    if (matrix && matrix.length){

        if (matrix.length === 2) {
            temp2 = matrix[1].reverse();
            arr = arr.concat(matrix[0]).concat(temp2);
        }else if (matrix.length === 3) {
            temp2 = matrix[1].reverse();
            arr = arr.concat(matrix[0]).concat(temp2).concat(matrix[2]);
        }else if (matrix.length === 4) {
            temp2 = matrix[1].reverse();
            temp4 = matrix[3].reverse();
            arr = arr.concat(matrix[0]).concat(temp2).concat(matrix[2]).concat(temp4);
        }
        return arr

    }else{
            return [] ;
        }
}

