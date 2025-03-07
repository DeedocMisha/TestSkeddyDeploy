#!/bin/sh
# wait-for-app.sh

until curl -f http://localhost:3000/health; do
  echo "Waiting for app to be ready..."
  sleep 5
done

echo "App is ready, starting Nginx..."
nginx -g 'daemon off;'
