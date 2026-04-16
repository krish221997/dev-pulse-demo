// Dev Pulse Demo entry point
export function greet(name: string, mood: "casual" | "formal" = "casual"): string {
  if (mood === "formal") return `Welcome to Dev Pulse, ${name}.`;
  return `Hey ${name}! Welcome to Dev Pulse.`;
}
