#!/bin/bash

API="$PWD/joker-api"
UI="$PWD/joker-ui"

(cd $API && npm start)&(cd $UI && npm start)
