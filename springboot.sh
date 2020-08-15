#!/bin/bash

REPOSITORY=/home/ec2-user
cd $REPOSITORY/springboot/

echo "> GIT PULL SPRINGBOOT PROJECT"
git pull

echo "> GRADLE BUILD SPRINGBOOT PROJECT"
./gradlew build

echo "> COPY BUILD FILES SPRINGBOOT PROJECT"
cp ./build/libs/*.jar $REPOSITORY/

CURRENT_PID=$(pgrep -f springboot)
echo "SPRINGBOOT PROJECT PID $CURRENT_PID"

if [ -z $CURRENT_PID ]; then
    echo "> NOT FOUND EXIST SPRINGBOOT PROJECT"
else
    echo "> kill -2 $CURRENT_PID"
    kill -2 $CURRENT_PID
    sleep 5
fi

JAR_NAME=$(ls $REPOSITORY | grep 'springboot-' | tail -n 1)
echo "> START SPRINGBOOT PROJECT - $JAR_NAME "
nohup java -jar $REPOSITORY/$JAR_NAME &
