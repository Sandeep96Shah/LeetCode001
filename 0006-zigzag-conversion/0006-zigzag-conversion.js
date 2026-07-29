/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    const n = s.length;
    const arr = Array.from({ length: numRows }, () => []);
    let count = 0;
    let col = 0;
    while(count < n){
        let row = 0;
        while(row < numRows){
            arr[row][col] = s[count];
            console.log(row, col, s[count]);
            count++;
            row++;
        }
        col++;
        row = numRows - 2;
        while(row > 0 && col < n){
            arr[row][col] = s[count];
            console.log(row, col, s[count]);
            row--;
            col++;
            count++;
        }
    }
    let str = "";
    for(let i = 0; i < numRows; i++){
        for(let j = 0; j < n; j++){
            if(arr[i][j]){
                str = str + arr[i][j];
            }
        }
    }
    return str;
};