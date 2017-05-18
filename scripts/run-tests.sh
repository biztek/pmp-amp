#!/bin/bash

set -ev

TEST_SUCCESS="PASS"
TEST_OUTPUT="test.output"

amphtml-validator index.html > $TEST_OUTPUT

if grep -qF "$TEST_SUCCESS" "$TEST_OUTPUT" 2>/dev/null; then
  rm "$TEST_OUTPUT"
  echo 'success'
  exit 0
else
  rm "$TEST_OUTPUT"
  echo 'fail'
  exit 1
fi
