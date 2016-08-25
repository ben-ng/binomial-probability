const binomialProbability = require('./')
const tap = require('tap')

tap.equal(binomialProbability(2, 2, 1/2)
	, 0.25
  , 'The probability of two coin flips being heads is 0.25')

tap.equal(binomialProbability(5, 2, 1/6)
  , 0.1607510288065844
  , 'The probability of getting two sixes when rolling a die twice is roughly 0.161')

tap.equal(binomialProbability.cumulative(100, 45, 1/2)
  , 0.184100808663348
  , 'The probability of getting 45 or fewer heads in 100 tosses of a coin is roughly 0.184')
