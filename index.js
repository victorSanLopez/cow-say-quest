import dotenv from 'dotenv';
dotenv.config()
import cowsay from "cowsay";


console.log(cowsay.say({
    text : `Hello I'm ${process.env.MY_NAME} from ${process.env.MY_CAMPUS}!`,
    e : "oO",
    T : "U "
}));