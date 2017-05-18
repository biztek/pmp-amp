#!/bin/bash

set -ev

firebase deploy -P prod --token "$FIREBASE_TOKEN"
