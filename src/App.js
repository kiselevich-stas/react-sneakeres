

import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'


function App() {
  return (
    <div className="wrapper">
      
        <Drawer/>

    

    <Header/>
      
      <div className="content">
        <div className="content__info">
          <h1>Кроссовки</h1>
          <div className="search">
            <img width={16} height={16} src="./img/search.svg" alt="" />
            <input type="text" placeholder="Поиск"/>
          </div>
        </div>

        <div className="sneakers">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

      </div>
    </div>
    
  );
}

export default App;
