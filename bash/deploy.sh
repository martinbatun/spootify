#/bin/bash
echo  "Eliga una opcion para hacer el deploy, por favor: "
echo  " 1 - prod"
echo  " 2 - dev"
read option

# aws configure --profile spootify
export AWS_PROFILE=spootify

case $option in
    1)
        echo "Building dist..."
        ng build --prod
        echo ""
        echo "dist completed..."
        echo ""
        echo "loading dist to s3://dominio.mx ..."
        echo ""
        # aws s3 cp ../dist/spootify s3://dominio.mx --recursive --acl public-read
        echo ""
        echo "dist successfully loaded to s3..."
        ;;
    2)
        echo "Building dist..."
        ng build --configuration prue
        echo ""
        echo "dist completed..."
        echo ""
        echo "loading dist to s3://dominio.dev.mx ..."
        echo ""
        aws s3 cp ../dist/spootify s3://laboratorio.dev.dacodes.mx --recursive --acl public-read
        echo ""
        echo "dist successfully loaded to s3..."
        ;;
    *)
        echo "Lo siento, opcion no validar"
        ;;
esac
