class Storage {
    #items;
  
    constructor(initialItems) {
      this.#items = initialItems;
    }
  
    getItems() {
      return this.#items;
    }
  
    addItem(newItem) {
      this.#items.push(newItem);
    }
  
    removeItem(itemToRemove) {
      const index = this.#items.indexOf(itemToRemove);
      if (index !== -1) {
        this.#items.splice(index, 1);
      }
    }
}


const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
