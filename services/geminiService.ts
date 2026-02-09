
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getAIRecommendation = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: `You are the AI Assistant for "Micheal Brain Photography". 
        Micheal specializes in:
        1. Weddings (Cinematic, Romantic)
        2. Candid (Natural, Documentary style)
        3. Birthdays (Fun, High Energy)
        4. Ceremonies (Cultural, Traditional)
        
        Your goal is to help potential clients decide what package they need or answer questions about Micheal's style. 
        Keep your responses elegant, professional, and slightly artistic. 
        If they ask for pricing, tell them "Packages start at ₹1,20,000 but vary by event. Please fill out the inquiry form below for a custom quote."
        Always encourage them to book a consultation.`,
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please feel free to use the inquiry form below!";
  }
};
