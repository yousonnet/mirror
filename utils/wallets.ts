import "dotenv/config";
import { Wallet } from "ethers";
import { op_provider } from "./constants";

const keys = process.env.private_keys?.split(",");

const wallets = keys!.map((key) => new Wallet(key, op_provider));

export { wallets };
