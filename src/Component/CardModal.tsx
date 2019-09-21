import * as React from 'react'; 
import { Modal } from 'semantic-ui-react';
import { CardForModal } from './Card';

export interface ICardModalProps{
    open:boolean;
    closeModal? : ()=>void | undefined;
    name:String;
    desc:String;
    imgName:String;
}

export function CardModal(props: ICardModalProps){

    let localClose = ()=>{
        props.closeModal && props.closeModal();
    }

    return(
        <Modal open={props.open} onClose={localClose} >
        <Modal.Header>{props.name}</Modal.Header>
        <Modal.Content>
          <div className="grid-modal">
            <CardForModal imgName ={props.imgName}/>
            <div><h1>Sinópsis</h1><p>{props.desc}</p></div>  
          </div>  
        </Modal.Content>
      </Modal>
    );
}