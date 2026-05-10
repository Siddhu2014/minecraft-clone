# Minecraft Clone

A Minecraft-like voxel engine in the browser created using JavaScript and Three.js. This version has been enhanced with proper physics, synthesized sound effects, and an expanded hotbar.

[Try the interactive demo here](https://jayden-chiu.github.io/MinecraftClone/.)

**NOTE: Transparent blocks (water, leaves) do not render on macOS devices due to Three.js bug**

(The page may take some time to load, be patient!)

## New Features
- **Player Physics:** Added gravity and jumping mechanics.
- **Synthesized Audio:** Retro 8-bit sound effects for walking, jumping, breaking, and placing blocks using the Web Audio API.
- **Expanded Hotbar:** 8 selectable block types including stone bricks, cobblestone, glass, and bookshelves.
## Controls
- **Move forward/backward** with W S
- **Strafe left/right** with A D
- **Break blocks** with left click
- **Place blocks** with right click
- **Jump** with Space
- **Change blocks** using scroll wheel
- **Enable debug** using F

## Screenshots

![Screenshot 1](https://i.imgur.com/gzcKKrX.png)
![Screenshot 2](https://i.imgur.com/EXHOaSi.png)
![Screenshot 3](https://i.imgur.com/LFe7ker.png)

## Disclaimer
- This project is a WIP, many features are missing 
- This project is not associated with Mojang or Minecraft

## Sources
- [Poisson-disk sampling implementation](https://cdn.jsdelivr.net/gh/kchapelier/poisson-disk-sampling@2.2.2/build/poisson-disk-sampling.min.js)
- [Perlin and simplex noise implementation](https://github.com/josephg/noisejs)
- [Textures used](https://resourcepack.net/dandelion-resource-pack/)
- [Three.js](https://threejs.org/)
