class People {
  //creating People class
  constructor() {
    this.names = new Array(150); //every key/value pairs will be stored inside names
    this.size = 0;
  }
  //hash() method
  /* 
   hash() method accept a key value and transform it into an index
   we use charCodeAt() method to sum the ASCII code of the characters in the key
   *** The method is named usinf _ to indicate that it's a private method
*/

  _hash(key) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.names.length; //ensure the hash value doesn't exceed the bucket size = 150
  }
  //creating the set() method
  /* 
    set method calls the _hash() method to get the index vlue
    ** The [key, value] pair will be assigned to the names at the specified index
    The size property will be incremented by one
  */

  set(key, value) {
    const index = this._hash(key);
    this.names[index] = [key, value];
    this.size++;
  }

  //creating get() method
  /* 
    ** used to get a certain value from the hash table 
     it acceptd a key value as its parameter

     the method will call the _hash() method to once again retrieve the table index
     
     return the value stored at table[index]
    
    */

  get(key) {
    const index = this._hash(key);
    return this.names[index];
  }


  //creating remove() method
  /* 
  * Retrieve the right index using the _hash()
 *  check if the name[iindex] has a truthy value and the length 
         property is greater than zero
         Assign the undefined value to the right index and decrement the size property by one if it is

  
   */

         remove(key){
          const index = this._hash(key);

          if(this.names[index] && this.names[index].length){
            this.names[index] = undefined;
            this.size--;
            return true;
          }else{
            return false
          }
         }
}

const P = new People();

const peopleNames = "Michael Oscar Sam David Juliet Mike Oyamo Otieno";

const person = peopleNames.split(" ");
console.log(person.length);

for (let i = 0; i < person.length; i++) {
  P.set(person[i], i + 1);
}

console.log(P);
//console.log(P.has("Mike"));
console.log(P.get("David"));
console.log(P.remove("Oscar"))
console.log(P)
