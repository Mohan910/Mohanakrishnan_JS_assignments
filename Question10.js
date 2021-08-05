//the code given in the question is incorrect.
// the correct format of  code is given below.

function Hero(name,level)
{
 this. name = name;
  this.level = level;
}

/* EXPLANATION :
	In JavaScript, the thing called this is the object that "owns" the code.
	The value of this, when used in an object, is the object itself.
	In a constructor function this does not have a value.
	It is a substitute for the new object. 
	The value of this will become the new object when a new object is created.
	*/