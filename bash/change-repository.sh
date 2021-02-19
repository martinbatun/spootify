#/bin/bash
echo  "Pega el link de tu repositorio iniciando en https://, por favor: "
read link
git remote -v
cd ..

rm -rf .git
echo  "repositorio eliminado"

git init
git remote add origin $link
git add .
git commit -m "commit initial"
git push -u origin master
echo  "Nuevo repositorio agregado e iniciado"
git remote -v
