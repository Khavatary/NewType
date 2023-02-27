import Cart from '../service/Cart';
import Movie from '../domain/Movie';

test('Test add and delete', () => {
const movie = new Movie(1009, 'The Avengers', 2012, 'USA', 'Avengers Assemble!', 
  ['science fiction', 'action', 'fantasy', 'adventure'],'137 мин', 250);

const movie2 = new Movie(1012, 'The Avengers2', 2013, 'USA', 'Avengers Assemble2!', 
  ['science fiction', 'action', 'fantasy', 'adventure'],'139 мин', 300);

const cart = new Cart();

cart.add(movie);
cart.add(movie2);
cart.delete(1009);

expect(cart.items.length).toEqual(1);
});

test('test summ', () => {
  const movie = new Movie(1009, 'The Avengers', 2012, 'USA', 'Avengers Assemble!', 
  ['science fiction', 'action', 'fantasy', 'adventure'],'137 мин', 250);

const movie2 = new Movie(1012, 'The Avengers2', 2013, 'USA', 'Avengers Assemble2!', 
  ['science fiction', 'action', 'fantasy', 'adventure'],'139 мин', 300);

const cart = new Cart();

cart.add(movie);
cart.add(movie2);

expect(cart.getTotal()).toEqual(550);
});

test('test discont', () => {
  const movie = new Movie(1009, 'The Avengers', 2012, 'USA', 'Avengers Assemble!', 
  ['science fiction', 'action', 'fantasy', 'adventure'],'137 мин', 250);

const movie2 = new Movie(1012, 'The Avengers2', 2013, 'USA', 'Avengers Assemble2!', 
  ['science fiction', 'action', 'fantasy', 'adventure'],'139 мин', 300);

const cart = new Cart();

cart.add(movie);
cart.add(movie2);

expect(cart.getTotalDis(10)).toEqual(495);
});
