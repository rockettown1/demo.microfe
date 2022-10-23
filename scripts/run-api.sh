#!/bin/bassh

SAM_API_GATEWAY_PORT=3001

if [[ "$OSTYPE" == "darwin"* ]]; then
  DOCKER_GATWAY_IP=docker.for.mac.localhost
else
  DOCKER_GATWAY_IP=$(docker inspect -f '{{range .IPAM.Config}}{{.Gateway}}{{end}}' bridge 2> /dev/null)
fi

sam local start-api -p $SAM_API_GATEWAY_PORT