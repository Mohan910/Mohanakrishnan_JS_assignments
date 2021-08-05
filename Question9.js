const gimli = {
   name : "Gimli",
  race : "dwarf",
  weapon : "axe",
  greet : function() {
  
   console.log('Hello, my name is', this.name)
  },
  
};
console.log(gimli.greet());

/* OUTPUT :
Hello, my name is Gimli
*/