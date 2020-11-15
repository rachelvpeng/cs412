let express = require('express');
let request = require('request');
let router = express.Router();

const OPTIONS = require('../config/options')

const getPokemonAbility = (pokemonName) => {
  return new Promise(function (resolve, reject) {
    const options = {
      'method': 'GET',
      'url': OPTIONS.getPokemonAbilityOptions.url + pokemonName,
      'headers': {
        'cookie': OPTIONS.getPokemonAbilityOptions.headers.Cookie
      }
    };

    request(options, function (error, response) {
      if (error) reject(error);

      resolve(JSON.parse(response.body).abilities[0].ability.name);
    });
  });
}

router.route('/')
  .get((req, res, next) => {
    res.render('form');
  })
  .post((req, res, next) => {
    let pokemonName = req.body.pokemon;
    getPokemonAbility(pokemonName)
      .then(response => {
        res.render('renderAbility', { pokemonName: pokemonName, ability: response });
      })
      .catch(err => console.log(err));
  })

module.exports = router;