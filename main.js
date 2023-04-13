function edit() {
    let titre = "Titre ticket";
    let user = "Nom utilisateur + n° de ticket"; 
    let description = "Description ticket";
    let link = "Lien ticket";
    let mention = "Mention role";

    let message = `${titre}\n\n ${user}\n \n ${description}\n \n ${link}\n\n${mention}`;
    
    return message;
}

function sendMessage() {
  const request = new XMLHttpRequest();
  request.open("POST", "https://discord.com/api/webhooks/1095989356629594142/RF1aFmH18gYqNwELvmCIg5AHCTePAYj6CnV0T-cpwWgnQq2kOAfLvPqTnMxe5sEaSxC-");

  request.setRequestHeader('Content-type', 'application/json');

  let message = edit();

  const params = {
    content: message
  }

  request.send(JSON.stringify(params));
}