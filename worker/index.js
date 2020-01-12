const CronJob = require('cron').CronJob;
const fetchPokemon = require('./tasks/fetchPokemon');

new CronJob('* * * * *', function () {
  fetchPokemon()
}, null, true, 'America/Los_Angeles');