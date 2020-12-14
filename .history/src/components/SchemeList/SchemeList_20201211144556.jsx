import React from 'react'


class SchemeItem extends React.Component{

    render(){
        return (
            <div className="item_container">
                <span>过ENH限制间隔5分钟</span>
                <span className="normal_rate">80%</span>
            </div>
        )
    }
}


class SchemeList extends React.Component{

    render(){
        return (
            <div className="list_container">
            {}
                <SchemeItem/>
                <SchemeItem/>
                <SchemeItem/>
                <SchemeItem/>
            </div>
        )
    }
}


export default SchemeList