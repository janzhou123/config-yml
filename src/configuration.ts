import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';
import * as _ from 'lodash';

// 公共配置文件名称
const YML_COMMON_CONFIG_FILENAME = 'config.yml';
// 公共配置文件路径
const filePath = join(__dirname, '../config', YML_COMMON_CONFIG_FILENAME);
// 各个环境配置文件路径
const envPath = join(
  __dirname,
  '../config',
  `config.${process.env.NODE_ENV || `development`}.yml`,
);
//读取公共配置内容,并使用yml进行加载
const commonConfig = yaml.load(readFileSync(filePath, 'utf8'));
//读取各个环境配置内容
const envConfig = yaml.load(readFileSync(envPath, 'utf8'));

export default () => {
  //讲读取的配置文件内容进行合并返回
  return _.merge(commonConfig, envConfig);
};
