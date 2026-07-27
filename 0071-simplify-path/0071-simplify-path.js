/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const n = path.length;
    let result = [];
    const paths = path.split("/");
    for(const path of paths){
        if(path === "" || path === "."){
            continue;
        }else if(path === ".."){
            if(result.length){
                result.pop();
            }
        }else{
            result.push(path);
        }
    }
    result = result.join("/");
    return `/${result}`;
};