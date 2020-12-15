import React, {Component} from 'react';
import ResizeObserver from "rc-resize-observer";
import { Layout, Menu, Breadcrumb } from 'antd';
import ModalBox from '../../components/ModalBox/ModalBox'
import TableContent from '../../components/TableContent/TableContent';
import BarChart from '../../components/BarChart/BarChart';
import './TablePage.scss';

const { Header, Content, Footer } = Layout;

function TablePage(){
    let [width, setWidth] = useState(0);
    let [height, setHeight] = useState(0);

    return (
        <ResizeObserver
            onResize={() => {
                console.log('resized!3333');
            }}>
                <ModalBox 
                className="flight_canvas"
                title="航班列表"
            >
                <TableContent
                    width={ width}
                    height={ height}
                 />
            </ModalBox>
            
    </ResizeObserver>
  ) 
}


class TablePage extends Component{
    

    componentDidMount(){
        const dom = document.getElementsByClassName("flight_canvas")[0];
        let width = dom.offsetWidth;
        let height = dom.offsetHeight;
        console.log(width, height);
    }
    render(){
        return (
            <ResizeObserver
                onResize={() => {
                    console.log('resized!3333');
                }}>
                    <ModalBox 
                    className="flight_canvas"
                    title="航班列表"
                >
                    <TableContent
                        width={ width}
                        height={ height}
                     />
                </ModalBox>
                
        </ResizeObserver>
      )   
    }
}

export default TablePage;