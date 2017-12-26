
#!/bin/sh
APP_NAME=yunying

#删除output文件夹
rm -rf output

#show fis3 version
fis3 --version --no-color

#通过fis3 release 命令进行模块编译
fis3 release online -d output/tmp --no-color

cd output/tmp
tar -zcvf $APP_NAME.tar.gz $APP_NAME
rm -rf $APP_NAME
#备份临时文件
cd ../../
mv output/tmp/* output

#删除临时文件
rm -rf output/tmp



