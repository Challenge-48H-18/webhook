function getapi(){
    fetch('http://thegoodnetwork.fr/index.php/api/states')
    .then((resp) => resp.json())
    .then(function(data) {
      console.log(data);
    })
  }
  
  getapi();