import React, {FunctionComponent, useEffect, useState} from 'react';
import "./style.css";

interface PetInterface {
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

const AddAnimal = (props) => {
    const [formData, setFormData] = useState<PetInterface>({
        name: "",
        age: 0,
        photo: "",
        address: "",
        description: "",
        breed: "",
        type: "",
        sex: "",
        isActive: true
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        if (isNaN(formData.age)) {
            alert("ВІК МАЄ БУТИ ЧИСЛОМ")
        }else{
        fetch(`http://localhost:3001/pets/add`, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            method: "POST",

            // Fields that to be updated are passed
            body: JSON.stringify(formData)
        })
            .then(function (response) {

                // console.log(response);
                return response.json();

            }).then(() => props.setTrigger(false));
        }
    };
    return (props.trigger) ? (
        <div className="login-page">

            <div className="form1">
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="forClose">
                        <button className="closeButton" onClick={() => props.setTrigger(false)}>&times;</button>
                    </div>
                    <h4>Додати тварину</h4>
                    <div className="columns">
                        <div>
                            <label>Ім'я:
                                <input type="text" required
                                       onChange={(e) => setFormData({...formData, name: e.target.value})}/>
                            </label>
                            <label>Вік:
                                <input type="text" required
                                       onChange={(e) => setFormData({...formData, age: e.target.value})}/>
                            </label>
                            <label>Стать:
                                <select required onChange={(e) => setFormData({...formData, sex: e.target.value})}>
                                    <option value="">Виберіть опцію</option>
                                    <option value="хлопчик">Хлопчик</option>
                                    <option value="дівчинка">Дівчинка</option>
                                </select></label>
                        </div>
                        <div>
                            <label>Тип:
                                <input type="text" required
                                       onChange={(e) => setFormData({...formData, type: e.target.value})}/>
                            </label>
                            <label>Порода:
                                <input type="text" required
                                       onChange={(e) => setFormData({...formData, breed: e.target.value})}/>
                            </label>
                            <label>Адреса:
                                <input type="text" required
                                       onChange={(e) => setFormData({...formData, address: e.target.value})}/>
                            </label>

                        </div>
                    </div>
                    <label>Фото:
                        <input type="text" required
                               onChange={(e) => setFormData({...formData, photo: e.target.value})}/>
                    </label>
                    <label>Опис:
                        <input type="text" required
                               onChange={(e) => setFormData({...formData, description: e.target.value})}/>
                    </label>
                    <button type="submit" className="okButton">Додати</button>
                </form>
            </div>
        </div>
    ) : "";
};

export default AddAnimal;
