#!/bin/bash
sed -i "s|DB_HOST|$DB_HOST|g" database.json
sed -i "s|DB_NAME|$DB_NAME|g" database.json
sed -i "s|DB_USERNAME|$DB_USERNAME|g" database.json
sed -i "s|DB_PASSWORD|$DB_PASSWORD|g" database.json
sed -i "s|DB_PORT|$DB_PORT|g" database.json

node build/bundle.js