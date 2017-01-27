import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: 60,
        paddingTop: 20,
        flex: 1,
        width: null,
        height: null,
        resizeMode: "stretch"
    },
    buttonContainer: {
        padding: 10,
        height: 45,
        overflow: 'hidden',
        borderRadius: 4,
        backgroundColor: '#aaa',
        marginBottom: 5,
        marginLeft: 20,
        marginRight: 20,
    },
    button: {
        fontSize: 14,
        color: '#eee'
    },
});

export default styles;
