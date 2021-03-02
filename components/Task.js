import React, {useState} from 'react'
import { CheckBox, View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const Task =(props)=> {
    const [isSelected, setSelection] = useState(false);
    return(
        
        
        <View style={{padding:10}}>
           
            <View style={{flexDirection:'row',alignItems:'center', flexWrap:'wrap'}}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    tintColors={{ true: 'orange', false: 'black' }}
                />
                <Text style={{fontSize:18, color:'#fff', marginLeft:15 , textDecorationLine: isSelected ?'line-through':'none'}}>{props.text}</Text>
            </View>
            
        </View>
    )
    
}
export default Task;