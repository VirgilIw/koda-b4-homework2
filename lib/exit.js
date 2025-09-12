import { rl } from "./listFoodMenu.js";

export const exit = async () => {
  console.log("\nTerima kasih sudah memesan di KFC!");
  await setTimeout(() => {
    console.log("♥️ ♥️ ♥️\n");
  }, 200);

  await setTimeout(() => {
    rl.close();
  }, 1000);
};
