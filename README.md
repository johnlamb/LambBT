# LambBT
## Split wireless keyboard

![LambBT](images/lambbt.jpeg)

A small 34 key split wireless keyboard with Choc V1 switches heavily inspired by the Sweep family and Architeuthis Dux. The columns have the same splay as the AD and is great for starting to experiment with splays.

![LambBT Side](images/lambbt_standing.jpeg)

The keyboard uses hotswap and a top plate together with a 3D printed case with M2 insets. 

Socketing the Nice!Nano v2 allows the battery to fit under the MCU. The MCU can face both up and down on either split. For a face up orientation, as in the pictures, solder the MCU bridges on the top. For a face down orientation, solder the MCU bridges on the bottom/back side.

I opted to skip an external battery JST connector and instead use two battery holes to solder the wires. Ensure right polarity, the positive end (usually red) goes in the left hole on the left split, and the right hole on the right split(towards the key switches) whereas the negative/ground (usually black) goes in the outer hole (right hole on the left split and left hole on the right split).

On/Off switch with a case cutout and a reset switch that wont be accidentally triggered.

## Design
![LambBT Detail](images/lambbt_side.jpeg)

Designed from the ground up using Ergogen and the routing in KiCad. Files for the pcb and case are in the [Ergogen](ergogen) folder together with ready made gerber files for both the pcb and plate.

Stl-files for the case are in the [output/case](ergogen/output/cases) folder.

## Build

To build for yourself, mae sure Ergogen CLI is installed. Then download/clone this repo, stand in the ergogen folder and issue the `ergogen .` command.

To also generate the case files, use the full:
`ergogen . && for i in output/cases/*.jscad; do npx @jscad/cli@1 "$i" -of stla ; done`

## Firmware
I use ZMK as firmware. You can find tested firmware and an initial keymap in the [lambbt_zmk repo](https://github.com/johnlamb/lambbt_zmk). Observer the standard keymap is Colemak-DH, if you want regular QWERTY, use the "default.keymap" file in the repo.
