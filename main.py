from test import send

def mes():

    titre = "Titre Probleme"
    user = "User + id ticket"
    message = "Probleme"
    att = "Role a mentionner"

    message = titre + '\n' + user + '\n' + message + '\n' + att

    send(message)


