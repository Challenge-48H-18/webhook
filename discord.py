from discord_webhook import DiscordWebhook



def mes():

    titre = "Titre Probleme" # Post/Title
    user = "User + id ticket" # Post/UserID + Post/ID
    message = "Probleme" # Post/desc
    lien = " lien ticket"
    att = "Role a mentionner" # Post/Tags

    message = titre + '\n' + '\n' + user + '\n' + '\n' + message + '\n' + '\n' + lien + '\n' + '\n' + att

    send(message)

def send(message):
    webhook = DiscordWebhook(url='https://discord.com/api/webhooks/1095989356629594142/RF1aFmH18gYqNwELvmCIg5AHCTePAYj6CnV0T-cpwWgnQq2kOAfLvPqTnMxe5sEaSxC-', content=message)
    response = webhook.execute()

mes()