import { Document } from "mongoose";

export default interface Blood extends Document{
    title: string;
    description:string,
    categories: string
}