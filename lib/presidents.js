const presidentsData = {
  modernPresidents: [
  {
    name: 'Franklin D Roosevelt',
    presidentNumber: 32,
    firstLady: 'Eleanor Roosevelt',
    life: {
      birthYear: 1882,
      deathYear: 1945
      },
    ageAtInauguration: 51,
    inauguration: [ 1933, 1937, 1941, 1945 ],
    terms: 4,
    party: 'Democrat',
    state: 'New York',
    alive: false,
    dieInOffice: false,
    wars: [ 'World War II' ],
    cabinet: {
      vicePresident: 'Harry Truman',
      secretaryOfDefense: [],
      secretaryOfState: ['Cordell Hull', 'Edward Stettinius Jr.']
      },
    children: 6,
    pets: true,
    popularVotes: [ 22821277, 27752648, 27313945, 25612916 ],
    checksAndBalances: {
        executiveOrders: 3728,
        vetoes: 635
      }
  },
  {
    name: 'Harry Truman',
    presidentNumber: 33,
    firstLady: 'Bess Truman',
    life: {
      birthYear: 1884,
      deathYear: 1972
      },
    ageAtInauguration: 60,
    inauguration: [ 1945, 1949],
    terms: 1,
    party: 'Democrat',
    state: 'Missouri',
    alive: false,
    dieInOffice: false,
    wars: [ 'World War II' ],
    cabinet: {
      vicePresident: 'Alben Barkley',
      secretaryOfDefense: ['James Forrestal', 'Louis Johnson', 'George Marshall', 'Robert Lovett'],
      secretaryOfState: ['Edward Stettinius Jr.', 'James Byrnes', 'George Marshall', 'Dean Acheson']
      },
    children: 1,
    pets: true,
    popularVotes: [ 24179347 ],
    checksAndBalances: {
        executiveOrders: 907,
        vetoes: 250
      }
  },
  {
    name: 'Dwight Eisenhower',
    presidentNumber: 34,
    firstLady: 'Mamie Eisenhower',
    life: {
      birthYear: 1890,
      deathYear: 1969
      },
    ageAtInauguration: 62,
    inauguration: [ 1953, 1957 ],
    terms: 2,
    party: 'Republican',
    state: 'Kansas',
    alive: false,
    dieInOffice: false,
    wars: [ 'Korean War', 'Vietnam War' ],
    cabinet: {
      vicePresident: 'Richard Nixon',
      secretaryOfDefense: ['Charles Wilson', 'Neil McElroy', 'Thomas Gates'],
      secretaryOfState: ['John Foster Dulles', 'Christian Herter']
      },
    children: 2,
    pets: true,
    popularVotes: [ 34075529, 35579180 ],
    checksAndBalances: {
        executiveOrders: 484,
        vetoes: 181
      }
  },
  {
    name: 'John F Kennedy',
    presidentNumber: 35,
    firstLady: 'Jacqueline Kennedy',
    life: {
      birthYear: 1917,
      deathYear: 1963
      },
    ageAtInauguration: 43,
    inauguration: [ 1961],
    terms: 1,
    party: 'Democrat',
    state: 'Massachusetts',
    alive: false,
    dieInOffice: true,
    wars: [ 'Vietnam War' ],
    cabinet: {
      vicePresident: 'Lyndon B Johnson',
      secretaryOfDefense: ['Robert McNamara'],
      secretaryOfState: ['Dean Rusk']
      },
    children: 3,
    pets: true,
    popularVotes: [ 34220984 ],
    checksAndBalances: {
        executiveOrders: 214,
        vetoes: 21
      }
  },
  {
    name: 'Lyndon B Johnson',
    presidentNumber: 36,
    firstLady: 'Lady Bird Johnson',
    life: {
      birthYear: 1908,
      deathYear: 1973
      },
    ageAtInauguration: 55,
    inauguration: [1963, 1965 ],
    terms: 1,
    party: 'Democrat',
    state: 'Texas',
    alive: false,
    dieInOffice: false,
    wars: [ 'Vietnam War' ],
    cabinet: {
      vicePresident: 'Hubert Humphrey',
      secretaryOfDefense: ['Robert McNamara', 'Clark Clifford'],
      secretaryOfState: ['Dean Rusk']
      },
    children: 2,
    pets: true,
    popularVotes: [ 43127041 ],
    checksAndBalances: {
        executiveOrders:325 ,
        vetoes: 30
      }
  },  
  {
    name: 'Richard Nixon',
    presidentNumber: 37,
    firstLady: 'Pat Nixon',
    life: {
      birthYear: 1913,
      deathYear: 1994
      },
    ageAtInauguration: 56,
    inauguration: [ 1969, 1973 ],
    terms: 2,
    party: 'Republican',
    state: 'California',
    alive: false,
    dieInOffice: false,
    wars: [ 'Vietnam War' ],
    cabinet: {
      vicePresident: 'Gerald Ford',
      secretaryOfDefense: ['Melvin Laird', 'Elliot Richardson', 'William Clements', 'James Schlesinger'],
      secretaryOfState: ['William Rogers', 'Henry Kissinger']
      },
    children: 2,
    pets: true,
    popularVotes: [ 47168710, 31783783 ],
    checksAndBalances: {
        executiveOrders: 346,
        vetoes: 43
      }
  },  
  {
    name: 'Gerald Ford',
    presidentNumber: 38,
    firstLady: 'Betty Ford',
    life: {
      birthYear: 1913,
      deathYear: 2006
      },
    ageAtInauguration: 61,
    inauguration: [1974],
    terms: 1,
    party: 'Republican',
    state: 'Michigan',
    alive: false,
    dieInOffice: false,
    wars: [ ],
    cabinet: {
      vicePresident: 'Nelson Rockefeller',
      secretaryOfDefense: ['James Schlesinger', 'Donald Rumsfeld'],
      secretaryOfState: ['Henry Kissinger']
      },
    children: 4,
    pets: true,
    popularVotes: [  ],
    checksAndBalances: {
       executiveOrders: 169,
        vetoes: 66
      }
  },  
  {
    name: 'Jimmy Carter',
    presidentNumber: 39,
    firstLady: 'Rosalynn Carter',
    life: {
      birthYear: 1924,
      deathYear: null
      },
    ageAtInauguration: 52,
    inauguration: [1977],
    terms: 1,
    party: 'Democrat',
    state: 'Georgia',
    alive: true,
    dieInOffice: false,
    wars: [ ],
    cabinet: {
      vicePresident: 'Walter Mondale',
      secretaryOfDefense: ['Harold Brown'],
      secretaryOfState: ['Cyrus Vance', 'Edmund Muskie']
      },
    children: 4,
    pets: true,
    popularVotes: [ 40831881 ],
    checksAndBalances: {
        executiveOrders: 320,
        vetoes: 31
      }
  },  
  {
    name: 'Ronald Reagan',
    presidentNumber: 40,
    firstLady: 'Nancy Reagan',
    life: {
      birthYear: 1911,
      deathYear: 2004
      },
    ageAtInauguration: 69,
    inauguration: [1981, 1985],
    terms: 2,
    party: 'Republican',
    state: 'California',
    alive: false,
    dieInOffice: false,
    wars: [ ],
    cabinet: {
      vicePresident: 'George Bush',
      secretaryOfDefense: ['Casper Weinberger', 'Frank Carlucci'],
      secretaryOfState: ['Alexander Haig', 'George Shultz']
      },
    children: 4,
    pets: true,
    popularVotes: [ 54455472, 43903230 ],
    checksAndBalances: {
        executiveOrders: 381,
        vetoes: 78
      }
  },  
  {
    name: 'George Bush',
    presidentNumber: 41,
    firstLady: 'Barbara Bush',
    life: {
      birthYear: 1924,
      deathYear: null
      },
    ageAtInauguration: 64,
    inauguration: [1989],
    terms: 1,
    party: 'Republican',
    state: 'Texas',
    alive: true,
    dieInOffice: false,
    wars: [ 'Gulf War' ],
    cabinet: {
      vicePresident: 'Dan Quayle',
      secretaryOfDefense: ['Dick Cheney'],
      secretaryOfState: [ 'James Baker', 'Lawrence Eagleburger']
      },
    children: 6,
    pets: true,
    popularVotes: [ 48886597 ],
    checksAndBalances: {
        executiveOrders: 166,
        vetoes: 44
      }
  },  
  {
    name: 'Bill Clinton',
    presidentNumber: 42,
    firstLady: 'Hillary Clinton',
    life: {
      birthYear: 1946,
      deathYear: null
      },
    ageAtInauguration: 46,
    inauguration: [1993, 1997],
    terms: 2,
    party: 'Democrat',
    state: 'Arkansas',
    alive: true,
    dieInOffice: false,
    wars: [],
    cabinet: {
      vicePresident: 'Al Gore',
      secretaryOfDefense: ['Leslie Aspin', 'William Perry', 'William Cohen'],
      secretaryOfState: ['Madeline Albright', 'Warren Christopher'] 
      },
    children: 1,
    pets: true,
    popularVotes: [ 44909806, 47400125 ],
    checksAndBalances: {
        executiveOrders: 364,
        vetoes: 37
      }
  },  
  {
    name: 'George W Bush',
    presidentNumber: 43,
    firstLady: 'Laura Bush',
    life: {
      birthYear: 1946,
      deathYear: null
      },
    ageAtInauguration: 54,
    inauguration: [2001, 2005],
    terms: 2,
    party: 'Republican',
    state: 'Texas',
    alive: true,
    dieInOffice: false,
    wars: [  'Afghanistan', 'Iraq War' ],
    cabinet: {
      vicePresident: 'Dick Cheney',
      secretaryOfDefense: ['Donald Rumsfeld', 'Robert Gates'],
      secretaryOfState: ['Colin Powell', 'Condoleeza Rice'] 
      },
    children: 2,
    pets: true,
    popularVotes: [ 50460110, 62040610 ],
    checksAndBalances: {
        executiveOrders: 291,
        vetoes: 12
      }
  },  
  {
    name: 'Barack Obama',
    presidentNumber: 44,
    firstLady: 'Michelle Obama',
    life: {
      birthYear: 1961,
      deathYear: null
      },
    ageAtInauguration: 47,
    inauguration: [2009, 2013],
    terms: 2,
    party: 'Democrat',
    state: 'Illinois',
    alive: true,
    dieInOffice: false,
    wars: [ 'Afghanistan', 'Iraq War' ],
    cabinet: {
      vicePresident: 'Joe Biden',
      secretaryOfDefense: ['Robert Gates', 'Leon Panetta', 'Chuck Hagel', 'Ash Carter'],
      secretaryOfState: ['Hillary Clinton', 'John Kerry'] 
      },
    children: 2,
    pets: true,
    popularVotes: [ 69498516, 65915795 ],
    checksAndBalances: {
        executiveOrders: 276,
        vetoes: 12
      }
  },  
  {
    name: 'Donald Trump',
    presidentNumber: 45,
    firstLady: 'Melania Trump',
    life: {
      birthYear: 1946,
      deathYear: null
      },
    ageAtInauguration: 70,
    inauguration: ['2017'],
    terms: 1,
    party: 'Republican',
    state: 'New York',
    alive: true,
    dieInOffice: false,
    wars: [ 'Afghanistan', 'Iraq War' ],
    cabinet: {
      vicePresident: 'Mike Pence',
      secretaryOfDefense: ['Jim Mattis'],
      secretaryOfState: ['Rex Tillerson', 'Mike Pompeo']
      },
    children: 5,
    pets: false,
    popularVotes: [ 62979636 ],
    checksAndBalances: {
        executiveOrders: 82,
        vetoes: 0
      }
    },
  ],
  
  elections: [2016, 2012, 2008, 2004, 2000, 1996, 1992, 1988, 1984, 1980, 1976, 1972, 1968, 1964, 1960, 1956, 1952, 1948, 1944, 1940, 1936, 1932]
  
};

const presidentsMethods = {
  }


// Questions

// Make an array of all the presidents.

// Make an array of all the presidents, including their number, beginning with most recent.

// Make an array that has an object for each president and firstLady

// How many elections have there been since FDR

// Make an array that has an object for each president and their political party.

// Return an object that has the number of republican presidents and the number of democratic presidents.

// Return an array with all the different wars, no duplicates.

// Return an array of anyone who was a president and also a vice president.

// Return an array of any president who died in office.

// Make an array that contaions an object for the presidents family including, presidents name, firstlady, number of children, and if they had pets

// Make an array that orders presidents based on their age.

// Make an array of all the presidents states, no duplicates.

// For any president that has died, make an array that includes an object with the presidents name, age at inauguration, and how old they lived to be.

// For any living president, make an array that show their current age today.

// Make an array of all vice presidents.

// Make an array of all secretaryOfDefense, no duplicates.

// Make an array of all secretaryOfState, no duplicates.

// Make an array that orders the presidents based on their popular votes, greatest to least.

// Make an array of all presidents that served more than one terms.

// Make an array of all presidents that served only one term.

// Make an array of each president and their number of vetoes.

// Make an array of each president and their number of executive orders.









