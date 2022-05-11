const dayjs = require('dayjs');
/**
 * 设置区域
 * 开始时间
 * 结束时间
 */
const startTime = '2022-04-13';
const endTime = '2022-04-14';
/**
 * 方法区域
 * 提交代码方法
 * 随机返回01方法
 * 基于开始结束时间生成日期
 */
function createAllDate(params) {
  return {
    date: params,
    time: 1,
  };
}
function createDateArr(startTime, endTime, rules) {
  const arr = [];
  // 遍历配置日期
  for (let time = startTime; dayjs(time).valueOf() <= dayjs(endTime).valueOf(); time = dayjs(time).add(1, 'day').format('YYYY-MM-DD')) {
    // 基于规则生成日期
    switch (rules) {
      case 'all':
        const pushObj = createAllDate(time);
        arr.push(pushObj);
        break;
      default:
        break;
    }
  }
  console.log(arr);
}
// createDateArr(startTime, endTime, 'all');
function createRandomNumber() {
  const num = Math.round(Math.random());
  console.log(num);
  return num;
}
createRandomNumber();
/**
 * 执行区域
 */
