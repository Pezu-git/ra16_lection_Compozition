
import './App.css';
import TodayOfferModal from './components/TodayOfferModal';
import DiscountOfferModal from './components/DiscountOfferModal';
import OfferModal from './components/OfferModal';
import AbonOfferModal from './components/AbonOfferModal';
import Message from './components/Message';
import ErrorMessage from './components/ErrorMessage';
import Avatar from './components/Avatar';
import Profile from './components/Profile';



export default function App(props) {
  return (
    <div className='App'>
      <OfferModal
        title="Только сегодня и только сейчас!"
        link="/today/" />
        <OfferModal
        title="Самые большие скидки!"
        link="/discount/" />
      <OfferModal>
        <h2>{props.title}</h2>
        <a href="{props.link}">Узнать подробнее</a>
      </OfferModal> 
      <Message
        type="error"
        icon="/path/to/error.png"
        position="topright"
        timeout="60"
        priority="100"
        text="Пароли не совпадают" />  
      <ErrorMessage />
      <Avatar username='coollogin' />
      <Profile username='coollogin' age={24} email='coollogin@yoursite.com' />
    </div>
  );
}
