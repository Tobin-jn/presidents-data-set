const { expect } = require('chai');

const presidentsMethods = require('../lib/presidents')

describe('Answers to Modern Presidents Problem set', () => {
  
  it('should return an array of all of Beyonce\'s hit songs', () => {
    const hitSongs = beyonceMethods.getHitSongs();

    expect(hitSongs).to.deep.equal([ 
      'bootylicious',
      'singleLadies',
      'letMeUpgradeYou',
      'sorry',
      'sayMyName',
      'feelingMyself' 
    ]);
  })

  it('should create an array with all of Beyonce\'s fierceness ratings', () => {
    const fiercenessList = beyonceMethods.getFiercenessList();

    expect(fiercenessList).to.deep.equal([ 7, 10, 10, 10, 7, 9 ]);
  })
});