import {FunctionComponent} from 'react';
import "./style.css";

const Donate: FunctionComponent = () => {

    return (

        <div>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
            <div className = "center">
                <h2>Найкращий спосіб допомогти нам
                    і нашим хвостикам – пожертвувати будь-яку суму на корм, лікування та забезпечення роботи
                    притулку.</h2>
                <form action="">
                <button type="submit" className="button-24" role="button"> <h3 className = "forText">Допомогти</h3>
                <span className="material-symbols-outlined">pets</span>
                </button></form>
            </div>

        </div>


    );
};

export default Donate;
