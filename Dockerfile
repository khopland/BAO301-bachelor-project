FROM node:18-alpine as frontend
WORKDIR /client

COPY ./frontend  ./

RUN npm ci

RUN npm run build

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build-env
WORKDIR /App

# Copy everything
COPY . .
# Restore as distinct layers
RUN dotnet restore ./api
# Build and publish a release
RUN dotnet publish -c Release -o out ./api

# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:7.0
WORKDIR /App
COPY --from=build-env /App/out .
COPY --from=frontend client/dist dist
RUN ls
ENTRYPOINT ["dotnet", "api.dll"]
