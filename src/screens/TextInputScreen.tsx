import React, { useContext, useState } from 'react'
import { StyleSheet, TextInput, View, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard, Text } from 'react-native'
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle'
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { useForm } from '../hooks/useForm';
import { styles } from '../theme/appTheme';

export const TextInputScreen = () => {

    const { theme: { colors, dividerColor } } = useContext(ThemeContext);

    const { form, onChange, isSubscribed } = useForm({
        name: '',
        email: '',
        phone: '',
        isSubscribed: false
    });

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={ styles.globalMargin }>
                    <HeaderTitle title="TextInputs" />

                    <TextInput 
                        style={{
                            ...stylesScreen.inputStyle,
                            borderColor: colors.text,
                            color: colors.text
                        }}
                        placeholder="Ingrese nombre"
                        autoCorrect={ false }
                        autoCapitalize="words"
                        onChangeText={ (value) => onChange(value, 'name')}
                        placeholderTextColor={ dividerColor }
                    />

                    <TextInput 
                        style={{
                            ...stylesScreen.inputStyle,
                            borderColor: colors.text,
                            color: colors.text
                        }}
                        placeholder="Ingrese email"
                        autoCorrect={ false }
                        autoCapitalize="none"
                        onChangeText={ (value) => onChange(value, 'email')}
                        keyboardType="email-address"
                        keyboardAppearance="dark"
                        placeholderTextColor={ dividerColor }
                    />

                    <View style={ stylesScreen.switchRow }>
                        <Text style={ stylesScreen.switchText }>isActive</Text>
                        <CustomSwitch isOn={ isSubscribed } onChange={ (value) => onChange(value, 'isSubscribed') }/>
                    </View>

                    <HeaderTitle title={ JSON.stringify(form, null, 3)} />
                    <HeaderTitle title={ JSON.stringify(form, null, 3)} />

                    <TextInput 
                        style={{
                            ...stylesScreen.inputStyle,
                            borderColor: colors.text,
                            color: colors.text
                        }}
                        placeholder="Ingrese telefono"
                        onChangeText={ (value) => onChange(value, 'phone')}
                        keyboardType="phone-pad"
                        placeholderTextColor={ dividerColor }
                    />
                    <View style={{ height: 100 }}/>
                </View>
            </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const stylesScreen = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.3)',
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical: 10
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    switchText: {
        fontSize: 25
    }
});
