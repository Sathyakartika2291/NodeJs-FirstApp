const { Console } = require("console")
const fs=require("fs")
const { argv } = require("process")
const news="Hello Everyone"

    console.log("Enter the filename")
   const filename=process.argv[2]
   console.log(filename)
   console.log("Enter the number of files")
   const nof=process.argv[3]
   console.log(nof)
   const text="You are awesome"
   
   for(let i=1;i<=nof;i++)
   {
    fs.writeFile(`${filename}${i}.txt`,text,(err)=>{
        console.log(`file${i}-Completed`)
    })
   }

