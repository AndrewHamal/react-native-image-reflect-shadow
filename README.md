# react-native-image-reflect-shadow

![react-native-image-reflect-shadow default layout](https://i.ibb.co/F3gc2x4/Screenshot-2024-09-15-at-11-21-07-PM-removebg-preview.png)
![react-native-image-reflect-shadow layout with overlay text](https://i.ibb.co/3sr0n50/Screenshot-2024-09-15-at-11-33-31-PM-removebg-preview.png)

## Installation

```bash
npm install react-native-image-reflect
```

## Or

```bash
yarn add react-native-image-reflect
```

## For Expo
```bash
npx expo install expo-blur
```
```bash
npx expo install expo-image
```
```bash
npx expo install expo-linear-gradient
```

## For React native CLI with npm
```bash
npm install react-native-blur
```
```bash
npm install react-native-linear-gradient
```
```bash
npm install FastImage
```

## For React native CLI with yarn
```bash
yarn install react-native-blur
```
```bash
yarn install react-native-linear-gradient
```
```bash
yarn install FastImage
```

## For React native CLI *ios only

```bash
cd ios
```

```bash
pod install
```

## Check example
Github example [github](https://github.com/AndrewHamal/react-native-image-reflect-shadow/tree/main/example)

## Usage

```js for Expo
import { ImageBlurShadowExpo } from 'react-native-image-reflect-shadow';

//shadowBackgroundColor should always be container background color
<ImageBlurShadowExpo
  source={{ uri: 'https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
  shadowBackgroundColor={'#fff'}
/>
```

```js for CLI
import { ImageBlurShadow } from 'react-native-image-reflect-shadow';

//shadowBackgroundColor should always be container background color
<ImageBlurShadow
  source={{ uri: 'https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
  shadowBackgroundColor={'#fff'}
/>

```

# Props

| Property             |  Type     | Default | Description                                  |
| -------------------- | :-----:   | :-----: | -------------------------------------------- |
| source               | string    |  `null` | set the image source                         |
| width                | number    |  default| set image width                              |
| height               | number    |  default| set image height                             |
| rounded              | number    |  0      | set image border radius                      |
| shadowOffset         | number    |  38     | set/override shadow offset                   |
| shadowBackgroundColor| HexColor  |`#ffffff`| set/override shadow background color         |
| overlayContainer     | component | `null`  | add text overlay on image                    |


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

## Contact
[linkedin](https://www.linkedin.com/in/anis-hamal-72ba8527a)

[portfolio website](https://anis-hamal.netlify.app/)
