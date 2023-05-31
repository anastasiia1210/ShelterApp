import { FunctionComponent } from "react";
import "./home.css";

const Home: FunctionComponent = () => {
    const dogsImg = "https://cdn.abcotvs.com/dip/images/5437610_puppiesfense.jpg?w=1600";
    const annaImg="https://blog.adobe.com/en/publish/2021/10/19/media_16dc563cf8f4cafb81a1011a270c4c7919f09f0b2.png?width=1200&format=pjpg&optimize=medium"
    const catsImg ="https://bykvu.com/wp-content/uploads/2023/04/20/photo_2023-04-20-21.28.42-900x675.jpeg"
    const peopleImg="https://www.pawtracks.com/wp-content/uploads/sites/2/2021/04/shelter-1.jpg?p=1"
    return (
        <>
            <div className="content-block">
                <div className="image-wrapper">
                    <img className="image" src={dogsImg}/>
                </div>

                <div className="text-wrapper">
                    <h1>Трішки про нас</h1>
                    <div className="greenbg">
                        <p><b>Shelter</b> - це не просто домівка для тварин, це можливість знайти собі справжнього пухнастого
                            друга. На данний момент у нашому притулку живе близько десятка котиків і собачок, кожен з них мріє про люблячу сім'ю.</p>
                    </div>
                </div>
            </div>

            <div className="content-block">
                <div className="text-wrapper">
                    <h1>Тваринки</h1>
                    <div className="greenbg">
                        <p>Наш притулок став тимчасовим прихистком для котиків і собачок, які втратили свої домівки через війну.
                            Зараз їм дуже потрібна допомога. Багато з них потребує недешевих ліків, тому якщо маєте змогу підтримати
                            нас, ми будемо дуже вдячні (p.s. реквізити шукай в розділі Допомога).</p>
                    </div>
                </div>
                <div className="image-wrapper">
                    <img className="image" src={catsImg}/>
                </div>
            </div>
            <div className="content-block">
                <div className="image-wrapper">
                    <img className="image" src={annaImg}/>
                </div>
                <div className="text-wrapper">
                    <h1>Привіт, я Аня</h1>
                    <div className="greenbg">
                        <p>У далекому 2015 році я створила свій міні-притулок для безхатніх котиків. В якийсь момент
                            до мене почали звертатися люди, які теж хотіли якось допомогти. Тому було прийняте рішення
                            створити <b>Shelter</b>. Як ви вже зрозуміли я є його власницею. До речі, на фото я з своїми улюбленцями
                            Барні та Маєю. Я дуже щаслива адже вони знайшли свої домівки.</p>
                    </div>
                </div>
            </div>
            <div className="content-block">
                <div className="text-wrapper">
                    <h1>Чотирилапий друг</h1>
                    <div className="greenbg">
                        <p>Якщо ти хочеш завести домашнього улюбленьця тоді тобі точно до нас. В притулку
                            є багато різних тварин: від лохматих алабаїв і до ніжних сфінксів. Тут кожен зможе знайти собі тваринку
                            , а можливо і не одну. Якщо ти не маєш змоги прихистити собичку або котика, ти всеодно можеж допомогти,
                            долучившись до волонтерства, тому худчіш реєструйся. Ми чекаємо саме на тебе.</p>
                    </div>
                </div>
                <div className="image-wrapper">
                    <img className="image" src={peopleImg}/>
                </div>
            </div>
            <div className="content-block">
                <div className="map">
                    <iframe className="gmap_iframe"
                            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Товариство захисту тварин “SOS”&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </div>
                <div className="text-wrapper">
                    <div className="address">
                        <h1>Контакти</h1>
                        <p><b>Адреса:</b> вул. Пирогівський шлях 186, Пирогово (Київ)</p>
                        <p><b>Графік роботи:</b> 10:00-20:00 пн-сб</p>
                        <p><b>Телефонуйте:</b> +380976809114</p>
                        <p><b>Email:</b> shelter_kyiv@gmail.com</p>
                        <h2>Твори добро тут і сьогодні! </h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
