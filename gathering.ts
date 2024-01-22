import { multiGatherETH } from "./src/multi_gather_native_eth";
import { multiMint } from "./src/multi_mint";
import { formatUnits, parseUnits } from "ethers";

const gather_address = "";
const gas_eth = 30142417555464n;
//为gas预留的ethamount
async function main() {
  multiGatherETH(gather_address, gas_eth);
}

main();
