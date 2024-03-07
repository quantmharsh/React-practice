import config from "../config/config";
import{Client , Account , ID} from "appwrite";
//we are creating a class
export class AuthService{
    //here we will create a two properties
    client= new Client();
    account;
    //whenever  this constructor will be called using object then only client will be created. thats 
    //why we are using constructor here
    constructor()
    {
      this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId)
      //create account
      this.account= new Account(this.client);
    }
    //Here we will create a method that will create a user account
    //basically we are doing it because we will wrap all appwriter dunctionality inside this function
    //if in future we need to change or use another service then we can easily do it
    async createAccount({email , password , name})
    {
     try {
      const userAccount=  await this.account.create(ID.unique() , email , password  , name);
      if(userAccount)
      {
       //here we will call another method to login user  into system if he create its account
       return  await this.login({email , password});
      }
      else{
        return userAccount;

     }
        
     } catch (error) {
         throw error;
     }
    }
    async login({email , password}){
        try{
 return await  this.account.createEmailSession(email , password);

        }
        catch(error)
        {
            return error;
        }

    }
    async getCurrentUser(){
        try{
           
            return await this.account.get();

        }
        catch(error)
        {
         console.log("error while getting user"  ,error);
        }
        return null;
    }
    async logout(){
        try {
            return await this.account.deleteSessions();
            
        } catch (error) {
            throw error;
            
        }
    }

}
//we willa also create the object of this class  and export it 
// whenever we require methods inside it we can easily get it by just using  its object
const authService= new AuthService();
export default authService;