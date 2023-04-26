import UserModel  from "@/resources/user/user.model";
import token from "@/utils/token";
import bcrypt from "bcrypt"

class UserServices{
    private user = UserModel;

    public async regiser (
        username: string,
        email: string,
        password: string,
        role: string
    ): Promise< string | Error >{
        try {
            const hashpass = await bcrypt.hash(password, 10)
            password = hashpass
            const user =  await this.user.create({
                username,
                email,
                password,
                role
            });
            const accessToken = token.createToken(user)
            return accessToken
            
        } catch (error) {
            throw new Error("Unable to register new user")
        }
    }

    public async login (
        email: string,
        password:string
    ): Promise<string | Error> {
        try {
            const user = await this.user.findOne({email})
            if(!user){
                throw new Error( "unable to find user with that email")
            }
            const isMatch = await bcrypt.compareSync(user.password, password)
            if(isMatch){
                return token.createToken(user)
            }else{
                throw new Error ("wrong credebtials")
            }
        } catch (error) {
            throw new Error("unable to login ")
        }
    }
}

export default UserServices