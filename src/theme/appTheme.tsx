import { StyleSheet } from "react-native";

export const colors = {
    primary: '#5856D6',
    
}

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20,
    },
    title: {
        fontSize: 30,
        marginBottom: 10,
    },
    botonGrande: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    botonGrandeText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    avatar: {
        width: 254,
        height: 254,
        borderRadius: 100
    },
    menuContainer: {
        marginVertical: 30,
        marginHorizontal: 50,
    },
    menuBoton: {
        marginVertical: 10
    },
    menuTexto: {
        fontSize: 20
    },
});
