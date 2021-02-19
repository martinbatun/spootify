#/bin/bash
path=${PWD%${PWD##*/}}
path_base=${PWD%${PWD##*/}}
carpeta_raiz=${path::-1}
carpeta_raiz=${carpeta_raiz##*/}

texto_a_cambiar="spootify"
nuevo_texto=$carpeta_raiz

# rename archive(s)
# perl -pi -e "s[lo-que-quiero-cambiar][lo-nuevo-a-poner]g" archivo-en-el-cual-reemplazar

echo "###########################################################"
echo "#################### renaming files #######################"
echo "###########################################################"
#/
echo "renaming files en route /"
path=$path_base
perl -pi -e "s[$texto_a_cambiar][$nuevo_texto]g" $path"angular.json"
perl -pi -e "s[$texto_a_cambiar][$nuevo_texto]g" $path"package-lock.json"
perl -pi -e "s[$texto_a_cambiar][$nuevo_texto]g" $path"package.json"
perl -pi -e "s[$texto_a_cambiar][$nuevo_texto]g" $path"README.md"

#bash/
echo "renaming files en route bash/"
path=$path_base"bash/"
perl -pi -e "s[$texto_a_cambiar][$nuevo_texto]g" $path"deploy.sh"
perl -pi -e "s[$texto_a_cambiar][$nuevo_texto]g" $path"rename.sh"

#e2e/
echo "renaming files en route e2e/src/"
path=$path_base"e2e/src/"
perl -pi -e "s[$texto_a_cambiar][$nuevo_texto]g" $path"app.e2e-spec.ts"

#src/
echo "renaming files en route src/"
path=$path_base"src/"
perl -pi -e "s[$texto_a_cambiar][$nuevo_texto]g" $path"index.html"
perl -pi -e "s[$texto_a_cambiar][$nuevo_texto]g" $path"karma.conf.js"

# #src/app/
echo "renaming files en route src/app/"
path=$path_base"src/app/"
perl -pi -e "s[$texto_a_cambiar][$nuevo_texto]g" $path"app.component.ts"

# #src/app/components/auth/
echo "renaming files en route src/app/components/auth/"
path=$path_base"src/app/components/auth/"
perl -pi -e "s[$texto_a_cambiar][$nuevo_texto]g" $path"auth.component.html"

# #src/app/services/
echo "renaming files en route src/app/services/"
path=$path_base"src/app/services/"
perl -pi -e "s[$texto_a_cambiar][$nuevo_texto]g" $path"api.service.ts"
perl -pi -e "s[$texto_a_cambiar][$nuevo_texto]g" $path"user.service.ts"


echo "############################################################"
echo "################## removing files.back #####################"
echo "############################################################"

echo "removing files en route /"
path=$path_base
rm -f $path"angular.json.bak"
rm -f $path"package-lock.json.bak"
rm -f $path"package.json.bak"
rm -f $path"README.md.bak"

#bash/
echo "removing files en route bash/"
path=$path_base"bash/"
rm -f $path"deploy.sh.bak"
rm -f $path"rename.sh.bak"

#e2e/
echo "removing files en route e2e/src/"
path=$path_base"e2e/src/"
rm -f $path"app.e2e-spec.ts.bak"

#src/
echo "removing files en route src/"
path=$path_base"src/"
rm -f $path"index.html.bak"
rm -f $path"karma.conf.js.bak"

# #src/app/
echo "removing files en route src/app/"
path=$path_base"src/app/"
rm -f $path"app.component.ts.bak"

# #src/app/components/auth/
echo "renaming files en route src/app/components/auth/"
path=$path_base"src/app/components/auth/"
rm -f $path"auth.component.html.bak"

# #src/app/services/
echo "removing files en route src/app/services/"
path=$path_base"src/app/services/"
rm -f $path"api.service.ts.bak"
rm -f $path"user.service.ts.bak"

# cd $nombre
echo "El nuevo nombre es: $nuevo_texto"
