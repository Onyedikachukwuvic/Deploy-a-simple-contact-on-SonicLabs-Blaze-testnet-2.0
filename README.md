Deloy a simple contract on Sonic Blaze testnet 2.0 - Sonic Labs.




1. Add Sonic Blaze network and request faucet: https://blaze.soniclabs.com/account

2. rename .env.example to .env

3. add private key in .env file: 'nano .env'
  SONIC_PRIVATE_KEY=your_private_key_here

4. install dependencies: 'npm install'

5. deploy contract: 'npx hardhat run scripts/deploy.js --network sonic'

done.
