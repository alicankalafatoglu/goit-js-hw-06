// task-3.js

// task-3.js

class StringBuilder {
  #value; // Private property to hold the string value

  constructor(initialValue) {
    this.#value = initialValue; // Initialize with the passed initial value
  }

  getValue() {
    return this.#value; // Returns the current value of the string
  }

  padStart(str) {
    this.#value = `${str}${this.#value}`; // Adds the string at the start
  }

  padEnd(str) {
    this.#value += str; // Adds the string at the end
  }

  padBoth(str) {
    this.padStart(str); // First adds to the start
    this.padEnd(str); // Then adds to the end
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
