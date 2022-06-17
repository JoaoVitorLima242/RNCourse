import { useState } from "react";
import { 
  Button,
  TextInput,
  View,
  StyleSheet,
  Modal,
  Image
} from "react-native";

function GoalInput ({onAddGoal, visible, onCancel}) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    };

    function addGoalHandler () {
        onAddGoal(enteredGoalText)
        setEnteredGoalText('')
    }

    return (
        <Modal
            visible={visible}
            animationType='slide'
        >
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')}/>
                <TextInput 
                    style={styles.TextInput} 
                    placeholder='Your course goal!' 
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View>
                        <Button style={styles.button} title='Add goals' onPress={addGoalHandler}/>
                    </View>
                    <View>
                        <Button style={styles.button} title='Cancel' onPress={onCancel}/>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    },

    TextInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        width: '100%',
        padding: 8
    },

    buttonContainer: {
        marginTop: 10,
        flexDirection: 'row'
    },
    button: {
        width: '40%',
        marginHorizontal: 8
    }
})