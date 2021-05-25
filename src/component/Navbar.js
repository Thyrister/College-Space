import react, {useState} from 'react'
import '../css/Navbar.css'
import HomeIcon from '@material-ui/icons/Home'
import FeaturedPlayListOutlinedIcon from '@material-ui/icons/FeaturedPlayListOutlined'
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined'
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined'
import NotificationsOutlinedIcon from  '@material-ui/icons/NotificationsOutlined'
import SearchIcon from '@material-ui/icons/Search'
import LanguageIcon from '@material-ui/icons/Language'
import {Avatar, Button} from '@material-ui/core'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import  {auth} from './firebase';
import Modal from 'react-modal';
import { ExpandMore } from '@material-ui/icons';
import {Input, Link} from  '@material-ui/core';
import LinkIcon from '@material-ui/icons/Link';
import firebase from 'firebase';
import db from './firebase';

function Navbar(){
    const user = useSelector(selectUser);
    const [openModal, setOpenModal] = useState(false);
    const [input, setInput] = useState("");
    const [inputUrl, setInputUrl] = useState("");

    const handleQuestion = (e) =>{
        e.preventDefault()

        setOpenModal(false);

        db.collection('questions').add({
            question : input,
            imageUrl : inputUrl,
            timestamp : firebase.firestore.FieldValue.serverTimestamp(),
            user : user
        })

        

        setInput("");
        setInputUrl("")
    }

    return (
        <div className='qHeader'>
        <div className='qHeader__logo'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/250px-Quora_logo_2015.svg.png' 
            alt=''/>
        </div>
        <div className='qHeader__icons'>
            <div className='qHeader__icon'>
                <HomeIcon/>
            </div>
            <div className='qHeader__icon'>
                <FeaturedPlayListOutlinedIcon/>
            </div>
            <div className='qHeader__icon'>
                <AssignmentTurnedInOutlinedIcon/>
            </div>
            <div className='qHeader__icon'>
                <PeopleAltOutlinedIcon/>
            </div>
            <div className='qHeader__icon'>
                <NotificationsOutlinedIcon/>
            </div>
        </div>
        <div className='qHeader__input'>
            <SearchIcon/>
            <input type = 'text' placeholder="Search Quora"/>
        </div>
        <div className="qHeader__Rem">
            <div className="qHeader__avatar">
                <Avatar onClick={() => auth.signOut()} src= {user.photo} />
            </div>
             <LanguageIcon/>
             <Button onClick = {()=>{
                 setOpenModal(true)
             }}>Add Question</Button>
             <Modal
             isOpen = {openModal}
             onRequestClose = {()=> setOpenModal(false)}
             shouldCloseOnOverlayClick = {false}
             style = {{
                 overlay: {
                    width : 700,
                    height : 600,
                    backgroundColor : "rgba(0,0,0,0.8)",
                    zIndex: "100",
                    top : "50%",
                    left : "50%",
                    marginTop : "-300px",
                    marginLeft : "-350px"
                 },
             }}
             >
               <div className= "modal__title">
                  <h5>Add Question</h5>
                  <h5>Share Link</h5>
                  </div>
                  <div className="modal__info">
                    <Avatar className = "avatar" src={user.photo}/>
                    <p>{user.displayName ? user.displayName : user.email} asked</p>
                    <div className="modal__space">
                          <PeopleAltOutlinedIcon/>
                          <p>Public</p>
                          <ExpandMore/>
                          </div>
                    </div>
                   
                          <div className="modal__Field">
                             <Input
                             required
                             value = {input}
                             onChange= {(e)=>setInput(e.target.value)}
                              type = "text"
                              placeholder = "Start your Question with What, How, Why"
                             />
                          </div>

                          <div className="modal__fieldLink">
                              <LinkIcon/>
                             <Input
                              value = {inputUrl}
                              onChange= {(e)=>setInputUrl(e.target.value)}
                              type = "text"
                              placeholder = "Optional Include Link that gives context"
                             />
                          </div>    
                       
                  
                  <div className="modal__buttons">
                  <button onClick = {()=> setOpenModal(false)} className="cancle">Close</button>
                  <button type="submit" className="add" onClick={handleQuestion}>Add Question</button>
                  </div>
               
             </Modal>
        </div>
        </div>
    );
}

export default Navbar;