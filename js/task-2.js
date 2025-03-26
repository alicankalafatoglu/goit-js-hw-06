// task-2.js


class Storage {
  #items; // Private property to store items

  constructor(initialItems) {
    this.#items = initialItems; // Initialize with the passed items array
  }

  getItems() {
    return this.#items; // Returns the items array
  }

  addItem(newItem) {
    this.#items.push(newItem); // Adds a new item to the array
  }

  removeItem(itemToRemove) {
    this.#items = this.#items.filter(item => item !== itemToRemove); // Removes item from the array
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
