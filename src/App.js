import './App.css';
import menu from './data.js'
import {useEffect, useState} from 'react'

function App() {

  // const {title, category, price, img, desc} = menu
  const [currentMenu , setCurrentMenu] = useState([])
  

  useEffect(()=> {
    setCurrentMenu(menu)
  }, [])

  const handleClick = (category) =>{
    if(category=== 'all'){
      setCurrentMenu(menu)
    } else{
    setCurrentMenu(menu.filter((item) =>{
        return item.category === category
    })
  )
}
    
  }

  // const breakfast = ()=> {
  //   menu.filter(()=> {
  //    return setCategory((item) => {
  //       return item.category !== 'breakfast'
  //     })
  //   })
  // }

  // console.log(menu)

  
    // const handleBreakfast =  () => {
    //   setCurrentMenu(currentMenu.filter(item => item.category === 'breakfast'))
    // }

    // setCategory(breakfast)

    console.log(currentMenu)
  
  
  return (
    <div className="App">
      <h1>Our Menu</h1>
      <div className='up'>
          <button onClick={() => handleClick("all")}>All</button>
          <button onClick={() => handleClick("breakfast")}>breakfast</button>
          <button onClick={() => handleClick("lunch")}>lunch</button>
          <button onClick={() => handleClick("shakes")}>Shakes</button>
      </div>
      <div className='down'>
        
         { currentMenu.map((menu) =>(
            <div className='singleCard' key={menu.id}>
              <img src={menu.img } alt=''></img>
              <div className='content'>
                <div className='subcontent'>
                  <p className='title'>{menu.title}</p>
                  <p className='price'>${menu.price}</p>
                </div>
                <p className='desc'>{menu.desc}</p>
              </div>
            </div>
            
          ))}

        </div>
      </div>
    
  );
}

export default App;
