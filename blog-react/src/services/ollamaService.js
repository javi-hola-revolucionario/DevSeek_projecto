const API_URL = "http://localhost:11434/api/generate";

export async function generateResponse(prompt) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "deepseek-r1:1.5b",
        prompt,
        stream: false,
      }),
    });

    if (!response.ok) {
      throw new Error(`Ollama request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error("Error al conectar con Ollama:", error);
    throw error;
  }
}