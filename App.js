import { StatusBar } from 'expo-status-bar';
import { Text, View , TouchableOpacity} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './screens/IndexScreen';
import CreateScreen from './screens/CreateScreen';
import { Provider } from './context/BlogContext';
import ShowScreen from './screens/ShowScreen';
import { AntDesign } from '@expo/vector-icons';
import EditScreen from './screens/EditScreen';
import { Feather } from '@expo/vector-icons';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider>
      <>

        <StatusBar style='auto' />
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerTitle: 'Blog Uygulaması' }}>
            <Stack.Screen name="Index" component={IndexScreen} options={({navigation}) => ({
              headerRight: () => (
                <TouchableOpacity onPress={()=> navigation.navigate('Create')}>
                    <AntDesign name="pluscircleo" size={24} color="black" />
                </TouchableOpacity>
              )
            })} />
            <Stack.Screen name="Create" component={CreateScreen} />
            <Stack.Screen name="Show" component={ShowScreen} options={({navigation, route}) => ({
              headerRight: () => (
                <TouchableOpacity onPress={()=> navigation.navigate('Edit' , {id: route.params.id})}>
                    <Feather name="edit" size={24} color="black" />
                </TouchableOpacity>
              )
            })} />
            <Stack.Screen name="Edit" component={EditScreen} />
            
          </Stack.Navigator>
        </NavigationContainer>
      </>
    </Provider>
  );
}
