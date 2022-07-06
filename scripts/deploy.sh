#/bin/bash!
HOST_SERVER="newproto@162.240.75.253"

# make temp version of api
echo Deleting Build

rm -rf ./build

echo Deleted

# Create build of project
echo Creating Build

yarn build

cp -R -f -p ./build ./staging


echo Created Build

ls
# Create zip file of project
echo zipping folder
zip -r data.zip staging/
echo zipped!

rm -rf ./staging

echo uploading zip

scp ./data.zip $HOST_SERVER:/var/www

echo zip uploaded

rm -rf ./data.zip

# Open Server

ssh $HOST_SERVER "
cd /var/www
rm -rf staging
unzip -q data.zip
rm -rf  data.zip
"
echo Deploy Complete!
