## NextJs App

App built using Next.js with App Router, contains two routes: '/scene' and '/popup'

### Popup
- Popup-Page with a open popup button that uses searchParams to control state of popup without use of React state changes, ensuring both popup-page and the popup are server components.

### Scene
- Contains a model form sketchFab, using react-three-fiber library to display the model, and using helpers from react-three/drei (useAnimations) to play 3D-Models animation. Click on model to play/pause animation. Also uses framer-motion-3d and framer-motion to animate model and text.

### Acknowledgements
Model: https://sketchfab.com/3d-models/ufo-vehicle-55a5ed830ef14cc9b1168651469f140f
