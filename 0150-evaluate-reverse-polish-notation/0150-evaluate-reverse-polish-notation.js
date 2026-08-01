/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];

    for(let i = 0; i < tokens.length; i++){
        const char = tokens[i];
        if(char === "+" || char === "-" || char === "*" || char === "/"){
            const operand2 = stack.pop();
            const operand1 = stack.pop();
            switch(char){
                case "+":
                    stack.push(operand1 + operand2);
                    break;
                case "-":
                    stack.push(operand1 - operand2);
                    break;
                case "*":
                    stack.push(operand1 * operand2);
                    break;
                case "/":
                    stack.push(Math.trunc(operand1 / operand2));
                    break;
                default:
                    break;
            }
        }else{
            stack.push(Number(char));
        }  
    }
    return stack.pop();
};