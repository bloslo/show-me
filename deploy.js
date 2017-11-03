var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();
 
var config = {
    username: process.env.USER,
    password: process.env.PASS, // optional, prompted if none given 
    host: "hera.fhict.nl",
    port: 21,
    localRoot: __dirname + "/build",
    remoteRoot: "/public_html/",
    include: [''],
    exclude: ['.git']
}
    
ftpDeploy.deploy(config, function(err) {
    if (err) console.log(err)
    else console.log('finished');
});