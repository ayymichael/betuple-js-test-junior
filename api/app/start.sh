#!/bin/bash
sed -i "s|DB_HOST|$DB_HOST|g" build/bundle.js
sed -i "s|DB_NAME|$DB_NAME|g" build/bundle.js
sed -i "s|DB_USERNAME|$DB_USERNAME|g" build/bundle.js
sed -i "s|DB_PASSWORD|$DB_PASSWORD|g" build/bundle.js
sed -i "s|DB_PORT|$DB_PORT|g" build/bundle.js

node build/bundle.js