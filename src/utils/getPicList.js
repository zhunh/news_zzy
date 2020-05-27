var path = require("path");
var fs = require("fs");

var pathName = '../assets/showList';

const picList = fs.readdirSync(pathName,function(err, files){
   if (err) {
       return console.error(err);
   }
   var picList = []
   files.forEach(function(file){
       picList.push(file)
   });
   return picList
});
console.log(picList)
// export default picList