const app = require('./config/express');
const config= require('./config/config')

//listen to the port
app.listen(config.port,()=>{
    console.log(`server started on port ${config.port}(${config.env})`);
});


// const express = require('express');
// const path = require('path');
// const port = process.env.PORT || 4260;
// const app = express();

// const destinationDir=path.join(__dirname,'../dist');

// //hosting from dist folder
// app.use(express.static(destinationDir));
// console.log(`express hosting from ${destinationDir}`);

// //serving index.html from dist folder
// app.get('*',(req,res)=>{
//     res.sendFile(path.join(destinationDir,'index.html'));
// });
// console.log(`serving index.html `);

// //initialise app and listen to port
// app.listen(port,()=>console.log(`server is running from port ${port}`));