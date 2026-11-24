import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Sick-day excuse: the whole home office caught the cold, and the doctor is a chatbot.
const LINE =
  "I can't come in today — my Wi-Fi caught a cold, my laptop has a fever of 100% CPU, and my smart speaker lost its voice; my doctor, who is also a chatbot, has already signed the note.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
