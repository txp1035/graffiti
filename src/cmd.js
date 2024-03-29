const dayjs = require('dayjs');
const fs = require('fs-extra');
const path = require('path');
const child_process = require('child_process');
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
// createRandomNumber();
/**
 * 执行区域
 * 检查是否存在test目录，存在就删除再创建，不存在就创建
 * 在test目录初始化git
 * 在test目录进行git提交实验
 * 使用软件模拟出github测试效果
 */
const testPath = path.join(__dirname, '/test');
// 确保目录为空。如果目录不为空，则删除目录内容。如果该目录不存在，则创建该目录。目录本身不会被删除。
fs.emptyDirSync(testPath);
child_process.execSync('git init', { cwd: testPath });
// fs.rm;
// fs.mkdirSync(testPath);
