import React, {useState, useEffect} from 'react'
const Context = React.createContext()



function ContextProvider(props){
    const [Photos, setPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

    function addToCart(newItem){
       setCartItems(prevItems => [...prevItems,newItem])
      
    }

    function emptyCart(){
        setCartItems([])
    }
    
    //add all items to the array except the one that met condition
    function removeFromCart(id){
     
        setCartItems(prevItems => prevItems.filter(item =>  item.id != id))
    
    }

    function toggleFavorite(id){
        const updatedArray = Photos.map(photo => {
            if(photo.id === id){
                return {
                    ...photo,
                    isFavorite: !photo.isFavorite
                }
            }
            return photo
        })
        setPhotos(updatedArray)
    }

    useEffect(()=> {
        const url = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'
        fetch(url).then(data => data.json())
        .then(response => {
           setPhotos(response )
        })
    }, [])
        

    return(
        <Context.Provider value = {
            {
                Photos,
                toggleFavorite, 
                addToCart, 
                removeFromCart, 
                cartItems,
                emptyCart
                }
                }>
            {props.children}
        </Context.Provider>
    )

}

export {ContextProvider, Context}