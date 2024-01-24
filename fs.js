const fs=require("fs")
const news="Hello Everyone"
fs.writeFile("news.txt",news,(err)=>{
    console.log("Completed")
})
