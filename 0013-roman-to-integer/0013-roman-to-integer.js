/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const nums = s.split("");
    let number = 0;
    for(let i = 0 ; i < nums.length; i++){
        if(nums[i] === "I"){
            if(i+1 < nums.length){
                if(nums[i+1] === "V"){
                    number += 4;
                    i++;
                }else if(nums[i+1] === "X"){
                    number += 9;
                    i++;
                }else{
                    number += 1
                }
            }else{
                number += 1;
            }
        }else if(nums[i] === "X"){
            if(i+1 < nums.length){
                if(nums[i+1] === "L"){
                    number += 40;
                    i++;
                }else if(nums[i+1] === "C"){
                    number += 90;
                    i++;
                }else{
                    number += 10;
                }
            }else{
                number += 10;
            }
        }else if(nums[i] === "C"){
            if(i+1 < nums.length){
                if(nums[i+1] === "D"){
                    number += 400;
                    i++;
                }else if(nums[i+1] === "M"){
                    number += 900;
                    i++;
                }else {
                    number += 100;
                }
            }else{
                number += 100;
            }
        }else if(nums[i] === "L"){
            number += 50;
        }else if(nums[i] === "C"){
            number += 100;
        }else if(nums[i] === "D"){
            number += 500;
        }else if(nums[i] === "M"){
            number += 1000;
        }else if(nums[i] === "V"){
            number += 5;
        }
    }

    return number;
};