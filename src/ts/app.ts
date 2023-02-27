import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Movie(1009, 'The Avengers', 2012, 'USA', 'Avengers Assemble!', 
        ['science fiction', 'action', 'fantasy', 'adventure'],'137 мин', 250))

console.log(cart.items);
console.log(cart.getTotal());
console.log(cart.getTotalDis(10));
cart.delete(1008);
console.log(cart.items);
