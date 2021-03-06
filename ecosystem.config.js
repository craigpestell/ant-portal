module.exports = {
  apps : [{
    name: 'Portal',
    script: 'npm',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'start',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'repn',
      host : 'sfc-web',
      ref  : 'origin/master',
      repo : 'git@github.com:craigpestell/ant-portal.git',
      path : '/var/www/craigpestell.com',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
