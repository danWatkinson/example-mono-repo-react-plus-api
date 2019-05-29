#!/bin/bash

API="$PWD/joker-api"
UI="$PWD/joker-ui"

(cd $API && npm run dev)&(cd $UI && npm run dev)
