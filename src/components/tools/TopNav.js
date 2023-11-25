import React, { useEffect, useState } from 'react';
import {Drawer, ListItem, ListItemIcon, ListItemText, Divider} from '@mui/material';
import {Auth} from 'aws-amplify';
import { useLocation, useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCirclePlus, faRightFromBracket, faUser, faDiceD20, faBars, faTrophy, faSkull, faWandSparkles } from '@fortawesome/free-solid-svg-icons';
import '../../stylesheets/Nav.css';

export default function TopNav({characters, username}) {
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState(false);
    
    async function signOut(){
        try {
            await Auth.signOut();
        } catch (error){
            console.log('error signing out:', error)
        }
    }
    const location = useLocation();

    const {pathname} = location;

    const splitLocation = pathname.split("/");

    const navigate = useNavigate();

    const handleNav = (path) =>{
        navigate(path);
        setOpen(false);
    }

    useEffect(() =>{
        if (splitLocation[1] === 'character'){
            setShow(true);
        }
    },[splitLocation, show])


    /*const showCharacters = () =>{
        if (show) {
            setShow(false);
        } else {
            setShow(true);
        }
    }*/

    /*const formatCharacterName = (name) =>{
        let formatName = name.replace(" ", "%20")
        return formatName
    } */

    const data = [
        {name:'Home', icon: <FontAwesomeIcon icon={faHouse} />, path:"/"},
        {name:'New Character', icon:<FontAwesomeIcon icon={faCirclePlus} />, path:'/create-character'}
    ]
    const secondaryData = [
        {name:'Edges', icon: <FontAwesomeIcon icon={faTrophy} />, path:'/info/edges'},
        {name: 'Hinderance', icon: <FontAwesomeIcon icon={faSkull} />, path:'/info/hinderances'},
        {name: 'Powers', icon: <FontAwesomeIcon icon={faWandSparkles} />, path:'/info/powers'}
    ]
    
    const charList =         
        characters.length === 0 ? 'No characters on record' : characters.map((character, c) => 
            character.player === username ?
                <ListItem button key={character.name} onClick={()=>handleNav(`/character/${character.name}`)}>
                    <ListItemText secondary={character.name} />
                </ListItem>
                
            : <div key={c}></div>
        )
    
    const getList = (data) => (
        <div style={{ width: 250}}>
            {data.map((item, index) =>(
                <ListItem button key={index} onClick={()=>handleNav(item.path)}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.name} />
                </ListItem>
            ))}
        </div>
    );

  return (
    <>
            <div className='top-nav'><span className='toggle-menu' onClick={() => setOpen(true)}><FontAwesomeIcon icon={faBars} /></span></div>
        
        <Drawer
            anchor={'left'}
            open={open}
            onClose={() => setOpen(false)}>
                <ListItem>
                    <ListItemIcon><FontAwesomeIcon icon={faUser} /></ListItemIcon>
                    <ListItemText primary={username} />
                </ListItem>
                <Divider />
                {getList(data)}
                <Divider />
                    <ListItem>
                        <ListItemIcon><FontAwesomeIcon icon={faDiceD20} /></ListItemIcon>
                        <ListItemText primary='My Characters' />
                    </ListItem>
                    {charList}
                <Divider />
                {getList(secondaryData)}
                <Divider />
                    <ListItem button onClick={signOut}>
                        <ListItemIcon><FontAwesomeIcon icon={faRightFromBracket} /></ListItemIcon>
                        <ListItemText primary="Log Out"/>
                    </ListItem>
                
            </Drawer>
    </>
  )
}
