import BloodModel from "@/resources/blood/blood.model";
import Blood from "@/resources/blood/blood.interface"

class BloodService{
    private blood = BloodModel;
    // create blood

    public async create( title : string , description: string, categories: string): Promise<Blood>{
        try {
            const blood  = await this.blood.create({title,description, categories})
            return blood
        } catch (error) {
            throw new Error(" unable to create")
        }
    }
}

export default BloodService