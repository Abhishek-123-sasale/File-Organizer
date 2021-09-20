let fs = require('fs');
let path =  require('path');

function treeFn(srcPath){
    let baseName = path.basename(srcPath);
    console.log("\n\t");
    console.log(baseName);
    console.log("  |_____");
    let content = fs.readdirSync(srcPath);
    let allEntities = "";
    for(let i = 0; i < content.length;i++){
        allEntities += "\n\t" + "|--" + content[i];    
    }    
    allEntities = allEntities.slice(1);
    console.log(allEntities);
}

module.exports = {
    treeFn : treeFn
};