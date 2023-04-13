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

function edit() {

  Getapi().then(data => {
    // console.log(data);
    let id = data[0].id;
    let stateus = data[0].status;
    let post = data[0].posts;

    let message = "ID: " + id + " | Status: " + stateus + " | Posts: " + post;
    console.log(message);
  });
}

edit();


// document.querySelector('.send').addEventListener('click', sendMessage);
// function sendMessage() {

//   const request = new XMLHttpRequest();
//   request.open("POST", "https://discord.com/api/webhooks/1095989356629594142/RF1aFmH18gYqNwELvmCIg5AHCTePAYj6CnV0T-cpwWgnQq2kOAfLvPqTnMxe5sEaSxC-");

//   // https://discord.com/api/webhooks/1095987174157066271/__SP4DFW3wGsCgBrfToclFgFvbjW4vXzNYvElAHyYnAVKaaxJGFCgek9k9EovHCiyUov
//   // ttps://discord.com/api/webhooks/1095989356629594142/RF1aFmH18gYqNwELvmCIg5AHCTePAYj6CnV0T-cpwWgnQq2kOAfLvPqTnMxe5sEaSxC-
//   request.setRequestHeader('Content-type', 'application/json');

//   const params = {
//     content: edit()
//   }

//   request.send(JSON.stringify(params));
// }
