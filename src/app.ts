const heroes = [
  { id: 1, name: 'Ironman', owner: 'Marvel' },
  { id: 2, name: 'Spiderman', owner: 'Marvel' },
  { id: 3, name: 'Barman', owner: 'DC' },
];

const findHeroById = (id: number) => {
  return heroes.find((hero) => hero.id === id);
};

const hero = findHeroById(4);

console.log(hero?.name ?? 'Hero not found');
