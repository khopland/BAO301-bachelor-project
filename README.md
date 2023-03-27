# BAO301-bachelor-project

# How to run the app
# requirements
- [dotnet 7 sdk](https://dotnet.microsoft.com/en-us/download)
- [Node 18 or greater](https://nodejs.org/en)
- [Docker](https://www.docker.com/products/docker-desktop/)

## DEV
### Frontend
- have `node` installed
- `cd` in to frontend folder
- run `npm install` if not done it already
- run `npm run dev` to start the frontend server on port 3000
### Backend
- have dotnet 7 sdk installed
- `cd` in to api folder
- run `dotnet run` to build and start the backend on port http:5000 or https:5001
in dev it has a proxy for the frontend so you need to run both to make it all work and go to port 5000 or 5001.
## Database
you need to have docker installed or a postgres database running on your system for the backend to work.
###### Docker DB
run `docker compose --file .\docker-compose-db.yml up` for postgres on a docker image.


## Docker
need to have docker installed.
- run `docker compose up` to build and run the app with bot frontend, backend and DB in 1 command.


## Production 
To run this in production you need to set the ENV postgresConnectionString to the postgres connection string.
- build the docker image with `docker build -t BAO .` and upload it to a server or a container registry.