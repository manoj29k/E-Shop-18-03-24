export class LocalAuthServices{
    static async login(data){
 
       try{
          const result = await fetch('rsc/local-artiste.service.js/user.json')
          const users = await result.json()
          console.log(users);
          // const user = users.((UserInterface) => email == data.email)
       } catch (e){
          console.trace(e)
          return 'erreur pour accéder à la bdd locale';
       }
 
    }
 }