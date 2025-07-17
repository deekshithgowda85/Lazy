import { inngest } from "./client";
import { gemini, createAgent } from "@inngest/agent-kit";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event }) => {
    const codeAgent = createAgent({
      name: "code-agent",
      system: "You are an expert Next.js developer. You write readable, maintainable code with precision. You write simple Next.js and React snippets with no comment lines (only code).",
      model: gemini({ model: "gemini-1.5-flash" }),
    });
    const { output } = await codeAgent.run(
      `Write the following snippet: ${event.data.value}`
    );
    
    console.log(`Summarized output: ${output}`);
    return { output };
  }
);