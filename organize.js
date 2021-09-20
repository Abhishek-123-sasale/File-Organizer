let fs = require('fs');
const { type } = require('os');
let path =  require('path');

let types = {
    media : ["mp4","mp3","mkv"],
    archieves : ["zip","7z","rar","tar","gz","ar","iso","xz"],
    documents : ["docx","doc","pdf","xlsx","xls","odt","obs","odp","odg","odf","txt","ps","tex"],
    app : ["exe","dmg","pkg","deb"],
    pictures : ["png","jpg","jpeg"]
}

function organiseFn(srcpath){

    let entities = fs.readdirSync(srcpath);
    let organisedFolder = path.join(srcpath,"organisedFiles");

    if(!fs.existsSync(organisedFolder)){
            fs.mkdirSync(organisedFolder);
    }

    for(let  i = 0;i<entities.length;i++){
        let file = entities[i];
        let checkfile = path.join(srcpath,file)
        if(fs.lstatSync(checkfile).isFile()){
            let type = fileType(file);
            let typeFolder = path.join(organisedFolder,type);
            if(!fs.existsSync(typeFolder)){
                fs.mkdirSync(typeFolder);
            }
            let src = path.join(srcpath,entities[i]);
            let des = path.join(typeFolder,entities[i]);

            fs.copyFileSync(src,des);
        }
    }
}

function fileType(file){
    for(let type in types){
        for(ext of types[type]){  
            if(path.extname(file).split(".")[1] == ext){
                return type;
            }
        }
    }
    return "others";
}


module.exports = {
    organiseFn : organiseFn
};