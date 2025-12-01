import fs from "node:fs";
import path from "node:path";

const DAYS = fs.readdirSync("src/days").filter((file) => !path.extname(file));

const processArgs = () => {
  let args = process.argv.slice(2);

  const containsAll = args.some((arg) => arg === "all");
  if (containsAll) {
    args = DAYS;
  }

  const filteredArgs = args.map((arg) => (arg.length === 1 ? `0${arg}` : arg)).filter((arg) => DAYS.includes(arg));
  return filteredArgs;
};

const importDayFiles = async (day) => {
  const importPath = `./dist/days/${day}/main.js`;
  const inputPath = path.join("inputs", `${day}.txt`);

  try {
    const { main: script } = await import(importPath);
    if (!script) {
      console.log(`Failed to import script for day ${day}!`);
      return null;
    }

    const input = fs.readFileSync(inputPath, "utf-8");

    return { script, input };
  } catch (err) {
    console.log(`Failed to import files for day ${day}:`, err);
    return null;
  }
};

const runDay = async (day) => {
  const { script, input } = await importDayFiles(day);
  if (!script || input === null) {
    return;
  }

  const inputLines = input.split(/\r?\n/);
  const { part1, part2 } = script(inputLines);

  console.log(`---------- Day ${day} ---------- `);
  console.log("Part 1:", part1 ?? "N/A");
  console.log("Part 2:", part2 ?? "N/A", "\n");
};

const runDays = async (days) => {
  for (const day of days) {
    await runDay(day);
  }
};

const main = () => {
  const days = processArgs();

  if (days.length === 0) {
    console.error("No valid days specified to run");
    return;
  }

  runDays(days);
};

main();
