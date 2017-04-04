#!/bin/bash

set -ev

amphtml-validator index.html

sw-precache --config=sw-precache-config.js

firebase deploy -P prod
