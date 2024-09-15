import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ImageBlurShadowExpo } from 'react-native-fast-image-reflect-shadow';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", height: "100%", paddingTop: 50 }}>
      {/* with FastImage package */}
      {/* <ImageBlurShadow
        source={{ uri: 'https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
        shadowBackgroundColor={'#fff'}
      /> */}

      {/* with expo  */}
      <ImageBlurShadowExpo
        source={{ uri: 'https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
        shadowBackgroundColor={'#fff'}
        overlayContainer={<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20 }}>
          <View style={[StyleSheet.absoluteFill, { backgroundColor: "#000", opacity: 0.5, zIndex: 0 }]} />
          <Text style={{ fontFamily: '', textAlign: 'center', fontSize: 20, color: "#fff" }}>This is React Native Image reflect Shadow</Text>
        </View>}
      />
    </SafeAreaView>
  );
}
