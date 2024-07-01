export const QueryError = new Map<string, { message: string; httpStatus: number }>([
    ['P2000', { message: '提供的值过长', httpStatus: 400 }],
    ['P2001', { message: '记录不存在', httpStatus: 404 }],
    ['P2002', { message: '唯一约束失败', httpStatus: 409 }],
    ['P2003', { message: '外键约束失败', httpStatus: 409 }],
    ['P2004', { message: '数据库约束失败', httpStatus: 400 }],
    ['P2005', { message: '字段值无效', httpStatus: 400 }],
    ['P2006', { message: '提供的字段值无效', httpStatus: 400 }],
    ['P2007', { message: '数据验证错误', httpStatus: 400 }],
    ['P2008', { message: '查询解析失败', httpStatus: 400 }],
    ['P2009', { message: '查询验证失败', httpStatus: 400 }],
    ['P2010', { message: '查询执行失败', httpStatus: 500 }],
    ['P2011', { message: '空值约束错误', httpStatus: 400 }],
    ['P2012', { message: '缺少必要值', httpStatus: 400 }],
    ['P2013', { message: '缺少必要参数', httpStatus: 400 }],
    ['P2014', { message: '更改违反关系约束', httpStatus: 400 }],
    ['P2015', { message: '相关记录未找到', httpStatus: 404 }],
    ['P2016', { message: '查询解释错误', httpStatus: 400 }],
    ['P2017', { message: '关系记录未连接', httpStatus: 400 }],
    ['P2018', { message: '未找到所需记录', httpStatus: 404 }],
    ['P2019', { message: '输入错误', httpStatus: 400 }],
    ['P2020', { message: '值超出范围', httpStatus: 400 }],
    ['P2021', { message: '表不存在', httpStatus: 404 }],
    ['P2022', { message: '列不存在', httpStatus: 404 }],
    ['P2023', { message: '列数据不一致', httpStatus: 400 }],
    ['P2024', { message: '连接池超时', httpStatus: 500 }],
    ['P2025', { message: '操作失败，所需记录未找到', httpStatus: 404 }],
    ['P2026', { message: '数据库不支持此功能', httpStatus: 400 }],
    ['P2027', { message: '查询执行中发生多个错误', httpStatus: 500 }],
]);
