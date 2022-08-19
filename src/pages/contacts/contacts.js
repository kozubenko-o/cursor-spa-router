import React, {useState, useEffect} from "react";
import style from "./contacts.module.scss";
import imgMale from "../../access/img/male.png";
import imgFemale from "../../access/img/female.png";
import imgNa from "../../access/img/na.png";
import contacts from "../../database/contacts/contacts.json";
import Contact from "./contact";

function Contacts() {

    const genderShow = [
        {
            gender: "male",
            genderData: "male",
            show: true
        }, {
            gender: "female",
            genderData: "female",
            show: true
        }, {
            gender: "na",
            genderData: undefined,
            show: true
        }];

    const [state, setState] = useState(contacts);
    const [search, setSearch] = useState("");
    const [genderShowState, setGenderShowState] = useState(genderShow);

    const checkedGender = (e) => {
        setGenderShowState(() => genderShowState.map(el => {
            if (el.gender === e.target.id)
                el.show = e.target.checked
            return el;
        }));
    }

    const changeSearch = (e) => {
        setSearch(e.target.value);
    }

    const searcher = () => {
        let newState = contacts.filter(contact => {
            return genderShowState.find(el => el.genderData === contact.gender).show
        });
        newState = newState
            .filter(contact => {
                return Object.values(contact)
                    .reduce((res, field) => {
                        return field.toLowerCase().includes(search.toLowerCase()) ?
                            true : res;
                    }, false);
            });

        setState(newState);
    }

    useEffect(() => {
        console.log(search, genderShowState);
        searcher();
    }, [search, genderShowState]);


    return (
        <div className={style.container}>
            <div className={style.checkboxes}>
                <div className={style.checkbox}>
                    <input id="male" className={style["input-gender"]} type="checkbox" defaultChecked onChange={checkedGender}/>
                    <label>
                        <img className={style["img-gender"]} src={imgMale}/>
                    </label>
                </div>
                <div className={style.checkbox}>
                    <input id="female" className={style["input-gender"]} type="checkbox" defaultChecked onChange={checkedGender}/>
                    <label>
                        <img className={style["img-gender"]} src={imgFemale}/>
                    </label>
                </div>
                <div className={style.checkbox}>
                    <input id="na" className={style["input-gender"]} type="checkbox" defaultChecked onChange={checkedGender}/>
                    <label>
                        <img className={style["img-gender"]} src={imgNa}/>
                    </label>
                </div>
            </div>
            <div className={style.content}>
                <input className={style.search} placeholder="Search" onChange={changeSearch}/>
                {state.map((s, i) => (
                    <Contact key={i} dataContsct={s} />
                ))}
            </div>
        </div>
        );
}

export default Contacts;