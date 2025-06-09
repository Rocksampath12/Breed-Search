import {useState, useEffect} from 'react'

import Box from '../../components/Box'

import './mainFile.css'



const MainFile = () => {
  let [arrayData, setArrayData] = useState([])
  let [searchValue, setSearchVal] = useState('')

  let changeInputFieldFun = event => {
    setSearchVal(event.target.value)
  }


  useEffect(() => {
    fetchingTheData()
  }, [])

  let fetchingTheData = async () => {
    let response = await fetch('https://dogapi.dog/api/v2/breeds')
    if (response.ok) {
      let data = await response.json()
      setArrayData(data.data)
    } else {
      //request fails
    }
  }

  let filteredData = arrayData.filter((obj)=>{
    return obj.attributes.name.toLowerCase().includes(searchValue.toLowerCase())
  })

  return (
    <div className="app-container">
      <div className="search-container">
        <input
          type="search"
          placeholder="Search"
          className="input-tag"
          onChange={changeInputFieldFun}
        />
      </div>
      <div className="boxes">
        {/* testing  */}
        {filteredData.length===0?(
          <div className="notfound-container">
            <h1>No Breeds Found</h1>
          </div>
        ):(
          arrayData.map(obj => {
          if (
            obj.attributes.name
              .toLowerCase()
              .includes(searchValue.toLowerCase())
          ) {
            let breedImg = 'https://www.dogpackapp.com/blog/wp-content/uploads/2024/09/affenpinscher-dog-breed-full-body-1024x768.webp'
            let obj1 = {
              name:obj.attributes.name,
              description:obj.attributes.description,
              minLife:obj.attributes.life.min,
              maxLife:obj.attributes.life.max,
              breedImg:breedImg
            }
            return (
              <Box
                obj1={obj1} 
              />
            )
          }
        })
        )}
      </div>
    </div>
  )
}

export default MainFile