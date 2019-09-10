import * as React from 'react'; 
import { Button } from 'semantic-ui-react';
import { MyModal } from './MyModal';
import { MyTable } from './MyTable';

export interface IMyComponentProps{
        nombre : string;

}

export function MyComponent (props: IMyComponentProps){
    
    const[open, setOpen] = React.useState(false);
    const[presionoSi, setPresionoSi] = React.useState(0);
    const[presionoNo, setPresionoNo] = React.useState(0);

    let localPresionoSi = ()=>{
        setPresionoSi(presionoSi + 1);
    }
    let localPresionoNo = ()=>{
        setPresionoNo(presionoNo + 1);
    }

    let showModal = ()=>{
        setOpen(!open);
        console.log("kiti");
    }
    return(
        <div>
        <Button color = 'purple' circular={true} onClick={showModal} >
            YOU N'WAH {props.nombre}
        </Button>

        <MyModal open={open} closeModal={showModal} presionoSi={localPresionoSi} presionoNo={localPresionoNo} />
        <MyTable si={presionoSi} no={presionoNo} />
        </div>
        
    );    
}