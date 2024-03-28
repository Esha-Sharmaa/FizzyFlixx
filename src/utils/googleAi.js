import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GOOGLEAI_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });


export default model;
