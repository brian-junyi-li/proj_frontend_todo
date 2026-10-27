

 console.log(new Promise((resolve, reject) => {
  resolve("dfdfd");
  reject('Hello World');
 }).then( (ABC) => {console.log(ABC)}).catch((error) => {console.log(error, 'Error')}));