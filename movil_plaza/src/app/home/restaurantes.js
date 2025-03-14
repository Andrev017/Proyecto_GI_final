import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Restaurantes = () => {
    return (
        <View>
            <Text style={styles.titulo}>
                Restaurantes
            </Text>
            <View style={styles.espacio_Rest}>
                <View>
                    <TouchableOpacity style={styles.btn_rest} onPress={() => router.push("/rest/ensartados")}>
                        <Text style={styles.titulo_rest}>Ensartados</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.btn_rest} onPress={() => router.push("/rest/pizzaf")}>
                        <Text style={styles.titulo_rest}>Pizza Fueo</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    titulo:{
        fontSize: 28,
        padding: "3%",
        color: "#f48c06",
    },

})

export default Restaurantes;
