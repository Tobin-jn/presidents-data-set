const { expect } = require('chai');

const presidentsMethods = require('../lib/presidents.js')

describe('Answers to Modern Presidents Problem set', () => {
  it('should return an array of all the presidents', () => {
    const presidents = presidentsMethods.getPresidents();

    expect(presidents).to.deep.equal([ 
      'Franklin D Roosevelt',
      'Harry Truman',
      'Dwight Eisenhower',
      'John F Kennedy',
      'Lyndon B Johnson',
      'Richard Nixon',
      'Gerald Ford',
      'Jimmy Carter',
      'Ronald Reagan',
      'George Bush',
      'Bill Clinton',
      'George W Bush',
      'Barack Obama',
      'Donald Trump'
    ])
  })

  it('should return an object for each presidents with their number as a key and name as value. ', () => {
    const order = presidentsMethods.getOrder();

    expect(order).to.deep.equal({ 
      32: 'Franklin D Roosevelt',
      33: 'Harry Truman',
      34: 'Dwight Eisenhower',
      35: 'John F Kennedy',
      36: 'Lyndon B Johnson',
      37: 'Richard Nixon',
      38: 'Gerald Ford',
      39: 'Jimmy Carter',
      40: 'Ronald Reagan',
      41: 'George Bush',
      42: 'Bill Clinton',
      43: 'George W Bush',
      44: 'Barack Obama',
      45: 'Donald Trump' 
    })
  })

  it('should return an array with an object for each president and their political party', () => {
    const parties = presidentsMethods.getParty();

    expect(parties).to.deep.equal([ 
      { name: 'Franklin D Roosevelt', party: 'Democrat' },
      { name: 'Harry Truman', party: 'Democrat' },
      { name: 'Dwight Eisenhower', party: 'Republican' },
      { name: 'John F Kennedy', party: 'Democrat' },
      { name: 'Lyndon B Johnson', party: 'Democrat' },
      { name: 'Richard Nixon', party: 'Republican' },
      { name: 'Gerald Ford', party: 'Republican' },
      { name: 'Jimmy Carter', party: 'Democrat' },
      { name: 'Ronald Reagan', party: 'Republican' },
      { name: 'George Bush', party: 'Republican' },
      { name: 'Bill Clinton', party: 'Democrat' },
      { name: 'George W Bush', party: 'Republican' },
      { name: 'Barack Obama', party: 'Democrat' },
      { name: 'Donald Trump', party: 'Republican' } 
    ])
  })

  it('should return an array with all the wars and no duplicates', () => {
    const wars = presidentsMethods.getWars();

    expect(wars).to.deep.equal([ 
      'World War II',
      'Korean War',
      'Vietnam War',
      'Gulf War',
      'Afghanistan',
      'Iraq War' 
    ]);
  })

  it('should return an object with the number of presidents from each party', () => {
    const totalParties = presidentsMethods.getParties();

    expect(totalParties).to.deep.equal({ 
      Democrat: 7, Republican: 7 
    });
  })

  it('should return an array of any president who died in office', () => {
    const died = presidentsMethods.getDied();

    expect(died).to.deep.equal([ 
      'Franklin D Roosevelt', 
      'John F Kennedy' 
    ]);
  })

  it('should return an array that contains an object for the presidents family including: name, firstlady, number of children, and if they had pets', () => {
    const families = presidentsMethods.getFamilies();

    expect(families).to.deep.equal([ 
      { president: 'Franklin D Roosevelt',
        firstLady: 'Eleanor Roosevelt',
        numberChildren: 6,
        pets: true },
      { president: 'Harry Truman',
        firstLady: 'Bess Truman',
        numberChildren: 1,
        pets: true },
      { president: 'Dwight Eisenhower',
        firstLady: 'Mamie Eisenhower',
        numberChildren: 2,
        pets: true },
      { president: 'John F Kennedy',
        firstLady: 'Jacqueline Kennedy',
        numberChildren: 3,
        pets: true },
      { president: 'Lyndon B Johnson',
        firstLady: 'Lady Bird Johnson',
        numberChildren: 2,
        pets: true },
      { president: 'Richard Nixon',
        firstLady: 'Pat Nixon',
        numberChildren: 2,
        pets: true },
      { president: 'Gerald Ford',
        firstLady: 'Betty Ford',
        numberChildren: 4,
        pets: true },
      { president: 'Jimmy Carter',
        firstLady: 'Rosalynn Carter',
        numberChildren: 4,
        pets: true },
      { president: 'Ronald Reagan',
        firstLady: 'Nancy Reagan',
        numberChildren: 4,
        pets: true },
      { president: 'George Bush',
        firstLady: 'Barbara Bush',
        numberChildren: 6,
        pets: true },
      { president: 'Bill Clinton',
        firstLady: 'Hillary Clinton',
        numberChildren: 1,
        pets: true },
      { president: 'George W Bush',
        firstLady: 'Laura Bush',
        numberChildren: 2,
        pets: true },
      { president: 'Barack Obama',
        firstLady: 'Michelle Obama',
        numberChildren: 2,
        pets: true },
      { president: 'Donald Trump',
        firstLady: 'Melania Trump',
        numberChildren: 5,
        pets: false } 
    ]);
  })

  it('should return an array of objects of living presidents and their age, ordered youngest to oldest.', () => {
    const ages = presidentsMethods.getOldest();

    expect(ages).to.deep.equal([ 
      { name: 'Barack Obama', age: 57 },
      { name: 'Bill Clinton', age: 72 },
      { name: 'George W Bush', age: 72 },
      { name: 'Donald Trump', age: 72 },
      { name: 'Jimmy Carter', age: 94 },
      { name: 'George Bush', age: 94 } 
    ]);
  })

  it('should return an array of objects with deceased presidents name and age, ordered oldest to youngest', () => {
    const agesOfDeceased = presidentsMethods.getDeceasedAges();

    expect(agesOfDeceased).to.deep.equal([ 
      { name: 'Gerald Ford', age: 93 },
      { name: 'Ronald Reagan', age: 93 },
      { name: 'Harry Truman', age: 88 },
      { name: 'Richard Nixon', age: 81 },
      { name: 'Dwight Eisenhower', age: 79 },
      { name: 'Lyndon B Johnson', age: 65 },
      { name: 'Franklin D Roosevelt', age: 63 },
      { name: 'John F Kennedy', age: 46 } 
    ]);
  })

  it('should return an array of the presidents states, without duplicates, in alphabetical order', () => {
    const states = presidentsMethods.getStates();

    expect(states).to.deep.equal([ 
      'Arkansas',
      'California',
      'Georgia',
      'Illinois',
      'Kansas',
      'Massachusetts',
      'Michigan',
      'Missouri',
      'New York',
      'Texas' 
    ]);
  })

  it('should return an array of all presidents that served more than one terms', () => {
    const multiTerms = presidentsMethods.getMultiTerms();

    expect(multiTerms).to.deep.equal([ 
      'Franklin D Roosevelt',
      'Dwight Eisenhower',
      'Richard Nixon',
      'Ronald Reagan',
      'Bill Clinton',
      'George W Bush',
      'Barack Obama' 
    ]);
  })

  it('should return an array of all vice presidents', () => {
    const vicePresidents = presidentsMethods.getVicePresidents();

    expect(vicePresidents).to.deep.equal([ 
      'Harry Truman',
      'Alben Barkley',
      'Richard Nixon',
      'Lyndon B Johnson',
      'Hubert Humphrey',
      'Gerald Ford',
      'Nelson Rockefeller',
      'Walter Mondale',
      'George Bush',
      'Dan Quayle',
      'Al Gore',
      'Dick Cheney',
      'Joe Biden',
      'Mike Pence' 
    ]);
  })

  it('should return an array of all secretaries of defense with no duplicates', () => {
    const secrDefense = presidentsMethods.getSecretariesDefense();

    expect(secrDefense).to.deep.equal([ 
      'James Forrestal',
      'Louis Johnson',
      'George Marshall',
      'Robert Lovett',
      'Charles Wilson',
      'Neil McElroy',
      'Thomas Gates',
      'Robert McNamara',
      'Clark Clifford',
      'Melvin Laird',
      'Elliot Richardson',
      'William Clements',
      'James Schlesinger',
      'Donald Rumsfeld',
      'Harold Brown',
      'Casper Weinberger',
      'Frank Carlucci',
      'Dick Cheney',
      'Leslie Aspin',
      'William Perry',
      'William Cohen',
      'Robert Gates',
      'Leon Panetta',
      'Chuck Hagel',
      'Ash Carter',
      'Jim Mattis'
    ]);
  })

  it('should return an array of all secretaries of state with no duplicates', () => {
    const secrState = presidentsMethods.getSecretariesState();

    expect(secrState).to.deep.equal([ 
      'Cordell Hull',
      'Edward Stettinius Jr.',
      'James Byrnes',
      'George Marshall',
      'Dean Acheson',
      'John Foster Dulles',
      'Christian Herter',
      'Dean Rusk',
      'William Rogers',
      'Henry Kissinger',
      'Cyrus Vance',
      'Edmund Muskie',
      'Alexander Haig',
      'George Shultz',
      'James Baker',
      'Lawrence Eagleburger',
      'Madeline Albright',
      'Warren Christopher',
      'Colin Powell',
      'Condoleeza Rice',
      'Hillary Clinton',
      'John Kerry',
      'Rex Tillerson',
      'Mike Pompeo' 
    ]);
  })

  it('should return an array of objects with each president and their number of vetoes as key, in order most to least', () => {
    const vetoes = presidentsMethods.getVetoes();

    expect(vetoes).to.deep.equal([ 
      { name: 'Franklin D Roosevelt', vetoes: 635 },
      { name: 'Harry Truman', vetoes: 250 },
      { name: 'Dwight Eisenhower', vetoes: 181 },
      { name: 'Ronald Reagan', vetoes: 78 },
      { name: 'Gerald Ford', vetoes: 66 },
      { name: 'George Bush', vetoes: 44 },
      { name: 'Richard Nixon', vetoes: 43 },
      { name: 'Bill Clinton', vetoes: 37 },
      { name: 'Jimmy Carter', vetoes: 31 },
      { name: 'Lyndon B Johnson', vetoes: 30 },
      { name: 'John F Kennedy', vetoes: 21 },
      { name: 'George W Bush', vetoes: 12 },
      { name: 'Barack Obama', vetoes: 12 },
      { name: 'Donald Trump', vetoes: 0 } 
    ]);
  })

  it('should return an array of objects with a key of president and their number of executive orders as value, in order least to greatest', () => {
    const execOrders = presidentsMethods.getExecOrders();

    expect(execOrders).to.deep.equal([ 
      { 'Donald Trump': 82 },
      { 'George Bush': 166 },
      { 'Gerald Ford': 169 },
      { 'John F Kennedy': 214 },
      { 'Barack Obama': 276 },
      { 'George W Bush': 291 },
      { 'Jimmy Carter': 320 },
      { 'Lyndon B Johnson': 325 },
      { 'Richard Nixon': 346 },
      { 'Bill Clinton': 364 },
      { 'Ronald Reagan': 381 },
      { 'Dwight Eisenhower': 484 },
      { 'Harry Truman': 907 },
      { 'Franklin D Roosevelt': 3728 } 
    ]);
  })

  it('should return array that has an object with president as key and firstLady as value', () => {
    const prezFirstLadies = presidentsMethods.getFirstLadies();

    expect(prezFirstLadies).to.deep.equal([ 
      { 'Franklin D Roosevelt': 'Eleanor Roosevelt' },
      { 'Harry Truman': 'Bess Truman' },
      { 'Dwight Eisenhower': 'Mamie Eisenhower' },
      { 'John F Kennedy': 'Jacqueline Kennedy' },
      { 'Lyndon B Johnson': 'Lady Bird Johnson' },
      { 'Richard Nixon': 'Pat Nixon' },
      { 'Gerald Ford': 'Betty Ford' },
      { 'Jimmy Carter': 'Rosalynn Carter' },
      { 'Ronald Reagan': 'Nancy Reagan' },
      { 'George Bush': 'Barbara Bush' },
      { 'Bill Clinton': 'Hillary Clinton' },
      { 'George W Bush': 'Laura Bush' },
      { 'Barack Obama': 'Michelle Obama' },
      { 'Donald Trump': 'Melania Trump' } 
    ]);
  })
});