const name = { firstName:'Philip',
lastName:'Fry'
};
const details = {
  job:'Delivery Boy',
  employer: 'Planet Express'
};
const employee = Object.assign(name,details);
console.log(employee);


/* OUTPUT:
	{
  firstName: 'Philip',
  lastName: 'Fry',
  job: 'Delivery Boy',
  employer: 'Planet Express'
}
*/