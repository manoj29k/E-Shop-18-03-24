export class AuthService {
    // une classe à des attributs et des comportements
    static async login(email, password) {
      console.log("appel de ma méthode login", email, password);
      // lorsque vous adresser une requête à un service web vous utilisez
      // fetch qui est une API autrement dit un intermédiaire qui va grâce à une certaine abstraction vous aider à obtenir des ressources
      const result = await fetch("/data/users.json");
      // il faut convertir le json en js
      const users = await result.json();

      // maintenant tu vas me trouver l'utilisateur qui a le même email que celui que je viens de t'envoyer
      const userCallback = (user) => user.email == email;

      const user = users.find(userCallback);

      if (!user) {
        console.log("no user found");
        return "no user found";
      }
      if (user.password !== password) {
        console.log("no password");
        return "bad request";
      }

      // tout s'est bien passé je veux persister mon utilisateur du côté du navigateur

      const storage = window.localStorage;
      const data = {
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
      };

      storage.setItem("user", JSON.stringify(data));
    }
    static logout() {
      console.log("appel de la méthode logout");
      const storage = window.localStorage;
      storage.removeItem("user");
    }
  }