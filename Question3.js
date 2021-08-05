var Employee =
    {
      company:'Rohit'
    }
var Emp1 = Object.create(employee);
delete Emp1.company Console.log(Emp1.company);

// OUTPUT : Uncaught SyntaxError: Unexpected identifier