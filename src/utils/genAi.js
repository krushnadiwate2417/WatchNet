import {GoogleGenerativeAI} from "@google/generative-ai";


const genAi = new GoogleGenerativeAI(process.env.GEMINI_AI);
const model = genAi.getGenerativeModel({model : "gemini-2.0-flash"});

export default model;