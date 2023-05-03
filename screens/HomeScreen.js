import { Pressable, StyleSheet, View} from 'react-native';
import Text from "react-native-web/dist/vendor/react-native/Animated/components/AnimatedText";
const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={() => navigation.navigate('LoginFormScreen')}>
                <Text style={styles.text}>Login Form</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => navigation.navigate('ProfileScreen')}>
                <Text style={styles.text}>Profile Page</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        fontsize: 40,
    },
    button: {
        backgroundColor: '#000',
        padding: 10,
        width: 150,
        textAlign: 'center',
        marginTop:10,
    },

    text: {
        fontsize: 24,
        color: '#fff',
        fontWeight: 'bold',
    }
});

export default HomeScreen;