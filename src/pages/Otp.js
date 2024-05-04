

import React, { useState } from 'react';
import { Modal, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

const ExampleModal = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Text>Show Modal</Text>
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text>This is a modal!</Text>
                        <TouchableOpacity onPress={() => setModalVisible(false)}>
                            <Text>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
});

export default ExampleModal;



// import { Text, View, StyleSheet } from 'react-native'
// import React, { Component } from 'react'
// import { TextInput } from 'react-native-gesture-handler'
// import { useRef } from 'react'

// export default function Otp() {
//     const input1 = useRef();
//     const input2 = useRef();

//     return (
//         <View style={styles.container}>
//             <Text style={styles.header}>Otp</Text>
//             <View style={styles.inputContainer} keyboardType="number">
//                 <TextInput ref={input1} onChange={(txt) => {
//                     if (txt.length > 1) input2.current.focus();
//                 }} style={styles.input} keyboardType="number-pad" />
//                 <TextInput ref={input2} onChange={(txt) => {
//                     if (txt.length > 1) input2.current.focus()
//                 }} style={styles.input} keyboardType="number-pad" />
//                 <TextInput style={styles.input} />
//                 <TextInput style={styles.input} keyboardType="number-pad" />
//                 <TextInput style={styles.input} keyboardType="number-pad" />
//                 {/* https://www.youtube.com/watch?v=4EGRci03PH0&list=PLlydFsFRbxJ0PFRE2PbgPmekHXFp6204W&index=4 */}
//             </View>
//         </View>
//     )

// }


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     header: {
//         marginVertical: "20px",
//         margin: "auto",
//         fontSize: "20px",
//         fontWeight: "500",
//         textTransform: "capitalize",
//     },
//     inputContainer: {
//         display: "flex",
//         flexDirection: "row",
//         gap: "10px",
//         justifyContent: "center",
//         flex: 1,
//         backgroundColor: "white",
//         padding: "10px",
//     },
//     input: {
//         width: "40px",
//         height: "40px",
//         borderWidth: "1.5px",
//         borderColor: "#555",
//         borderRadius: "5px",

//     },


// })