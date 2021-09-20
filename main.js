const help = require('./commands/help');
let helpFn = require('./commands/help');
let treeObj = require('./commands/tree');
let organiseObj = require('./commands/organize');
let inputArr = process.argv.slice(2);
let command = inputArr[0];
let path = inputArr[1];

switch(command)
{
    case "help" :
          help.helpFn();
          break;
    case "tree" :
          treeObj.treeFn(path);
          break;
    case "organize" :
          organiseObj.organiseFn(path);
          break;
    default :
          console.log("Invalid Command");
          break;
}