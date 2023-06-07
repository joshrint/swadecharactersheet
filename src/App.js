import './App.css';
//import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import CharacterSheet from './components/CharacterSheet';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateCharacter from './components/CreateCharacter';
import UpdateCharacter from './components/UpdateCharacter';
import CharacterList from './components/CharacterList';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path='/' element={<CharacterList />} />
        <Route path='/create-character' element={<CreateCharacter />} />
        <Route path='/edit-character/:id' element={<UpdateCharacter />} />
        <Route path='/character/:id' element={<CharacterSheet />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
