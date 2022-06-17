import { StyleSheet, Text, View, Pressable } from "react-native"

function GoalItem ({id, text, onDeleteItem}) {

    return (
        <View style={styles.goalItem}>
            <Pressable 
                onPress={onDeleteItem.bind(this, id)}
                android_ripple={styles.pressedItem}
                style={({pressed}) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalText}>{text}</Text>
            </Pressable>
        </View>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc', 
    },
    pressedItem: {
        color: '#210644'
    }, 
    goalText : {
        padding: 8,
        color: 'white'
    }
})