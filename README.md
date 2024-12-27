# react-aws-ec2-template

A template to deploy a React app to an EC2 instance with Docker.

## Description

This repository provides a template for deploying a React application to an AWS EC2 instance using Docker. The React app is created using `create-react-app` and runs on port 3005, which is configured in the `package.json` file.

## Prerequisites

- Docker
- Docker Compose

## Usage

1. Clone the repository:
    ```sh
    git clone /home/andy/Desktop/react-aws-ec2-template
    cd react-aws-ec2-template
    ```

2. Build and run the Docker containers locally:
    ```sh
    docker-compose up --build
    ```

3. Build and run the Docker containers in prod:
    ```sh
    docker-compose -f docker-compose-prod up --build
    ```

4. Access the React app at `http://<your-ec2-instance-ip>`.

5. SSl
    change the production/ngnix to use 443, use letsencrypt for a certicate and dont forget to change your security group to allow traffic on 443.

## License

This project is licensed under the MIT License.
