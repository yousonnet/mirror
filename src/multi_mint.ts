import { Contract, Wallet } from "ethers";
import { wallets } from "../utils/wallets";
import { nft_interface, op_provider } from "../utils/constants";

async function multiMint(
  contract_address: string,
  mint_parameter_message: string,
  single_nft_eth_amount: bigint
) {
  const contract_runners: { contract: Contract; wallet: Wallet }[] =
    wallets!.map((wallet) => {
      return {
        contract: new Contract(contract_address, nft_interface, wallet),
        wallet,
      };
    });
  contract_runners.forEach(async (item, index) => {
    let counter = 0;
    try {
      const hex_data = nft_interface.encodeFunctionData("purchase", [
        item.wallet.address,
        mint_parameter_message,
        item.wallet.address,
      ]);
      await item.wallet.sendTransaction({
        value: single_nft_eth_amount,
        data: hex_data,
        to: contract_address,
      });
      console.log(`wallet number: ${index} mint success`);
      counter++;
    } catch (err) {
      console.log(err);
      console.log(`wallet number: ${index} mint failed`);
    }
    console.log(`all mint out ${counter}`);
  });
}

export { multiMint };
