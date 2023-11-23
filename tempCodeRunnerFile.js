const myObject = {
  name: "Alice",
  age: 25,
  city: "San Francisco",
};

for (let key in myObject) {
  if (myObject.hasOwnProperty(key)) {
    console.log(key );
  }
}
