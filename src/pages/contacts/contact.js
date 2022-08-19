import React, {useState} from "react";
import style from "./contact.module.scss";
import imgMale from "../../access/img/male.png";
import imgFemale from "../../access/img/female.png";
import imgNa from "../../access/img/na.png";
import imgEmptyPhoto from "../../access/img/empty-photo.png";
import Modal from "react-modal";

function Contact(props) {

    const modalStyles = {
        content: {
            width: '500px',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
        setIsOpen(!isOpen);
    }

    let gender;

    switch (props.dataContsct.gender) {
        case "female":
            gender = imgFemale;
            break;
        case "male":
            gender = imgMale;
            break;
        default:
            gender = imgNa;
    }


    return (
        <div>
        <a onClick={toggleModal}>
            <div className={style.contact}>
                <img className={style.photo} src={imgEmptyPhoto}/>
                <img className={style.gender} src={gender}/>
                <p className={style.name}>
                    <span>{props.dataContsct.firstName} </span>
                    <span>{props.dataContsct.lastName}</span>
                </p>
                <p className={style.number}>
                    <span>{props.dataContsct.phone} </span>
                </p>
            </div>
        </a>
            <Modal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                style={modalStyles}
            >
                <button className={style["btn-close"]} onClick={toggleModal}>X</button>
                <div className={style.content}>
                    <img className={style.img} src={imgEmptyPhoto} />
                    <img className={style.img} src={gender}/>
                    <p className={style.info}>
                        <span>{props.dataContsct.firstName}</span>
                        <span>{props.dataContsct.lastName}</span>
                        <span>{props.dataContsct.phone} </span>
                        <span>Messages: {props.dataContsct.messages} </span>
                    </p>
                </div>

            </Modal>
        </div>
    );
}

export default Contact;