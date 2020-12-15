/*
 * @Author: your name
 * @Date: 2020-12-15 10:52:07
 * @LastEditTime: 2020-12-15 13:45:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WN-CDM\src\pages\TablePage\TableColumns.js
 */
//表格列配置
const columns = [
    {
        title: 'Full Name',
        width: 100,
        dataIndex: 'name',
        key: 'name',
        fixed: 'left',
    },
    {
        title: 'Age',
        width: 50,
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Column 1',
        dataIndex: 'address',
        key: '1',
        width: 80,
    },
    {
        title: 'Column 2',
        dataIndex: 'address',
        key: '2',
        width: 80,
    },
    {
        title: 'Column 3',
        dataIndex: 'address',
        key: '3',
        width: 80,
    },
    {
        title: 'Column 4',
        dataIndex: 'address',
        key: '4',
        width: 80,
    },
    {
        title: 'Column 5',
        dataIndex: 'address',
        key: '5',
        width: 80,
    },
    {
        title: 'Column 6',
        dataIndex: 'address',
        key: '5',
        width: 80,
    },
    {
        title: 'Column 7',
        dataIndex: 'address',
        key: '5',
        width: 80,
    },
    {
        title: 'Column 8',
        dataIndex: 'address',
        key: '5',
        width: 80,
    }
];

//表格数据
const data = [];
for (let i = 0; i < 20; i++) {
    data.push({
        key: i,
        name: `Edrward ${i}`,
        age: 32,
        address: `London Park no. ${i}`,
    });
}
export { columns, data }