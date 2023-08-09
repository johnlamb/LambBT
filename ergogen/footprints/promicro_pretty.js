// Arduino ProMicro atmega32u4au
//  Take care to bridge the pads on the correct side of the pcb
//    To orient the MCU up, meaning power led faces away from pcb, bridge the pads on the side of the pcb with the MCU
//    To orient the MCU down, meaning power led faces the pcb, bridge the pads on the opposite side of the pcb

module.exports = {
    params: {
        designator: 'MCU',
        RAW: {type: 'net', value: 'RAW'},
        GND: {type: 'net', value: 'GND'},
        RST: {type: 'net', value: 'RST'},
        VCC: {type: 'net', value: 'VCC'},
        P21: {type: 'net', value: 'P21'},
        P20: {type: 'net', value: 'P20'},
        P19: {type: 'net', value: 'P19'},
        P18: {type: 'net', value: 'P18'},
        P15: {type: 'net', value: 'P15'},
        P14: {type: 'net', value: 'P14'},
        P16: {type: 'net', value: 'P16'},
        P10: {type: 'net', value: 'P10'},
        P1: {type: 'net', value: 'P1'},
        P0: {type: 'net', value: 'P0'},
        P2: {type: 'net', value: 'P2'},
        P3: {type: 'net', value: 'P3'},
        P4: {type: 'net', value: 'P4'},
        P5: {type: 'net', value: 'P5'},
        P6: {type: 'net', value: 'P6'},
        P7: {type: 'net', value: 'P7'},
        P8: {type: 'net', value: 'P8'},
        P9: {type: 'net', value: 'P9'}
    },
    body: p => {
        return `
            (module ProMicro (layer F.Cu) (tedit 6135B927)
            ${p.at /* parametric position */}

            ${'' /* footprint description, tags and reference */}
            (descr "Solder-jumper reversible Pro Micro footprint")
            (tags "promicro ProMicro reversible solder jumper")
            (fp_text reference "${p.ref}" (at -16.256 -0.254 ${p.rot + 90}) (layer F.SilkS) ${p.ref_hide}
            (effects (font (size 1 1) (thickness 0.15)))
            )

            ${''/* extra border around "RAW", in case the rectangular shape is not distinctive enough */}
            (fp_line (start -15.24 6.35) (end -12.7 6.35) (layer F.SilkS) (width 0.15))
            (fp_line (start -15.24 6.35) (end -15.24 8.89) (layer F.SilkS) (width 0.15))
            (fp_line (start -12.7 6.35) (end -12.7 8.89) (layer F.SilkS) (width 0.15))
            (fp_line (start -12.7 8.89) (end -15.24 8.89) (layer F.SilkS) (width 0.15))
            (fp_line (start -15.24 -6.35) (end -12.7 -6.35) (layer B.SilkS) (width 0.15))
            (fp_line (start -15.24 -6.35) (end -15.24 -8.89) (layer B.SilkS) (width 0.15))
            (fp_line (start -12.7 -6.35) (end -12.7 -8.89) (layer B.SilkS) (width 0.15))
            (fp_line (start -12.7 -8.89) (end -15.24 -8.89) (layer B.SilkS) (width 0.15))

            ${''/* illustration of the (possible) USB port overhang */}
            (fp_line (start -19.304 -3.81) (end -14.224 -3.81) (layer Dwgs.User) (width 0.15))
            (fp_line (start -19.304 3.81) (end -19.304 -3.81) (layer Dwgs.User) (width 0.15))
            (fp_line (start -14.224 3.81) (end -19.304 3.81) (layer Dwgs.User) (width 0.15))
            (fp_line (start -14.224 -3.81) (end -14.224 3.81) (layer Dwgs.User) (width 0.15))

            (fp_circle (center 13.97 0.762) (end 14.095 0.762) (layer B.Mask) (width 0.25))
            (fp_circle (center 13.97 0.762) (end 14.095 0.762) (layer F.Mask) (width 0.25))
            (fp_circle (center 13.97 -0.762) (end 14.095 -0.762) (layer B.Mask) (width 0.25))
            (fp_circle (center 13.97 -0.762) (end 14.095 -0.762) (layer F.Mask) (width 0.25))
            (fp_circle (center 11.43 0.762) (end 11.555 0.762) (layer B.Mask) (width 0.25))
            (fp_circle (center 11.43 0.762) (end 11.555 0.762) (layer F.Mask) (width 0.25))
            (fp_circle (center 11.43 -0.762) (end 11.555 -0.762) (layer B.Mask) (width 0.25))
            (fp_circle (center 11.43 -0.762) (end 11.555 -0.762) (layer F.Mask) (width 0.25))
            (fp_circle (center 8.89 0.762) (end 9.015 0.762) (layer B.Mask) (width 0.25))
            (fp_circle (center 8.89 0.762) (end 9.015 0.762) (layer F.Mask) (width 0.25))
            (fp_circle (center 8.89 -0.762) (end 9.015 -0.762) (layer B.Mask) (width 0.25))
            (fp_circle (center 8.89 -0.762) (end 9.015 -0.762) (layer F.Mask) (width 0.25))
            (fp_circle (center 6.35 0.762) (end 6.475 0.762) (layer B.Mask) (width 0.25))
            (fp_circle (center 6.35 0.762) (end 6.475 0.762) (layer F.Mask) (width 0.25))
            (fp_circle (center 6.35 -0.762) (end 6.475 -0.762) (layer B.Mask) (width 0.25))
            (fp_circle (center 6.35 -0.762) (end 6.475 -0.762) (layer F.Mask) (width 0.25))
            (fp_circle (center 3.81 0.762) (end 3.935 0.762) (layer B.Mask) (width 0.25))
            (fp_circle (center 3.81 0.762) (end 3.935 0.762) (layer F.Mask) (width 0.25))
            (fp_circle (center 3.81 -0.762) (end 3.935 -0.762) (layer B.Mask) (width 0.25))
            (fp_circle (center 3.81 -0.762) (end 3.935 -0.762) (layer F.Mask) (width 0.25))
            (fp_circle (center 1.27 0.762) (end 1.395 0.762) (layer B.Mask) (width 0.25))
            (fp_circle (center 1.27 0.762) (end 1.395 0.762) (layer F.Mask) (width 0.25))
            (fp_circle (center 1.27 -0.762) (end 1.395 -0.762) (layer B.Mask) (width 0.25))
            (fp_circle (center 1.27 -0.762) (end 1.395 -0.762) (layer F.Mask) (width 0.25))
            (fp_circle (center -1.27 0.762) (end -1.145 0.762) (layer B.Mask) (width 0.25))
            (fp_circle (center -1.27 0.762) (end -1.145 0.762) (layer F.Mask) (width 0.25))
            (fp_circle (center -1.27 -0.762) (end -1.145 -0.762) (layer B.Mask) (width 0.25))
            (fp_circle (center -1.27 -0.762) (end -1.145 -0.762) (layer F.Mask) (width 0.25))
            (fp_circle (center -3.81 0.762) (end -3.685 0.762) (layer B.Mask) (width 0.25))
            (fp_circle (center -3.81 0.762) (end -3.685 0.762) (layer F.Mask) (width 0.25))
            (fp_circle (center -3.81 -0.762) (end -3.685 -0.762) (layer B.Mask) (width 0.25))
            (fp_circle (center -3.81 -0.762) (end -3.685 -0.762) (layer F.Mask) (width 0.25))
            (fp_circle (center -6.35 0.762) (end -6.225 0.762) (layer B.Mask) (width 0.25))
            (fp_circle (center -6.35 0.762) (end -6.225 0.762) (layer F.Mask) (width 0.25))
            (fp_circle (center -6.35 -0.762) (end -6.225 -0.762) (layer B.Mask) (width 0.25))
            (fp_circle (center -6.35 -0.762) (end -6.225 -0.762) (layer F.Mask) (width 0.25))
            (fp_circle (center -8.89 0.762) (end -8.765 0.762) (layer B.Mask) (width 0.25))
            (fp_circle (center -8.89 0.762) (end -8.765 0.762) (layer F.Mask) (width 0.25))
            (fp_circle (center -8.89 -0.762) (end -8.765 -0.762) (layer B.Mask) (width 0.25))
            (fp_circle (center -8.89 -0.762) (end -8.765 -0.762) (layer F.Mask) (width 0.25))
            (fp_circle (center -11.43 -0.762) (end -11.305 -0.762) (layer B.Mask) (width 0.25))
            (fp_circle (center -11.43 -0.762) (end -11.305 -0.762) (layer F.Mask) (width 0.25))
            (fp_circle (center -11.43 0.762) (end -11.305 0.762) (layer B.Mask) (width 0.25))
            (fp_circle (center -11.43 0.762) (end -11.305 0.762) (layer F.Mask) (width 0.25))
            (fp_circle (center -13.97 0.762) (end -13.845 0.762) (layer B.Mask) (width 0.25))
            (fp_circle (center -13.97 0.762) (end -13.845 0.762) (layer F.Mask) (width 0.25))
            (fp_circle (center -13.97 -0.762) (end -13.845 -0.762) (layer B.Mask) (width 0.25))
            (fp_circle (center -13.97 -0.762) (end -13.845 -0.762) (layer F.Mask) (width 0.25))
            (fp_poly (pts (xy 14.478 -5.08) (xy 13.462 -5.08) (xy 13.462 -6.096) (xy 14.478 -6.096)) (layer B.Mask) (width 0.1))
            (fp_poly (pts (xy 11.938 -5.08) (xy 10.922 -5.08) (xy 10.922 -6.096) (xy 11.938 -6.096)) (layer B.Mask) (width 0.1))
            (fp_poly (pts (xy 9.398 -5.08) (xy 8.382 -5.08) (xy 8.382 -6.096) (xy 9.398 -6.096)) (layer B.Mask) (width 0.1))
            (fp_poly (pts (xy 6.858 -5.08) (xy 5.842 -5.08) (xy 5.842 -6.096) (xy 6.858 -6.096)) (layer B.Mask) (width 0.1))
            (fp_poly (pts (xy 4.318 -5.08) (xy 3.302 -5.08) (xy 3.302 -6.096) (xy 4.318 -6.096)) (layer B.Mask) (width 0.1))
            (fp_poly (pts (xy 1.778 -5.08) (xy 0.762 -5.08) (xy 0.762 -6.096) (xy 1.778 -6.096)) (layer B.Mask) (width 0.1))
            (fp_poly (pts (xy -0.762 -5.08) (xy -1.778 -5.08) (xy -1.778 -6.096) (xy -0.762 -6.096)) (layer B.Mask) (width 0.1))
            (fp_poly (pts (xy -3.302 -5.08) (xy -4.318 -5.08) (xy -4.318 -6.096) (xy -3.302 -6.096)) (layer B.Mask) (width 0.1))
            (fp_poly (pts (xy -5.842 -5.08) (xy -6.858 -5.08) (xy -6.858 -6.096) (xy -5.842 -6.096)) (layer B.Mask) (width 0.1))
            (fp_poly (pts (xy -8.382 -5.08) (xy -9.398 -5.08) (xy -9.398 -6.096) (xy -8.382 -6.096)) (layer B.Mask) (width 0.1))
            (fp_poly (pts (xy -10.922 -5.08) (xy -11.938 -5.08) (xy -11.938 -6.096) (xy -10.922 -6.096)) (layer B.Mask) (width 0.1))
            (fp_poly (pts (xy -13.462 -5.08) (xy -14.478 -5.08) (xy -14.478 -6.096) (xy -13.462 -6.096)) (layer B.Mask) (width 0.1))
            (fp_poly (pts (xy 13.462 5.08) (xy 14.478 5.08) (xy 14.478 6.096) (xy 13.462 6.096)) (layer B.Mask) (width 0.1))
            (fp_poly (pts (xy 10.922 5.08) (xy 11.938 5.08) (xy 11.938 6.096) (xy 10.922 6.096)) (layer B.Mask) (width 0.1))
            (fp_poly (pts (xy 8.382 5.08) (xy 9.398 5.08) (xy 9.398 6.096) (xy 8.382 6.096)) (layer B.Mask) (width 0.1))
            (fp_poly (pts (xy 5.842 5.08) (xy 6.858 5.08) (xy 6.858 6.096) (xy 5.842 6.096)) (layer B.Mask) (width 0.1))
            (fp_poly (pts (xy 3.302 5.08) (xy 4.318 5.08) (xy 4.318 6.096) (xy 3.302 6.096)) (layer B.Mask) (width 0.1))
            (fp_poly (pts (xy 0.762 5.08) (xy 1.778 5.08) (xy 1.778 6.096) (xy 0.762 6.096)) (layer B.Mask) (width 0.1))
            (fp_poly (pts (xy -1.778 5.08) (xy -0.762 5.08) (xy -0.762 6.096) (xy -1.778 6.096)) (layer B.Mask) (width 0.1))
            (fp_poly (pts (xy -4.318 5.08) (xy -3.302 5.08) (xy -3.302 6.096) (xy -4.318 6.096)) (layer B.Mask) (width 0.1))
            (fp_poly (pts (xy -6.858 5.08) (xy -5.842 5.08) (xy -5.842 6.096) (xy -6.858 6.096)) (layer B.Mask) (width 0.1))
            (fp_poly (pts (xy -9.398 5.08) (xy -8.382 5.08) (xy -8.382 6.096) (xy -9.398 6.096)) (layer B.Mask) (width 0.1))
            (fp_poly (pts (xy -11.938 5.08) (xy -10.922 5.08) (xy -10.922 6.096) (xy -11.938 6.096)) (layer B.Mask) (width 0.1))
            (fp_poly (pts (xy -14.478 5.08) (xy -13.462 5.08) (xy -13.462 6.096) (xy -14.478 6.096)) (layer B.Mask) (width 0.1))
            (fp_poly (pts (xy -13.462 -5.08) (xy -14.478 -5.08) (xy -14.478 -6.096) (xy -13.462 -6.096)) (layer F.Mask) (width 0.1))
            (fp_poly (pts (xy 1.778 -5.08) (xy 0.762 -5.08) (xy 0.762 -6.096) (xy 1.778 -6.096)) (layer F.Mask) (width 0.1))
            (fp_poly (pts (xy -10.922 -5.08) (xy -11.938 -5.08) (xy -11.938 -6.096) (xy -10.922 -6.096)) (layer F.Mask) (width 0.1))
            (fp_poly (pts (xy -8.382 -5.08) (xy -9.398 -5.08) (xy -9.398 -6.096) (xy -8.382 -6.096)) (layer F.Mask) (width 0.1))
            (fp_poly (pts (xy -3.302 -5.08) (xy -4.318 -5.08) (xy -4.318 -6.096) (xy -3.302 -6.096)) (layer F.Mask) (width 0.1))
            (fp_poly (pts (xy -0.762 -5.08) (xy -1.778 -5.08) (xy -1.778 -6.096) (xy -0.762 -6.096)) (layer F.Mask) (width 0.1))
            (fp_poly (pts (xy 6.858 -5.08) (xy 5.842 -5.08) (xy 5.842 -6.096) (xy 6.858 -6.096)) (layer F.Mask) (width 0.1))
            (fp_poly (pts (xy 11.938 -5.08) (xy 10.922 -5.08) (xy 10.922 -6.096) (xy 11.938 -6.096)) (layer F.Mask) (width 0.1))
            (fp_poly (pts (xy -5.842 -5.08) (xy -6.858 -5.08) (xy -6.858 -6.096) (xy -5.842 -6.096)) (layer F.Mask) (width 0.1))
            (fp_poly (pts (xy 4.318 -5.08) (xy 3.302 -5.08) (xy 3.302 -6.096) (xy 4.318 -6.096)) (layer F.Mask) (width 0.1))
            (fp_poly (pts (xy 9.398 -5.08) (xy 8.382 -5.08) (xy 8.382 -6.096) (xy 9.398 -6.096)) (layer F.Mask) (width 0.1))
            (fp_poly (pts (xy 14.478 -5.08) (xy 13.462 -5.08) (xy 13.462 -6.096) (xy 14.478 -6.096)) (layer F.Mask) (width 0.1))
            (fp_poly (pts (xy 13.462 5.08) (xy 14.478 5.08) (xy 14.478 6.096) (xy 13.462 6.096)) (layer F.Mask) (width 0.1))
            (fp_poly (pts (xy 10.922 5.08) (xy 11.938 5.08) (xy 11.938 6.096) (xy 10.922 6.096)) (layer F.Mask) (width 0.1))
            (fp_poly (pts (xy 8.382 5.08) (xy 9.398 5.08) (xy 9.398 6.096) (xy 8.382 6.096)) (layer F.Mask) (width 0.1))
            (fp_poly (pts (xy 5.842 5.08) (xy 6.858 5.08) (xy 6.858 6.096) (xy 5.842 6.096)) (layer F.Mask) (width 0.1))
            (fp_poly (pts (xy 3.302 5.08) (xy 4.318 5.08) (xy 4.318 6.096) (xy 3.302 6.096)) (layer F.Mask) (width 0.1))
            (fp_poly (pts (xy 0.762 5.08) (xy 1.778 5.08) (xy 1.778 6.096) (xy 0.762 6.096)) (layer F.Mask) (width 0.1))
            (fp_poly (pts (xy -1.778 5.08) (xy -0.762 5.08) (xy -0.762 6.096) (xy -1.778 6.096)) (layer F.Mask) (width 0.1))
            (fp_poly (pts (xy -4.318 5.08) (xy -3.302 5.08) (xy -3.302 6.096) (xy -4.318 6.096)) (layer F.Mask) (width 0.1))
            (fp_poly (pts (xy -6.858 5.08) (xy -5.842 5.08) (xy -5.842 6.096) (xy -6.858 6.096)) (layer F.Mask) (width 0.1))
            (fp_poly (pts (xy -9.398 5.08) (xy -8.382 5.08) (xy -8.382 6.096) (xy -9.398 6.096)) (layer F.Mask) (width 0.1))
            (fp_poly (pts (xy -11.938 5.08) (xy -10.922 5.08) (xy -10.922 6.096) (xy -11.938 6.096)) (layer F.Mask) (width 0.1))
            (fp_poly (pts (xy -14.478 5.08) (xy -13.462 5.08) (xy -13.462 6.096) (xy -14.478 6.096)) (layer F.Mask) (width 0.1))
            (pad "" thru_hole circle (at -13.97 7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask)
            (zone_connect 0))
            (pad "" thru_hole circle (at -11.43 7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
            (pad "" thru_hole circle (at -8.89 7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
            (pad "" thru_hole circle (at -6.35 7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
            (pad "" thru_hole circle (at -3.81 7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
            (pad "" thru_hole circle (at -1.27 7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
            (pad "" thru_hole circle (at 1.27 7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
            (pad "" thru_hole circle (at 3.81 7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
            (pad "" thru_hole circle (at 6.35 7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
            (pad "" thru_hole circle (at 8.89 7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
            (pad "" thru_hole circle (at 11.43 7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
            (pad "" thru_hole circle (at 13.97 7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
            (pad "" thru_hole circle (at 13.97 -7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
            (pad "" thru_hole circle (at 11.43 -7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
            (pad "" thru_hole circle (at 8.89 -7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
            (pad "" thru_hole circle (at 6.35 -7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
            (pad "" thru_hole circle (at 3.81 -7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
            (pad "" thru_hole circle (at 1.27 -7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
            (pad "" thru_hole circle (at -1.27 -7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
            (pad "" thru_hole circle (at -3.81 -7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
            (pad "" thru_hole circle (at -6.35 -7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
            (pad "" thru_hole circle (at -8.89 -7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
            (pad "" thru_hole circle (at -11.43 -7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
            (pad "" thru_hole circle (at -13.97 -7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
            (pad "" smd custom (at -13.97 5.842 ${p.rot + 180}) (size 0.1 0.1) (layers F.Cu F.Mask)
            (clearance 0.1) (zone_connect 0)
            (options (clearance outline) (anchor rect))
            (primitives
                (gr_poly (pts
                (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
            ) (width 0))
                ))
                (pad 24 smd custom (at -13.97 4.826 ${p.rot + 180}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.P1.str}
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
            ) (width 0))
                ))
                (pad "" smd custom (at -13.97 6.35 ${p.rot + 180}) (size 0.25 1) (layers F.Cu)
                (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                ))
                (pad "" thru_hole rect (at -13.97 7.62 ${p.rot}) (size 1.6 1.6) (drill 1.1) (layers F.Cu F.Mask)
                (zone_connect 0))
                (pad "" thru_hole rect (at -13.97 -7.62 ${p.rot}) (size 1.6 1.6) (drill 1.1) (layers B.Cu B.Mask)
                (zone_connect 0))
                (pad "" smd custom (at -11.43 6.35 ${p.rot + 180}) (size 0.25 1) (layers F.Cu)
                (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                ))
                (pad "" smd custom (at -11.43 5.842 ${p.rot + 180}) (size 0.1 0.1) (layers F.Cu F.Mask)
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
            ) (width 0))
                ))
                (pad 23 smd custom (at -11.43 4.826 ${p.rot + 180}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.P0.str}
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
            ) (width 0))
                ))
                (pad "" smd custom (at -8.89 6.35 ${p.rot + 180}) (size 0.25 1) (layers F.Cu)
                (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                ))
                (pad "" smd custom (at -8.89 5.842 ${p.rot + 180}) (size 0.1 0.1) (layers F.Cu F.Mask)
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
            ) (width 0))
                ))
                (pad 22 smd custom (at -8.89 4.826 ${p.rot + 180}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.GND.str}
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
            ) (width 0))
                ))
                (pad "" smd custom (at -6.35 6.35 ${p.rot + 180}) (size 0.25 1) (layers F.Cu)
                (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                ))
                (pad "" smd custom (at -6.35 5.842 ${p.rot + 180}) (size 0.1 0.1) (layers F.Cu F.Mask)
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
            ) (width 0))
                ))
                (pad 21 smd custom (at -6.35 4.826 ${p.rot + 180}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.GND.str}
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
            ) (width 0))
                ))
                (pad "" smd custom (at -3.81 6.35 ${p.rot + 180}) (size 0.25 1) (layers F.Cu)
                (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                ))
                (pad "" smd custom (at -3.81 5.842 ${p.rot + 180}) (size 0.1 0.1) (layers F.Cu F.Mask)
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
            ) (width 0))
                ))
                (pad 20 smd custom (at -3.81 4.826 ${p.rot + 180}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.P2.str}
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
            ) (width 0))
                ))
                (pad "" smd custom (at -1.27 6.35 ${p.rot + 180}) (size 0.25 1) (layers F.Cu)
                (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                ))
                (pad "" smd custom (at -1.27 5.842 ${p.rot + 180}) (size 0.1 0.1) (layers F.Cu F.Mask)
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
            ) (width 0))
                ))
                (pad 19 smd custom (at -1.27 4.826 ${p.rot + 180}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.P3.str}
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
            ) (width 0))
                ))
                (pad "" smd custom (at 1.27 6.35 ${p.rot + 180}) (size 0.25 1) (layers F.Cu)
                (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                ))
                (pad "" smd custom (at 1.27 5.842 ${p.rot + 180}) (size 0.1 0.1) (layers F.Cu F.Mask)
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
            ) (width 0))
                ))
                (pad 18 smd custom (at 1.27 4.826 ${p.rot + 180}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.P4.str}
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
            ) (width 0))
                ))
                (pad "" smd custom (at 3.81 6.35 ${p.rot + 180}) (size 0.25 1) (layers F.Cu)
                (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                ))
                (pad "" smd custom (at 3.81 5.842 ${p.rot + 180}) (size 0.1 0.1) (layers F.Cu F.Mask)
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
            ) (width 0))
                ))
                (pad 17 smd custom (at 3.81 4.826 ${p.rot + 180}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.P5.str}
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
            ) (width 0))
                ))
                (pad "" smd custom (at 6.35 6.35 ${p.rot + 180}) (size 0.25 1) (layers F.Cu)
                (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                ))
                (pad "" smd custom (at 6.35 5.842 ${p.rot + 180}) (size 0.1 0.1) (layers F.Cu F.Mask)
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
            ) (width 0))
                ))
                (pad 16 smd custom (at 6.35 4.826 ${p.rot + 180}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.P6.str}
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
            ) (width 0))
                ))
                (pad "" smd custom (at 8.89 6.35 ${p.rot + 180}) (size 0.25 1) (layers F.Cu)
                (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                ))
                (pad "" smd custom (at 8.89 5.842 ${p.rot + 180}) (size 0.1 0.1) (layers F.Cu F.Mask)
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
            ) (width 0))
                ))
                (pad 15 smd custom (at 8.89 4.826 ${p.rot + 180}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.P7.str}
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
            ) (width 0))
                ))
                (pad "" smd custom (at 11.43 6.35 ${p.rot + 180}) (size 0.25 1) (layers F.Cu)
                (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                ))
                (pad "" smd custom (at 11.43 5.842 ${p.rot + 180}) (size 0.1 0.1) (layers F.Cu F.Mask)
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
            ) (width 0))
                ))
                (pad 14 smd custom (at 11.43 4.826 ${p.rot + 180}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.P8.str}
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
            ) (width 0))
                ))
                (pad "" smd custom (at 13.97 6.35 ${p.rot + 180}) (size 0.25 1) (layers F.Cu)
                (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                ))
                (pad "" smd custom (at 13.97 5.842 ${p.rot + 180}) (size 0.1 0.1) (layers F.Cu F.Mask)
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
            ) (width 0))
                ))
                (pad 13 smd custom (at 13.97 4.826 ${p.rot + 180}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.P9.str}
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
            ) (width 0))
                ))
                (pad 1 smd custom (at -13.97 -4.826 ${p.rot}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.RAW.str}
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
            ) (width 0))
                ))
                (pad 3 smd custom (at -8.89 -4.826 ${p.rot}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.RST.str}
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
            ) (width 0))
                ))
                (pad "" smd custom (at -8.89 -6.35 ${p.rot}) (size 0.25 1) (layers F.Cu)
                (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                ))
                (pad "" smd custom (at -8.89 -5.842 ${p.rot}) (size 0.1 0.1) (layers F.Cu F.Mask)
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
            ) (width 0))
                ))
                (pad "" smd custom (at -13.97 -5.842 ${p.rot}) (size 0.1 0.1) (layers F.Cu F.Mask)
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
            ) (width 0))
                ))
                (pad "" smd custom (at -11.43 -6.35 ${p.rot}) (size 0.25 1) (layers F.Cu)
                (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                ))
                (pad 2 smd custom (at -11.43 -4.826 ${p.rot}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.GND.str}
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
            ) (width 0))
                ))
                (pad "" smd custom (at -13.97 -6.35 ${p.rot}) (size 0.25 1) (layers F.Cu)
                (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                ))
                (pad 4 smd custom (at -6.35 -4.826 ${p.rot}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.VCC.str}
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
            ) (width 0))
                ))
                (pad "" smd custom (at -11.43 -5.842 ${p.rot}) (size 0.1 0.1) (layers F.Cu F.Mask)
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
            ) (width 0))
                ))
                (pad "" smd custom (at -6.35 -5.842 ${p.rot}) (size 0.1 0.1) (layers F.Cu F.Mask)
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
            ) (width 0))
                ))
                (pad 6 smd custom (at -1.27 -4.826 ${p.rot}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.P20.str}
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
            ) (width 0))
                ))
                (pad 7 smd custom (at 1.27 -4.826 ${p.rot}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.P19.str}
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
            ) (width 0))
                ))
                (pad "" smd custom (at 13.97 -6.35 ${p.rot}) (size 0.25 1) (layers F.Cu)
                (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                ))
                (pad "" smd custom (at 1.27 -5.842 ${p.rot}) (size 0.1 0.1) (layers F.Cu F.Mask)
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
            ) (width 0))
                ))
                (pad "" smd custom (at 8.89 -6.35 ${p.rot}) (size 0.25 1) (layers F.Cu)
                (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                ))
                (pad 8 smd custom (at 3.81 -4.826 ${p.rot}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.P18.str}
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
            ) (width 0))
                ))
                (pad "" smd custom (at 1.27 -6.35 ${p.rot}) (size 0.25 1) (layers F.Cu)
                (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                ))
                (pad 12 smd custom (at 13.97 -4.826 ${p.rot}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.P10.str}
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
            ) (width 0))
                ))
                (pad "" smd custom (at 3.81 -5.842 ${p.rot}) (size 0.1 0.1) (layers F.Cu F.Mask)
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
            ) (width 0))
                ))
                (pad "" smd custom (at 6.35 -6.35 ${p.rot}) (size 0.25 1) (layers F.Cu)
                (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                ))
                (pad "" smd custom (at 13.97 -5.842 ${p.rot}) (size 0.1 0.1) (layers F.Cu F.Mask)
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
            ) (width 0))
                ))
                (pad "" smd custom (at -3.81 -6.35 ${p.rot}) (size 0.25 1) (layers F.Cu)
                (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                ))
                (pad "" smd custom (at 3.81 -6.35 ${p.rot}) (size 0.25 1) (layers F.Cu)
                (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                ))
                (pad "" smd custom (at -1.27 -6.35 ${p.rot}) (size 0.25 1) (layers F.Cu)
                (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                ))
                (pad 9 smd custom (at 6.35 -4.826 ${p.rot}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.P15.str}
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
            ) (width 0))
                ))
                (pad "" smd custom (at -6.35 -6.35 ${p.rot}) (size 0.25 1) (layers F.Cu)
                (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                ))
                (pad "" smd custom (at -3.81 -5.842 ${p.rot}) (size 0.1 0.1) (layers F.Cu F.Mask)
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
            ) (width 0))
                ))
                (pad "" smd custom (at -1.27 -5.842 ${p.rot}) (size 0.1 0.1) (layers F.Cu F.Mask)
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
            ) (width 0))
                ))
                (pad "" smd custom (at 6.35 -5.842 ${p.rot}) (size 0.1 0.1) (layers F.Cu F.Mask)
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
            ) (width 0))
                ))
                (pad 10 smd custom (at 8.89 -4.826 ${p.rot}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.P14.str}
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
            ) (width 0))
                ))
                (pad "" smd custom (at 8.89 -5.842 ${p.rot}) (size 0.1 0.1) (layers F.Cu F.Mask)
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
            ) (width 0))
                ))
                (pad "" smd custom (at 11.43 -5.842 ${p.rot}) (size 0.1 0.1) (layers F.Cu F.Mask)
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
            ) (width 0))
                ))
                (pad 11 smd custom (at 11.43 -4.826 ${p.rot}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.P16.str}
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
            ) (width 0))
                ))
                (pad "" smd custom (at 11.43 -6.35 ${p.rot}) (size 0.25 1) (layers F.Cu)
                (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                ))
                (pad 5 smd custom (at -3.81 -4.826 ${p.rot}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.P21.str}
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
            ) (width 0))
                ))
                (pad "" smd custom (at -13.97 6.35 ${p.rot + 180}) (size 0.25 1) (layers B.Cu)
                (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                ))
                (pad 1 smd custom (at -13.97 4.826 ${p.rot + 180}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.RAW.str}
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
            ) (width 0))
                ))
                (pad "" smd custom (at -13.97 5.842 ${p.rot + 180}) (size 0.1 0.1) (layers B.Cu B.Mask)
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
            ) (width 0))
                ))
                (pad "" smd custom (at -11.43 6.35 ${p.rot + 180}) (size 0.25 1) (layers B.Cu)
                (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                ))
                (pad "" smd custom (at -11.43 5.842 ${p.rot + 180}) (size 0.1 0.1) (layers B.Cu B.Mask)
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
            ) (width 0))
                ))
                (pad 2 smd custom (at -11.43 4.826 ${p.rot + 180}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.GND.str}
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
            ) (width 0))
                ))
                (pad "" smd custom (at -8.89 6.35 ${p.rot + 180}) (size 0.25 1) (layers B.Cu)
                (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                ))
                (pad "" smd custom (at -8.89 5.842 ${p.rot + 180}) (size 0.1 0.1) (layers B.Cu B.Mask)
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
            ) (width 0))
                ))
                (pad 3 smd custom (at -8.89 4.826 ${p.rot + 180}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.RST.str}
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
            ) (width 0))
                ))
                (pad "" smd custom (at -6.35 6.35 ${p.rot + 180}) (size 0.25 1) (layers B.Cu)
                (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                ))
                (pad "" smd custom (at -6.35 5.842 ${p.rot + 180}) (size 0.1 0.1) (layers B.Cu B.Mask)
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
            ) (width 0))
                ))
                (pad 4 smd custom (at -6.35 4.826 ${p.rot + 180}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.VCC.str}
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
            ) (width 0))
                ))
                (pad "" smd custom (at -3.81 6.35 ${p.rot + 180}) (size 0.25 1) (layers B.Cu)
                (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                ))
                (pad "" smd custom (at -3.81 5.842 ${p.rot + 180}) (size 0.1 0.1) (layers B.Cu B.Mask)
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
            ) (width 0))
                ))
                (pad 5 smd custom (at -3.81 4.826 ${p.rot + 180}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.P21.str}
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
            ) (width 0))
                ))
                (pad "" smd custom (at -1.27 6.35 ${p.rot + 180}) (size 0.25 1) (layers B.Cu)
                (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                ))
                (pad "" smd custom (at -1.27 5.842 ${p.rot + 180}) (size 0.1 0.1) (layers B.Cu B.Mask)
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
            ) (width 0))
                ))
                (pad 6 smd custom (at -1.27 4.826 ${p.rot + 180}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.P20.str}
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
            ) (width 0))
                ))
                (pad "" smd custom (at 1.27 6.35 ${p.rot + 180}) (size 0.25 1) (layers B.Cu)
                (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                ))
                (pad "" smd custom (at 1.27 5.842 ${p.rot + 180}) (size 0.1 0.1) (layers B.Cu B.Mask)
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
            ) (width 0))
                ))
                (pad 7 smd custom (at 1.27 4.826 ${p.rot + 180}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.P19.str}
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
            ) (width 0))
                ))
                (pad "" smd custom (at 3.81 6.35 ${p.rot + 180}) (size 0.25 1) (layers B.Cu)
                (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                ))
                (pad "" smd custom (at 3.81 5.842 ${p.rot + 180}) (size 0.1 0.1) (layers B.Cu B.Mask)
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
            ) (width 0))
                ))
                (pad 8 smd custom (at 3.81 4.826 ${p.rot + 180}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.P18.str}
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
            ) (width 0))
                ))
                (pad "" smd custom (at 6.35 6.35 ${p.rot + 180}) (size 0.25 1) (layers B.Cu)
                (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                ))
                (pad "" smd custom (at 6.35 5.842 ${p.rot + 180}) (size 0.1 0.1) (layers B.Cu B.Mask)
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
            ) (width 0))
                ))
                (pad 9 smd custom (at 6.35 4.826 ${p.rot + 180}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.P15.str}
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
            ) (width 0))
                ))
                (pad "" smd custom (at 8.89 6.35 ${p.rot + 180}) (size 0.25 1) (layers B.Cu)
                (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                ))
                (pad "" smd custom (at 8.89 5.842 ${p.rot + 180}) (size 0.1 0.1) (layers B.Cu B.Mask)
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
            ) (width 0))
                ))
                (pad 10 smd custom (at 8.89 4.826 ${p.rot + 180}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.P14.str}
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
            ) (width 0))
                ))
                (pad "" smd custom (at 11.43 6.35 ${p.rot + 180}) (size 0.25 1) (layers B.Cu)
                (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                ))
                (pad "" smd custom (at 11.43 5.842 ${p.rot + 180}) (size 0.1 0.1) (layers B.Cu B.Mask)
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
            ) (width 0))
                ))
                (pad 11 smd custom (at 11.43 4.826 ${p.rot + 180}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.P16.str}
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
            ) (width 0))
                ))
                (pad "" smd custom (at 13.97 6.35 ${p.rot + 180}) (size 0.25 1) (layers B.Cu)
                (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                ))
                (pad "" smd custom (at 13.97 5.842 ${p.rot + 180}) (size 0.1 0.1) (layers B.Cu B.Mask)
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
            ) (width 0))
                ))
                (pad 12 smd custom (at 13.97 4.826 ${p.rot + 180}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.P10.str}
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
            ) (width 0))
                ))
                (pad "" smd custom (at -13.97 -6.35 ${p.rot}) (size 0.25 1) (layers B.Cu)
                (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                ))
                (pad "" smd custom (at -13.97 -5.842 ${p.rot}) (size 0.1 0.1) (layers B.Cu B.Mask)
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
            ) (width 0))
                ))
                (pad 24 smd custom (at -13.97 -4.826 ${p.rot}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.P1.str}
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
            ) (width 0))
                ))
                (pad 23 smd custom (at -11.43 -4.826 ${p.rot}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.P0.str}
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
            ) (width 0))
                ))
                (pad "" smd custom (at -11.43 -6.35 ${p.rot}) (size 0.25 1) (layers B.Cu)
                (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                ))
                (pad "" smd custom (at -11.43 -5.842 ${p.rot}) (size 0.1 0.1) (layers B.Cu B.Mask)
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
            ) (width 0))
                ))
                (pad 22 smd custom (at -8.89 -4.826 ${p.rot}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.GND.str}
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
            ) (width 0))
                ))
                (pad "" smd custom (at -8.89 -6.35 ${p.rot}) (size 0.25 1) (layers B.Cu)
                (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                ))
                (pad "" smd custom (at -8.89 -5.842 ${p.rot}) (size 0.1 0.1) (layers B.Cu B.Mask)
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
            ) (width 0))
                ))
                (pad 21 smd custom (at -6.35 -4.826 ${p.rot}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.GND.str}
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
            ) (width 0))
                ))
                (pad "" smd custom (at -6.35 -6.35 ${p.rot}) (size 0.25 1) (layers B.Cu)
                (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                ))
                (pad "" smd custom (at -6.35 -5.842 ${p.rot}) (size 0.1 0.1) (layers B.Cu B.Mask)
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
            ) (width 0))
                ))
                (pad 20 smd custom (at -3.81 -4.826 ${p.rot}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.P2.str}
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
            ) (width 0))
                ))
                (pad "" smd custom (at -3.81 -6.35 ${p.rot}) (size 0.25 1) (layers B.Cu)
                (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                ))
                (pad "" smd custom (at -3.81 -5.842 ${p.rot}) (size 0.1 0.1) (layers B.Cu B.Mask)
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
            ) (width 0))
                ))
                (pad 19 smd custom (at -1.27 -4.826 ${p.rot}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.P3.str}
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
            ) (width 0))
                ))
                (pad "" smd custom (at -1.27 -6.35 ${p.rot}) (size 0.25 1) (layers B.Cu)
                (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                ))
                (pad "" smd custom (at -1.27 -5.842 ${p.rot}) (size 0.1 0.1) (layers B.Cu B.Mask)
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
            ) (width 0))
                ))
                (pad 18 smd custom (at 1.27 -4.826 ${p.rot}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.P4.str}
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
            ) (width 0))
                ))
                (pad "" smd custom (at 1.27 -6.35 ${p.rot}) (size 0.25 1) (layers B.Cu)
                (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                ))
                (pad "" smd custom (at 1.27 -5.842 ${p.rot}) (size 0.1 0.1) (layers B.Cu B.Mask)
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
            ) (width 0))
                ))
                (pad 17 smd custom (at 3.81 -4.826 ${p.rot}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.P5.str}
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
            ) (width 0))
                ))
                (pad "" smd custom (at 3.81 -6.35 ${p.rot}) (size 0.25 1) (layers B.Cu)
                (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                ))
                (pad "" smd custom (at 3.81 -5.842 ${p.rot}) (size 0.1 0.1) (layers B.Cu B.Mask)
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
            ) (width 0))
                ))
                (pad 16 smd custom (at 6.35 -4.826 ${p.rot}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.P6.str}
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
            ) (width 0))
                ))
                (pad "" smd custom (at 6.35 -6.35 ${p.rot}) (size 0.25 1) (layers B.Cu)
                (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                ))
                (pad "" smd custom (at 6.35 -5.842 ${p.rot}) (size 0.1 0.1) (layers B.Cu B.Mask)
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
            ) (width 0))
                ))
                (pad 15 smd custom (at 8.89 -4.826 ${p.rot}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.P7.str}
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
            ) (width 0))
                ))
                (pad "" smd custom (at 8.89 -6.35 ${p.rot}) (size 0.25 1) (layers B.Cu)
                (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                ))
                (pad "" smd custom (at 8.89 -5.842 ${p.rot}) (size 0.1 0.1) (layers B.Cu B.Mask)
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
            ) (width 0))
                ))
                (pad 14 smd custom (at 11.43 -4.826 ${p.rot}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.P8.str}
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
            ) (width 0))
                ))
                (pad "" smd custom (at 11.43 -6.35 ${p.rot}) (size 0.25 1) (layers B.Cu)
                (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                ))
                (pad "" smd custom (at 11.43 -5.842 ${p.rot}) (size 0.1 0.1) (layers B.Cu B.Mask)
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
            ) (width 0))
                ))
                (pad 13 smd custom (at 13.97 -4.826 ${p.rot}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.P9.str}
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
            ) (width 0))
                ))
                (pad "" smd custom (at 13.97 -6.35 ${p.rot}) (size 0.25 1) (layers B.Cu)
                (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                ))
                (pad "" smd custom (at 13.97 -5.842 ${p.rot}) (size 0.1 0.1) (layers B.Cu B.Mask)
                (clearance 0.1) (zone_connect 0)
                (options (clearance outline) (anchor rect))
                (primitives
                    (gr_poly (pts
                    (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
            ) (width 0))
                ))
            )
            (segment (start ${p.xy(-5.584, -1.528)}) (end ${p.xy(-5.584, -4.06)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(-5.584, -4.06)}) (end ${p.xy(-6.35, -4.826)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(-6.35, -0.762)}) (end ${p.xy(-5.584, -1.528)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(-6.35, -0.762)}) (end ${p.xy(-7.116, 0.004)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(-7.116, 0.004)}) (end ${p.xy(-7.116, 4.06)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(-7.116, 4.06)}) (end ${p.xy(-6.35, 4.826)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(-11.43, -0.762)}) (end ${p.xy(-10.664, -1.528)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(-9.643779, 4.065901)}) (end ${p.xy(-8.877779, 4.831901)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(-10.664, -1.528)}) (end ${p.xy(-10.664, -4.06)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(-9.643779, 1.533901)}) (end ${p.xy(-9.643779, 4.065901)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(-6.337779, 0.767901)}) (end ${p.xy(-7.103779, 1.533901)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(-8.877779, 0.767901)}) (end ${p.xy(-9.643779, 1.533901)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(-7.103779, 4.065901)}) (end ${p.xy(-6.337779, 4.831901)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(-7.103779, 1.533901)}) (end ${p.xy(-7.103779, 4.065901)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(-10.664, -4.06)}) (end ${p.xy(-11.43, -4.826)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(-6.337779, 0.767901)}) (end ${p.xy(-5.571779, 0.001901)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(-8.111779, -4.054099)}) (end ${p.xy(-8.877779, -4.820099)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(-8.111779, 0.001901)}) (end ${p.xy(-8.111779, -4.054099)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(-8.877779, 0.767901)}) (end ${p.xy(-8.111779, 0.001901)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(-5.571779, 0.001901)}) (end ${p.xy(-5.571779, -4.054099)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(-11.43, -0.762)}) (end ${p.xy(-12.196, 0.004)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(-12.196, 4.06)}) (end ${p.xy(-11.43, 4.826)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(-12.196, 0.004)}) (end ${p.xy(-12.196, 4.06)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(-5.571779, -4.054099)}) (end ${p.xy(-6.337779, -4.820099)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(13.982221, 0.767901)}) (end ${p.xy(13.216221, 1.533901)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(13.216221, 4.065901)}) (end ${p.xy(13.982221, 4.831901)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(13.216221, 1.533901)}) (end ${p.xy(13.216221, 4.065901)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(13.982221, 0.767901)}) (end ${p.xy(14.748221, 0.001901)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(14.748221, 0.001901)}) (end ${p.xy(14.748221, -4.054099)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(14.748221, -4.054099)}) (end ${p.xy(13.982221, -4.820099)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(-4.563779, 4.065901)}) (end ${p.xy(-3.797779, 4.831901)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(-3.797779, 0.767901)}) (end ${p.xy(-4.563779, 1.533901)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(-4.563779, 1.533901)}) (end ${p.xy(-4.563779, 4.065901)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(-3.797779, 0.767901)}) (end ${p.xy(-3.031779, 0.001901)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(-3.031779, 0.001901)}) (end ${p.xy(-3.031779, -4.054099)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(-3.031779, -4.054099)}) (end ${p.xy(-3.797779, -4.820099)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(-12.183779, 4.065901)}) (end ${p.xy(-11.417779, 4.831901)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(-12.183779, 1.533901)}) (end ${p.xy(-12.183779, 4.065901)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(-11.417779, 0.767901)}) (end ${p.xy(-12.183779, 1.533901)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(-10.651779, 0.001901)}) (end ${p.xy(-10.651779, -4.054099)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(-11.417779, 0.767901)}) (end ${p.xy(-10.651779, 0.001901)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(-10.651779, -4.054099)}) (end ${p.xy(-11.417779, -4.820099)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(-14.723779, 1.533901)}) (end ${p.xy(-14.723779, 4.065901)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(-14.723779, 4.065901)}) (end ${p.xy(-13.957779, 4.831901)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(-13.957779, 0.767901)}) (end ${p.xy(-14.723779, 1.533901)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(-13.957779, 0.767901)}) (end ${p.xy(-13.191779, 0.001901)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(-13.191779, 0.001901)}) (end ${p.xy(-13.191779, -4.054099)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(-13.191779, -4.054099)}) (end ${p.xy(-13.957779, -4.820099)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(10.676221, 1.533901)}) (end ${p.xy(10.676221, 4.065901)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(11.442221, 0.767901)}) (end ${p.xy(10.676221, 1.533901)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(10.676221, 4.065901)}) (end ${p.xy(11.442221, 4.831901)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(11.442221, 0.767901)}) (end ${p.xy(12.208221, 0.001901)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(12.208221, -4.054099)}) (end ${p.xy(11.442221, -4.820099)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(12.208221, 0.001901)}) (end ${p.xy(12.208221, -4.054099)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(8.136221, 4.065901)}) (end ${p.xy(8.902221, 4.831901)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(8.902221, 0.767901)}) (end ${p.xy(8.136221, 1.533901)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(8.136221, 1.533901)}) (end ${p.xy(8.136221, 4.065901)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(9.668221, -4.054099)}) (end ${p.xy(8.902221, -4.820099)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(8.902221, 0.767901)}) (end ${p.xy(9.668221, 0.001901)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(9.668221, 0.001901)}) (end ${p.xy(9.668221, -4.054099)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(5.596221, 1.533901)}) (end ${p.xy(5.596221, 4.065901)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(5.596221, 4.065901)}) (end ${p.xy(6.362221, 4.831901)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(6.362221, 0.767901)}) (end ${p.xy(5.596221, 1.533901)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(7.128221, -4.054099)}) (end ${p.xy(6.362221, -4.820099)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(7.128221, 0.001901)}) (end ${p.xy(7.128221, -4.054099)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(6.362221, 0.767901)}) (end ${p.xy(7.128221, 0.001901)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(3.056221, 4.065901)}) (end ${p.xy(3.822221, 4.831901)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(3.822221, 0.767901)}) (end ${p.xy(3.056221, 1.533901)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(3.056221, 1.533901)}) (end ${p.xy(3.056221, 4.065901)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(4.588221, -4.054099)}) (end ${p.xy(3.822221, -4.820099)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(4.588221, 0.001901)}) (end ${p.xy(4.588221, -4.054099)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(3.822221, 0.767901)}) (end ${p.xy(4.588221, 0.001901)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(0.516221, 4.065901)}) (end ${p.xy(1.282221, 4.831901)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(0.516221, 1.533901)}) (end ${p.xy(0.516221, 4.065901)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(1.282221, 0.767901)}) (end ${p.xy(0.516221, 1.533901)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(2.048221, -4.054099)}) (end ${p.xy(1.282221, -4.820099)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(2.048221, 0.001901)}) (end ${p.xy(2.048221, -4.054099)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(1.282221, 0.767901)}) (end ${p.xy(2.048221, 0.001901)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(-2.023779, 4.065901)}) (end ${p.xy(-1.257779, 4.831901)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(-1.257779, 0.767901)}) (end ${p.xy(-2.023779, 1.533901)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(-2.023779, 1.533901)}) (end ${p.xy(-2.023779, 4.065901)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(-0.491779, 0.001901)}) (end ${p.xy(-0.491779, -4.054099)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(-0.491779, -4.054099)}) (end ${p.xy(-1.257779, -4.820099)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(-1.257779, 0.767901)}) (end ${p.xy(-0.491779, 0.001901)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(-13.204, -4.06)}) (end ${p.xy(-13.97, -4.826)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(-13.204, -1.528)}) (end ${p.xy(-13.204, -4.06)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(-13.97, -0.762)}) (end ${p.xy(-13.204, -1.528)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(-14.736, 0.004)}) (end ${p.xy(-14.736, 4.06)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(-14.736, 4.06)}) (end ${p.xy(-13.97, 4.826)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(-13.97, -0.762)}) (end ${p.xy(-14.736, 0.004)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(-8.89, -0.762)}) (end ${p.xy(-8.124, -1.528)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(-8.124, -4.06)}) (end ${p.xy(-8.89, -4.826)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(-8.124, -1.528)}) (end ${p.xy(-8.124, -4.06)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(-9.656, 0.004)}) (end ${p.xy(-9.656, 4.06)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(-8.89, -0.762)}) (end ${p.xy(-9.656, 0.004)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(-9.656, 4.06)}) (end ${p.xy(-8.89, 4.826)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(-3.044, -4.06)}) (end ${p.xy(-3.81, -4.826)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(-3.81, -0.762)}) (end ${p.xy(-3.044, -1.528)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(-3.044, -1.528)}) (end ${p.xy(-3.044, -4.06)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(-4.576, 0.004)}) (end ${p.xy(-4.576, 4.06)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(-3.81, -0.762)}) (end ${p.xy(-4.576, 0.004)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(-4.576, 4.06)}) (end ${p.xy(-3.81, 4.826)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(-1.27, -0.762)}) (end ${p.xy(-0.504, -1.528)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(-0.504, -4.06)}) (end ${p.xy(-1.27, -4.826)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(-0.504, -1.528)}) (end ${p.xy(-0.504, -4.06)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(-2.036, 4.06)}) (end ${p.xy(-1.27, 4.826)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(-2.036, 0.004)}) (end ${p.xy(-2.036, 4.06)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(-1.27, -0.762)}) (end ${p.xy(-2.036, 0.004)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(2.036, -1.528)}) (end ${p.xy(2.036, -4.06)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(1.27, -0.762)}) (end ${p.xy(2.036, -1.528)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(2.036, -4.06)}) (end ${p.xy(1.27, -4.826)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(0.504, 0.004)}) (end ${p.xy(0.504, 4.06)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(0.504, 4.06)}) (end ${p.xy(1.27, 4.826)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(1.27, -0.762)}) (end ${p.xy(0.504, 0.004)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(3.81, -0.762)}) (end ${p.xy(4.576, -1.528)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(4.576, -1.528)}) (end ${p.xy(4.576, -4.06)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(4.576, -4.06)}) (end ${p.xy(3.81, -4.826)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(3.044, 4.06)}) (end ${p.xy(3.81, 4.826)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(3.044, 0.004)}) (end ${p.xy(3.044, 4.06)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(3.81, -0.762)}) (end ${p.xy(3.044, 0.004)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(7.116, -4.06)}) (end ${p.xy(6.35, -4.826)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(6.35, -0.762)}) (end ${p.xy(7.116, -1.528)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(7.116, -1.528)}) (end ${p.xy(7.116, -4.06)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(6.35, -0.762)}) (end ${p.xy(5.584, 0.004)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(5.584, 4.06)}) (end ${p.xy(6.35, 4.826)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(5.584, 0.004)}) (end ${p.xy(5.584, 4.06)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(8.89, -0.762)}) (end ${p.xy(9.656, -1.528)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(9.656, -1.528)}) (end ${p.xy(9.656, -4.06)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(9.656, -4.06)}) (end ${p.xy(8.89, -4.826)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(8.89, -0.762)}) (end ${p.xy(8.124, 0.004)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(8.124, 4.06)}) (end ${p.xy(8.89, 4.826)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(8.124, 0.004)}) (end ${p.xy(8.124, 4.06)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(12.196, -4.06)}) (end ${p.xy(11.43, -4.826)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(12.196, -1.528)}) (end ${p.xy(12.196, -4.06)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(11.43, -0.762)}) (end ${p.xy(12.196, -1.528)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(11.43, -0.762)}) (end ${p.xy(10.664, 0.004)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(10.664, 0.004)}) (end ${p.xy(10.664, 4.06)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(10.664, 4.06)}) (end ${p.xy(11.43, 4.826)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(14.736, -1.528)}) (end ${p.xy(14.736, -4.06)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(13.97, -0.762)}) (end ${p.xy(14.736, -1.528)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(14.736, -4.06)}) (end ${p.xy(13.97, -4.826)}) (width 0.25) (layer "F.Cu"))
            (segment (start ${p.xy(13.97, -0.762)}) (end ${p.xy(13.204, 0.004)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(13.204, 4.06)}) (end ${p.xy(13.97, 4.826)}) (width 0.25) (layer "B.Cu"))
            (segment (start ${p.xy(13.204, 0.004)}) (end ${p.xy(13.204, 4.06)}) (width 0.25) (layer "B.Cu"))




            (via (at ${p.xy(-11.43, -0.762)}) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net ${p.GND.index}))
            (via (at ${p.xy(-11.43, 0.762)}) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net ${p.P0.index}))
            (via (at ${p.xy(-13.97, 0.762)}) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net ${p.P1.index}))
            (via (at ${p.xy(-13.97, -0.762)}) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net ${p.RAW.index}))
            (via (at ${p.xy(-8.89, 0.762)}) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net ${p.GND.index}))
            (via (at ${p.xy(-8.89, -0.762)}) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net ${p.RST.index}))
            (via (at ${p.xy(-6.35, 0.762)}) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net ${p.GND.index}))
            (via (at ${p.xy(-6.35, -0.762)}) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net ${p.VCC.index}))
            (via (at ${p.xy(-3.81, 0.762)}) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net ${p.P2.index}))
            (via (at ${p.xy(-3.81, -0.762)}) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net ${p.P21.index}))
            (via (at ${p.xy(-1.27, 0.762)}) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net ${p.P3.index}))
            (via (at ${p.xy(-1.27, -0.762)}) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net ${p.P20.index}))
            (via (at ${p.xy(1.27, 0.762)}) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net ${p.P4.index}))
            (via (at ${p.xy(1.27, -0.762)}) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net ${p.P19.index}))
            (via (at ${p.xy(3.81, 0.762)}) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net ${p.P5.index}))
            (via (at ${p.xy(3.81, -0.762)}) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net ${p.P18.index}))
            (via (at ${p.xy(6.35, 0.762)}) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net ${p.P6.index}))
            (via (at ${p.xy(6.35, -0.762)}) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net ${p.P15.index}))
            (via (at ${p.xy(8.89, 0.762)}) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net ${p.P7.index}))
            (via (at ${p.xy(8.89, -0.762)}) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net ${p.P14.index}))
            (via (at ${p.xy(11.43, 0.762)}) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net ${p.P8.index}))
            (via (at ${p.xy(11.43, -0.762)}) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net ${p.P16.index}))
            (via (at ${p.xy(13.97, 0.762)}) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net ${p.P9.index}))
            (via (at ${p.xy(13.97, -0.762)}) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net ${p.P10.index}))
        `
    }
}

