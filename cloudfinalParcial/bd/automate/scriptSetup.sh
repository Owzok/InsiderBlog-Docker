echo "Iniciando contenedores para POSTGRESQL"
echo "---------------------------------"
docker run --name postgres_c -e POSTGRES_USER=root -e POSTGRES_PASSWORD=parcial -p 5432:5432 -v /data:/var/lib/postgresql/data -d postgres

docker run -d --rm --name adminer_c -p 8080:8080 adminer
echo ""
echo "Contenedores en ejecución"
echo "-------------------------"
docker ps -a