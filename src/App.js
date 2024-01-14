import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Home';
import Appointment from './Components/Appointment';
import WaitingRoom from './Components/WaitingRoom';


function App() {
  
  const routes =createBrowserRouter([
    {path:'/',element:<Layout/>,children:[
      {index:true, element:<Home/>}, 
      {path:'*',element:<Home/>},
      {path:'Appointment',element:<Appointment/>},
      {path:'WaitingRoom',element:<WaitingRoom/>},
    ]}
  ]);

  return (
   <RouterProvider router={routes}/>
  );
}

export default App;
