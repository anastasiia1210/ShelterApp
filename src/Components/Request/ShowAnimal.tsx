import React, {FunctionComponent, useEffect, useState} from 'react';
import "./style.css";

interface PetInterface {
    id: number;
    name: string;
    age: number;
    photo: string;
    address: string;
    description: string;
    breed: string;
    type: string;
    sex: string;
    isActive: boolean;
}

const ShowAnimal = (props) => {
    useEffect(() => {
        fetch(`http://localhost:3001/pets/${props.petId}`).then((res) => {
                if (res.ok) {
                    return res.json();
                }
            }
        ).then((jsonResponse) => {

            setFormData(jsonResponse)
        }).catch((er)=>{});
    }, [props.petId]);
    const [formData, setFormData] = useState<PetInterface>({
        id: props.petId,
        name: "",
        age: -1,
        photo: "",
        address: "",
        description: "",
        breed: "",
        type: "",
        sex: "",
        isActive: true
    });



    return (props.trigger) ? (
        <div className="login-page">

            <div className="form1">
                <form className="login-form">
                    <div className="forClose">
                        <button className="closeButton" onClick={() => props.setTrigger(false)}>&times;</button>
                    </div>
                    <h4>ID: {formData.id}</h4>
                    <div className="columns">
                        <div>
                            <label>Ім'я:
                                <input type="text" value={formData.name} disabled/>
                            </label>
                            <label>Вік:
                                <input type="text" value={formData.age} disabled/>
                            </label>
                            <label>Стать:
                                <input disabled value={formData.sex}>
                                </input></label>
                        </div>
                        <div>
                            <label>Тип:
                                <input type="text" value={formData.type} disabled/>
                            </label>
                            <label>Порода:
                                <input type="text" value={formData.breed} disabled/>
                            </label>
                            <label>Адреса:
                                <input type="text" value={formData.address} disabled/>
                            </label>

                        </div>
                    </div>
                    <label>Фото:
                        <input type="text" value={formData.photo} disabled
                               onChange={(e) => setFormData({...formData, photo: e.target.value})}/>
                    </label>
                    <label>Опис:
                        <input type="text" value={formData.description} disabled
                               onChange={(e) => setFormData({...formData, description: e.target.value})}/>
                    </label>
                </form>
            </div>
        </div>
    ) : "";
};

export default ShowAnimal;
