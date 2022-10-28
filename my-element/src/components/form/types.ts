/**
 * 可配置的表单
 *
 */

import { RuleItem } from './src/types/rule';

//表单的每一项的配置选项
export interface FormOptions {
  //表单项展示的元素
  type:
    | 'cascader'
    | 'checkbox'
    | 'checkbox-group'
    | 'el-checkbox-button'
    | 'color-picker'
    | 'date-picker'
    | 'input'
    | 'input-number'
    | 'radio'
    | 'radio-group'
    | 'radio-button'
    | 'rate'
    | 'select'
    | 'option'
    | 'slider'
    | 'switch'
    | 'time-picker'
    | 'time-select'
    | 'transfer'
    | 'upload';
  //表单项的值
  value: any;
  //表单项label
  label?: string;
  //表单项的标识
  prop?: string;
  //表单项验证规则
  rules?: RuleItem[];
  //表单项占位符
  placerholder?: string;
  //表单项特有的属性
  attrs?: {
    clearable?: boolean;
    showPassword?: boolean;
    disabled?: boolean;
  };
}
