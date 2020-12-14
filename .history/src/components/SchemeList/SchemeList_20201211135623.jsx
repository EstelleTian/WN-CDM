import React from 'react'


class SchemeItem extends React.Component{

    render(){
        return (
            <div className="item-container">
                <span>过ENH限制间隔5分钟</span>
                <span className="">80%</span>
            </div>
        )
    }
}


class SchemeList extends React.Component{

    render(){
        return (
            <div className="">
                <SchemeItem/>
                <SchemeItem/>
                <SchemeItem/>
                <SchemeItem/>
            </div>
        )
    }
}


export default SchemeList