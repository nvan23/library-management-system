const os = require('os');

module.exports = {
  env: 'localhost',

  database: {
    username: 'postgres',
    dialect: 'postgres',
    password: '2223',
    database: 'development3',
    host: 'localhost',
    logging: console.log,
    operatorsAliases: false,
  },

  // database: {
  //   username: 'root',
  //   dialect: 'mysql',
  //   password: '',
  //   database: 'development',
  //   host: 'localhost',
  //   logging: console.log,
  //   operatorsAliases: false,
  // },

  // email: {
  //   comment: 'See https://nodemailer.com',
  //   from: '<insert your email here>',
  //   host: null,
  //   auth: {
  //     user: null,
  //     pass: null,
  //   },
  // },

  email: {
    comment: null,
    from: 'vanb1606951@student.ctu.edu.vn',
    host: 'smtp.sendgrid.net',
    auth: {
      user: 'apikey',
      pass: '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',
    },
  },

  clientUrl: 'http://localhost:8081',

  defaultUser: '<insert your email here>',

  uploadDir: os.tmpdir(),

  authJwtSecret: '5fda55e7-9000-4c41-9dc0-8fbb094b2202',
};
