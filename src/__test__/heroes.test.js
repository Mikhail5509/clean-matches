import  { sortHeroes }   from '../heroes.js';

  test('should sort heroes by health in descending order', () => {
    const inputArray = [
      {name: 'мечник', health: 10},
      {name: 'маг', health: 100},
      {name: 'лучник', health: 80},
    ];
    const outputArray = [
      {name: 'маг', health: 100},
      {name: 'лучник', health: 80},
      {name: 'мечник', health: 10},
    ];
    
  expect(sortHeroes(inputArray)).toEqual(outputArray);
  });

