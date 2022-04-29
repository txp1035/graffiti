function commits() {
    local time=$1
    local isd=$2
    # echo c ${time}
    # 修改时间
    echo "dkd_fcd0805" | sudo systemsetup -setdate ${time}
    # 显示时间
    # times=$(date "+%m/%d/%Y %H:%M:%S")
    # echo "${times}"
    if [ $isd == 1 ]
    then
      # 删除文件
      # echo '删除文件'
      path3="/Users/shawdanon/GitHub/mine/picture/mine.jpg"
      rm "$path3"
      # git 提交
      git add -A
      git commit -m"delete"
    else
      # 复制文件
      # echo '复制文件'
      path1="/Users/shawdanon/Desktop/mine.jpg"
      path2="/Users/shawdanon/GitHub/mine/picture/"
      cp "$path1" "$path2"
      # git 提交
      git add -A
      git commit -m"add"
    fi
}

# 随机生成时间数组(5天有3天)
# 开始时间和结束时间可以修改
start='04/30/2017'
end='04/14/2022'
count=0
noCount=0
delete=0
function random_range() {
    local beg=$1
    local end=$2
    echo $((RANDOM % ($end - $beg) + $beg))
}
while [ "${start}" != "${end}" ]
do
  echo ${start}
  startStr=`date -j -f %m/%d/%Y $start +%s`
  endStr=`date -j -f %m/%d/%Y $end +%s`
  qj=`expr ${endStr} - ${startStr}`
  qjd=`expr ${qj} / 86400`
  # echo ${qjd}
  start=`date -r $(expr $startStr + 86400) +"%m/%d/%Y"`
  #生成随机数1和2
  rnd=$(random_range 1 3)
  # 如果是1就提交
  if [ $delete == 2 ]
  then
    #初始化参数
    delete=0
  fi
  if [ $count == 5 ]
  then
    #初始化参数
    count=0
    noCount=0
  fi
  if [ $rnd == 1 ]
  then
    noCount=`expr ${noCount} + 1`
    if [ $noCount == 3 ]
    then
      #提交
      echo '提交'
      commits ${start} ${delete}
      delete=`expr ${delete} + 1`
    else
      #不提交
      echo '不提交'
    fi
  else
    #提交
    echo '提交'
        commits ${start} ${delete}
        delete=`expr ${delete} + 1`
  fi
  count=`expr ${count} + 1`
done