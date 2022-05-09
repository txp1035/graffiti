const dayjs = require('dayjs');
/**
 * 设置区域
 * 开始时间
 * 结束时间
 */
const startTime = '2017-04-30';
const endTime = '2022-04-14';
/**
 * 方法区域
 * 提交代码方法
 * 随机返回01方法
 * 基于开始结束时间生成日期
 */
function createDateArr(startTime, endTime) {
  const arr = [];
  for (let time = startTime; dayjs(time).valueOf() <= dayjs(endTime).valueOf(); time = dayjs(time).add(1, 'day').format('YYYY-MM-DD')) {
    console.log(time);
  }
}
createDateArr(startTime, endTime);
/**
 * 执行区域
 */
