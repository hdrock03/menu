import './App.css';
import data from './data.js'
import {useEffect, useState} from 'react'

function App() {

  // const {title, category, price, img, desc} = menu
  const [currentMenu , setCurrentMenu] = useState([]) // ek state banaye jo ki empty hai suru me
  

  useEffect(()=> {
    setCurrentMenu(data)  // menu jo array of object hai usko currentMenu me set kar diye
  }, [])

  const handleClick = (category) =>{ // handleClick me category pass kiye hai  
    if(category=== 'all'){           // jab category all hoga to currentmenu me menu set kar denge
      setCurrentMenu(data)
    } else{
    setCurrentMenu(data.filter((item) =>{ // yaha me CurrentMenu me filter laga rhe taki filtered on the basis of category
        return item.category === category // menu.filter matlv hmesa main array ko filter krega aur jo bhi category choose 
                                          // choose krnge niche category pass kiye hai
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
    //   setCurrentMenu(currentMenu.filter(item => item.category === 'breakfast')) // yeh wala code bhi sahi hai filter ke liye
    // } // currentMenu ke jagah menu hoga qki currentMenu me filtered array aa skta hai aur jb all pe click krnege to
    // all filter nhi hoga

    // setCategory(breakfast)

    // console.log(currentMenu)
  
  
  return (
    <div className="App">
      <h1>Our Menu</h1>
      <div className='up'>
          <button onClick={() => handleClick("all")}>All</button> 
          <button onClick={() => handleClick("breakfast")}>breakfast</button>
          <button onClick={() => handleClick("lunch")}>lunch</button>
          <button onClick={() => handleClick("shakes")}>Shakes</button>
          {/* yaha pe category me pass kiye jo mko chahiye filtered hoke */}
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
