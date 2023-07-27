import './App.css';
import '@aws-amplify/ui-react/styles.css';
import awsconfig from './awsconfig.json';
import{withAuthenticator} from '@aws-amplify/ui-react';
import{Amplify} from 'aws-amplify';
import CharacterSheet from './components/CharacterSheet';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Row, Col, Container} from "react-bootstrap";
import CreateCharacter from './components/CreateCharacter';
import CharacterList from './components/CharacterList';
import TopNav from './components/tools/TopNav';
import { useEffect, useState } from 'react';
import axios from 'axios';

Amplify.configure(awsconfig);

function App({user}) {
  const [charNames, setCharNames] = useState([]);

  

  useEffect(() =>{
    axios
      .get('https://swade-api.azurewebsites.net/api/GetAllCharactersNames')
      .then((res) => {
        setCharNames(res.data);
      })
      .catch((err) =>{
        console.log("Error from CharacterNames" + err)
      })
  }, []);

  return (
    <Container>
    <Router>
    <div className="App">
      <TopNav characters={charNames} username={user.username} />
      <Row>
        <Col >
          <Routes>
            <Route exact path='/' element={<CharacterList characters={charNames} username={user.username} />} />
            <Route path='/create-character' element={<CreateCharacter username={user.username} />} />
            <Route path='/character/:id' element={<CharacterSheet />} />
          </Routes>
        </Col>
      </Row>
      
    </div>
    </Router>
    </Container>
  );
}

export default withAuthenticator(App);
