#!/bin/bash

SAM_API_GATEWAY_PORT=3001
DOCKER_GATWAY_IP=host.docker.internal

sam local start-api -p $SAM_API_GATEWAY_PORT 