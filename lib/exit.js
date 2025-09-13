import { rl } from "./rl.js";

export const exitApp = () => {
  console.log("\nTerima kasih sudah memesan di KFC!");
  setTimeout(() => console.log("♥️ ♥️ ♥️\n"), 200);
  setTimeout(() => rl.close(), 1000);
};
