/*
 * @Author: your name
 * @Date: 2020-12-15 10:52:07
 * @LastEditTime: 2020-12-21 14:46:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WN-CDM\src\pages\TablePage\TableColumns.js
 */
import { isValidVariable } from '../../utils/basic-verify'
import { Table, Input, Menu, Dropdown ,Icon, Button ,notification   } from 'antd'



const renderContent = (value, row, index, colKey) => {
    const menu = (
        <Menu>
            <Menu.Item key="1">1st menu item</Menu.Item>
            <Menu.Item key="2">2nd menu item</Menu.Item>
            <Menu.Item key="3">3rd menu item</Menu.Item>
        </Menu>
    );
    const obj = {
        children: <Dropdown overlay={menu}  trigger={['contextMenu']} >
                        <span>{value}</span>
                </Dropdown>,
        props: {
            "col-key":colKey
        },
    };
    return obj;
};
const Item = Menu.Item
const showButtonClick = ( value, row, index, colKey, text)=>{
    console.log(value)
    notification.open({
        duration:null,
        message: '点击',
        description:
            `点击了第${(index+1)}行${colKey}列的${text}按钮`,
    });
}
const menu = (value, row, index, colKey)  =>
    <Menu>
        <Item>COL:{colKey}</Item>
        <Item>VALUE:{value}</Item>
        <Item>INDEX:{index}</Item>
        <Item>
            <Button type="primary"
                    onClick={()=>showButtonClick(value, row, index, colKey,"航班详情")}>
                航班详情123456
            </Button>
        </Item>
    </Menu>

const render = (value, row, index, colKey)  =>
    <Dropdown overlay={menu(value, row, index, colKey)} trigger={[`contextMenu`]}>
        <div className="ccc">{value}</div>
    </Dropdown>

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
        title: "",
        dataIndex: "rowNum",
        align: 'center',
        key: "rowNum",
        width: 40,
        fixed: 'left',
        render: (text, record, index) => `${index+1}`
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
        width: 63,
        ellipsis: true,
        className: en,
    }
    //排序
    tem["sorter"] = (a,b) => {
        let data1 = a[en] + "";
        let data2 = b[en] + "";
        if (isValidVariable(data1) && isValidVariable(data2)) {
            let res = data1.localeCompare(data2);
            if (0 != res) {
                return res;
            }
        } else if (isValidVariable(data1)) {
            return -1;
        } else if (isValidVariable(data2)) {
            return 1;
        } else {
            return 0;
        }
    }
    if( en === "FLOWCONTROL_POINT_PASSTIME"){
        
        tem["defaultSortOrder"] ='ascend'
    }
    if( en === "FLIGHTID" ){
        tem["width"] = 80
        tem["fixed"] = 'left'
    }
    
    if( en === "EXIT_POINT" || en === "EXIT_POINT_TIME" || en === "ENTRY_POINT" || en === "ENTRY_POINT_TIME" || en === "GUID"){
        tem["width"] = 80
    }
    tem["render"] = (text, record, index) => {
        return render(text,record,index, en);
    }

    columns.push(tem)
}


//表格数据
const data = [];
for (let i = 0; i < 200; i++) {
    data.push({
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
        "FLOWCONTROL_POINT_PASSTIME":"15/"+ (1250-i),
        "EXIT_POINT":"ENH",
        "EXIT_POINT_TIME":"15/1200",
        "ENTRY_POINT":"ENH",
        "ENTRY_POINT_TIME":"15/1200",
        "STATUS":"已起飞",
        "GUID":"" 
    });
}
export { columns, data }