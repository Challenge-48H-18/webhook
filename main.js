function edit() {

  Getapi().then(data => {
    console.log(data);
    let id = data[0].id;
    let stateus = data[0].status;
    let post = data[0].posts;

    let message = "ID: " + id + " | Status: " + stateus + " | Posts: " + post;
    console.log(message);
    sendMessage(message);
  });
}

async function Getapi() {
  const response = await fetch('http://thegoodnetwork.fr/index.php/api/states', {
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

function sendMessage(message) {
  const request = new XMLHttpRequest();
  request.open("POST", "https://discord.com/api/webhooks/1095989356629594142/RF1aFmH18gYqNwELvmCIg5AHCTePAYj6CnV0T-cpwWgnQq2kOAfLvPqTnMxe5sEaSxC-");

  request.setRequestHeader('Content-type', 'application/json');

  const params = {
    content: message
  }

  request.send(JSON.stringify(params));
}