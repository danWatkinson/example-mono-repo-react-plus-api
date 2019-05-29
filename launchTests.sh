#!/bin/bash

API="$PWD/joker-api"
UI="$PWD/joker-ui"

(cd $API && npm test)&&(cd $UI && npm run CI-test)
