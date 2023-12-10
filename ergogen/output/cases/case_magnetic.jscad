function standoff_extrude_5_outline_fn(){
    return CAG.circle({"center":[229.2956862,-158.5789365],"radius":2.5})
.union(
    CAG.circle({"center":[196.810495,-97.7948399],"radius":2.5})
).union(
    CAG.circle({"center":[157.2004773,-138.2355142],"radius":2.5})
).union(
    CAG.circle({"center":[153.3181916,-123.7466269],"radius":2.5})
).extrude({ offset: [0, 0, 5] });
}


function mounting_extrude_5_outline_fn(){
    return CAG.circle({"center":[229.2956862,-158.5789365],"radius":1.5})
.union(
    CAG.circle({"center":[196.810495,-97.7948399],"radius":1.5})
).union(
    CAG.circle({"center":[157.2004773,-138.2355142],"radius":1.5})
).union(
    CAG.circle({"center":[153.3181916,-123.7466269],"radius":1.5})
).extrude({ offset: [0, 0, 5] });
}


function _case_xlplate_extrude_2_outline_fn(){
    return new CSG.Path2D([[149.7665976,-102.4398357],[126.9861768,-108.5438311]]).appendArc([126.27907,-109.7685759],{"radius":1,"clockwise":false,"large":false}).appendPoint([140.86223,-164.1936696]).appendArc([141.3455608,-164.8106942],{"radius":1,"clockwise":false,"large":false}).appendArc([242.6229497,-179.7295169],{"radius":147.5,"clockwise":true,"large":false}).appendArc([242.8171099,-179.4888435],{"radius":1,"clockwise":false,"large":false}).appendPoint([253.3655011,-161.2184942]).appendArc([253.4956704,-160.8056499],{"radius":1,"clockwise":false,"large":false}).appendPoint([258.0807313,-108.3981643]).appendArc([257.1760528,-107.315205],{"radius":1,"clockwise":false,"large":false}).appendPoint([237.78759,-105.5333686]).appendArc([236.8829115,-104.4504093],{"radius":1,"clockwise":true,"large":false}).appendPoint([238.3649399,-87.5107476]).appendArc([237.4559009,-86.4273972],{"radius":1,"clockwise":false,"large":false}).appendPoint([221.5167858,-85.0329052]).appendArc([220.6077468,-83.9495548],{"radius":1,"clockwise":true,"large":false}).appendPoint([220.6803766,-83.1193926]).appendArc([219.7713376,-82.0360422],{"radius":1,"clockwise":false,"large":false}).appendPoint([198.5094557,-80.1758686]).appendArc([197.5988254,-79.2461808],{"radius":1,"clockwise":true,"large":false}).appendPoint([197.3865084,-76.0608436]).appendArc([196.3887224,-75.1273505],{"radius":1,"clockwise":false,"large":false}).appendPoint([173.2990448,-75.1273505]).appendArc([172.2993715,-76.1017899],{"radius":1,"clockwise":false,"large":false}).appendPoint([172.1794864,-80.7904907]).appendArc([171.2669688,-81.7611248],{"radius":1,"clockwise":true,"large":false}).appendPoint([150.4126338,-83.5856426]).appendArc([149.5015778,-84.6416146],{"radius":1,"clockwise":false,"large":false}).appendPoint([150.5059903,-101.4141326]).appendArc([149.7665976,-102.4398357],{"radius":1,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 2] });
}


function _case_xlplate_extrude_9_2_outline_fn(){
    return new CSG.Path2D([[149.7665976,-102.4398357],[126.9861768,-108.5438311]]).appendArc([126.27907,-109.7685759],{"radius":1,"clockwise":false,"large":false}).appendPoint([140.86223,-164.1936696]).appendArc([141.3455608,-164.8106942],{"radius":1,"clockwise":false,"large":false}).appendArc([242.6229497,-179.7295169],{"radius":147.5,"clockwise":true,"large":false}).appendArc([242.8171099,-179.4888435],{"radius":1,"clockwise":false,"large":false}).appendPoint([253.3655011,-161.2184942]).appendArc([253.4956704,-160.8056499],{"radius":1,"clockwise":false,"large":false}).appendPoint([258.0807313,-108.3981643]).appendArc([257.1760528,-107.315205],{"radius":1,"clockwise":false,"large":false}).appendPoint([237.78759,-105.5333686]).appendArc([236.8829115,-104.4504093],{"radius":1,"clockwise":true,"large":false}).appendPoint([238.3649399,-87.5107476]).appendArc([237.4559009,-86.4273972],{"radius":1,"clockwise":false,"large":false}).appendPoint([221.5167858,-85.0329052]).appendArc([220.6077468,-83.9495548],{"radius":1,"clockwise":true,"large":false}).appendPoint([220.6803766,-83.1193926]).appendArc([219.7713376,-82.0360422],{"radius":1,"clockwise":false,"large":false}).appendPoint([198.5094557,-80.1758686]).appendArc([197.5988254,-79.2461808],{"radius":1,"clockwise":true,"large":false}).appendPoint([197.3865084,-76.0608436]).appendArc([196.3887224,-75.1273505],{"radius":1,"clockwise":false,"large":false}).appendPoint([173.2990448,-75.1273505]).appendArc([172.2993715,-76.1017899],{"radius":1,"clockwise":false,"large":false}).appendPoint([172.1794864,-80.7904907]).appendArc([171.2669688,-81.7611248],{"radius":1,"clockwise":true,"large":false}).appendPoint([150.4126338,-83.5856426]).appendArc([149.5015778,-84.6416146],{"radius":1,"clockwise":false,"large":false}).appendPoint([150.5059903,-101.4141326]).appendArc([149.7665976,-102.4398357],{"radius":1,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 9.2] });
}


