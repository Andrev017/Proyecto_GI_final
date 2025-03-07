import React from 'react';
import { router } from 'expo-router';
import { Linking } from 'react-native';

import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
const whatsappNumber = '+59172258262';


const FooterApp = () => {

    const openWhatsapp = () => {
        const url = `whatsapp://send?phone=${whatsappNumber}`;
        Linking.openURL(url)
            .then(() => console.log('WhatsApp opened'))
            .catch(err => console.error('An error occurred', err));
    };

    return (
        <View >

            <View style={styles.footer}>
                <View style={styles.nav}>
                    <TouchableOpacity style={styles.boton} onPress={() => router.replace("/home")}>
                        <Image source={require("../../assets/home.png")} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.boton} onPress={() => router.replace("/home/restaurantes")}>
                        <Image source={require("../../assets/cubiertos.png")} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.boton} onPress={() => router.replace("/home/perfil")}>
                        <Image source={require("../../assets/perfil.png")} />
                    </TouchableOpacity>
                </View>
            </View>

            <View>

                <TouchableOpacity style={styles.redondo1} onPress={openWhatsapp}>
                    <View>
                        <Image style={styles.whatsapp} source={require("../../assets/whatsapp.png")} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.redondo} onPress={() => router.replace("/home/carrito")}>
                    <View >
                        <Image style={styles.img} source={require("../../assets/carrito.png")} />
                    </View>
                </TouchableOpacity>

            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: "#faa307",
        borderColor: '#ccc',
        height: 75,
        borderWidth: 2,
        textAlign: "center",
        justifyContent: "center",
        top: 53,

    },
    nav: {
        flexDirection: 'row',
        textAlign: "center",
        justifyContent: "center",

    },
    boton: {
        marginHorizontal: 30,
    },

    redondo: {
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: "#faa307",
        justifyContent: "center",
        left: 290,
        top: -90,
    },
    img: {
        left: 10,
    },
    redondo1:{

    },
    whatsapp:{

    },
})

export default FooterApp;
