/*
 * @Author: your name
 * @Date: 2020-12-15 10:52:07
 * @LastEditTime: 2020-12-15 14:38:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WN-CDM\src\pages\TablePage\TableColumns.js
 */
//表格列配置
const names = {
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
        "cn":"出区时间"
    },
    "ENTRY_POINT":{
        "en":"ENTRY_POINT",
        "cn":"入区域点"
    },
    "ENTRY_POINT_TIME":{
        "en":"ENTRY_POINT_TIME",
        "cn":"入区时间"
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
        width: 40,
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
        width: 80,
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
        "rowNum": i,
        "FLIGHTID":"CCA3345",
        "SPECIAL_STATUS":"",
        "DEPAP":"ZLXY",
        "ARRAP":"ZBAA",
        "SOBT":"15/1200",
        "EOBT":"15/1200",
        "TOBT":"15/1200",
        "COBT":"15/1200",
        "CTOT":"15/1200",
        "ATOT":"15/1200",
        "ACCFIX":"ENH",
        "FLOWCONTROL_POINT_PASSTIME_CTO":"15/1200",
        "FLOWCONTROL_POINT":"ENH",
        "FLOWCONTROL_POINT_PASSTIME":"15/1200",
        "EXIT_POINT":"ENH",
        "EXIT_POINT_TIME":"15/1200",
        "ENTRY_POINT":"ENH",
        "ENTRY_POINT_TIME":"15/1200",
        "STATUS":"已起飞",
        "GUID":"" 
    });
}
export { columns, data }