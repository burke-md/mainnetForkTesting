# Testing With the Forked Mainnet

## Using this repo

Copy the `.example.env` file into a plain `.env` file and fille in the field(s) with your own credentials.

`ALCHEMY_STRING`

You can aquire this key by signing up for a free account at `https://www.alchemy.com/`
Ensure that you start a mainnet project as the intention of this repo is to fork the data from the mainnet. 
Just to clarify we will not be processing transactions with real fees on the mainnet of Ethereum. This is simply where the data comes from.
Once the account and project within is set up click `view key` and copy the `https` value into your `.env` file beside the `ALCHEMY_STRING` field. Do not use quotes as the `dotenv` package interprets these values as string automatically. 

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
npx hardhat coverage
```
