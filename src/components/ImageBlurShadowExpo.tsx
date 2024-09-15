import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { Dimensions } from 'react-native';

interface IImageBlurShadow {
  source: any;
  width?: number;
  height?: number;
  rounded?: number;
  hasShades?: Boolean;
  shadowOffset?: number;
  shadowBackgroundColor: string;
  overlayContainer?: any;
  resizeMode?: 'cover' | 'contain';
}

function hexToRgbA(hex: string, opacity: number) {
  let c: any;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = '0x' + c.join('');
    return (
      'rgba(' +
      [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') +
      ',' +
      opacity +
      ')'
    );
  }
  throw new Error('Bad Hex');
}

const { width: WIDTH, height: HEIGHT } = Dimensions.get('screen');

const ImageBlurShadowExpo = (props: IImageBlurShadow) => {
  const {
    height = HEIGHT / 2,
    width = WIDTH - 50,
    shadowOffset = 70,
    resizeMode = 'cover',
    rounded = 30,
    shadowBackgroundColor = "#fff",
    overlayContainer,
  } = props;

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.mainContainer,
          { height: height, borderRadius: rounded },
        ]}
      >
        <Image
          source={props.source}
          contentFit={resizeMode}
          style={[
            {
              width: width,
              height: '100%',
              borderRadius: rounded,
              marginBottom: props.shadowOffset,
            },
            styles.image,
          ]}
        />

        {overlayContainer && (
          <View style={[StyleSheet.absoluteFill, { zIndex: 99 }]}>
            {overlayContainer}
          </View>
        )}
      </View>

      <View style={[styles.shadowContainer, { bottom: -shadowOffset }]}>
        <BlurView intensity={30} style={styles.blurViewStyle} />

        <Image
          source={props.source}
          contentFit={resizeMode}
          style={{
            width: width - 10,
            height: height / 1.5,
          }}
        />
        <LinearGradient
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={[StyleSheet.absoluteFill, { height: 70, zIndex: 13 }]}
          colors={[
            hexToRgbA(shadowBackgroundColor, 0),
            hexToRgbA(shadowBackgroundColor, 0.3),
            hexToRgbA(shadowBackgroundColor, 0.6),
            hexToRgbA(shadowBackgroundColor, 1),
          ]}
        />

        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            width: 70,
            zIndex: 13,
          }}
          colors={[
            hexToRgbA(shadowBackgroundColor, 0),
            hexToRgbA(shadowBackgroundColor, 0.2),
            hexToRgbA(shadowBackgroundColor, 0.4),
            hexToRgbA(shadowBackgroundColor, 0.5),
            hexToRgbA(shadowBackgroundColor, 0.8),
            hexToRgbA(shadowBackgroundColor, 1),
          ]}
        />

        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[StyleSheet.absoluteFill, { width: 70, zIndex: 13 }]}
          colors={[
            hexToRgbA(shadowBackgroundColor, 1),
            hexToRgbA(shadowBackgroundColor, 0.8),
            hexToRgbA(shadowBackgroundColor, 0.5),
            hexToRgbA(shadowBackgroundColor, 0.4),
            hexToRgbA(shadowBackgroundColor, 0.2),
            hexToRgbA(shadowBackgroundColor, 0),
          ]}
        />

        <LinearGradient
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            left: 0,
            height: 70,
            zIndex: 11,
          }}
          colors={[
            hexToRgbA(shadowBackgroundColor, 0),
            hexToRgbA(shadowBackgroundColor, 0.2),
            hexToRgbA(shadowBackgroundColor, 0.3),
            hexToRgbA(shadowBackgroundColor, 0.4),
            hexToRgbA(shadowBackgroundColor, 0.6),
            hexToRgbA(shadowBackgroundColor, 0.8),
            hexToRgbA(shadowBackgroundColor, 0.9),
            hexToRgbA(shadowBackgroundColor, 1),
          ]}
        />
      </View>
    </View>
  );
};

export default ImageBlurShadowExpo;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  mainContainer: {
    zIndex: 99,
    overflow: 'hidden',
  },
  blurViewStyle: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 11,
  },
  shadowContainer: {
    position: 'absolute',
    alignSelf: 'center',
  },
  image: {
    zIndex: 1,
  },
  shadow_container: {
    position: 'absolute',
    bottom: 10,
    zIndex: 0,
  },
});
