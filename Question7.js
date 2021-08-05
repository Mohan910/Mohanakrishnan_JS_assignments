var operatingSystem = {
  Name : 'Ubuntu',
  version : '18.4',
  liscense : 'open_source'
  };
for (const [key, value] of Object.entries(operatingSystem)) {
  console.log(`${key}: ${value}`);
}

/* OUTPUT :
	Name: Ubuntu
version: 18.4
liscense: open_source */