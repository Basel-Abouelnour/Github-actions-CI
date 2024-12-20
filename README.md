# GitHub Actions CI/CD for Python To-Do App

This repository demonstrates a Continuous Integration and Continuous Deployment (CI/CD) pipeline for a simple Python-based To-Do application with an HTML, CSS, and JavaScript frontend.

## Repository Overview

- Backend: Python

- Frontend: HTML, CSS, JavaScript

- CI/CD Tool: GitHub Actions

## Features of CI/CD Pipeline

The GitHub Actions workflow in this repository performs the following steps:

1. Build: Builds the application Docker images.

2. Deploy: Deploys the application using Docker Compose.

## Usage

### Clone the Repository
```
git clone https://github.com/Basel-Abouelnour/Github-actions-CI.git
cd Github-actions-CI
```
### GitHub Actions Workflow

The CI/CD pipeline is defined in `.github/workflows/main.yml`.

### How to Trigger the Workflow

The workflow is triggered automatically after pushin to the `main` branch.

### Workflow Configuration

Below is the workflow configuration:
```
name: CI/CD for To-Do App

on:
  push:
    branches:
      - main
 
jobs:
  build-and-deploy:
    runs-on: self-hosted
 
    steps:
      - name: Checkout repository
        uses: actions/checkout@v3
 
      - name: Set up Docker
        uses: docker/setup-buildx-action@v2
 
      - name: Build and push Docker images
        run: |
          docker compose build
          docker compose up -d

```