function _case_pcb_extrude_9_2_outline_fn(){
    return new CSG.Path2D([[152.2024531,-103.8577026],[129.4356666,-109.9580447]]).appendArc([128.7285598,-111.1827895],{"radius":1,"clockwise":false,"large":false}).appendPoint([142.2765168,-161.7444527]).appendArc([142.9506171,-162.4421053],{"radius":1,"clockwise":false,"large":false}).appendArc([241.8431768,-177.0379677],{"radius":149.5,"clockwise":true,"large":false}).appendArc([242.0852038,-176.7565421],{"radius":1,"clockwise":false,"large":false}).appendPoint([251.6334503,-160.2184942]).appendArc([251.7636196,-159.8056499],{"radius":1,"clockwise":false,"large":false}).appendPoint([256.1086163,-110.1421103]).appendArc([255.1995185,-109.0587548],{"radius":1,"clockwise":false,"large":false}).appendPoint([235.6256943,-107.3474321]).appendArc([234.7165965,-106.2640766],{"radius":1,"clockwise":true,"large":false}).appendPoint([236.1982391,-89.3288255]).appendArc([235.2892001,-88.2454751],{"radius":1,"clockwise":false,"large":false}).appendPoint([219.350085,-86.8509831]).appendArc([218.441046,-85.7676326],{"radius":1,"clockwise":true,"large":false}).appendPoint([218.5136757,-84.9374706]).appendArc([217.6046367,-83.8541201],{"radius":1,"clockwise":false,"large":false}).appendPoint([196.3709377,-81.9964121]).appendArc([195.4586845,-81.0345941],{"radius":1,"clockwise":true,"large":false}).appendPoint([195.3575015,-78.0929738]).appendArc([194.3580926,-77.1273505],{"radius":1,"clockwise":false,"large":false}).appendPoint([175.3241414,-77.1273505]).appendArc([174.3241414,-78.127205],{"radius":1,"clockwise":false,"large":false}).appendPoint([174.3234927,-82.5851676]).appendArc([173.4106484,-83.5812168],{"radius":1,"clockwise":true,"large":false}).appendPoint([152.5957879,-85.4022811]).appendArc([151.6858792,-86.4750439],{"radius":1,"clockwise":false,"large":false}).appendPoint([152.9406985,-102.8152087]).appendArc([152.2024531,-103.8577026],{"radius":1,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 9.2] });
}


