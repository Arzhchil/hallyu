#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
ENV ASPNETCORE_URLS=https://+:5005;http://+:5006
WORKDIR /home/hallyu
EXPOSE 5005
EXPOSE 5006

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /
SHELL ["/bin/bash", "-c"]
COPY ["HALLYU.Server/HALLYU.Server/HALLYU.Server.csproj", "HALLYU.Server/Server/"]
COPY ["HALLYU.Server/HALLYU.Domain/HALLYU.Domain.csproj", "HALLYU.Server/Domain/"]
COPY ["HALLYU.Server/HALLYU.Infrastructure/HALLYU.Infrastructure.csproj", "HALLYU.Server/Infrastructure/"]
RUN dotnet restore "HALLYU.Server/HALLYU.Server/HALLYU.Server.csproj" --disable-parallel
COPY . .
WORKDIR "HALLYU.Server/HALLYU.Server"
RUN dotnet build "HALLYU.Server.csproj" -c Release -o /home/hallyu/build

FROM build AS publish
RUN dotnet publish "HALLYU.Server.csproj" -c Release -o /home/hallyu/publish

FROM base AS final
WORKDIR /home/hallyu
COPY --from=publish /home/hallyu/publish .
WORKDIR /home/hallyu
ENTRYPOINT ["dotnet", "HALLYU.Server.dll"]
