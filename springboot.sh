#!/bin/bash

REPOSITORY=/home/ec2-user
cd $REPOSITORY/springboot/

start()
{

  echo ">>> GIT PULL SPRINGBOOT PROJECT"
  sudo git reset --hard HEAD
  sudo git pull
  sudo ./gradlew bootwar
  cp ./build/libs/*.war $REPOSITORY/

  JAR_NAME=$(ls $REPOSITORY | grep 'springboot-' | tail -n 1)
  echo ">>> START SPRINGBOOT PROJECT - $JAR_NAME "
  nohup java -jar $REPOSITORY/$JAR_NAME &

}
# 중지
stop()
{

  CURRENT_PID=$(pgrep -f springboot)
  echo "SPRINGBOOT PROJECT PID $CURRENT_PID"

  if [ -z $CURRENT_PID ]; then
      echo "> NOT FOUND EXIST SPRINGBOOT PROJECT"
  else
      echo "> kill -2 $CURRENT_PID"
      kill -2 $CURRENT_PID
      sleep 5
  fi

}
# 상태
status()
{
    local PID=$(get_status)
    if [ -n "${PID}" ]; then
        echo "${PROC_NAME} is running"
    else
        echo "${PROC_NAME} is stopped"
        # start daemon
        #nohup java -jar "${DAEMON}" > /dev/null 2>&1 &
    fi
}

get_status()
{
    ps ux | grep ${PROC_NAME} | grep -v grep | awk '{print $2}'
}

# 케이스 별로 함수를 호출하도록 한다.

case "$1" in
  start)
    start
    sleep 7
    ;;
  stop)
    stop
    sleep 5
    ;;
  status)
    status "${PROC_NAME}"
    ;;
    *)
  echo "Usage: $0 {start | stop | status }"
esac
exit 0
