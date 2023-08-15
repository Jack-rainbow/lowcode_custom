const exec = require('child_process').exec
import { PRIVATE_NPM } from '../util/constants';

interface pnpmOptions {
  argv: string[]
}

export default class pnpm {
  public conf: pnpmOptions
  public _argv: string[]

  constructor(options: pnpmOptions) {
    this.conf = options;
    const argv = options.argv;
    // 处理请求的参数数组，如果数组中没有有-c 或者 --config-file的配置，则将对应的默认配置插入
    let hasConfig = false;
    for(const item of argv) {
      if(item === '--registry') {
        hasConfig = true;
        break;
      }
    }
    if (!hasConfig) {
      argv.push('--registry');
      argv.push(PRIVATE_NPM);
    }
    this._argv = argv;
  }

  async init() {
    try {
      this.runPnpmCommand();
    } catch (err) {
      console.error(err);
    }
  }
  /**
   * 执行pnpm命令
   */
  runPnpmCommand() {
    const command = this._argv.join(' ');
    const pnpmCommand = `npx pnpm ${command}`
    const child = exec(pnpmCommand)
    child.stdout.on('data', function (data) {
      console.log(data)
    })
    child.stderr.on('data', function (data) {
      console.log(data)
    })
  }
}
