import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import tw from '../utils/tailwind';
import {fonts} from '../utils/fonts';
import Icon from 'react-native-vector-icons/AntDesign';

export default function LoginScreen() {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleLogin = () => {
    setIsLoading(true);
    // TODO: Implement Google login
  };

  return (
    <View style={tw`flex-1 bg-background`}>
      {/* Loading Overlay */}
      {isLoading && (
        <View
          style={[
            StyleSheet.absoluteFill,
            tw`bg-black/50 items-center justify-center z-50`,
          ]}>
          <Text
            style={[
              tw`text-xl text-white`,
              {fontFamily: fonts.Thabit.regular},
            ]}>
            Just a moment... Logging you in
          </Text>
        </View>
      )}

      {/* Logo Image */}
      <View style={tw`absolute inset-0 items-center justify-center mb-24`}>
        <Image
          source={require('../assets/loginpage.png')}
          style={tw`w-[500px] h-[500px]`}
          resizeMode="contain"
        />
        <Text
          style={[
            tw`text-3xl text-white absolute`,
            {fontFamily: fonts.Winong.regular},
          ]}>
          AI NEWS
        </Text>
      </View>

      {/* Content */}
      <View style={tw`flex-1 items-center justify-end pb-34`}>
        <Text
          style={[
            tw`text-2xl mb-1 text-white`,
            {fontFamily: fonts.ThabitBold.regular},
          ]}>
          Login
        </Text>
        <Text style={[tw`text-base text-[#848387]`]}>
          To access your account
        </Text>

        <TouchableOpacity
          onPress={handleGoogleLogin}
          disabled={isLoading}
          style={tw`mt-9 z-20 bg-cardbg px-9 py-2 rounded-3xl flex-row items-center justify-center`}>
          <Icon name="google" size={20} color="white" style={tw`mr-2`} />
          <Text
            style={[tw`text-lg text-white`, {fontFamily: fonts.Inter.medium}]}>
            Continue with Google
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
