import { multiGatherETH } from "./src/multi_gather_native_eth";
import { multiMint } from "./src/multi_mint";
import { formatUnits, parseUnits } from "ethers";

const target_contract_address = "0xfdde38Da813F3Dc13eF103c5894929B05e023535";
const send_out_value = "0.00489";

const message = "";
//默认的mirror nft的message为空，但最好还是去例子tx里检查一下，为purchase的第二项message里的内容
async function main() {
  const amount = parseUnits(send_out_value, "ether");
  await multiMint(target_contract_address, message, amount);
}

main();
