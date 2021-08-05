function foo1()
    {
      return {
          bar: "hello"
      };
    }

    function foo2()
    {
      return
      {
          bar: "hello"
      };
    }
console.log("foo1 returns:");
console.log(foo1());
console.log("foo2 returns:");
console.log(foo2());
/* OUTPUT :
	"foo1 returns:"
      {
          bar: "hello"
      };
	"foo2 returns:"
		undefined
		*/
		
		/* ANSWER:
		Return statement returns the value to be returned to the function caller.
		If the value of the function is omitted it will returned undefined.
		*/