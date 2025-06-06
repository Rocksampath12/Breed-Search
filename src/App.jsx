import {useState, useEffect} from 'react'

import Box from './components/Box'

import './App.css'

//

let App = () => {
  let [arrayData, setterFun] = useState([])
  let [searchValue, setSearchVal] = useState('')
  let cnt=0;
  // let [updatedSearchValue, setUpdatedSearch] = useState('') line20

  let changeInputFieldFun = event => {
    setSearchVal(event.target.value)
  }

  // let updateSearchValueFun = () => {
  //   setUpdatedSearch(searchValue)
  // }

  useEffect(() => {
    //fetching the data
    fetchingTheData()
  }, [])

  let fetchingTheData = async () => {
    let response = await fetch('https://dogapi.dog/api/v2/breeds')
    if (response.ok) {
      //request done
      let data = await response.json()
      // console.log(data.data)
      setterFun(data.data)
    } else {
      //request fails
    }
  }

  //finding the number of searched items
  arrayData.forEach((obj)=>{
    if (obj.attributes.name.toLowerCase().includes(searchValue.toLowerCase())){
      ++cnt;
    }
  })
  // console.log(cnt)

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
        {cnt===0?(
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
            let breedImg = null
            //Assigning imageUrl to breedImg variable
            if (
              obj.attributes.name.toLowerCase() == 'Affenpinscher'.toLowerCase()
            ) {
              breedImg =
                'https://www.dogpackapp.com/blog/wp-content/uploads/2024/09/affenpinscher-dog-breed-full-body-1024x768.webp'
            } else if (
              obj.attributes.name.toLowerCase() == 'Afghan Hound'.toLowerCase()
            ) {
              breedImg =
                'https://peeva.co/wp-content/uploads/2023/10/afghanhound-1024x682.jpg'
            } else if (
              obj.attributes.name.toLowerCase() ==
              'Airedale Terrier'.toLowerCase()
            ) {
              breedImg =
                'https://www.dogpackapp.com/blog/wp-content/uploads/2024/09/airedale-terrier-dog-breed-full-body-1024x768.webp'
            } else if (
              obj.attributes.name.toLowerCase() == 'Akita'.toLowerCase()
            ) {
              breedImg =
                'data:image/webp;base64,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'
            } else if (
              obj.attributes.name.toLowerCase() ==
              'Alaskan Klee Kai'.toLowerCase()
            ) {
              breedImg =
                'https://cdn.shopify.com/s/files/1/0765/3946/1913/files/alaskan-klee-kai-side-view.webp?v=1735547213'
            } else if (
              obj.attributes.name.toLowerCase() ==
              'Alaskan Malamute'.toLowerCase()
            ) {
              breedImg =
                'https://moderndogmagazine.com/wp-content/uploads/2022/04/bigstock-263335366_Lilun.jpg'
            } else if (
              obj.attributes.name.toLowerCase() ==
              'American Bulldog'.toLowerCase()
            ) {
              breedImg =
                'https://upload.wikimedia.org/wikipedia/commons/5/5e/American_Bulldog_600.jpg'
            } else if (
              obj.attributes.name.toLowerCase() ==
              'American English Coonhound'.toLowerCase()
            ) {
              breedImg =
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQONjXLsGWxlyyg8h0leFnYyjnbEB18bWG9Mi1cqhx473qdmbAD4e75mnSmgoM5a3DDM4FM7uNZMlcFNhdSlzsHXA'
            } else if (
              obj.attributes.name.toLowerCase() ==
              'American Eskimo Dog'.toLowerCase()
            ) {
              breedImg =
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCD2VcNpCzwKpWaal8OE5yvfHC0UIiOYhZ5anQXNNEaP9QHixUO3VNBV01T0igMpLWblpBOHvyRnG6PLbITSOdg'
            } else if (
              obj.attributes.name.toLowerCase() ==
              'American Foxhound'.toLowerCase()
            ) {
              breedImg =
                'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRjO03b9nY-M0AJc7PP1NLBAkltWJDmQhZlM8DKzfIlu5ilWSD9S1MHJDeS1hCQ5rrO-HrYAS2zdLzNolpAEcgrmA'
            }
            
            return (
              <Box
                name={obj.attributes.name}
                description={obj.attributes.description}
                minLife={obj.attributes.life.min}
                maxLife={obj.attributes.life.max}
                breedImg={breedImg}
              />
            )
          }
        })
        )}
      </div>
    </div>
  )
}

export default App