import {addons} from '@storybook/addons'
import {create} from '@storybook/theming/create'

const theme = create({
  base:'light',
  brandTitle: 'react-native-sketchbook',
  brandImage: 'https://user-images.githubusercontent.com/6936373/80469848-1df88e00-897c-11ea-8513-5b0b56eff55b.png'
})

addons.setConfig({
  theme
})