function _case_pcb_extrude_5_outline_fn(){
    return new CSG.Path2D([[152.2024531,-103.8577026],[129.4356666,-109.9580447]]).appendArc([128.7285598,-111.1827895],{"radius":1,"clockwise":false,"large":false}).appendPoint([142.2765168,-161.7444527]).appendArc([142.9506171,-162.4421053],{"radius":1,"clockwise":false,"large":false}).appendArc([241.8431768,-177.0379677],{"radius":149.5,"clockwise":true,"large":false}).appendArc([242.0852038,-176.7565421],{"radius":1,"clockwise":false,"large":false}).appendPoint([251.6334503,-160.2184942]).appendArc([251.7636196,-159.8056499],{"radius":1,"clockwise":false,"large":false}).appendPoint([256.1086163,-110.1421103]).appendArc([255.1995185,-109.0587548],{"radius":1,"clockwise":false,"large":false}).appendPoint([235.6256943,-107.3474321]).appendArc([234.7165965,-106.2640766],{"radius":1,"clockwise":true,"large":false}).appendPoint([236.1982391,-89.3288255]).appendArc([235.2892001,-88.2454751],{"radius":1,"clockwise":false,"large":false}).appendPoint([219.350085,-86.8509831]).appendArc([218.441046,-85.7676326],{"radius":1,"clockwise":true,"large":false}).appendPoint([218.5136757,-84.9374706]).appendArc([217.6046367,-83.8541201],{"radius":1,"clockwise":false,"large":false}).appendPoint([196.3709377,-81.9964121]).appendArc([195.4586845,-81.0345941],{"radius":1,"clockwise":true,"large":false}).appendPoint([195.3575015,-78.0929738]).appendArc([194.3580926,-77.1273505],{"radius":1,"clockwise":false,"large":false}).appendPoint([175.3241414,-77.1273505]).appendArc([174.3241414,-78.127205],{"radius":1,"clockwise":false,"large":false}).appendPoint([174.3234927,-82.5851676]).appendArc([173.4106484,-83.5812168],{"radius":1,"clockwise":true,"large":false}).appendPoint([152.5957879,-85.4022811]).appendArc([151.6858792,-86.4750439],{"radius":1,"clockwise":false,"large":false}).appendPoint([152.9406985,-102.8152087]).appendArc([152.2024531,-103.8577026],{"radius":1,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 5] });
}


function _case_inner_pcb_extrude_5_outline_fn(){
    return new CSG.Path2D([[153.2983349,-104.4958105],[130.537937,-110.5944408]]).appendArc([129.8308302,-111.8191856],{"radius":1,"clockwise":false,"large":false}).appendPoint([142.9129468,-160.6423089]).appendArc([143.7296164,-161.3722885],{"radius":1,"clockwise":false,"large":false}).appendPoint([143.7366496,-161.3733501]).appendArc([241.4835751,-175.8316507],{"radius":150.4,"clockwise":true,"large":false}).appendArc([241.7558483,-175.5270028],{"radius":1,"clockwise":false,"large":false}).appendPoint([250.6540275,-160.1149043]).appendArc([250.7841968,-159.70206],{"radius":1,"clockwise":false,"large":false}).appendPoint([255.0465254,-110.9834206]).appendArc([254.1389133,-109.9001961],{"radius":1,"clockwise":false,"large":false}).appendPoint([234.6490633,-108.1669209]).appendArc([233.7414512,-107.0836964],{"radius":1,"clockwise":true,"large":false}).appendPoint([235.2232237,-90.1469606]).appendArc([234.3141847,-89.0636102],{"radius":1,"clockwise":false,"large":false}).appendPoint([218.3750696,-87.6691182]).appendArc([217.4660306,-86.5857677],{"radius":1,"clockwise":true,"large":false}).appendPoint([217.5386603,-85.7556056]).appendArc([216.6296213,-84.6722551],{"radius":1,"clockwise":false,"large":false}).appendPoint([195.4096235,-82.8157458]).appendArc([194.4969609,-81.8386159],{"radius":1,"clockwise":true,"large":false}).appendPoint([194.4429916,-79.0082857]).appendArc([193.4431733,-78.0273505],{"radius":1,"clockwise":false,"large":false}).appendPoint([176.2361309,-78.0273505]).appendArc([175.2362002,-79.0391243],{"radius":1,"clockwise":false,"large":false}).appendPoint([175.2874579,-83.392344]).appendArc([174.3746829,-84.4003125],{"radius":1,"clockwise":true,"large":false}).appendPoint([153.5785278,-86.2197403]).appendArc([152.6692472,-87.3002839],{"radius":1,"clockwise":false,"large":false}).appendPoint([154.0359522,-103.4455358]).appendArc([153.2983349,-104.4958105],{"radius":1,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 5] });
}


function _usbcutout_extrude_12_outline_fn(){
    return new CSG.Path2D([[240.9587177,-115.2322992],[246.9358859,-115.7552336]]).appendArc([248.0192363,-114.8461946],{"radius":1,"clockwise":false,"large":false}).appendPoint([248.7164823,-106.8766371]).appendArc([247.8074433,-105.7932866],{"radius":1,"clockwise":false,"large":false}).appendPoint([241.8302751,-105.2703522]).appendArc([240.7469247,-106.1793912],{"radius":1,"clockwise":false,"large":false}).appendPoint([240.0496787,-114.1489487]).appendArc([240.9587177,-115.2322992],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 12] });
}


