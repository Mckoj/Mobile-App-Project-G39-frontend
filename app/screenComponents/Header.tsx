import { View, Text,SafeAreaView, StyleSheet,StatusBar, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Header = ({ title }: { title: string },) => {
  return (
   <SafeAreaView style = {styles.container}> 
       <View style ={styles.headerContainer}>
           <View style= {styles.TitleContainer}>
           {/* To make the image clickable */}
             <TouchableOpacity style={styles.avatarContainer} >
               <Image source ={require("../../assets/John.jpeg")} style = {styles.avatar}/>
             </TouchableOpacity>
   
             <Text style = {styles.Title} >{title}</Text>
           </View>
   
           <View style= {styles.headerButtonsContainer}>
             <TouchableOpacity  style= {styles.headerButtons}>
                 <Image source ={require("../../assets/search.jpeg")} style = {styles.avatar}/>
             </TouchableOpacity>
                
             <TouchableOpacity style= {styles.headerButtons}>
                <Image source ={require("../../assets/ama.jpeg")} style = {styles.avatar}/>
   
             </TouchableOpacity>
           </View>
         
           
       </View>
       {/* <Feed/> */}
   </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({
  container:{
    // flex:0.1,
    marginTop: StatusBar.currentHeight || 20,
    backgroundColor: "#1dd1a1",
   

  },
  headerContainer:{
    position:"static",
    backgroundColor: "#dcdde1",
    flexDirection:'row',
    width:"100%",
    height: 60,
    justifyContent:'space-between',
    
  },
  TitleContainer:{
    flexDirection:"row",
    alignItems:"flex-start",
    flex:2,
    top:29,
    left:5
  },
  avatarContainer:{
    width:50,
    height:50,
    paddingHorizontal: 8,
  },
  avatar:{
    width:25,
    height:25,
    borderRadius:30
    

  },
  Title:{
    fontWeight:'bold',
    fontSize:20,
    bottom:1,
    justifyContent:"center"

  },
  headerButtonsContainer:{
    flex:1,
    flexDirection:'row',
    top:25,
    marginLeft:50
  },
headerButtons:{
  width:30,
    height:30,
    padding:5,
    marginLeft:10
},
})