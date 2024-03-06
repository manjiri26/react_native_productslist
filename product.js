import { Stylesheet,Text,View} from "react-native";
import React, { useEffect } from "react";

const Product ={} => {
 useEffect{ () => }
 getProducts();
},[]);

const getProducts = () => {
    const URL = "https://dummyjson.com/products."

    fetch(URL)
     .then((res) => {
        return res.json ();
     })
     .then((data) => {
        console.log(data);

     });
     {;
    
    return(
         <View>
            <Text> ProductListing </Text>
            <Flatlist data={products} render {(item )} => <View>
            </View> />
             </View>

         </View>
    )}
}
