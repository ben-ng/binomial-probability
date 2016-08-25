const combinations = require('combinations-js')
const assert = require('assert')

function binomialProbability(trials, successes, prob_of_success) {
  assert.ok(typeof trials === 'number')
  assert.ok(trials >= 0)

  assert.ok(typeof successes === 'number')
  assert.ok(successes >= 0)

  assert.ok(successes <= trials)
  
  assert.ok(typeof prob_of_success === 'number')
  assert.ok(prob_of_success >= 0)
  assert.ok(prob_of_success <= 1)

  return combinations(trials, successes) * Math.pow(prob_of_success, successes) * Math.pow(1 - prob_of_success, trials - successes)
}

function cumulativeBinomialProbability(trials, successes, prob_of_success) {
  let cumulative = 0

  for(let i = 0; i <= successes; ++i) {
    cumulative = cumulative + binomialProbability(trials, i, prob_of_success)
  }

  return cumulative
}

module.exports = binomialProbability
module.exports.cumulative = cumulativeBinomialProbability
