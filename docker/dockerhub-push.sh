#!/bin/bash

docker tag employee-backend:1.0.0 your-dockerhub-username/employee-backend:1.0.0
docker tag employee-frontend:1.0.0 your-dockerhub-username/employee-frontend:1.0.0

docker push your-dockerhub-username/employee-backend:1.0.0
docker push your-dockerhub-username/employee-frontend:1.0.0
