
const fs=require("fs")
const news="Hello Everyone"
    console.log("Enter the number of files")
   const nof=process.argv[2]
   console.log(nof)
   const text="Sample text added"
   for(let i=1;i<=nof;i++)
   {
    fs.writeFile(`./file${i}.txt`,text,(err)=>{
        console.log(`file${i}-Completed`)
    })
   }

