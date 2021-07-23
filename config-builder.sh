#!/bin/zsh
## Clean current build directory
rm -rf ./out

## Make new dir
mkdir -p out

## Create config file
node ./bin/build-config.js >> ./out/Voron2_SKR_20_Config_OUT.cfg
