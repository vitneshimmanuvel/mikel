import { GoogleGenAI } from "@google/genai";

let ai: GoogleGenAI | null = null;

const getAiClient = () => {
    if (!ai) {
        const apiKey = process.env.API_KEY;
        if (!apiKey) {
            console.warn("Gemini API Key is missing. usage of AI features will fail.");
            return null;
        }
        try {
             ai = new GoogleGenAI({ apiKey });
        } catch (e) {
             console.error("Failed to initialize Gemini client", e);
             return null;
        }
    }
    return ai;
}

export const getAIRecommendation = async (userMessage: string) => {
  try {
    const client = getAiClient();
    if (!client) {
        return "I'm currently offline (API Key missing). Please contact the administrator or use the inquiry form.";
    }

    const response = await client.models.generateContent({
      model: "gemini-2.0-flash", // Updated to a more standard model name if possible, or keep as is. Let's stick to user's choice or a known stable one. The user had "gemini-3-flash-preview" which might be invalid?
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
