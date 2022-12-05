import React, { useEffect } from "react";
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { CreateContainer, Header, MainContainer } from './components';
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";


const App = () => {
  const [{ foodItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    
  <AnimatePresence>

    <div className="w-screen h-auto flex flex-col bg-primary">
     <Header/>

     <main className='mt-14 md:mt-20 px-4 md:px-16 py-4 w-full'>
      {/* <BrowserRouter basename="/Restaurant-Webapp"> */}
      <Routes basename="/Restaurant-Webapp">

        <Route path="/*" element={<MainContainer/>}/>
        <Route path="/createItem" element={<CreateContainer/>}/>
      </Routes>
        {/* </BrowserRouter> */}
     </main>
    </div>
  </AnimatePresence>
   
  );
};

export default App
