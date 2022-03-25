const http = require('http')
const fs = require('fs')
const _ = require('lodash')


const server = http.createServer((req,res)=>{

    //lodash
    const num = _.random(0,20);
    console.log(num)

    //
    

    res.setHeader('Content-type','text/html');
    let path = './views/'


})


server.listen(3000,()=>{
    console.log('listening to port 3000....')
})