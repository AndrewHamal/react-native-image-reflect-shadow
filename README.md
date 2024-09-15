# react-native-image-reflect-shadow

![react-native-image-reflect-shadow default layout](https://i.ibb.co/F3gc2x4/Screenshot-2024-09-15-at-11-21-07-PM-removebg-preview.png)
![react-native-image-reflect-shadow layout with overlay text](https://i.ibb.co/3sr0n50/Screenshot-2024-09-15-at-11-33-31-PM-removebg-preview.png)

## Installation

```bash
npm install react-native-image-reflect-shadow
```

## Or

```bash
yarn add react-native-image-reflect-shadow
```

## For Expo
```bash
npx expo install expo-blur
npx expo install expo-image
npx expo install expo-linear-gradient
```

## For CLI with npm
```bash
npm install react-native-blur
npm install react-native-linear-gradient
npm install FastImage
```

## For CLI with yarn
```bash
yarn install react-native-blur
yarn install react-native-linear-gradient
yarn install FastImage

cd ios
pod install
```

## Usage

```bash
import { ImageBlurShadowExpo } from 'react-native-image-reflect-shadow';

<ImageBlurShadowExpo
  source={{ uri: 'https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
  shadowBackgroundColor={'#fff'}
  overlayContainer={<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20 }}>
          <View style={[StyleSheet.absoluteFill, { backgroundColor: "#000", opacity: 0.5, zIndex: 0 }]} />
          <Text style={{ fontFamily: '', textAlign: 'center', fontSize: 20, color: "#fff" }}>This is React Native Image reflect Shadow</Text>
        </View>}
/>

```

```js for CLI
import { ImageBlurShadow } from 'react-native-image-reflect-shadow';

<ImageBlurShadow
  source={{ uri: 'https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
  shadowBackgroundColor={'#fff'}
  overlayContainer={<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20 }}>
          <View style={[StyleSheet.absoluteFill, { backgroundColor: "#000", opacity: 0.5, zIndex: 0 }]} />
          <Text style={{ fontFamily: '', textAlign: 'center', fontSize: 20, color: "#fff" }}>This is React Native Image reflect Shadow</Text>
        </View>}
/>

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Contact developer [linkedin](www.linkedin.com/in/anis-hamal-72ba8527a)
Check developer Portfolio [anis-hamal](https://anis-hamal.netlify.app/)