function _ring_cutout_extrude_0_6_outline_fn(){
    return CAG.circle({"center":[196.810495,-97.7948399],"radius":28})
.subtract(
    CAG.circle({"center":[196.810495,-97.7948399],"radius":22})
).extrude({ offset: [0, 0, 0.6] });
}




                function _standoffs_case_fn() {
                    

                // creating part 0 of case _standoffs
                let _standoffs__part_0 = standoff_extrude_5_outline_fn();

                // make sure that rotations are relative
                let _standoffs__part_0_bounds = _standoffs__part_0.getBounds();
                let _standoffs__part_0_x = _standoffs__part_0_bounds[0].x + (_standoffs__part_0_bounds[1].x - _standoffs__part_0_bounds[0].x) / 2
                let _standoffs__part_0_y = _standoffs__part_0_bounds[0].y + (_standoffs__part_0_bounds[1].y - _standoffs__part_0_bounds[0].y) / 2
                _standoffs__part_0 = translate([-_standoffs__part_0_x, -_standoffs__part_0_y, 0], _standoffs__part_0);
                _standoffs__part_0 = rotate([0,0,0], _standoffs__part_0);
                _standoffs__part_0 = translate([_standoffs__part_0_x, _standoffs__part_0_y, 0], _standoffs__part_0);

                _standoffs__part_0 = translate([0,0,0], _standoffs__part_0);
                let result = _standoffs__part_0;
                
            
                    return result;
                }
            
            

                function _holes_case_fn() {
                    

                // creating part 0 of case _holes
                let _holes__part_0 = mounting_extrude_5_outline_fn();

                // make sure that rotations are relative
                let _holes__part_0_bounds = _holes__part_0.getBounds();
                let _holes__part_0_x = _holes__part_0_bounds[0].x + (_holes__part_0_bounds[1].x - _holes__part_0_bounds[0].x) / 2
                let _holes__part_0_y = _holes__part_0_bounds[0].y + (_holes__part_0_bounds[1].y - _holes__part_0_bounds[0].y) / 2
                _holes__part_0 = translate([-_holes__part_0_x, -_holes__part_0_y, 0], _holes__part_0);
                _holes__part_0 = rotate([0,0,0], _holes__part_0);
                _holes__part_0 = translate([_holes__part_0_x, _holes__part_0_y, 0], _holes__part_0);

                _holes__part_0 = translate([0,0,0], _holes__part_0);
                let result = _holes__part_0;
                
            
                    return result;
                }
            
            

                function _xlbottom_case_fn() {
                    

                // creating part 0 of case _xlbottom
                let _xlbottom__part_0 = _case_xlplate_extrude_2_outline_fn();

                // make sure that rotations are relative
                let _xlbottom__part_0_bounds = _xlbottom__part_0.getBounds();
                let _xlbottom__part_0_x = _xlbottom__part_0_bounds[0].x + (_xlbottom__part_0_bounds[1].x - _xlbottom__part_0_bounds[0].x) / 2
                let _xlbottom__part_0_y = _xlbottom__part_0_bounds[0].y + (_xlbottom__part_0_bounds[1].y - _xlbottom__part_0_bounds[0].y) / 2
                _xlbottom__part_0 = translate([-_xlbottom__part_0_x, -_xlbottom__part_0_y, 0], _xlbottom__part_0);
                _xlbottom__part_0 = rotate([0,0,0], _xlbottom__part_0);
                _xlbottom__part_0 = translate([_xlbottom__part_0_x, _xlbottom__part_0_y, 0], _xlbottom__part_0);

                _xlbottom__part_0 = translate([0,0,0], _xlbottom__part_0);
                let result = _xlbottom__part_0;
                
            
                    return result;
                }
            
            

                function _wall_case_fn() {
                    

                // creating part 0 of case _wall
                let _wall__part_0 = _outerWall_case_fn();

                // make sure that rotations are relative
                let _wall__part_0_bounds = _wall__part_0.getBounds();
                let _wall__part_0_x = _wall__part_0_bounds[0].x + (_wall__part_0_bounds[1].x - _wall__part_0_bounds[0].x) / 2
                let _wall__part_0_y = _wall__part_0_bounds[0].y + (_wall__part_0_bounds[1].y - _wall__part_0_bounds[0].y) / 2
                _wall__part_0 = translate([-_wall__part_0_x, -_wall__part_0_y, 0], _wall__part_0);
                _wall__part_0 = rotate([0,0,0], _wall__part_0);
                _wall__part_0 = translate([_wall__part_0_x, _wall__part_0_y, 0], _wall__part_0);

                _wall__part_0 = translate([0,0,0], _wall__part_0);
                let result = _wall__part_0;
                
            

                // creating part 1 of case _wall
                let _wall__part_1 = _innerWall_case_fn();

                // make sure that rotations are relative
                let _wall__part_1_bounds = _wall__part_1.getBounds();
                let _wall__part_1_x = _wall__part_1_bounds[0].x + (_wall__part_1_bounds[1].x - _wall__part_1_bounds[0].x) / 2
                let _wall__part_1_y = _wall__part_1_bounds[0].y + (_wall__part_1_bounds[1].y - _wall__part_1_bounds[0].y) / 2
                _wall__part_1 = translate([-_wall__part_1_x, -_wall__part_1_y, 0], _wall__part_1);
                _wall__part_1 = rotate([0,0,0], _wall__part_1);
                _wall__part_1 = translate([_wall__part_1_x, _wall__part_1_y, 0], _wall__part_1);

                _wall__part_1 = translate([0,0,0], _wall__part_1);
                result = result.subtract(_wall__part_1);
                
            
                    return result;
                }
            
            

                function _outerWall_case_fn() {
                    

                // creating part 0 of case _outerWall
                let _outerWall__part_0 = _case_xlplate_extrude_9_2_outline_fn();

                // make sure that rotations are relative
                let _outerWall__part_0_bounds = _outerWall__part_0.getBounds();
                let _outerWall__part_0_x = _outerWall__part_0_bounds[0].x + (_outerWall__part_0_bounds[1].x - _outerWall__part_0_bounds[0].x) / 2
                let _outerWall__part_0_y = _outerWall__part_0_bounds[0].y + (_outerWall__part_0_bounds[1].y - _outerWall__part_0_bounds[0].y) / 2
                _outerWall__part_0 = translate([-_outerWall__part_0_x, -_outerWall__part_0_y, 0], _outerWall__part_0);
                _outerWall__part_0 = rotate([0,0,0], _outerWall__part_0);
                _outerWall__part_0 = translate([_outerWall__part_0_x, _outerWall__part_0_y, 0], _outerWall__part_0);

                _outerWall__part_0 = translate([0,0,0], _outerWall__part_0);
                let result = _outerWall__part_0;
                
            
                    return result;
                }
            
            

                function _innerWall_case_fn() {
                    

                // creating part 0 of case _innerWall
                let _innerWall__part_0 = _case_pcb_extrude_9_2_outline_fn();

                // make sure that rotations are relative
                let _innerWall__part_0_bounds = _innerWall__part_0.getBounds();
                let _innerWall__part_0_x = _innerWall__part_0_bounds[0].x + (_innerWall__part_0_bounds[1].x - _innerWall__part_0_bounds[0].x) / 2
                let _innerWall__part_0_y = _innerWall__part_0_bounds[0].y + (_innerWall__part_0_bounds[1].y - _innerWall__part_0_bounds[0].y) / 2
                _innerWall__part_0 = translate([-_innerWall__part_0_x, -_innerWall__part_0_y, 0], _innerWall__part_0);
                _innerWall__part_0 = rotate([0,0,0], _innerWall__part_0);
                _innerWall__part_0 = translate([_innerWall__part_0_x, _innerWall__part_0_y, 0], _innerWall__part_0);

                _innerWall__part_0 = translate([0,0,0], _innerWall__part_0);
                let result = _innerWall__part_0;
                
            
                    return result;
                }
            
            

                function _shelf_case_fn() {
                    

                // creating part 0 of case _shelf
                let _shelf__part_0 = _outerShelf_case_fn();

                // make sure that rotations are relative
                let _shelf__part_0_bounds = _shelf__part_0.getBounds();
                let _shelf__part_0_x = _shelf__part_0_bounds[0].x + (_shelf__part_0_bounds[1].x - _shelf__part_0_bounds[0].x) / 2
                let _shelf__part_0_y = _shelf__part_0_bounds[0].y + (_shelf__part_0_bounds[1].y - _shelf__part_0_bounds[0].y) / 2
                _shelf__part_0 = translate([-_shelf__part_0_x, -_shelf__part_0_y, 0], _shelf__part_0);
                _shelf__part_0 = rotate([0,0,0], _shelf__part_0);
                _shelf__part_0 = translate([_shelf__part_0_x, _shelf__part_0_y, 0], _shelf__part_0);

                _shelf__part_0 = translate([0,0,0], _shelf__part_0);
                let result = _shelf__part_0;
                
            

                // creating part 1 of case _shelf
                let _shelf__part_1 = _innerShelf_case_fn();

                // make sure that rotations are relative
                let _shelf__part_1_bounds = _shelf__part_1.getBounds();
                let _shelf__part_1_x = _shelf__part_1_bounds[0].x + (_shelf__part_1_bounds[1].x - _shelf__part_1_bounds[0].x) / 2
                let _shelf__part_1_y = _shelf__part_1_bounds[0].y + (_shelf__part_1_bounds[1].y - _shelf__part_1_bounds[0].y) / 2
                _shelf__part_1 = translate([-_shelf__part_1_x, -_shelf__part_1_y, 0], _shelf__part_1);
                _shelf__part_1 = rotate([0,0,0], _shelf__part_1);
                _shelf__part_1 = translate([_shelf__part_1_x, _shelf__part_1_y, 0], _shelf__part_1);

                _shelf__part_1 = translate([0,0,0], _shelf__part_1);
                result = result.subtract(_shelf__part_1);
                
            
                    return result;
                }
            
            

                function _outerShelf_case_fn() {
                    

                // creating part 0 of case _outerShelf
                let _outerShelf__part_0 = _case_pcb_extrude_5_outline_fn();

                // make sure that rotations are relative
                let _outerShelf__part_0_bounds = _outerShelf__part_0.getBounds();
                let _outerShelf__part_0_x = _outerShelf__part_0_bounds[0].x + (_outerShelf__part_0_bounds[1].x - _outerShelf__part_0_bounds[0].x) / 2
                let _outerShelf__part_0_y = _outerShelf__part_0_bounds[0].y + (_outerShelf__part_0_bounds[1].y - _outerShelf__part_0_bounds[0].y) / 2
                _outerShelf__part_0 = translate([-_outerShelf__part_0_x, -_outerShelf__part_0_y, 0], _outerShelf__part_0);
                _outerShelf__part_0 = rotate([0,0,0], _outerShelf__part_0);
                _outerShelf__part_0 = translate([_outerShelf__part_0_x, _outerShelf__part_0_y, 0], _outerShelf__part_0);

                _outerShelf__part_0 = translate([0,0,0], _outerShelf__part_0);
                let result = _outerShelf__part_0;
                
            
                    return result;
                }
            
            

                function _innerShelf_case_fn() {
                    

                // creating part 0 of case _innerShelf
                let _innerShelf__part_0 = _case_inner_pcb_extrude_5_outline_fn();

                // make sure that rotations are relative
                let _innerShelf__part_0_bounds = _innerShelf__part_0.getBounds();
                let _innerShelf__part_0_x = _innerShelf__part_0_bounds[0].x + (_innerShelf__part_0_bounds[1].x - _innerShelf__part_0_bounds[0].x) / 2
                let _innerShelf__part_0_y = _innerShelf__part_0_bounds[0].y + (_innerShelf__part_0_bounds[1].y - _innerShelf__part_0_bounds[0].y) / 2
                _innerShelf__part_0 = translate([-_innerShelf__part_0_x, -_innerShelf__part_0_y, 0], _innerShelf__part_0);
                _innerShelf__part_0 = rotate([0,0,0], _innerShelf__part_0);
                _innerShelf__part_0 = translate([_innerShelf__part_0_x, _innerShelf__part_0_y, 0], _innerShelf__part_0);

                _innerShelf__part_0 = translate([0,0,0], _innerShelf__part_0);
                let result = _innerShelf__part_0;
                
            
                    return result;
                }
            
            

                function _usbcutout_case_case_fn() {
                    

                // creating part 0 of case _usbcutout_case
                let _usbcutout_case__part_0 = _usbcutout_extrude_12_outline_fn();

                // make sure that rotations are relative
                let _usbcutout_case__part_0_bounds = _usbcutout_case__part_0.getBounds();
                let _usbcutout_case__part_0_x = _usbcutout_case__part_0_bounds[0].x + (_usbcutout_case__part_0_bounds[1].x - _usbcutout_case__part_0_bounds[0].x) / 2
                let _usbcutout_case__part_0_y = _usbcutout_case__part_0_bounds[0].y + (_usbcutout_case__part_0_bounds[1].y - _usbcutout_case__part_0_bounds[0].y) / 2
                _usbcutout_case__part_0 = translate([-_usbcutout_case__part_0_x, -_usbcutout_case__part_0_y, 0], _usbcutout_case__part_0);
                _usbcutout_case__part_0 = rotate([0,0,0], _usbcutout_case__part_0);
                _usbcutout_case__part_0 = translate([_usbcutout_case__part_0_x, _usbcutout_case__part_0_y, 0], _usbcutout_case__part_0);

                _usbcutout_case__part_0 = translate([0,0,5], _usbcutout_case__part_0);
                let result = _usbcutout_case__part_0;
                
            
                    return result;
                }
            
            

                function _ring_magnet_case_fn() {
                    

                // creating part 0 of case _ring_magnet
                let _ring_magnet__part_0 = _ring_cutout_extrude_0_6_outline_fn();

                // make sure that rotations are relative
                let _ring_magnet__part_0_bounds = _ring_magnet__part_0.getBounds();
                let _ring_magnet__part_0_x = _ring_magnet__part_0_bounds[0].x + (_ring_magnet__part_0_bounds[1].x - _ring_magnet__part_0_bounds[0].x) / 2
                let _ring_magnet__part_0_y = _ring_magnet__part_0_bounds[0].y + (_ring_magnet__part_0_bounds[1].y - _ring_magnet__part_0_bounds[0].y) / 2
                _ring_magnet__part_0 = translate([-_ring_magnet__part_0_x, -_ring_magnet__part_0_y, 0], _ring_magnet__part_0);
                _ring_magnet__part_0 = rotate([0,0,0], _ring_magnet__part_0);
                _ring_magnet__part_0 = translate([_ring_magnet__part_0_x, _ring_magnet__part_0_y, 0], _ring_magnet__part_0);

                _ring_magnet__part_0 = translate([0,-28.5,0.8], _ring_magnet__part_0);
                let result = _ring_magnet__part_0;
                
            
                    return result;
                }
            
            

                function case_magnetic_case_fn() {
                    

                // creating part 0 of case case_magnetic
                let case_magnetic__part_0 = _standoffs_case_fn();

                // make sure that rotations are relative
                let case_magnetic__part_0_bounds = case_magnetic__part_0.getBounds();
                let case_magnetic__part_0_x = case_magnetic__part_0_bounds[0].x + (case_magnetic__part_0_bounds[1].x - case_magnetic__part_0_bounds[0].x) / 2
                let case_magnetic__part_0_y = case_magnetic__part_0_bounds[0].y + (case_magnetic__part_0_bounds[1].y - case_magnetic__part_0_bounds[0].y) / 2
                case_magnetic__part_0 = translate([-case_magnetic__part_0_x, -case_magnetic__part_0_y, 0], case_magnetic__part_0);
                case_magnetic__part_0 = rotate([0,0,0], case_magnetic__part_0);
                case_magnetic__part_0 = translate([case_magnetic__part_0_x, case_magnetic__part_0_y, 0], case_magnetic__part_0);

                case_magnetic__part_0 = translate([0,0,0], case_magnetic__part_0);
                let result = case_magnetic__part_0;
                
            

                // creating part 1 of case case_magnetic
                let case_magnetic__part_1 = _holes_case_fn();

                // make sure that rotations are relative
                let case_magnetic__part_1_bounds = case_magnetic__part_1.getBounds();
                let case_magnetic__part_1_x = case_magnetic__part_1_bounds[0].x + (case_magnetic__part_1_bounds[1].x - case_magnetic__part_1_bounds[0].x) / 2
                let case_magnetic__part_1_y = case_magnetic__part_1_bounds[0].y + (case_magnetic__part_1_bounds[1].y - case_magnetic__part_1_bounds[0].y) / 2
                case_magnetic__part_1 = translate([-case_magnetic__part_1_x, -case_magnetic__part_1_y, 0], case_magnetic__part_1);
                case_magnetic__part_1 = rotate([0,0,0], case_magnetic__part_1);
                case_magnetic__part_1 = translate([case_magnetic__part_1_x, case_magnetic__part_1_y, 0], case_magnetic__part_1);

                case_magnetic__part_1 = translate([0,0,0], case_magnetic__part_1);
                result = result.subtract(case_magnetic__part_1);
                
            

                // creating part 2 of case case_magnetic
                let case_magnetic__part_2 = _xlbottom_case_fn();

                // make sure that rotations are relative
                let case_magnetic__part_2_bounds = case_magnetic__part_2.getBounds();
                let case_magnetic__part_2_x = case_magnetic__part_2_bounds[0].x + (case_magnetic__part_2_bounds[1].x - case_magnetic__part_2_bounds[0].x) / 2
                let case_magnetic__part_2_y = case_magnetic__part_2_bounds[0].y + (case_magnetic__part_2_bounds[1].y - case_magnetic__part_2_bounds[0].y) / 2
                case_magnetic__part_2 = translate([-case_magnetic__part_2_x, -case_magnetic__part_2_y, 0], case_magnetic__part_2);
                case_magnetic__part_2 = rotate([0,0,0], case_magnetic__part_2);
                case_magnetic__part_2 = translate([case_magnetic__part_2_x, case_magnetic__part_2_y, 0], case_magnetic__part_2);

                case_magnetic__part_2 = translate([0,0,0], case_magnetic__part_2);
                result = result.union(case_magnetic__part_2);
                
            

                // creating part 3 of case case_magnetic
                let case_magnetic__part_3 = _wall_case_fn();

                // make sure that rotations are relative
                let case_magnetic__part_3_bounds = case_magnetic__part_3.getBounds();
                let case_magnetic__part_3_x = case_magnetic__part_3_bounds[0].x + (case_magnetic__part_3_bounds[1].x - case_magnetic__part_3_bounds[0].x) / 2
                let case_magnetic__part_3_y = case_magnetic__part_3_bounds[0].y + (case_magnetic__part_3_bounds[1].y - case_magnetic__part_3_bounds[0].y) / 2
                case_magnetic__part_3 = translate([-case_magnetic__part_3_x, -case_magnetic__part_3_y, 0], case_magnetic__part_3);
                case_magnetic__part_3 = rotate([0,0,0], case_magnetic__part_3);
                case_magnetic__part_3 = translate([case_magnetic__part_3_x, case_magnetic__part_3_y, 0], case_magnetic__part_3);

                case_magnetic__part_3 = translate([0,0,0], case_magnetic__part_3);
                result = result.union(case_magnetic__part_3);
                
            

                // creating part 4 of case case_magnetic
                let case_magnetic__part_4 = _shelf_case_fn();

                // make sure that rotations are relative
                let case_magnetic__part_4_bounds = case_magnetic__part_4.getBounds();
                let case_magnetic__part_4_x = case_magnetic__part_4_bounds[0].x + (case_magnetic__part_4_bounds[1].x - case_magnetic__part_4_bounds[0].x) / 2
                let case_magnetic__part_4_y = case_magnetic__part_4_bounds[0].y + (case_magnetic__part_4_bounds[1].y - case_magnetic__part_4_bounds[0].y) / 2
                case_magnetic__part_4 = translate([-case_magnetic__part_4_x, -case_magnetic__part_4_y, 0], case_magnetic__part_4);
                case_magnetic__part_4 = rotate([0,0,0], case_magnetic__part_4);
                case_magnetic__part_4 = translate([case_magnetic__part_4_x, case_magnetic__part_4_y, 0], case_magnetic__part_4);

                case_magnetic__part_4 = translate([0,0,0], case_magnetic__part_4);
                result = result.union(case_magnetic__part_4);
                
            

                // creating part 5 of case case_magnetic
                let case_magnetic__part_5 = _usbcutout_case_case_fn();

                // make sure that rotations are relative
                let case_magnetic__part_5_bounds = case_magnetic__part_5.getBounds();
                let case_magnetic__part_5_x = case_magnetic__part_5_bounds[0].x + (case_magnetic__part_5_bounds[1].x - case_magnetic__part_5_bounds[0].x) / 2
                let case_magnetic__part_5_y = case_magnetic__part_5_bounds[0].y + (case_magnetic__part_5_bounds[1].y - case_magnetic__part_5_bounds[0].y) / 2
                case_magnetic__part_5 = translate([-case_magnetic__part_5_x, -case_magnetic__part_5_y, 0], case_magnetic__part_5);
                case_magnetic__part_5 = rotate([0,0,0], case_magnetic__part_5);
                case_magnetic__part_5 = translate([case_magnetic__part_5_x, case_magnetic__part_5_y, 0], case_magnetic__part_5);

                case_magnetic__part_5 = translate([0,0,0], case_magnetic__part_5);
                result = result.subtract(case_magnetic__part_5);
                
            

                // creating part 6 of case case_magnetic
                let case_magnetic__part_6 = _ring_magnet_case_fn();

                // make sure that rotations are relative
                let case_magnetic__part_6_bounds = case_magnetic__part_6.getBounds();
                let case_magnetic__part_6_x = case_magnetic__part_6_bounds[0].x + (case_magnetic__part_6_bounds[1].x - case_magnetic__part_6_bounds[0].x) / 2
                let case_magnetic__part_6_y = case_magnetic__part_6_bounds[0].y + (case_magnetic__part_6_bounds[1].y - case_magnetic__part_6_bounds[0].y) / 2
                case_magnetic__part_6 = translate([-case_magnetic__part_6_x, -case_magnetic__part_6_y, 0], case_magnetic__part_6);
                case_magnetic__part_6 = rotate([0,0,0], case_magnetic__part_6);
                case_magnetic__part_6 = translate([case_magnetic__part_6_x, case_magnetic__part_6_y, 0], case_magnetic__part_6);

                case_magnetic__part_6 = translate([0,0,0], case_magnetic__part_6);
                result = result.subtract(case_magnetic__part_6);
                
            
                    return result;
                }
            
            
        
            function main() {
                return case_magnetic_case_fn();
            }

        