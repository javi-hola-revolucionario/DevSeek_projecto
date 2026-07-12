import { useState, useCallback } from "react";
import { generateResponse } from "../services/ollamaService";

export function useOllama() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const askOllama = useCallback(async (prompt) => {
  try {
    setLoading(true);
    setError(null);

    const response = await generateResponse(prompt);

    return response;
  } catch (err) {
    setError("Ocurrió un error al consultar Ollama.");
    throw err;
  } finally {
    setLoading(false);
  }
}, []);

  return {
    askOllama,
    loading,
    error,
  };
}