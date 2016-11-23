/**
 * Created by Master on 2016/11/23.
 */
var fs=require("fs");
fs.writeFile("hello.js","hello node node.js hahaha",function(error){
    if(error){
        console.log(error);
        return;
    }
    console.log("数据写入成功");
    console.log("开始读取数据...");

});
