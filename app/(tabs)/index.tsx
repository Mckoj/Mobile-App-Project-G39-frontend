import "../../global"
import { Text } from 'react-native'
import Header from '../screenComponents/Header'
import Feed from '../screenComponents/Feed'


const Index = () => {
  return (
    <>
    <Header title="Home"/>
    <Feed/>
    <Text className='text-xl font-bold text-red-800'>Index bjbj</Text>
    </>
    
  )
}

export default Index