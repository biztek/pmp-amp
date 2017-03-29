#!/bin/bash

set -ev

sw-precache --config=sw-precache-config.js

firebase deploy -P prod
