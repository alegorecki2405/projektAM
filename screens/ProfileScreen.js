import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const ProfileScreen = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then(data => setUser(data.results[0]))
            .catch(error => console.error(error));
    }, []);

    return (
        <View style={styles.container}>
            {user && (
                <View style={styles.avatarContainer}>
                    <Image
                        style={styles.avatar}
                        source={{ uri: user.picture.large }}
                    />
                    <Text style={styles.name}>
                        {`${user.name.first} ${user.name.last}`}
                    </Text>
                </View>
            )}
            {user && (
                <View style={styles.detailsContainer}>
                    <Text style={styles.detail}>{`Age: ${user.dob.age}`}</Text>
                    <Text style={styles.detail}>{`E-mail: ${user.email}`}</Text>
                    <Text style={styles.detail}>{`City: ${user.location.city}`}</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 20,
    },
    name: {
        fontWeight: 'bold',
        marginTop: 10,
        color: '#fff',
        backgroundColor: '#000',
        padding:10,
    },
    detailsContainer: {
        alignItems: 'flex-start',
        backgroundColor: '#000',
    },
    detail: {
        marginVertical: 5,
        color: '#fff',
        padding: 10,
        marginTop: 10,
    },
});

export default ProfileScreen;
