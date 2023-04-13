function edit() {
    Getapi().then(data => {
    //   console.log(data);
    //   let id = data[0].id;
    //   let stateus = data[0].status;
    //   let post = data[0].posts;
  
    //   let message = "ID: " + id + " | Status: " + stateus + " | Posts: " + post;
    //   sendMessage(message);

    console.log(data);

    });
  }
  
async function Getapi() {
    const response = await fetch('http://thegoodnetwork.fr/index.php/api/posts', {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }
      }
    );
    const data = await response.json();
    return data;
  }

edit();