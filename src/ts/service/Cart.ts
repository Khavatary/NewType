import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    getTotal(): number {
        return this._items.reduce((acc, el) => el.price + acc, 0);
    }
    getTotalDis(discount: number): number {
        return ((100 - discount) / 100) * this.getTotal();
    }

    delete(id: number): void {
        this.items.forEach((e) => {
          if (e.id === id) {
            this._items.splice(this.items.indexOf(e), 1);
          }
        });
      }
}