/*
 * @Author: your name
 * @Date: 2020-12-15 10:52:07
 * @LastEditTime: 2020-12-15 14:27:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WN-CDM\src\pages\TablePage\TableColumns.js
 */
//表格列配置
const names = {
    "ID":{
        "en":"ID",
        "cn":"ID"
    },
    "FLIGHTID":{
        "en":"FLIGHTID",
        "cn":"CallSign"
    },
    "SPECIAL_STATUS":{
        "en":"SPECIAL_STATUS",
        "cn":"告警"
    },
    "DEPAP":{
        "en":"DEPAP",
        "cn":"ADEP"
    },
    "ARRAP":{
        "en":"ARRAP",
        "cn":"ADES"
    },
    "SOBT":{
        "en":"SOBT",
        "cn":"SOBT"
    },
    "EOBT":{
        "en":"EOBT",
        "cn":"EOBT"
    },
    "TOBT":{
        "en":"TOBT",
        "cn":"TOBT"
    },
    "COBT":{
        "en":"COBT",
        "cn":"COBT"
    },
    "CTOT":{
        "en":"CTOT",
        "cn":"CTOT"
    },
    "ATOT":{
        "en":"ATOT",
        "cn":"ATOT"
    },
    "ACCFIX":{
        "en":"ACCFIX",
        "cn":"CFix"
    },
    "FLOWCONTROL_POINT_PASSTIME_CTO":{
        "en":"FLOWCONTROL_POINT_PASSTIME_CTO",
        "cn":"CTO"
    },
    "FLOWCONTROL_POINT":{
        "en":"FLOWCONTROL_POINT",
        "cn":"FFix"
    },
    "FLOWCONTROL_POINT_PASSTIME":{
        "en":"FLOWCONTROL_POINT_PASSTIME",
        "cn":"FFixT"
    },
    "EXIT_POINT":{
        "en":"EXIT_POINT",
        "cn":"出区域点"
    },
    "EXIT_POINT_TIME":{
        "en":"EXIT_POINT_TIME",
        "cn":"出区域点时间"
    },
    "ENTRY_POINT":{
        "en":"ENTRY_POINT",
        "cn":"入区域点"
    },
    "ENTRY_POINT_TIME":{
        "en":"ENTRY_POINT_TIME",
        "cn":"入区域点时间"
    },
    "STATUS":{
        "en":"STATUS",
        "cn":"状态"
    },
    "GUID":{
        "en":"GUID",
        "cn":"数据来源"
    }






    
}

const columns = [
    {
        title: "行号",
        dataIndex: "rowNum",
        align: 'center',
        key: "rowNum",
        width: 60,
        fixed: 'left'
    }
];

for(let key in names){
    const obj = names[key]
    const en = obj["en"]
    const cn = obj["cn"]
    let tem = {
        title: cn,
        dataIndex: en,
        align: 'center',
        key: en,
        width: 60,
    }
    if( en == "FLIGHTID" ){
        tem["fixed"] = 'left'
    }
    columns.push(tem)
}


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