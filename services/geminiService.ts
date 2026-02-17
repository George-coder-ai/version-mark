
import { GoogleGenAI } from "@google/genai";

export const performAiAction = async (prompt: string, currentContent: string): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const fullPrompt = `
    You are an expert Markdown editor and content optimizer.
    Based on the following instruction: "${prompt}"
    
    Current Markdown Content:
    ---
    ${currentContent}
    ---
    
    Please provide ONLY the resulting Markdown content. Do not include any explanations, preambles, or markdown code blocks (like \`\`\`markdown). Just the raw content.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: fullPrompt,
    });
    
    return response.text || "";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};

export const suggestTitle = async (content: string): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Generate a short, concise 2-4 word file name for this markdown content. Return ONLY the name without file extension: ${content.substring(0, 500)}`,
  });
  return response.text?.trim() || "Untitled";
};
