const express = require('express');
const request = require('request');
const router = express.Router();

const redis = require('redis');
const client = redis.createClient();

const OPTIONS = require('../config/options')

client.flushdb((err, success) => {
  if (err) {
    throw new Error(err);
  }
})

const getPokemonAbility = (pokemonName) => {
  return new Promise(function (resolve, reject) {
    const options = {
      'method': 'GET',
      'url': OPTIONS.getPokemonAbilityOptions.url + pokemonName
    };

    request(options, function (error, response) {
      if (error) reject(error);

      resolve(JSON.parse(response.body).abilities[0].ability.name);
    });
  });
}

router.options("/", function (req, res, next) {
  res.writeHead(200, {
  "Content-Type": "application/x-www-form-urlencoded",
  "Access-Control-Allow-Headers": "*",
  "Access-Control-Allow-Origin": "*",
  });
 res.end();
 });

router.route('/')
  .get((req, res, next) => {
    res.render('form');
  })
  .post((req, res, next) => {
    let pokemonName = req.body.pokemon;

    client.exists(pokemonName, (err, match) => {
      if (err) {
        throw new Error(err);
      }

      if (match) {
        client.get(pokemonName, (e, pokemonAbility) => {
          if (e) throw new Error(e);

          let response = {
            pokemonName: pokemonName,
            pokemonAbility: pokemonAbility,
            fromCache: true
          }

          res.json(response);
        })
      } else {
        getPokemonAbility(pokemonName)
          .then(pokemonAbility => {
            client.set(pokemonName, pokemonAbility, (e, r) => {
              if (e) throw new Error(e);
              
              let response = {
                pokemonName: pokemonName,
                pokemonAbility: pokemonAbility,
                fromCache: false
              }

              res.json(response);
            })

            client.expire(pokemonName, 15);
          })
      }
    })
  })

module.exports = router;