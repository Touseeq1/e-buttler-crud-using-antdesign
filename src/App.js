import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../src/style/style.css';
import Newbuilding from './All_Pages/Newbuilding';
import Addbuilding from './All_Pages/Addbuilding';
import Editbuilding from './All_Pages/Editbuilding';
import Table from './All_Pages/Table';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Newbuilding/>}>
            <Route exact path="table" index element={<Table/>}/>
            <Route exact path="addbuilding"  element={<Addbuilding/>}/>
            <Route exact path="editbuilding/:id" element={<Editbuilding/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
