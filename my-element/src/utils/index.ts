// 驼峰转成小写下划线连接
export const toLine = (value: string) => {
  return value.replace("A-Zg", "-$1").toLocaleLowerCase();
};
