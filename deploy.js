const FtpDeploy = require('ftp-deploy');// eslint-disable-line import/no-unresolved

const ftpDeploy = new FtpDeploy();

const config = {
  username: process.env.USER,
  password: process.env.PASS, // optional, prompted if none given
  host: 'hera.fhict.nl',
  port: 21,
  localRoot: `${__dirname}/build`,
  remoteRoot: '/public_html/',
  include: [''],
  exclude: ['.git'],
};

ftpDeploy.deploy(config, (err) => {
  if (err) console.log(err);
  else console.log('finished');
});
