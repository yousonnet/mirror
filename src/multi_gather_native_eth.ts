import { Wallet } from "ethers";
import { wallets } from "../utils/wallets";

async function multiGatherETH(target_address: string, gas_eth: bigint) {
  const Promise_eth_amounts: Promise<{ wallet: Wallet; amount: bigint }>[] =
    wallets.map(async (wallet) => {
      const balance = await wallet.provider?.getBalance(wallet.address)!;
      return {
        wallet,
        amount: balance,
      };
    });
  let eth_amounts = await Promise.all(Promise_eth_amounts);
  eth_amounts.forEach(async (item) => {
    let res = await item.wallet.sendTransaction({
      to: target_address,
      value: item.amount - gas_eth,
    });
    console.log(res);
  });
}

export { multiGatherETH };
