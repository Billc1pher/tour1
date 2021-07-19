TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "label": "Veranda",
  "hfovMin": 60,
  "hfovMax": 120,
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "distance": 1,
    "backwardYaw": -46.1,
    "panorama": {
     "label": "Sittingroom",
     "hfovMin": 60,
     "hfovMax": 120,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "distance": 1,
       "backwardYaw": 14.49,
       "panorama": {
        "label": "Middle point ",
        "hfovMin": 60,
        "hfovMax": 120,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "distance": 1,
          "backwardYaw": 146.24,
          "panorama": "this.panorama_9DEDED88_9574_36B2_41D9_B2A57E8A9ED9",
          "yaw": 14.49
         },
         {
          "class": "AdjacentPanorama",
          "distance": 1,
          "backwardYaw": 174.71,
          "panorama": {
           "label": "Corridor",
           "hfovMin": 60,
           "hfovMax": 120,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "distance": 1,
             "backwardYaw": 89.31,
             "panorama": "this.panorama_9E80D638_99A0_F9B4_41E0_2F85D159820E",
             "yaw": 174.71
            },
            {
             "class": "AdjacentPanorama",
             "distance": 1,
             "backwardYaw": -174.36,
             "panorama": {
              "label": "Master Bedroom",
              "hfovMin": 60,
              "hfovMax": 120,
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "distance": 1,
                "backwardYaw": -142.44,
                "panorama": {
                 "label": "Master bathroom",
                 "hfovMin": 60,
                 "hfovMax": 120,
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "distance": 1,
                   "backwardYaw": 131.9,
                   "panorama": "this.panorama_9E80A4D7_99A1_7AFC_41E2_0A04B58ED381",
                   "yaw": -142.44
                  }
                 ],
                 "partial": false,
                 "hfov": 360,
                 "thumbnailUrl": "media/panorama_9E80A567_99A1_3BDC_41D1_9339CBBC73A9_t.jpg",
                 "id": "panorama_9E80A567_99A1_3BDC_41D1_9339CBBC73A9",
                 "vfov": 180,
                 "class": "Panorama",
                 "frames": [
                  {
                   "thumbnailUrl": "media/panorama_9E80A567_99A1_3BDC_41D1_9339CBBC73A9_t.jpg",
                   "overlays": [
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_9E80A4D7_99A1_7AFC_41E2_0A04B58ED381, this.camera_96673BA4_9B23_198B_41D3_CD98A481AF2B); this.mainPlayList.set('selectedIndex', 15)"
                      }
                     ],
                     "rollOverDisplay": false,
                     "enabledInCardboard": true,
                     "id": "overlay_924426A0_99A0_F954_41C8_27587B2F2763",
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "items": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_9E80A567_99A1_3BDC_41D1_9339CBBC73A9_0_HS_0_0.png",
                          "height": 573,
                          "width": 497
                         }
                        ]
                       },
                       "hfov": 29.86,
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -0.16,
                       "yaw": -142.44
                      }
                     ],
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 29.86,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_9E80A567_99A1_3BDC_41D1_9339CBBC73A9_0_HS_0_0_0_map.gif",
                          "height": 200,
                          "width": 173
                         }
                        ]
                       },
                       "pitch": -0.16,
                       "yaw": -142.44
                      }
                     ]
                    },
                    {
                     "inertia": false,
                     "hfov": 45,
                     "image": {
                      "class": "ImageResource",
                      "levels": [
                       {
                        "class": "ImageResourceLevel",
                        "url": "media/panorama_9DEE2A67_9574_527E_41B3_6CDED57A89AC_tcap0.png",
                        "height": 850,
                        "width": 850
                       }
                      ]
                     },
                     "id": "panorama_9E80A567_99A1_3BDC_41D1_9339CBBC73A9_tcap0",
                     "class": "TripodCapPanoramaOverlay",
                     "angle": 0,
                     "rotate": true
                    }
                   ],
                   "back": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_9E80A567_99A1_3BDC_41D1_9339CBBC73A9_b_hq.jpeg",
                      "height": 1904,
                      "width": 1904
                     },
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_9E80A567_99A1_3BDC_41D1_9339CBBC73A9_b.jpeg",
                      "height": 1024,
                      "width": 1024
                     }
                    ]
                   },
                   "top": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_9E80A567_99A1_3BDC_41D1_9339CBBC73A9_u_hq.jpeg",
                      "height": 1904,
                      "width": 1904
                     },
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_9E80A567_99A1_3BDC_41D1_9339CBBC73A9_u.jpeg",
                      "height": 1024,
                      "width": 1024
                     }
                    ]
                   },
                   "class": "CubicPanoramaFrame",
                   "right": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_9E80A567_99A1_3BDC_41D1_9339CBBC73A9_r_hq.jpeg",
                      "height": 1904,
                      "width": 1904
                     },
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_9E80A567_99A1_3BDC_41D1_9339CBBC73A9_r.jpeg",
                      "height": 1024,
                      "width": 1024
                     }
                    ]
                   },
                   "bottom": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_9E80A567_99A1_3BDC_41D1_9339CBBC73A9_d_hq.jpeg",
                      "height": 1904,
                      "width": 1904
                     },
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_9E80A567_99A1_3BDC_41D1_9339CBBC73A9_d.jpeg",
                      "height": 1024,
                      "width": 1024
                     }
                    ]
                   },
                   "left": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_9E80A567_99A1_3BDC_41D1_9339CBBC73A9_l_hq.jpeg",
                      "height": 1904,
                      "width": 1904
                     },
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_9E80A567_99A1_3BDC_41D1_9339CBBC73A9_l.jpeg",
                      "height": 1024,
                      "width": 1024
                     }
                    ]
                   },
                   "front": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_9E80A567_99A1_3BDC_41D1_9339CBBC73A9_f_hq.jpeg",
                      "height": 1904,
                      "width": 1904
                     },
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_9E80A567_99A1_3BDC_41D1_9339CBBC73A9_f.jpeg",
                      "height": 1024,
                      "width": 1024
                     }
                    ]
                   }
                  }
                 ],
                 "pitch": 0
                },
                "yaw": 131.9
               },
               {
                "class": "AdjacentPanorama",
                "distance": 1,
                "backwardYaw": 169.8,
                "panorama": {
                 "label": "Grass",
                 "hfovMin": 60,
                 "hfovMax": 120,
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "distance": 1,
                   "backwardYaw": 11.69,
                   "panorama": "this.panorama_9E80A4D7_99A1_7AFC_41E2_0A04B58ED381",
                   "yaw": 169.8
                  },
                  {
                   "class": "AdjacentPanorama",
                   "distance": 1,
                   "backwardYaw": 174.96,
                   "panorama": {
                    "label": "Grass 2",
                    "hfovMin": 60,
                    "hfovMax": 120,
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "distance": 1,
                      "backwardYaw": 164.96,
                      "panorama": {
                       "label": "Garden",
                       "hfovMin": 60,
                       "hfovMax": 120,
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "distance": 1,
                         "backwardYaw": -25.85,
                         "panorama": {
                          "label": "Backdoor",
                          "hfovMin": 60,
                          "hfovMax": 120,
                          "adjacentPanoramas": [
                           {
                            "class": "AdjacentPanorama",
                            "distance": 1,
                            "backwardYaw": -155.37,
                            "panorama": {
                             "label": "Tank",
                             "hfovMin": 60,
                             "hfovMax": 120,
                             "adjacentPanoramas": [
                              {
                               "class": "AdjacentPanorama",
                               "distance": 1,
                               "backwardYaw": 171.35,
                               "panorama": "this.panorama_9DEABACC_9573_F2B1_41D5_9D1431797D46",
                               "yaw": -155.37
                              },
                              {
                               "class": "AdjacentPanorama",
                               "distance": 1,
                               "backwardYaw": -83.02,
                               "panorama": {
                                "label": "Gatehouse",
                                "hfovMin": 60,
                                "hfovMax": 120,
                                "adjacentPanoramas": [
                                 {
                                  "class": "AdjacentPanorama",
                                  "distance": 1,
                                  "backwardYaw": 114.61,
                                  "panorama": "this.panorama_9DE8CF8D_9574_32B2_416C_00D5CD6DA04E",
                                  "yaw": -83.02
                                 },
                                 {
                                  "class": "AdjacentPanorama",
                                  "distance": 1,
                                  "backwardYaw": -93.54,
                                  "panorama": "this.panorama_9DEE2A67_9574_527E_41B3_6CDED57A89AC",
                                  "yaw": -146.04
                                 },
                                 {
                                  "class": "AdjacentPanorama",
                                  "distance": 1,
                                  "backwardYaw": 3.81,
                                  "panorama": {
                                   "label": "Guest bedroom",
                                   "hfovMin": 60,
                                   "hfovMax": 120,
                                   "adjacentPanoramas": [
                                    {
                                     "class": "AdjacentPanorama",
                                     "distance": 1,
                                     "backwardYaw": 78.74,
                                     "panorama": {
                                      "label": "Sink",
                                      "hfovMin": 60,
                                      "hfovMax": 120,
                                      "adjacentPanoramas": [
                                       {
                                        "class": "AdjacentPanorama",
                                        "distance": 1,
                                        "backwardYaw": 85.89,
                                        "panorama": {
                                         "label": "Guest bathroom",
                                         "hfovMin": 60,
                                         "hfovMax": 120,
                                         "adjacentPanoramas": [
                                          {
                                           "class": "AdjacentPanorama",
                                           "distance": 1,
                                           "backwardYaw": 27.98,
                                           "panorama": "this.panorama_9E871860_99A7_29D4_41C2_47458889C165",
                                           "yaw": 85.89
                                          }
                                         ],
                                         "partial": false,
                                         "hfov": 360,
                                         "thumbnailUrl": "media/panorama_9E807E2F_99A1_29AC_41DC_A32142B5676F_t.jpg",
                                         "id": "panorama_9E807E2F_99A1_29AC_41DC_A32142B5676F",
                                         "vfov": 180,
                                         "class": "Panorama",
                                         "frames": [
                                          {
                                           "thumbnailUrl": "media/panorama_9E807E2F_99A1_29AC_41DC_A32142B5676F_t.jpg",
                                           "overlays": [
                                            {
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_9E871860_99A7_29D4_41C2_47458889C165, this.camera_9660AB81_9B23_198D_41B5_116979D0F281); this.mainPlayList.set('selectedIndex', 11)"
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "enabledInCardboard": true,
                                             "id": "overlay_9400FB2F_99E7_2FAC_4174_BB559171FB27",
                                             "class": "HotspotPanoramaOverlay",
                                             "useHandCursor": true,
                                             "items": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_9E807E2F_99A1_29AC_41DC_A32142B5676F_0_HS_0_0.png",
                                                  "height": 373,
                                                  "width": 290
                                                 }
                                                ]
                                               },
                                               "hfov": 17.42,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "pitch": -3.01,
                                               "yaw": 85.89
                                              }
                                             ],
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "hfov": 17.42,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_9E807E2F_99A1_29AC_41DC_A32142B5676F_0_HS_0_0_0_map.gif",
                                                  "height": 186,
                                                  "width": 145
                                                 }
                                                ]
                                               },
                                               "pitch": -3.01,
                                               "yaw": 85.89
                                              }
                                             ]
                                            },
                                            {
                                             "inertia": false,
                                             "hfov": 45,
                                             "image": {
                                              "class": "ImageResource",
                                              "levels": [
                                               {
                                                "class": "ImageResourceLevel",
                                                "url": "media/panorama_9DEE2A67_9574_527E_41B3_6CDED57A89AC_tcap0.png",
                                                "height": 850,
                                                "width": 850
                                               }
                                              ]
                                             },
                                             "id": "panorama_9E807E2F_99A1_29AC_41DC_A32142B5676F_tcap0",
                                             "class": "TripodCapPanoramaOverlay",
                                             "angle": 0,
                                             "rotate": true
                                            }
                                           ],
                                           "back": {
                                            "class": "ImageResource",
                                            "levels": [
                                             {
                                              "class": "ImageResourceLevel",
                                              "url": "media/panorama_9E807E2F_99A1_29AC_41DC_A32142B5676F_b_hq.jpeg",
                                              "height": 1904,
                                              "width": 1904
                                             },
                                             {
                                              "class": "ImageResourceLevel",
                                              "url": "media/panorama_9E807E2F_99A1_29AC_41DC_A32142B5676F_b.jpeg",
                                              "height": 1024,
                                              "width": 1024
                                             }
                                            ]
                                           },
                                           "top": {
                                            "class": "ImageResource",
                                            "levels": [
                                             {
                                              "class": "ImageResourceLevel",
                                              "url": "media/panorama_9E807E2F_99A1_29AC_41DC_A32142B5676F_u_hq.jpeg",
                                              "height": 1904,
                                              "width": 1904
                                             },
                                             {
                                              "class": "ImageResourceLevel",
                                              "url": "media/panorama_9E807E2F_99A1_29AC_41DC_A32142B5676F_u.jpeg",
                                              "height": 1024,
                                              "width": 1024
                                             }
                                            ]
                                           },
                                           "class": "CubicPanoramaFrame",
                                           "right": {
                                            "class": "ImageResource",
                                            "levels": [
                                             {
                                              "class": "ImageResourceLevel",
                                              "url": "media/panorama_9E807E2F_99A1_29AC_41DC_A32142B5676F_r_hq.jpeg",
                                              "height": 1904,
                                              "width": 1904
                                             },
                                             {
                                              "class": "ImageResourceLevel",
                                              "url": "media/panorama_9E807E2F_99A1_29AC_41DC_A32142B5676F_r.jpeg",
                                              "height": 1024,
                                              "width": 1024
                                             }
                                            ]
                                           },
                                           "bottom": {
                                            "class": "ImageResource",
                                            "levels": [
                                             {
                                              "class": "ImageResourceLevel",
                                              "url": "media/panorama_9E807E2F_99A1_29AC_41DC_A32142B5676F_d_hq.jpeg",
                                              "height": 1904,
                                              "width": 1904
                                             },
                                             {
                                              "class": "ImageResourceLevel",
                                              "url": "media/panorama_9E807E2F_99A1_29AC_41DC_A32142B5676F_d.jpeg",
                                              "height": 1024,
                                              "width": 1024
                                             }
                                            ]
                                           },
                                           "left": {
                                            "class": "ImageResource",
                                            "levels": [
                                             {
                                              "class": "ImageResourceLevel",
                                              "url": "media/panorama_9E807E2F_99A1_29AC_41DC_A32142B5676F_l_hq.jpeg",
                                              "height": 1904,
                                              "width": 1904
                                             },
                                             {
                                              "class": "ImageResourceLevel",
                                              "url": "media/panorama_9E807E2F_99A1_29AC_41DC_A32142B5676F_l.jpeg",
                                              "height": 1024,
                                              "width": 1024
                                             }
                                            ]
                                           },
                                           "front": {
                                            "class": "ImageResource",
                                            "levels": [
                                             {
                                              "class": "ImageResourceLevel",
                                              "url": "media/panorama_9E807E2F_99A1_29AC_41DC_A32142B5676F_f_hq.jpeg",
                                              "height": 1904,
                                              "width": 1904
                                             },
                                             {
                                              "class": "ImageResourceLevel",
                                              "url": "media/panorama_9E807E2F_99A1_29AC_41DC_A32142B5676F_f.jpeg",
                                              "height": 1024,
                                              "width": 1024
                                             }
                                            ]
                                           }
                                          }
                                         ],
                                         "pitch": 0
                                        },
                                        "yaw": 27.98
                                       },
                                       {
                                        "class": "AdjacentPanorama",
                                        "distance": 1,
                                        "backwardYaw": -49.1,
                                        "panorama": {
                                         "label": "Dining",
                                         "hfovMin": 60,
                                         "hfovMax": 120,
                                         "adjacentPanoramas": [
                                          {
                                           "class": "AdjacentPanorama",
                                           "distance": 1,
                                           "backwardYaw": -40.96,
                                           "panorama": {
                                            "label": "Tv",
                                            "hfovMin": 60,
                                            "hfovMax": 120,
                                            "adjacentPanoramas": [
                                             {
                                              "class": "AdjacentPanorama",
                                              "distance": 1,
                                              "backwardYaw": -50.4,
                                              "panorama": "this.panorama_9E80D638_99A0_F9B4_41E0_2F85D159820E",
                                              "yaw": -95.17
                                             },
                                             {
                                              "class": "AdjacentPanorama",
                                              "distance": 1,
                                              "backwardYaw": -140.01,
                                              "panorama": "this.panorama_9DEDED88_9574_36B2_41D9_B2A57E8A9ED9",
                                              "yaw": -141.19
                                             },
                                             {
                                              "class": "AdjacentPanorama",
                                              "distance": 1,
                                              "backwardYaw": 17.81,
                                              "panorama": "this.panorama_9E87A7A7_99A1_675C_41D7_44A9D18C0303",
                                              "yaw": -40.96
                                             },
                                             {
                                              "class": "AdjacentPanorama",
                                              "distance": 1,
                                              "backwardYaw": -173.82,
                                              "panorama": {
                                               "label": "Aquarium",
                                               "hfovMin": 60,
                                               "hfovMax": 120,
                                               "adjacentPanoramas": [
                                                {
                                                 "class": "AdjacentPanorama",
                                                 "distance": 1,
                                                 "backwardYaw": -146.01,
                                                 "panorama": "this.panorama_9E87579B_99A7_E774_41D5_D9B021C4A182",
                                                 "yaw": -173.82
                                                },
                                                {
                                                 "class": "AdjacentPanorama",
                                                 "distance": 1,
                                                 "backwardYaw": 34.27,
                                                 "panorama": "this.panorama_9DEDED88_9574_36B2_41D9_B2A57E8A9ED9",
                                                 "yaw": -171.63
                                                }
                                               ],
                                               "partial": false,
                                               "hfov": 360,
                                               "thumbnailUrl": "media/panorama_9E7312E1_99A1_1ED4_41E0_A5D0DA7B2892_t.jpg",
                                               "id": "panorama_9E7312E1_99A1_1ED4_41E0_A5D0DA7B2892",
                                               "vfov": 180,
                                               "class": "Panorama",
                                               "frames": [
                                                {
                                                 "thumbnailUrl": "media/panorama_9E7312E1_99A1_1ED4_41E0_A5D0DA7B2892_t.jpg",
                                                 "overlays": [
                                                  {
                                                   "areas": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "mapColor": "#FF0000",
                                                     "click": "this.mainPlayList.set('selectedIndex', 14)"
                                                    }
                                                   ],
                                                   "rollOverDisplay": false,
                                                   "enabledInCardboard": true,
                                                   "id": "overlay_937B4776_99A1_27BD_41D5_7090DA721F3F",
                                                   "class": "HotspotPanoramaOverlay",
                                                   "useHandCursor": true,
                                                   "items": [
                                                    {
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_9E7312E1_99A1_1ED4_41E0_A5D0DA7B2892_0_HS_2_0.png",
                                                        "height": 127,
                                                        "width": 184
                                                       }
                                                      ]
                                                     },
                                                     "hfov": 10.48,
                                                     "class": "HotspotPanoramaOverlayImage",
                                                     "pitch": -19.01,
                                                     "yaw": 67.11
                                                    }
                                                   ],
                                                   "maps": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "hfov": 10.48,
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_9E7312E1_99A1_1ED4_41E0_A5D0DA7B2892_0_HS_2_0_0_map.gif",
                                                        "height": 63,
                                                        "width": 92
                                                       }
                                                      ]
                                                     },
                                                     "pitch": -19.01,
                                                     "yaw": 67.11
                                                    }
                                                   ]
                                                  },
                                                  {
                                                   "areas": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "mapColor": "#FF0000",
                                                     "click": "this.startPanoramaWithCamera(this.panorama_9E87579B_99A7_E774_41D5_D9B021C4A182, this.camera_969A3BC6_9B23_1994_41D2_66663D437EEC); this.mainPlayList.set('selectedIndex', 6)"
                                                    }
                                                   ],
                                                   "rollOverDisplay": false,
                                                   "enabledInCardboard": true,
                                                   "id": "overlay_92B6E6DA_99A3_26F4_41C7_D440E94F8279",
                                                   "class": "HotspotPanoramaOverlay",
                                                   "useHandCursor": true,
                                                   "items": [
                                                    {
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_9E7312E1_99A1_1ED4_41E0_A5D0DA7B2892_0_HS_1_0.png",
                                                        "height": 78,
                                                        "width": 116
                                                       }
                                                      ]
                                                     },
                                                     "hfov": 6.88,
                                                     "class": "HotspotPanoramaOverlayImage",
                                                     "pitch": -10.43,
                                                     "yaw": -173.82
                                                    }
                                                   ],
                                                   "maps": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "hfov": 6.88,
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_9E7312E1_99A1_1ED4_41E0_A5D0DA7B2892_0_HS_1_0_0_map.gif",
                                                        "height": 39,
                                                        "width": 58
                                                       }
                                                      ]
                                                     },
                                                     "pitch": -10.43,
                                                     "yaw": -173.82
                                                    }
                                                   ]
                                                  },
                                                  {
                                                   "areas": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "mapColor": "#FF0000",
                                                     "click": "this.startPanoramaWithCamera(this.panorama_9DEDED88_9574_36B2_41D9_B2A57E8A9ED9, this.camera_969E3BEB_9B23_199D_41DA_93E6A0BD22DC); this.mainPlayList.set('selectedIndex', 4)"
                                                    }
                                                   ],
                                                   "rollOverDisplay": false,
                                                   "enabledInCardboard": true,
                                                   "id": "overlay_9770D172_99EF_1BB4_41E2_849FB06133C6",
                                                   "class": "HotspotPanoramaOverlay",
                                                   "useHandCursor": true,
                                                   "items": [
                                                    {
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_9E7312E1_99A1_1ED4_41E0_A5D0DA7B2892_0_HS_0_0.png",
                                                        "height": 98,
                                                        "width": 263
                                                       }
                                                      ]
                                                     },
                                                     "hfov": 14.01,
                                                     "class": "HotspotPanoramaOverlayImage",
                                                     "pitch": -27.41,
                                                     "yaw": -171.63
                                                    }
                                                   ],
                                                   "maps": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "hfov": 14.01,
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_9E7312E1_99A1_1ED4_41E0_A5D0DA7B2892_0_HS_0_0_0_map.gif",
                                                        "height": 49,
                                                        "width": 131
                                                       }
                                                      ]
                                                     },
                                                     "pitch": -27.41,
                                                     "yaw": -171.63
                                                    }
                                                   ]
                                                  },
                                                  {
                                                   "inertia": false,
                                                   "hfov": 45,
                                                   "image": {
                                                    "class": "ImageResource",
                                                    "levels": [
                                                     {
                                                      "class": "ImageResourceLevel",
                                                      "url": "media/panorama_9DEE2A67_9574_527E_41B3_6CDED57A89AC_tcap0.png",
                                                      "height": 850,
                                                      "width": 850
                                                     }
                                                    ]
                                                   },
                                                   "id": "panorama_9E7312E1_99A1_1ED4_41E0_A5D0DA7B2892_tcap0",
                                                   "class": "TripodCapPanoramaOverlay",
                                                   "angle": 0,
                                                   "rotate": true
                                                  }
                                                 ],
                                                 "back": {
                                                  "class": "ImageResource",
                                                  "levels": [
                                                   {
                                                    "class": "ImageResourceLevel",
                                                    "url": "media/panorama_9E7312E1_99A1_1ED4_41E0_A5D0DA7B2892_b_hq.jpeg",
                                                    "height": 1904,
                                                    "width": 1904
                                                   },
                                                   {
                                                    "class": "ImageResourceLevel",
                                                    "url": "media/panorama_9E7312E1_99A1_1ED4_41E0_A5D0DA7B2892_b.jpeg",
                                                    "height": 1024,
                                                    "width": 1024
                                                   }
                                                  ]
                                                 },
                                                 "top": {
                                                  "class": "ImageResource",
                                                  "levels": [
                                                   {
                                                    "class": "ImageResourceLevel",
                                                    "url": "media/panorama_9E7312E1_99A1_1ED4_41E0_A5D0DA7B2892_u_hq.jpeg",
                                                    "height": 1904,
                                                    "width": 1904
                                                   },
                                                   {
                                                    "class": "ImageResourceLevel",
                                                    "url": "media/panorama_9E7312E1_99A1_1ED4_41E0_A5D0DA7B2892_u.jpeg",
                                                    "height": 1024,
                                                    "width": 1024
                                                   }
                                                  ]
                                                 },
                                                 "class": "CubicPanoramaFrame",
                                                 "right": {
                                                  "class": "ImageResource",
                                                  "levels": [
                                                   {
                                                    "class": "ImageResourceLevel",
                                                    "url": "media/panorama_9E7312E1_99A1_1ED4_41E0_A5D0DA7B2892_r_hq.jpeg",
                                                    "height": 1904,
                                                    "width": 1904
                                                   },
                                                   {
                                                    "class": "ImageResourceLevel",
                                                    "url": "media/panorama_9E7312E1_99A1_1ED4_41E0_A5D0DA7B2892_r.jpeg",
                                                    "height": 1024,
                                                    "width": 1024
                                                   }
                                                  ]
                                                 },
                                                 "bottom": {
                                                  "class": "ImageResource",
                                                  "levels": [
                                                   {
                                                    "class": "ImageResourceLevel",
                                                    "url": "media/panorama_9E7312E1_99A1_1ED4_41E0_A5D0DA7B2892_d_hq.jpeg",
                                                    "height": 1904,
                                                    "width": 1904
                                                   },
                                                   {
                                                    "class": "ImageResourceLevel",
                                                    "url": "media/panorama_9E7312E1_99A1_1ED4_41E0_A5D0DA7B2892_d.jpeg",
                                                    "height": 1024,
                                                    "width": 1024
                                                   }
                                                  ]
                                                 },
                                                 "left": {
                                                  "class": "ImageResource",
                                                  "levels": [
                                                   {
                                                    "class": "ImageResourceLevel",
                                                    "url": "media/panorama_9E7312E1_99A1_1ED4_41E0_A5D0DA7B2892_l_hq.jpeg",
                                                    "height": 1904,
                                                    "width": 1904
                                                   },
                                                   {
                                                    "class": "ImageResourceLevel",
                                                    "url": "media/panorama_9E7312E1_99A1_1ED4_41E0_A5D0DA7B2892_l.jpeg",
                                                    "height": 1024,
                                                    "width": 1024
                                                   }
                                                  ]
                                                 },
                                                 "front": {
                                                  "class": "ImageResource",
                                                  "levels": [
                                                   {
                                                    "class": "ImageResourceLevel",
                                                    "url": "media/panorama_9E7312E1_99A1_1ED4_41E0_A5D0DA7B2892_f_hq.jpeg",
                                                    "height": 1904,
                                                    "width": 1904
                                                   },
                                                   {
                                                    "class": "ImageResourceLevel",
                                                    "url": "media/panorama_9E7312E1_99A1_1ED4_41E0_A5D0DA7B2892_f.jpeg",
                                                    "height": 1024,
                                                    "width": 1024
                                                   }
                                                  ]
                                                 }
                                                }
                                               ],
                                               "pitch": 0
                                              },
                                              "yaw": -146.01
                                             }
                                            ],
                                            "partial": false,
                                            "hfov": 360,
                                            "thumbnailUrl": "media/panorama_9E87579B_99A7_E774_41D5_D9B021C4A182_t.jpg",
                                            "id": "panorama_9E87579B_99A7_E774_41D5_D9B021C4A182",
                                            "vfov": 180,
                                            "class": "Panorama",
                                            "frames": [
                                             {
                                              "thumbnailUrl": "media/panorama_9E87579B_99A7_E774_41D5_D9B021C4A182_t.jpg",
                                              "overlays": [
                                               {
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "#FF0000",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_9DEDED88_9574_36B2_41D9_B2A57E8A9ED9, this.camera_962D6931_9B23_068D_41D0_D418986C855B); this.mainPlayList.set('selectedIndex', 4)"
                                                 }
                                                ],
                                                "rollOverDisplay": false,
                                                "enabledInCardboard": true,
                                                "id": "overlay_93A8B787_99A7_675B_41D9_2E1822454071",
                                                "class": "HotspotPanoramaOverlay",
                                                "useHandCursor": true,
                                                "items": [
                                                 {
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_9E87579B_99A7_E774_41D5_D9B021C4A182_0_HS_3_0.png",
                                                     "height": 198,
                                                     "width": 257
                                                    }
                                                   ]
                                                  },
                                                  "hfov": 14.2,
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "pitch": -23.18,
                                                  "yaw": -141.19
                                                 }
                                                ],
                                                "maps": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "hfov": 14.2,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_9E87579B_99A7_E774_41D5_D9B021C4A182_0_HS_3_0_0_map.gif",
                                                     "height": 99,
                                                     "width": 128
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -23.18,
                                                  "yaw": -141.19
                                                 }
                                                ]
                                               },
                                               {
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "#FF0000",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_9E7312E1_99A1_1ED4_41E0_A5D0DA7B2892, this.camera_9623E968_9B23_069B_41E3_4235B0F6C9D0); this.mainPlayList.set('selectedIndex', 5)"
                                                 }
                                                ],
                                                "rollOverDisplay": false,
                                                "enabledInCardboard": true,
                                                "id": "overlay_93FB80EF_99A1_3AAC_41D7_BC988BDB9FEC",
                                                "class": "HotspotPanoramaOverlay",
                                                "useHandCursor": true,
                                                "items": [
                                                 {
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_9E87579B_99A7_E774_41D5_D9B021C4A182_0_HS_2_0.png",
                                                     "height": 65,
                                                     "width": 117
                                                    }
                                                   ]
                                                  },
                                                  "hfov": 6.83,
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "pitch": -15.1,
                                                  "yaw": -146.01
                                                 }
                                                ],
                                                "maps": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "hfov": 6.83,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_9E87579B_99A7_E774_41D5_D9B021C4A182_0_HS_2_0_0_map.gif",
                                                     "height": 32,
                                                     "width": 58
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -15.1,
                                                  "yaw": -146.01
                                                 }
                                                ]
                                               },
                                               {
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "#FF0000",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_9E80D638_99A0_F9B4_41E0_2F85D159820E, this.camera_9629E915_9B23_06B5_4162_8183059E4C1C); this.mainPlayList.set('selectedIndex', 8)"
                                                 }
                                                ],
                                                "rollOverDisplay": false,
                                                "enabledInCardboard": true,
                                                "id": "overlay_93DC0778_99A0_E7B4_41D3_D79E079D67F5",
                                                "class": "HotspotPanoramaOverlay",
                                                "useHandCursor": true,
                                                "items": [
                                                 {
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_9E87579B_99A7_E774_41D5_D9B021C4A182_0_HS_1_0.png",
                                                     "height": 89,
                                                     "width": 151
                                                    }
                                                   ]
                                                  },
                                                  "hfov": 8.68,
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "pitch": -16.94,
                                                  "yaw": -95.17
                                                 }
                                                ],
                                                "maps": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "hfov": 8.68,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_9E87579B_99A7_E774_41D5_D9B021C4A182_0_HS_1_0_0_map.gif",
                                                     "height": 44,
                                                     "width": 75
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -16.94,
                                                  "yaw": -95.17
                                                 }
                                                ]
                                               },
                                               {
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "#FF0000",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_9E87A7A7_99A1_675C_41D7_44A9D18C0303, this.camera_962E294E_9B23_0697_41E0_85B45B71CF31); this.mainPlayList.set('selectedIndex', 9)"
                                                 }
                                                ],
                                                "rollOverDisplay": false,
                                                "enabledInCardboard": true,
                                                "id": "overlay_93293D0A_99A1_2B54_41DD_5AA81E038FF5",
                                                "class": "HotspotPanoramaOverlay",
                                                "useHandCursor": true,
                                                "items": [
                                                 {
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_9E87579B_99A7_E774_41D5_D9B021C4A182_0_HS_0_0.png",
                                                     "height": 108,
                                                     "width": 205
                                                    }
                                                   ]
                                                  },
                                                  "hfov": 12.06,
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "pitch": -12.48,
                                                  "yaw": -40.96
                                                 }
                                                ],
                                                "maps": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "hfov": 12.06,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_9E87579B_99A7_E774_41D5_D9B021C4A182_0_HS_0_0_0_map.gif",
                                                     "height": 54,
                                                     "width": 102
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -12.48,
                                                  "yaw": -40.96
                                                 }
                                                ]
                                               },
                                               {
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "#FF0000",
                                                  "click": "this.mainPlayList.set('selectedIndex', 0)"
                                                 }
                                                ],
                                                "rollOverDisplay": false,
                                                "enabledInCardboard": true,
                                                "id": "overlay_8B82A18D_99A1_FB6C_41C9_682190AAC811",
                                                "class": "HotspotPanoramaOverlay",
                                                "useHandCursor": true,
                                                "items": [
                                                 {
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_9E87579B_99A7_E774_41D5_D9B021C4A182_0_HS_4_0.png",
                                                     "height": 167,
                                                     "width": 191
                                                    }
                                                   ]
                                                  },
                                                  "hfov": 11.46,
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "pitch": -5.65,
                                                  "yaw": 174.5
                                                 }
                                                ],
                                                "maps": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "hfov": 11.46,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_9E87579B_99A7_E774_41D5_D9B021C4A182_0_HS_4_0_0_map.gif",
                                                     "height": 83,
                                                     "width": 95
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -5.65,
                                                  "yaw": 174.5
                                                 }
                                                ]
                                               },
                                               {
                                                "inertia": false,
                                                "hfov": 45,
                                                "image": {
                                                 "class": "ImageResource",
                                                 "levels": [
                                                  {
                                                   "class": "ImageResourceLevel",
                                                   "url": "media/panorama_9DEE2A67_9574_527E_41B3_6CDED57A89AC_tcap0.png",
                                                   "height": 850,
                                                   "width": 850
                                                  }
                                                 ]
                                                },
                                                "id": "panorama_9E87579B_99A7_E774_41D5_D9B021C4A182_tcap0",
                                                "class": "TripodCapPanoramaOverlay",
                                                "angle": 0,
                                                "rotate": true
                                               }
                                              ],
                                              "back": {
                                               "class": "ImageResource",
                                               "levels": [
                                                {
                                                 "class": "ImageResourceLevel",
                                                 "url": "media/panorama_9E87579B_99A7_E774_41D5_D9B021C4A182_b_hq.jpeg",
                                                 "height": 1904,
                                                 "width": 1904
                                                },
                                                {
                                                 "class": "ImageResourceLevel",
                                                 "url": "media/panorama_9E87579B_99A7_E774_41D5_D9B021C4A182_b.jpeg",
                                                 "height": 1024,
                                                 "width": 1024
                                                }
                                               ]
                                              },
                                              "top": {
                                               "class": "ImageResource",
                                               "levels": [
                                                {
                                                 "class": "ImageResourceLevel",
                                                 "url": "media/panorama_9E87579B_99A7_E774_41D5_D9B021C4A182_u_hq.jpeg",
                                                 "height": 1904,
                                                 "width": 1904
                                                },
                                                {
                                                 "class": "ImageResourceLevel",
                                                 "url": "media/panorama_9E87579B_99A7_E774_41D5_D9B021C4A182_u.jpeg",
                                                 "height": 1024,
                                                 "width": 1024
                                                }
                                               ]
                                              },
                                              "class": "CubicPanoramaFrame",
                                              "right": {
                                               "class": "ImageResource",
                                               "levels": [
                                                {
                                                 "class": "ImageResourceLevel",
                                                 "url": "media/panorama_9E87579B_99A7_E774_41D5_D9B021C4A182_r_hq.jpeg",
                                                 "height": 1904,
                                                 "width": 1904
                                                },
                                                {
                                                 "class": "ImageResourceLevel",
                                                 "url": "media/panorama_9E87579B_99A7_E774_41D5_D9B021C4A182_r.jpeg",
                                                 "height": 1024,
                                                 "width": 1024
                                                }
                                               ]
                                              },
                                              "bottom": {
                                               "class": "ImageResource",
                                               "levels": [
                                                {
                                                 "class": "ImageResourceLevel",
                                                 "url": "media/panorama_9E87579B_99A7_E774_41D5_D9B021C4A182_d_hq.jpeg",
                                                 "height": 1904,
                                                 "width": 1904
                                                },
                                                {
                                                 "class": "ImageResourceLevel",
                                                 "url": "media/panorama_9E87579B_99A7_E774_41D5_D9B021C4A182_d.jpeg",
                                                 "height": 1024,
                                                 "width": 1024
                                                }
                                               ]
                                              },
                                              "left": {
                                               "class": "ImageResource",
                                               "levels": [
                                                {
                                                 "class": "ImageResourceLevel",
                                                 "url": "media/panorama_9E87579B_99A7_E774_41D5_D9B021C4A182_l_hq.jpeg",
                                                 "height": 1904,
                                                 "width": 1904
                                                },
                                                {
                                                 "class": "ImageResourceLevel",
                                                 "url": "media/panorama_9E87579B_99A7_E774_41D5_D9B021C4A182_l.jpeg",
                                                 "height": 1024,
                                                 "width": 1024
                                                }
                                               ]
                                              },
                                              "front": {
                                               "class": "ImageResource",
                                               "levels": [
                                                {
                                                 "class": "ImageResourceLevel",
                                                 "url": "media/panorama_9E87579B_99A7_E774_41D5_D9B021C4A182_f_hq.jpeg",
                                                 "height": 1904,
                                                 "width": 1904
                                                },
                                                {
                                                 "class": "ImageResourceLevel",
                                                 "url": "media/panorama_9E87579B_99A7_E774_41D5_D9B021C4A182_f.jpeg",
                                                 "height": 1024,
                                                 "width": 1024
                                                }
                                               ]
                                              }
                                             }
                                            ],
                                            "pitch": 0
                                           },
                                           "yaw": 17.81
                                          },
                                          {
                                           "class": "AdjacentPanorama",
                                           "distance": 1,
                                           "backwardYaw": 156.31,
                                           "panorama": {
                                            "label": "Middle point 2",
                                            "hfovMin": 60,
                                            "hfovMax": 120,
                                            "adjacentPanoramas": [
                                             {
                                              "class": "AdjacentPanorama",
                                              "distance": 1,
                                              "backwardYaw": 167.04,
                                              "panorama": "this.panorama_9E80D638_99A0_F9B4_41E0_2F85D159820E",
                                              "yaw": -170.87
                                             },
                                             {
                                              "class": "AdjacentPanorama",
                                              "distance": 1,
                                              "backwardYaw": 134.45,
                                              "panorama": "this.panorama_9E87A7A7_99A1_675C_41D7_44A9D18C0303",
                                              "yaw": 156.31
                                             },
                                             {
                                              "class": "AdjacentPanorama",
                                              "distance": 1,
                                              "backwardYaw": 81.12,
                                              "panorama": {
                                               "label": "Kitchen",
                                               "hfovMin": 60,
                                               "hfovMax": 120,
                                               "adjacentPanoramas": [
                                                {
                                                 "class": "AdjacentPanorama",
                                                 "distance": 1,
                                                 "backwardYaw": 149.16,
                                                 "panorama": "this.panorama_9E87A7A7_99A1_675C_41D7_44A9D18C0303",
                                                 "yaw": 107.88
                                                },
                                                {
                                                 "class": "AdjacentPanorama",
                                                 "distance": 1,
                                                 "backwardYaw": -73.03,
                                                 "panorama": "this.panorama_9E80F563_99A1_3BDB_41D7_08E32CDF28A0",
                                                 "yaw": 81.12
                                                },
                                                {
                                                 "class": "AdjacentPanorama",
                                                 "distance": 1,
                                                 "backwardYaw": -170.08,
                                                 "panorama": "this.panorama_9DEABACC_9573_F2B1_41D5_9D1431797D46",
                                                 "yaw": -72.85
                                                }
                                               ],
                                               "partial": false,
                                               "hfov": 360,
                                               "thumbnailUrl": "media/panorama_9DEAB61D_9573_D5D2_41DB_7100FF28F1C6_t.jpg",
                                               "id": "panorama_9DEAB61D_9573_D5D2_41DB_7100FF28F1C6",
                                               "vfov": 180,
                                               "class": "Panorama",
                                               "frames": [
                                                {
                                                 "thumbnailUrl": "media/panorama_9DEAB61D_9573_D5D2_41DB_7100FF28F1C6_t.jpg",
                                                 "overlays": [
                                                  {
                                                   "areas": [
                                                    {
                                                     "mapColor": "#FF0000",
                                                     "displayTooltipInTouchScreens": true,
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "click": "this.startPanoramaWithCamera(this.panorama_9DEABACC_9573_F2B1_41D5_9D1431797D46, this.camera_96467A9E_9B23_1BB7_41BB_B500C8B46583); this.mainPlayList.set('selectedIndex', 20)",
                                                     "toolTip": "Go Outside"
                                                    }
                                                   ],
                                                   "rollOverDisplay": false,
                                                   "enabledInCardboard": true,
                                                   "id": "overlay_8558070D_95CC_53B2_41DF_E5F4D31989D4",
                                                   "class": "HotspotPanoramaOverlay",
                                                   "useHandCursor": true,
                                                   "items": [
                                                    {
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_9DEAB61D_9573_D5D2_41DB_7100FF28F1C6_0_HS_1_0.png",
                                                        "height": 200,
                                                        "width": 206
                                                       }
                                                      ]
                                                     },
                                                     "hfov": 12.41,
                                                     "class": "HotspotPanoramaOverlayImage",
                                                     "pitch": -0.79,
                                                     "yaw": -72.85
                                                    }
                                                   ],
                                                   "maps": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "hfov": 12.41,
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_9DEAB61D_9573_D5D2_41DB_7100FF28F1C6_0_HS_1_0_0_map.gif",
                                                        "height": 100,
                                                        "width": 103
                                                       }
                                                      ]
                                                     },
                                                     "pitch": -0.79,
                                                     "yaw": -72.85
                                                    }
                                                   ]
                                                  },
                                                  {
                                                   "areas": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "mapColor": "#FF0000",
                                                     "click": "this.startPanoramaWithCamera(this.panorama_9E87A7A7_99A1_675C_41D7_44A9D18C0303, this.camera_964E4A56_9B23_1AB7_41A9_D84C48930EF7); this.mainPlayList.set('selectedIndex', 9)"
                                                    }
                                                   ],
                                                   "rollOverDisplay": false,
                                                   "enabledInCardboard": true,
                                                   "id": "overlay_9560B5D9_99A3_7AF4_41CD_D4459665A2C5",
                                                   "class": "HotspotPanoramaOverlay",
                                                   "useHandCursor": true,
                                                   "items": [
                                                    {
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_9DEAB61D_9573_D5D2_41DB_7100FF28F1C6_0_HS_3_0.png",
                                                        "height": 242,
                                                        "width": 208
                                                       }
                                                      ]
                                                     },
                                                     "hfov": 11.86,
                                                     "class": "HotspotPanoramaOverlayImage",
                                                     "pitch": -18.38,
                                                     "yaw": 107.88
                                                    }
                                                   ],
                                                   "maps": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "hfov": 11.86,
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_9DEAB61D_9573_D5D2_41DB_7100FF28F1C6_0_HS_3_0_0_map.gif",
                                                        "height": 121,
                                                        "width": 104
                                                       }
                                                      ]
                                                     },
                                                     "pitch": -18.38,
                                                     "yaw": 107.88
                                                    }
                                                   ]
                                                  },
                                                  {
                                                   "areas": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "mapColor": "#FF0000",
                                                     "click": "this.startPanoramaWithCamera(this.panorama_9E80F563_99A1_3BDB_41D7_08E32CDF28A0, this.camera_9643FA7A_9B23_1B7F_41E0_BF26F422E8C0); this.mainPlayList.set('selectedIndex', 7)"
                                                    }
                                                   ],
                                                   "rollOverDisplay": false,
                                                   "enabledInCardboard": true,
                                                   "id": "overlay_971A44C7_99E1_1ADC_4160_F6655A08E410",
                                                   "class": "HotspotPanoramaOverlay",
                                                   "useHandCursor": true,
                                                   "items": [
                                                    {
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_9DEAB61D_9573_D5D2_41DB_7100FF28F1C6_0_HS_2_0.png",
                                                        "height": 237,
                                                        "width": 346
                                                       }
                                                      ]
                                                     },
                                                     "hfov": 17.09,
                                                     "class": "HotspotPanoramaOverlayImage",
                                                     "pitch": -34.7,
                                                     "yaw": 81.12
                                                    }
                                                   ],
                                                   "maps": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "hfov": 17.09,
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_9DEAB61D_9573_D5D2_41DB_7100FF28F1C6_0_HS_2_0_0_map.gif",
                                                        "height": 118,
                                                        "width": 173
                                                       }
                                                      ]
                                                     },
                                                     "pitch": -34.7,
                                                     "yaw": 81.12
                                                    }
                                                   ]
                                                  },
                                                  {
                                                   "areas": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "mapColor": "#FF0000",
                                                     "click": "this.mainPlayList.set('selectedIndex', 11)"
                                                    }
                                                   ],
                                                   "rollOverDisplay": false,
                                                   "enabledInCardboard": true,
                                                   "id": "overlay_8BED6D8D_99E0_EB6C_41D6_77DF3D2F5747",
                                                   "class": "HotspotPanoramaOverlay",
                                                   "useHandCursor": true,
                                                   "items": [
                                                    {
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_9DEAB61D_9573_D5D2_41DB_7100FF28F1C6_0_HS_4_0.png",
                                                        "height": 105,
                                                        "width": 111
                                                       }
                                                      ]
                                                     },
                                                     "hfov": 6.71,
                                                     "class": "HotspotPanoramaOverlayImage",
                                                     "pitch": -0.27,
                                                     "yaw": 97.12
                                                    }
                                                   ],
                                                   "maps": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "hfov": 6.71,
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_9DEAB61D_9573_D5D2_41DB_7100FF28F1C6_0_HS_4_0_0_map.gif",
                                                        "height": 52,
                                                        "width": 55
                                                       }
                                                      ]
                                                     },
                                                     "pitch": -0.27,
                                                     "yaw": 97.12
                                                    }
                                                   ]
                                                  },
                                                  {
                                                   "inertia": false,
                                                   "hfov": 45,
                                                   "image": {
                                                    "class": "ImageResource",
                                                    "levels": [
                                                     {
                                                      "class": "ImageResourceLevel",
                                                      "url": "media/panorama_9DEE2A67_9574_527E_41B3_6CDED57A89AC_tcap0.png",
                                                      "height": 850,
                                                      "width": 850
                                                     }
                                                    ]
                                                   },
                                                   "id": "panorama_9DEAB61D_9573_D5D2_41DB_7100FF28F1C6_tcap0",
                                                   "class": "TripodCapPanoramaOverlay",
                                                   "angle": 0,
                                                   "rotate": true
                                                  }
                                                 ],
                                                 "back": {
                                                  "class": "ImageResource",
                                                  "levels": [
                                                   {
                                                    "class": "ImageResourceLevel",
                                                    "url": "media/panorama_9DEAB61D_9573_D5D2_41DB_7100FF28F1C6_b_hq.jpeg",
                                                    "height": 1904,
                                                    "width": 1904
                                                   },
                                                   {
                                                    "class": "ImageResourceLevel",
                                                    "url": "media/panorama_9DEAB61D_9573_D5D2_41DB_7100FF28F1C6_b.jpeg",
                                                    "height": 1024,
                                                    "width": 1024
                                                   }
                                                  ]
                                                 },
                                                 "top": {
                                                  "class": "ImageResource",
                                                  "levels": [
                                                   {
                                                    "class": "ImageResourceLevel",
                                                    "url": "media/panorama_9DEAB61D_9573_D5D2_41DB_7100FF28F1C6_u_hq.jpeg",
                                                    "height": 1904,
                                                    "width": 1904
                                                   },
                                                   {
                                                    "class": "ImageResourceLevel",
                                                    "url": "media/panorama_9DEAB61D_9573_D5D2_41DB_7100FF28F1C6_u.jpeg",
                                                    "height": 1024,
                                                    "width": 1024
                                                   }
                                                  ]
                                                 },
                                                 "class": "CubicPanoramaFrame",
                                                 "right": {
                                                  "class": "ImageResource",
                                                  "levels": [
                                                   {
                                                    "class": "ImageResourceLevel",
                                                    "url": "media/panorama_9DEAB61D_9573_D5D2_41DB_7100FF28F1C6_r_hq.jpeg",
                                                    "height": 1904,
                                                    "width": 1904
                                                   },
                                                   {
                                                    "class": "ImageResourceLevel",
                                                    "url": "media/panorama_9DEAB61D_9573_D5D2_41DB_7100FF28F1C6_r.jpeg",
                                                    "height": 1024,
                                                    "width": 1024
                                                   }
                                                  ]
                                                 },
                                                 "bottom": {
                                                  "class": "ImageResource",
                                                  "levels": [
                                                   {
                                                    "class": "ImageResourceLevel",
                                                    "url": "media/panorama_9DEAB61D_9573_D5D2_41DB_7100FF28F1C6_d_hq.jpeg",
                                                    "height": 1904,
                                                    "width": 1904
                                                   },
                                                   {
                                                    "class": "ImageResourceLevel",
                                                    "url": "media/panorama_9DEAB61D_9573_D5D2_41DB_7100FF28F1C6_d.jpeg",
                                                    "height": 1024,
                                                    "width": 1024
                                                   }
                                                  ]
                                                 },
                                                 "left": {
                                                  "class": "ImageResource",
                                                  "levels": [
                                                   {
                                                    "class": "ImageResourceLevel",
                                                    "url": "media/panorama_9DEAB61D_9573_D5D2_41DB_7100FF28F1C6_l_hq.jpeg",
                                                    "height": 1904,
                                                    "width": 1904
                                                   },
                                                   {
                                                    "class": "ImageResourceLevel",
                                                    "url": "media/panorama_9DEAB61D_9573_D5D2_41DB_7100FF28F1C6_l.jpeg",
                                                    "height": 1024,
                                                    "width": 1024
                                                   }
                                                  ]
                                                 },
                                                 "front": {
                                                  "class": "ImageResource",
                                                  "levels": [
                                                   {
                                                    "class": "ImageResourceLevel",
                                                    "url": "media/panorama_9DEAB61D_9573_D5D2_41DB_7100FF28F1C6_f_hq.jpeg",
                                                    "height": 1904,
                                                    "width": 1904
                                                   },
                                                   {
                                                    "class": "ImageResourceLevel",
                                                    "url": "media/panorama_9DEAB61D_9573_D5D2_41DB_7100FF28F1C6_f.jpeg",
                                                    "height": 1024,
                                                    "width": 1024
                                                   }
                                                  ]
                                                 }
                                                }
                                               ],
                                               "pitch": 0
                                              },
                                              "yaw": -73.03
                                             }
                                            ],
                                            "partial": false,
                                            "hfov": 360,
                                            "thumbnailUrl": "media/panorama_9E80F563_99A1_3BDB_41D7_08E32CDF28A0_t.jpg",
                                            "id": "panorama_9E80F563_99A1_3BDB_41D7_08E32CDF28A0",
                                            "vfov": 180,
                                            "class": "Panorama",
                                            "frames": [
                                             {
                                              "thumbnailUrl": "media/panorama_9E80F563_99A1_3BDB_41D7_08E32CDF28A0_t.jpg",
                                              "overlays": [
                                               {
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "#FF0000",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_9DEAB61D_9573_D5D2_41DB_7100FF28F1C6, this.camera_96C9DF82_9B23_198F_41C3_D0D93A7C0F2E); this.mainPlayList.set('selectedIndex', 10)"
                                                 }
                                                ],
                                                "rollOverDisplay": false,
                                                "enabledInCardboard": true,
                                                "id": "overlay_95911ADE_99A1_2EEC_41DD_FD5D1448A5D4",
                                                "class": "HotspotPanoramaOverlay",
                                                "useHandCursor": true,
                                                "items": [
                                                 {
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_9E80F563_99A1_3BDB_41D7_08E32CDF28A0_0_HS_2_0.png",
                                                     "height": 141,
                                                     "width": 240
                                                    }
                                                   ]
                                                  },
                                                  "hfov": 12.79,
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "pitch": -27.7,
                                                  "yaw": -73.03
                                                 }
                                                ],
                                                "maps": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "hfov": 12.79,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_9E80F563_99A1_3BDB_41D7_08E32CDF28A0_0_HS_2_0_0_map.gif",
                                                     "height": 70,
                                                     "width": 120
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -27.7,
                                                  "yaw": -73.03
                                                 }
                                                ]
                                               },
                                               {
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "#FF0000",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_9E80D638_99A0_F9B4_41E0_2F85D159820E, this.camera_96DEEF1E_9B23_1AB4_41E1_94EFA93D1C4E); this.mainPlayList.set('selectedIndex', 8)"
                                                 }
                                                ],
                                                "rollOverDisplay": false,
                                                "enabledInCardboard": true,
                                                "id": "overlay_95C3D2C7_99A7_3EDC_41D8_78D93083FA44",
                                                "class": "HotspotPanoramaOverlay",
                                                "useHandCursor": true,
                                                "items": [
                                                 {
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_9E80F563_99A1_3BDB_41D7_08E32CDF28A0_0_HS_1_0.png",
                                                     "height": 343,
                                                     "width": 272
                                                    }
                                                   ]
                                                  },
                                                  "hfov": 14.94,
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "pitch": -24.12,
                                                  "yaw": -170.87
                                                 }
                                                ],
                                                "maps": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "hfov": 14.94,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_9E80F563_99A1_3BDB_41D7_08E32CDF28A0_0_HS_1_0_0_map.gif",
                                                     "height": 171,
                                                     "width": 136
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -24.12,
                                                  "yaw": -170.87
                                                 }
                                                ]
                                               },
                                               {
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "#FF0000",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_9E87A7A7_99A1_675C_41D7_44A9D18C0303, this.camera_96D57F51_9B23_1A8D_41D1_8AE0E66F4546); this.mainPlayList.set('selectedIndex', 9)"
                                                 }
                                                ],
                                                "rollOverDisplay": false,
                                                "enabledInCardboard": true,
                                                "id": "overlay_951861D9_99A7_1AF4_41DF_228EF80F1C52",
                                                "class": "HotspotPanoramaOverlay",
                                                "useHandCursor": true,
                                                "items": [
                                                 {
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_9E80F563_99A1_3BDB_41D7_08E32CDF28A0_0_HS_0_0.png",
                                                     "height": 174,
                                                     "width": 199
                                                    }
                                                   ]
                                                  },
                                                  "hfov": 10.71,
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "pitch": -26.45,
                                                  "yaw": 156.31
                                                 }
                                                ],
                                                "maps": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "hfov": 10.71,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_9E80F563_99A1_3BDB_41D7_08E32CDF28A0_0_HS_0_0_0_map.gif",
                                                     "height": 87,
                                                     "width": 99
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -26.45,
                                                  "yaw": 156.31
                                                 }
                                                ]
                                               },
                                               {
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "#FF0000",
                                                  "click": "this.mainPlayList.set('selectedIndex', 11)"
                                                 }
                                                ],
                                                "rollOverDisplay": false,
                                                "enabledInCardboard": true,
                                                "id": "overlay_8BD23845_99E7_29DF_41DA_F699CCE8FADE",
                                                "class": "HotspotPanoramaOverlay",
                                                "useHandCursor": true,
                                                "items": [
                                                 {
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_9E80F563_99A1_3BDB_41D7_08E32CDF28A0_0_HS_3_0.png",
                                                     "height": 172,
                                                     "width": 172
                                                    }
                                                   ]
                                                  },
                                                  "hfov": 10.35,
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "pitch": -4.08,
                                                  "yaw": 129.03
                                                 }
                                                ],
                                                "maps": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "hfov": 10.35,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_9E80F563_99A1_3BDB_41D7_08E32CDF28A0_0_HS_3_0_0_map.gif",
                                                     "height": 86,
                                                     "width": 86
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -4.08,
                                                  "yaw": 129.03
                                                 }
                                                ]
                                               },
                                               {
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "#FF0000",
                                                  "click": "this.mainPlayList.set('selectedIndex', 0)"
                                                 }
                                                ],
                                                "rollOverDisplay": false,
                                                "enabledInCardboard": true,
                                                "id": "overlay_8B909015_99A7_197F_41BF_9206163691D5",
                                                "class": "HotspotPanoramaOverlay",
                                                "useHandCursor": true,
                                                "items": [
                                                 {
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_9E80F563_99A1_3BDB_41D7_08E32CDF28A0_0_HS_5_0.png",
                                                     "height": 118,
                                                     "width": 118
                                                    }
                                                   ]
                                                  },
                                                  "hfov": 7.12,
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "pitch": -2.63,
                                                  "yaw": -167.83
                                                 }
                                                ],
                                                "maps": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "hfov": 7.12,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_9E80F563_99A1_3BDB_41D7_08E32CDF28A0_0_HS_5_0_0_map.gif",
                                                     "height": 59,
                                                     "width": 59
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -2.63,
                                                  "yaw": -167.83
                                                 }
                                                ]
                                               },
                                               {
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "#FF0000",
                                                  "click": "this.mainPlayList.set('selectedIndex', 20)"
                                                 }
                                                ],
                                                "rollOverDisplay": false,
                                                "enabledInCardboard": true,
                                                "id": "overlay_8B40E30D_99A1_1F6C_41E1_3C4CF3022356",
                                                "class": "HotspotPanoramaOverlay",
                                                "useHandCursor": true,
                                                "items": [
                                                 {
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_9E80F563_99A1_3BDB_41D7_08E32CDF28A0_0_HS_4_0.png",
                                                     "height": 100,
                                                     "width": 124
                                                    }
                                                   ]
                                                  },
                                                  "hfov": 7.47,
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "pitch": -1.06,
                                                  "yaw": -55.42
                                                 }
                                                ],
                                                "maps": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "hfov": 7.47,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_9E80F563_99A1_3BDB_41D7_08E32CDF28A0_0_HS_4_0_0_map.gif",
                                                     "height": 50,
                                                     "width": 62
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -1.06,
                                                  "yaw": -55.42
                                                 }
                                                ]
                                               },
                                               {
                                                "inertia": false,
                                                "hfov": 45,
                                                "image": {
                                                 "class": "ImageResource",
                                                 "levels": [
                                                  {
                                                   "class": "ImageResourceLevel",
                                                   "url": "media/panorama_9DEE2A67_9574_527E_41B3_6CDED57A89AC_tcap0.png",
                                                   "height": 850,
                                                   "width": 850
                                                  }
                                                 ]
                                                },
                                                "id": "panorama_9E80F563_99A1_3BDB_41D7_08E32CDF28A0_tcap0",
                                                "class": "TripodCapPanoramaOverlay",
                                                "angle": 0,
                                                "rotate": true
                                               }
                                              ],
                                              "back": {
                                               "class": "ImageResource",
                                               "levels": [
                                                {
                                                 "class": "ImageResourceLevel",
                                                 "url": "media/panorama_9E80F563_99A1_3BDB_41D7_08E32CDF28A0_b_hq.jpeg",
                                                 "height": 1904,
                                                 "width": 1904
                                                },
                                                {
                                                 "class": "ImageResourceLevel",
                                                 "url": "media/panorama_9E80F563_99A1_3BDB_41D7_08E32CDF28A0_b.jpeg",
                                                 "height": 1024,
                                                 "width": 1024
                                                }
                                               ]
                                              },
                                              "top": {
                                               "class": "ImageResource",
                                               "levels": [
                                                {
                                                 "class": "ImageResourceLevel",
                                                 "url": "media/panorama_9E80F563_99A1_3BDB_41D7_08E32CDF28A0_u_hq.jpeg",
                                                 "height": 1904,
                                                 "width": 1904
                                                },
                                                {
                                                 "class": "ImageResourceLevel",
                                                 "url": "media/panorama_9E80F563_99A1_3BDB_41D7_08E32CDF28A0_u.jpeg",
                                                 "height": 1024,
                                                 "width": 1024
                                                }
                                               ]
                                              },
                                              "class": "CubicPanoramaFrame",
                                              "right": {
                                               "class": "ImageResource",
                                               "levels": [
                                                {
                                                 "class": "ImageResourceLevel",
                                                 "url": "media/panorama_9E80F563_99A1_3BDB_41D7_08E32CDF28A0_r_hq.jpeg",
                                                 "height": 1904,
                                                 "width": 1904
                                                },
                                                {
                                                 "class": "ImageResourceLevel",
                                                 "url": "media/panorama_9E80F563_99A1_3BDB_41D7_08E32CDF28A0_r.jpeg",
                                                 "height": 1024,
                                                 "width": 1024
                                                }
                                               ]
                                              },
                                              "bottom": {
                                               "class": "ImageResource",
                                               "levels": [
                                                {
                                                 "class": "ImageResourceLevel",
                                                 "url": "media/panorama_9E80F563_99A1_3BDB_41D7_08E32CDF28A0_d_hq.jpeg",
                                                 "height": 1904,
                                                 "width": 1904
                                                },
                                                {
                                                 "class": "ImageResourceLevel",
                                                 "url": "media/panorama_9E80F563_99A1_3BDB_41D7_08E32CDF28A0_d.jpeg",
                                                 "height": 1024,
                                                 "width": 1024
                                                }
                                               ]
                                              },
                                              "left": {
                                               "class": "ImageResource",
                                               "levels": [
                                                {
                                                 "class": "ImageResourceLevel",
                                                 "url": "media/panorama_9E80F563_99A1_3BDB_41D7_08E32CDF28A0_l_hq.jpeg",
                                                 "height": 1904,
                                                 "width": 1904
                                                },
                                                {
                                                 "class": "ImageResourceLevel",
                                                 "url": "media/panorama_9E80F563_99A1_3BDB_41D7_08E32CDF28A0_l.jpeg",
                                                 "height": 1024,
                                                 "width": 1024
                                                }
                                               ]
                                              },
                                              "front": {
                                               "class": "ImageResource",
                                               "levels": [
                                                {
                                                 "class": "ImageResourceLevel",
                                                 "url": "media/panorama_9E80F563_99A1_3BDB_41D7_08E32CDF28A0_f_hq.jpeg",
                                                 "height": 1904,
                                                 "width": 1904
                                                },
                                                {
                                                 "class": "ImageResourceLevel",
                                                 "url": "media/panorama_9E80F563_99A1_3BDB_41D7_08E32CDF28A0_f.jpeg",
                                                 "height": 1024,
                                                 "width": 1024
                                                }
                                               ]
                                              }
                                             }
                                            ],
                                            "pitch": 0
                                           },
                                           "yaw": 134.45
                                          },
                                          {
                                           "class": "AdjacentPanorama",
                                           "distance": 1,
                                           "backwardYaw": 160.12,
                                           "panorama": "this.panorama_9E871860_99A7_29D4_41C2_47458889C165",
                                           "yaw": -49.1
                                          },
                                          {
                                           "class": "AdjacentPanorama",
                                           "distance": 1,
                                           "backwardYaw": 107.88,
                                           "panorama": "this.panorama_9DEAB61D_9573_D5D2_41DB_7100FF28F1C6",
                                           "yaw": 149.16
                                          }
                                         ],
                                         "partial": false,
                                         "hfov": 360,
                                         "thumbnailUrl": "media/panorama_9E87A7A7_99A1_675C_41D7_44A9D18C0303_t.jpg",
                                         "id": "panorama_9E87A7A7_99A1_675C_41D7_44A9D18C0303",
                                         "vfov": 180,
                                         "class": "Panorama",
                                         "frames": [
                                          {
                                           "thumbnailUrl": "media/panorama_9E87A7A7_99A1_675C_41D7_44A9D18C0303_t.jpg",
                                           "overlays": [
                                            {
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_9E80F563_99A1_3BDB_41D7_08E32CDF28A0, this.camera_965879A3_9B23_198D_41D6_45AB25A1DC8E); this.mainPlayList.set('selectedIndex', 7)"
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "enabledInCardboard": true,
                                             "id": "overlay_95032328_99A3_3F54_41BD_CDEF66D09819",
                                             "class": "HotspotPanoramaOverlay",
                                             "useHandCursor": true,
                                             "items": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_9E87A7A7_99A1_675C_41D7_44A9D18C0303_0_HS_4_0.png",
                                                  "height": 153,
                                                  "width": 194
                                                 }
                                                ]
                                               },
                                               "hfov": 10.46,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "pitch": -26.35,
                                               "yaw": 134.45
                                              }
                                             ],
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "hfov": 10.46,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_9E87A7A7_99A1_675C_41D7_44A9D18C0303_0_HS_4_0_0_map.gif",
                                                  "height": 76,
                                                  "width": 97
                                                 }
                                                ]
                                               },
                                               "pitch": -26.35,
                                               "yaw": 134.45
                                              }
                                             ]
                                            },
                                            {
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_9E87579B_99A7_E774_41D5_D9B021C4A182, this.camera_96274984_9B23_198B_41CB_113EEA7771CC); this.mainPlayList.set('selectedIndex', 6)"
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "enabledInCardboard": true,
                                             "id": "overlay_94878A29_99A1_6957_41D5_FA207A27ED01",
                                             "class": "HotspotPanoramaOverlay",
                                             "useHandCursor": true,
                                             "items": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_9E87A7A7_99A1_675C_41D7_44A9D18C0303_0_HS_3_0.png",
                                                  "height": 176,
                                                  "width": 225
                                                 }
                                                ]
                                               },
                                               "hfov": 12.64,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "pitch": -21.04,
                                               "yaw": 17.81
                                              }
                                             ],
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "hfov": 12.64,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_9E87A7A7_99A1_675C_41D7_44A9D18C0303_0_HS_3_0_0_map.gif",
                                                  "height": 88,
                                                  "width": 112
                                                 }
                                                ]
                                               },
                                               "pitch": -21.04,
                                               "yaw": 17.81
                                              }
                                             ]
                                            },
                                            {
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_9DEAB61D_9573_D5D2_41DB_7100FF28F1C6, this.camera_965109D9_9B23_19BD_41CB_85B3C7CD2EC1); this.mainPlayList.set('selectedIndex', 10)"
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "enabledInCardboard": true,
                                             "id": "overlay_948B7AA7_99DF_295C_41DD_E3C782A10772",
                                             "class": "HotspotPanoramaOverlay",
                                             "useHandCursor": true,
                                             "items": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_9E87A7A7_99A1_675C_41D7_44A9D18C0303_0_HS_2_0.png",
                                                  "height": 46,
                                                  "width": 129
                                                 }
                                                ]
                                               },
                                               "hfov": 7.39,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "pitch": -17.47,
                                               "yaw": 149.16
                                              }
                                             ],
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "hfov": 7.39,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_9E87A7A7_99A1_675C_41D7_44A9D18C0303_0_HS_2_0_0_map.gif",
                                                  "height": 23,
                                                  "width": 64
                                                 }
                                                ]
                                               },
                                               "pitch": -17.47,
                                               "yaw": 149.16
                                              }
                                             ]
                                            },
                                            {
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000",
                                               "click": "this.mainPlayList.set('selectedIndex', 8)"
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "enabledInCardboard": true,
                                             "id": "overlay_9443FC59_99E1_E9F4_4196_3B2529A9CD9A",
                                             "class": "HotspotPanoramaOverlay",
                                             "useHandCursor": true,
                                             "items": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_9E87A7A7_99A1_675C_41D7_44A9D18C0303_0_HS_1_0.png",
                                                  "height": 61,
                                                  "width": 165
                                                 }
                                                ]
                                               },
                                               "hfov": 8.58,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "pitch": -30.23,
                                               "yaw": 101.52
                                              }
                                             ],
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "hfov": 8.58,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_9E87A7A7_99A1_675C_41D7_44A9D18C0303_0_HS_1_0_0_map.gif",
                                                  "height": 30,
                                                  "width": 82
                                                 }
                                                ]
                                               },
                                               "pitch": -30.23,
                                               "yaw": 101.52
                                              }
                                             ]
                                            },
                                            {
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_9E871860_99A7_29D4_41C2_47458889C165, this.camera_965DE9C0_9B23_198B_41D9_AA625F8A2BAC); this.mainPlayList.set('selectedIndex', 11)"
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "enabledInCardboard": true,
                                             "id": "overlay_9455693E_99E3_6BAD_41E2_F8478BB0E18E",
                                             "class": "HotspotPanoramaOverlay",
                                             "useHandCursor": true,
                                             "items": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_9E87A7A7_99A1_675C_41D7_44A9D18C0303_0_HS_0_0.png",
                                                  "height": 409,
                                                  "width": 422
                                                 }
                                                ]
                                               },
                                               "hfov": 25.35,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "pitch": 1.14,
                                               "yaw": -49.1
                                              }
                                             ],
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "hfov": 25.35,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_9E87A7A7_99A1_675C_41D7_44A9D18C0303_0_HS_0_0_0_map.gif",
                                                  "height": 193,
                                                  "width": 200
                                                 }
                                                ]
                                               },
                                               "pitch": 1.14,
                                               "yaw": -49.1
                                              }
                                             ]
                                            },
                                            {
                                             "inertia": false,
                                             "hfov": 45,
                                             "image": {
                                              "class": "ImageResource",
                                              "levels": [
                                               {
                                                "class": "ImageResourceLevel",
                                                "url": "media/panorama_9DEE2A67_9574_527E_41B3_6CDED57A89AC_tcap0.png",
                                                "height": 850,
                                                "width": 850
                                               }
                                              ]
                                             },
                                             "id": "panorama_9E87A7A7_99A1_675C_41D7_44A9D18C0303_tcap0",
                                             "class": "TripodCapPanoramaOverlay",
                                             "angle": 0,
                                             "rotate": true
                                            }
                                           ],
                                           "back": {
                                            "class": "ImageResource",
                                            "levels": [
                                             {
                                              "class": "ImageResourceLevel",
                                              "url": "media/panorama_9E87A7A7_99A1_675C_41D7_44A9D18C0303_b_hq.jpeg",
                                              "height": 1904,
                                              "width": 1904
                                             },
                                             {
                                              "class": "ImageResourceLevel",
                                              "url": "media/panorama_9E87A7A7_99A1_675C_41D7_44A9D18C0303_b.jpeg",
                                              "height": 1024,
                                              "width": 1024
                                             }
                                            ]
                                           },
                                           "top": {
                                            "class": "ImageResource",
                                            "levels": [
                                             {
                                              "class": "ImageResourceLevel",
                                              "url": "media/panorama_9E87A7A7_99A1_675C_41D7_44A9D18C0303_u_hq.jpeg",
                                              "height": 1904,
                                              "width": 1904
                                             },
                                             {
                                              "class": "ImageResourceLevel",
                                              "url": "media/panorama_9E87A7A7_99A1_675C_41D7_44A9D18C0303_u.jpeg",
                                              "height": 1024,
                                              "width": 1024
                                             }
                                            ]
                                           },
                                           "class": "CubicPanoramaFrame",
                                           "right": {
                                            "class": "ImageResource",
                                            "levels": [
                                             {
                                              "class": "ImageResourceLevel",
                                              "url": "media/panorama_9E87A7A7_99A1_675C_41D7_44A9D18C0303_r_hq.jpeg",
                                              "height": 1904,
                                              "width": 1904
                                             },
                                             {
                                              "class": "ImageResourceLevel",
                                              "url": "media/panorama_9E87A7A7_99A1_675C_41D7_44A9D18C0303_r.jpeg",
                                              "height": 1024,
                                              "width": 1024
                                             }
                                            ]
                                           },
                                           "bottom": {
                                            "class": "ImageResource",
                                            "levels": [
                                             {
                                              "class": "ImageResourceLevel",
                                              "url": "media/panorama_9E87A7A7_99A1_675C_41D7_44A9D18C0303_d_hq.jpeg",
                                              "height": 1904,
                                              "width": 1904
                                             },
                                             {
                                              "class": "ImageResourceLevel",
                                              "url": "media/panorama_9E87A7A7_99A1_675C_41D7_44A9D18C0303_d.jpeg",
                                              "height": 1024,
                                              "width": 1024
                                             }
                                            ]
                                           },
                                           "left": {
                                            "class": "ImageResource",
                                            "levels": [
                                             {
                                              "class": "ImageResourceLevel",
                                              "url": "media/panorama_9E87A7A7_99A1_675C_41D7_44A9D18C0303_l_hq.jpeg",
                                              "height": 1904,
                                              "width": 1904
                                             },
                                             {
                                              "class": "ImageResourceLevel",
                                              "url": "media/panorama_9E87A7A7_99A1_675C_41D7_44A9D18C0303_l.jpeg",
                                              "height": 1024,
                                              "width": 1024
                                             }
                                            ]
                                           },
                                           "front": {
                                            "class": "ImageResource",
                                            "levels": [
                                             {
                                              "class": "ImageResourceLevel",
                                              "url": "media/panorama_9E87A7A7_99A1_675C_41D7_44A9D18C0303_f_hq.jpeg",
                                              "height": 1904,
                                              "width": 1904
                                             },
                                             {
                                              "class": "ImageResourceLevel",
                                              "url": "media/panorama_9E87A7A7_99A1_675C_41D7_44A9D18C0303_f.jpeg",
                                              "height": 1024,
                                              "width": 1024
                                             }
                                            ]
                                           }
                                          }
                                         ],
                                         "pitch": 0
                                        },
                                        "yaw": 160.12
                                       },
                                       {
                                        "class": "AdjacentPanorama",
                                        "distance": 1,
                                        "backwardYaw": -175.07,
                                        "panorama": "this.panorama_9E805266_99A1_F9DC_41DA_C7892E9AA757",
                                        "yaw": 78.74
                                       }
                                      ],
                                      "partial": false,
                                      "hfov": 360,
                                      "thumbnailUrl": "media/panorama_9E871860_99A7_29D4_41C2_47458889C165_t.jpg",
                                      "id": "panorama_9E871860_99A7_29D4_41C2_47458889C165",
                                      "vfov": 180,
                                      "class": "Panorama",
                                      "frames": [
                                       {
                                        "thumbnailUrl": "media/panorama_9E871860_99A7_29D4_41C2_47458889C165_t.jpg",
                                        "overlays": [
                                         {
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_9E87A7A7_99A1_675C_41D7_44A9D18C0303, this.camera_96560A08_9B23_1A9B_41DF_319C39A1DFC8); this.mainPlayList.set('selectedIndex', 9)"
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "enabledInCardboard": true,
                                          "id": "overlay_9443B36D_99E3_3FAC_41D0_5EC8C99704CE",
                                          "class": "HotspotPanoramaOverlay",
                                          "useHandCursor": true,
                                          "items": [
                                           {
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_9E871860_99A7_29D4_41C2_47458889C165_0_HS_2_0.png",
                                               "height": 855,
                                               "width": 782
                                              }
                                             ]
                                            },
                                            "hfov": 46.92,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "pitch": 2.3,
                                            "yaw": 160.12
                                           }
                                          ],
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 46.92,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_9E871860_99A7_29D4_41C2_47458889C165_0_HS_2_0_0_map.gif",
                                               "height": 200,
                                               "width": 183
                                              }
                                             ]
                                            },
                                            "pitch": 2.3,
                                            "yaw": 160.12
                                           }
                                          ]
                                         },
                                         {
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_9E807E2F_99A1_29AC_41DC_A32142B5676F, this.camera_9652C9F0_9B23_198B_419A_3898286A0BB2); this.mainPlayList.set('selectedIndex', 12)"
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "enabledInCardboard": true,
                                          "id": "overlay_940C25DF_99E1_1AEC_41E2_A7AD9BD1920B",
                                          "class": "HotspotPanoramaOverlay",
                                          "useHandCursor": true,
                                          "items": [
                                           {
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_9E871860_99A7_29D4_41C2_47458889C165_0_HS_1_0.png",
                                               "height": 500,
                                               "width": 408
                                              }
                                             ]
                                            },
                                            "hfov": 24.48,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "pitch": -1.44,
                                            "yaw": 27.98
                                           }
                                          ],
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 24.48,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_9E871860_99A7_29D4_41C2_47458889C165_0_HS_1_0_0_map.gif",
                                               "height": 200,
                                               "width": 163
                                              }
                                             ]
                                            },
                                            "pitch": -1.44,
                                            "yaw": 27.98
                                           }
                                          ]
                                         },
                                         {
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_9E805266_99A1_F9DC_41DA_C7892E9AA757, this.camera_964B9A30_9B23_1A8B_41E0_0B98108864D5); this.mainPlayList.set('selectedIndex', 13)"
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "enabledInCardboard": true,
                                          "id": "overlay_943BFCC6_99E1_6ADC_41E0_88F2D837EE94",
                                          "class": "HotspotPanoramaOverlay",
                                          "useHandCursor": true,
                                          "items": [
                                           {
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_9E871860_99A7_29D4_41C2_47458889C165_0_HS_0_0.png",
                                               "height": 440,
                                               "width": 375
                                              }
                                             ]
                                            },
                                            "hfov": 22.54,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "pitch": -1.16,
                                            "yaw": 78.74
                                           }
                                          ],
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 22.54,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_9E871860_99A7_29D4_41C2_47458889C165_0_HS_0_0_0_map.gif",
                                               "height": 200,
                                               "width": 170
                                              }
                                             ]
                                            },
                                            "pitch": -1.16,
                                            "yaw": 78.74
                                           }
                                          ]
                                         },
                                         {
                                          "inertia": false,
                                          "hfov": 45,
                                          "image": {
                                           "class": "ImageResource",
                                           "levels": [
                                            {
                                             "class": "ImageResourceLevel",
                                             "url": "media/panorama_9DEE2A67_9574_527E_41B3_6CDED57A89AC_tcap0.png",
                                             "height": 850,
                                             "width": 850
                                            }
                                           ]
                                          },
                                          "id": "panorama_9E871860_99A7_29D4_41C2_47458889C165_tcap0",
                                          "class": "TripodCapPanoramaOverlay",
                                          "angle": 0,
                                          "rotate": true
                                         }
                                        ],
                                        "back": {
                                         "class": "ImageResource",
                                         "levels": [
                                          {
                                           "class": "ImageResourceLevel",
                                           "url": "media/panorama_9E871860_99A7_29D4_41C2_47458889C165_b_hq.jpeg",
                                           "height": 1904,
                                           "width": 1904
                                          },
                                          {
                                           "class": "ImageResourceLevel",
                                           "url": "media/panorama_9E871860_99A7_29D4_41C2_47458889C165_b.jpeg",
                                           "height": 1024,
                                           "width": 1024
                                          }
                                         ]
                                        },
                                        "top": {
                                         "class": "ImageResource",
                                         "levels": [
                                          {
                                           "class": "ImageResourceLevel",
                                           "url": "media/panorama_9E871860_99A7_29D4_41C2_47458889C165_u_hq.jpeg",
                                           "height": 1904,
                                           "width": 1904
                                          },
                                          {
                                           "class": "ImageResourceLevel",
                                           "url": "media/panorama_9E871860_99A7_29D4_41C2_47458889C165_u.jpeg",
                                           "height": 1024,
                                           "width": 1024
                                          }
                                         ]
                                        },
                                        "class": "CubicPanoramaFrame",
                                        "right": {
                                         "class": "ImageResource",
                                         "levels": [
                                          {
                                           "class": "ImageResourceLevel",
                                           "url": "media/panorama_9E871860_99A7_29D4_41C2_47458889C165_r_hq.jpeg",
                                           "height": 1904,
                                           "width": 1904
                                          },
                                          {
                                           "class": "ImageResourceLevel",
                                           "url": "media/panorama_9E871860_99A7_29D4_41C2_47458889C165_r.jpeg",
                                           "height": 1024,
                                           "width": 1024
                                          }
                                         ]
                                        },
                                        "bottom": {
                                         "class": "ImageResource",
                                         "levels": [
                                          {
                                           "class": "ImageResourceLevel",
                                           "url": "media/panorama_9E871860_99A7_29D4_41C2_47458889C165_d_hq.jpeg",
                                           "height": 1904,
                                           "width": 1904
                                          },
                                          {
                                           "class": "ImageResourceLevel",
                                           "url": "media/panorama_9E871860_99A7_29D4_41C2_47458889C165_d.jpeg",
                                           "height": 1024,
                                           "width": 1024
                                          }
                                         ]
                                        },
                                        "left": {
                                         "class": "ImageResource",
                                         "levels": [
                                          {
                                           "class": "ImageResourceLevel",
                                           "url": "media/panorama_9E871860_99A7_29D4_41C2_47458889C165_l_hq.jpeg",
                                           "height": 1904,
                                           "width": 1904
                                          },
                                          {
                                           "class": "ImageResourceLevel",
                                           "url": "media/panorama_9E871860_99A7_29D4_41C2_47458889C165_l.jpeg",
                                           "height": 1024,
                                           "width": 1024
                                          }
                                         ]
                                        },
                                        "front": {
                                         "class": "ImageResource",
                                         "levels": [
                                          {
                                           "class": "ImageResourceLevel",
                                           "url": "media/panorama_9E871860_99A7_29D4_41C2_47458889C165_f_hq.jpeg",
                                           "height": 1904,
                                           "width": 1904
                                          },
                                          {
                                           "class": "ImageResourceLevel",
                                           "url": "media/panorama_9E871860_99A7_29D4_41C2_47458889C165_f.jpeg",
                                           "height": 1024,
                                           "width": 1024
                                          }
                                         ]
                                        }
                                       }
                                      ],
                                      "pitch": 0
                                     },
                                     "yaw": -175.07
                                    },
                                    {
                                     "class": "AdjacentPanorama",
                                     "distance": 1,
                                     "backwardYaw": -108.84,
                                     "panorama": "this.panorama_9DEBEB67_954C_327E_41D8_7DCCDDC912A8",
                                     "yaw": 3.81
                                    }
                                   ],
                                   "partial": false,
                                   "hfov": 360,
                                   "thumbnailUrl": "media/panorama_9E805266_99A1_F9DC_41DA_C7892E9AA757_t.jpg",
                                   "id": "panorama_9E805266_99A1_F9DC_41DA_C7892E9AA757",
                                   "vfov": 180,
                                   "class": "Panorama",
                                   "frames": [
                                    {
                                     "thumbnailUrl": "media/panorama_9E805266_99A1_F9DC_41DA_C7892E9AA757_t.jpg",
                                     "overlays": [
                                      {
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_9E871860_99A7_29D4_41C2_47458889C165, this.camera_9639C88E_9B23_0797_41E0_DD0069788009); this.mainPlayList.set('selectedIndex', 11)"
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "enabledInCardboard": true,
                                       "id": "overlay_97EDCAE7_99E0_EEDC_41E0_9133F0180C84",
                                       "class": "HotspotPanoramaOverlay",
                                       "useHandCursor": true,
                                       "items": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_9E805266_99A1_F9DC_41DA_C7892E9AA757_0_HS_0_0.png",
                                            "height": 268,
                                            "width": 239
                                           }
                                          ]
                                         },
                                         "hfov": 14.36,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "pitch": -2.71,
                                         "yaw": -175.07
                                        }
                                       ],
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 14.36,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_9E805266_99A1_F9DC_41DA_C7892E9AA757_0_HS_0_0_0_map.gif",
                                            "height": 134,
                                            "width": 119
                                           }
                                          ]
                                         },
                                         "pitch": -2.71,
                                         "yaw": -175.07
                                        }
                                       ]
                                      },
                                      {
                                       "bleachingDistance": 0.33,
                                       "id": "overlay_8BD85010_99E1_3974_41DC_8AE4934E6A01",
                                       "class": "LensFlarePanoramaOverlay",
                                       "pitch": 5.62,
                                       "bleaching": 0.7,
                                       "yaw": 30.26
                                      },
                                      {
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_9DEBEB67_954C_327E_41D8_7DCCDDC912A8, this.camera_963A68AA_9B23_079F_41D3_D6FB206D5FE2); this.mainPlayList.set('selectedIndex', 2)"
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "enabledInCardboard": true,
                                       "id": "overlay_8B118937_99AF_2BBC_41C8_4F18DD25C8C5",
                                       "class": "HotspotPanoramaOverlay",
                                       "useHandCursor": true,
                                       "items": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_9E805266_99A1_F9DC_41DA_C7892E9AA757_0_HS_1_0.png",
                                            "height": 287,
                                            "width": 311
                                           }
                                          ]
                                         },
                                         "hfov": 18.56,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "pitch": -6.19,
                                         "yaw": 3.81
                                        }
                                       ],
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 18.56,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_9E805266_99A1_F9DC_41DA_C7892E9AA757_0_HS_1_0_0_map.gif",
                                            "height": 143,
                                            "width": 155
                                           }
                                          ]
                                         },
                                         "pitch": -6.19,
                                         "yaw": 3.81
                                        }
                                       ]
                                      },
                                      {
                                       "inertia": false,
                                       "hfov": 45,
                                       "image": {
                                        "class": "ImageResource",
                                        "levels": [
                                         {
                                          "class": "ImageResourceLevel",
                                          "url": "media/panorama_9DEE2A67_9574_527E_41B3_6CDED57A89AC_tcap0.png",
                                          "height": 850,
                                          "width": 850
                                         }
                                        ]
                                       },
                                       "id": "panorama_9E805266_99A1_F9DC_41DA_C7892E9AA757_tcap0",
                                       "class": "TripodCapPanoramaOverlay",
                                       "angle": 0,
                                       "rotate": true
                                      }
                                     ],
                                     "back": {
                                      "class": "ImageResource",
                                      "levels": [
                                       {
                                        "class": "ImageResourceLevel",
                                        "url": "media/panorama_9E805266_99A1_F9DC_41DA_C7892E9AA757_b_hq.jpeg",
                                        "height": 1904,
                                        "width": 1904
                                       },
                                       {
                                        "class": "ImageResourceLevel",
                                        "url": "media/panorama_9E805266_99A1_F9DC_41DA_C7892E9AA757_b.jpeg",
                                        "height": 1024,
                                        "width": 1024
                                       }
                                      ]
                                     },
                                     "top": {
                                      "class": "ImageResource",
                                      "levels": [
                                       {
                                        "class": "ImageResourceLevel",
                                        "url": "media/panorama_9E805266_99A1_F9DC_41DA_C7892E9AA757_u_hq.jpeg",
                                        "height": 1904,
                                        "width": 1904
                                       },
                                       {
                                        "class": "ImageResourceLevel",
                                        "url": "media/panorama_9E805266_99A1_F9DC_41DA_C7892E9AA757_u.jpeg",
                                        "height": 1024,
                                        "width": 1024
                                       }
                                      ]
                                     },
                                     "class": "CubicPanoramaFrame",
                                     "right": {
                                      "class": "ImageResource",
                                      "levels": [
                                       {
                                        "class": "ImageResourceLevel",
                                        "url": "media/panorama_9E805266_99A1_F9DC_41DA_C7892E9AA757_r_hq.jpeg",
                                        "height": 1904,
                                        "width": 1904
                                       },
                                       {
                                        "class": "ImageResourceLevel",
                                        "url": "media/panorama_9E805266_99A1_F9DC_41DA_C7892E9AA757_r.jpeg",
                                        "height": 1024,
                                        "width": 1024
                                       }
                                      ]
                                     },
                                     "bottom": {
                                      "class": "ImageResource",
                                      "levels": [
                                       {
                                        "class": "ImageResourceLevel",
                                        "url": "media/panorama_9E805266_99A1_F9DC_41DA_C7892E9AA757_d_hq.jpeg",
                                        "height": 1904,
                                        "width": 1904
                                       },
                                       {
                                        "class": "ImageResourceLevel",
                                        "url": "media/panorama_9E805266_99A1_F9DC_41DA_C7892E9AA757_d.jpeg",
                                        "height": 1024,
                                        "width": 1024
                                       }
                                      ]
                                     },
                                     "left": {
                                      "class": "ImageResource",
                                      "levels": [
                                       {
                                        "class": "ImageResourceLevel",
                                        "url": "media/panorama_9E805266_99A1_F9DC_41DA_C7892E9AA757_l_hq.jpeg",
                                        "height": 1904,
                                        "width": 1904
                                       },
                                       {
                                        "class": "ImageResourceLevel",
                                        "url": "media/panorama_9E805266_99A1_F9DC_41DA_C7892E9AA757_l.jpeg",
                                        "height": 1024,
                                        "width": 1024
                                       }
                                      ]
                                     },
                                     "front": {
                                      "class": "ImageResource",
                                      "levels": [
                                       {
                                        "class": "ImageResourceLevel",
                                        "url": "media/panorama_9E805266_99A1_F9DC_41DA_C7892E9AA757_f_hq.jpeg",
                                        "height": 1904,
                                        "width": 1904
                                       },
                                       {
                                        "class": "ImageResourceLevel",
                                        "url": "media/panorama_9E805266_99A1_F9DC_41DA_C7892E9AA757_f.jpeg",
                                        "height": 1024,
                                        "width": 1024
                                       }
                                      ]
                                     }
                                    }
                                   ],
                                   "pitch": 0
                                  },
                                  "yaw": -108.84
                                 },
                                 {
                                  "class": "AdjacentPanorama",
                                  "distance": 1,
                                  "backwardYaw": -26.03,
                                  "panorama": {
                                   "label": "Pot",
                                   "hfovMin": 60,
                                   "hfovMax": 120,
                                   "adjacentPanoramas": [
                                    {
                                     "class": "AdjacentPanorama",
                                     "distance": 1,
                                     "backwardYaw": -60.38,
                                     "panorama": "this.panorama_9DEE2A67_9574_527E_41B3_6CDED57A89AC",
                                     "yaw": -141.66
                                    },
                                    {
                                     "class": "AdjacentPanorama",
                                     "distance": 1,
                                     "backwardYaw": 173.12,
                                     "panorama": "this.panorama_9DEBEB67_954C_327E_41D8_7DCCDDC912A8",
                                     "yaw": -26.03
                                    },
                                    {
                                     "class": "AdjacentPanorama",
                                     "distance": 1,
                                     "backwardYaw": -124.71,
                                     "panorama": "this.panorama_9DB3106C_9573_EE71_41E1_CD9E6ABFBC81",
                                     "yaw": 121.11
                                    }
                                   ],
                                   "partial": false,
                                   "hfov": 360,
                                   "thumbnailUrl": "media/panorama_9DE8A30E_9574_33CE_41AE_445072CA27C0_t.jpg",
                                   "id": "panorama_9DE8A30E_9574_33CE_41AE_445072CA27C0",
                                   "vfov": 180,
                                   "class": "Panorama",
                                   "frames": [
                                    {
                                     "thumbnailUrl": "media/panorama_9DE8A30E_9574_33CE_41AE_445072CA27C0_t.jpg",
                                     "overlays": [
                                      {
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_9DEBEB67_954C_327E_41D8_7DCCDDC912A8, this.camera_96B55DBB_9B23_19FD_41D0_49D99F006E81); this.mainPlayList.set('selectedIndex', 2)"
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "enabledInCardboard": true,
                                       "id": "overlay_9EAF92E4_9574_5272_41D4_AEE908737E19",
                                       "class": "HotspotPanoramaOverlay",
                                       "useHandCursor": true,
                                       "items": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_9DE8A30E_9574_33CE_41AE_445072CA27C0_0_HS_1_0.png",
                                            "height": 159,
                                            "width": 199
                                           }
                                          ]
                                         },
                                         "hfov": 11.85,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "pitch": -8.22,
                                         "yaw": -26.03
                                        }
                                       ],
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 11.85,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_9DE8A30E_9574_33CE_41AE_445072CA27C0_0_HS_1_0_0_map.gif",
                                            "height": 79,
                                            "width": 99
                                           }
                                          ]
                                         },
                                         "pitch": -8.22,
                                         "yaw": -26.03
                                        }
                                       ]
                                      },
                                      {
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_9DEE2A67_9574_527E_41B3_6CDED57A89AC, this.camera_96BE2D82_9B23_198F_41E0_9C326DE4E123); this.mainPlayList.set('selectedIndex', 0)"
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "enabledInCardboard": true,
                                       "id": "overlay_9FAB31E1_957C_6E72_41E1_FCC4435B5277",
                                       "class": "HotspotPanoramaOverlay",
                                       "useHandCursor": true,
                                       "items": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_9DE8A30E_9574_33CE_41AE_445072CA27C0_0_HS_0_0.png",
                                            "height": 177,
                                            "width": 219
                                           }
                                          ]
                                         },
                                         "hfov": 13.04,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "pitch": -7.84,
                                         "yaw": -141.66
                                        }
                                       ],
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 13.04,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_9DE8A30E_9574_33CE_41AE_445072CA27C0_0_HS_0_0_0_map.gif",
                                            "height": 88,
                                            "width": 109
                                           }
                                          ]
                                         },
                                         "pitch": -7.84,
                                         "yaw": -141.66
                                        }
                                       ]
                                      },
                                      {
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_9DB3106C_9573_EE71_41E1_CD9E6ABFBC81, this.camera_96A9ADFA_9B23_197F_41E1_DCFA72D4BE8E); this.mainPlayList.set('selectedIndex', 17)"
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "enabledInCardboard": true,
                                       "id": "overlay_98D37D91_953C_36D2_41E0_245BA1119D28",
                                       "class": "HotspotPanoramaOverlay",
                                       "useHandCursor": true,
                                       "items": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_9DE8A30E_9574_33CE_41AE_445072CA27C0_0_HS_2_0.png",
                                            "height": 183,
                                            "width": 201
                                           }
                                          ]
                                         },
                                         "hfov": 12.03,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "pitch": 5.63,
                                         "yaw": 121.11
                                        }
                                       ],
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 12.03,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_9DE8A30E_9574_33CE_41AE_445072CA27C0_0_HS_2_0_0_map.gif",
                                            "height": 91,
                                            "width": 100
                                           }
                                          ]
                                         },
                                         "pitch": 5.63,
                                         "yaw": 121.11
                                        }
                                       ]
                                      },
                                      {
                                       "inertia": false,
                                       "hfov": 45,
                                       "image": {
                                        "class": "ImageResource",
                                        "levels": [
                                         {
                                          "class": "ImageResourceLevel",
                                          "url": "media/panorama_9DEE2A67_9574_527E_41B3_6CDED57A89AC_tcap0.png",
                                          "height": 850,
                                          "width": 850
                                         }
                                        ]
                                       },
                                       "id": "panorama_9DE8A30E_9574_33CE_41AE_445072CA27C0_tcap0",
                                       "class": "TripodCapPanoramaOverlay",
                                       "angle": 0,
                                       "rotate": true
                                      }
                                     ],
                                     "back": {
                                      "class": "ImageResource",
                                      "levels": [
                                       {
                                        "class": "ImageResourceLevel",
                                        "url": "media/panorama_9DE8A30E_9574_33CE_41AE_445072CA27C0_b_hq.jpeg",
                                        "height": 1904,
                                        "width": 1904
                                       },
                                       {
                                        "class": "ImageResourceLevel",
                                        "url": "media/panorama_9DE8A30E_9574_33CE_41AE_445072CA27C0_b.jpeg",
                                        "height": 1024,
                                        "width": 1024
                                       }
                                      ]
                                     },
                                     "top": {
                                      "class": "ImageResource",
                                      "levels": [
                                       {
                                        "class": "ImageResourceLevel",
                                        "url": "media/panorama_9DE8A30E_9574_33CE_41AE_445072CA27C0_u_hq.jpeg",
                                        "height": 1904,
                                        "width": 1904
                                       },
                                       {
                                        "class": "ImageResourceLevel",
                                        "url": "media/panorama_9DE8A30E_9574_33CE_41AE_445072CA27C0_u.jpeg",
                                        "height": 1024,
                                        "width": 1024
                                       }
                                      ]
                                     },
                                     "class": "CubicPanoramaFrame",
                                     "right": {
                                      "class": "ImageResource",
                                      "levels": [
                                       {
                                        "class": "ImageResourceLevel",
                                        "url": "media/panorama_9DE8A30E_9574_33CE_41AE_445072CA27C0_r_hq.jpeg",
                                        "height": 1904,
                                        "width": 1904
                                       },
                                       {
                                        "class": "ImageResourceLevel",
                                        "url": "media/panorama_9DE8A30E_9574_33CE_41AE_445072CA27C0_r.jpeg",
                                        "height": 1024,
                                        "width": 1024
                                       }
                                      ]
                                     },
                                     "bottom": {
                                      "class": "ImageResource",
                                      "levels": [
                                       {
                                        "class": "ImageResourceLevel",
                                        "url": "media/panorama_9DE8A30E_9574_33CE_41AE_445072CA27C0_d_hq.jpeg",
                                        "height": 1904,
                                        "width": 1904
                                       },
                                       {
                                        "class": "ImageResourceLevel",
                                        "url": "media/panorama_9DE8A30E_9574_33CE_41AE_445072CA27C0_d.jpeg",
                                        "height": 1024,
                                        "width": 1024
                                       }
                                      ]
                                     },
                                     "left": {
                                      "class": "ImageResource",
                                      "levels": [
                                       {
                                        "class": "ImageResourceLevel",
                                        "url": "media/panorama_9DE8A30E_9574_33CE_41AE_445072CA27C0_l_hq.jpeg",
                                        "height": 1904,
                                        "width": 1904
                                       },
                                       {
                                        "class": "ImageResourceLevel",
                                        "url": "media/panorama_9DE8A30E_9574_33CE_41AE_445072CA27C0_l.jpeg",
                                        "height": 1024,
                                        "width": 1024
                                       }
                                      ]
                                     },
                                     "front": {
                                      "class": "ImageResource",
                                      "levels": [
                                       {
                                        "class": "ImageResourceLevel",
                                        "url": "media/panorama_9DE8A30E_9574_33CE_41AE_445072CA27C0_f_hq.jpeg",
                                        "height": 1904,
                                        "width": 1904
                                       },
                                       {
                                        "class": "ImageResourceLevel",
                                        "url": "media/panorama_9DE8A30E_9574_33CE_41AE_445072CA27C0_f.jpeg",
                                        "height": 1024,
                                        "width": 1024
                                       }
                                      ]
                                     }
                                    }
                                   ],
                                   "pitch": 0
                                  },
                                  "yaw": 173.12
                                 }
                                ],
                                "partial": false,
                                "hfov": 360,
                                "thumbnailUrl": "media/panorama_9DEBEB67_954C_327E_41D8_7DCCDDC912A8_t.jpg",
                                "id": "panorama_9DEBEB67_954C_327E_41D8_7DCCDDC912A8",
                                "vfov": 180,
                                "class": "Panorama",
                                "frames": [
                                 {
                                  "thumbnailUrl": "media/panorama_9DEBEB67_954C_327E_41D8_7DCCDDC912A8_t.jpg",
                                  "overlays": [
                                   {
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_9DE8A30E_9574_33CE_41AE_445072CA27C0, this.camera_96F580D1_9B23_078D_41CF_308B12387461); this.mainPlayList.set('selectedIndex', 1)"
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "enabledInCardboard": true,
                                    "id": "overlay_991775A4_957C_36F2_41D6_DE3C50950BBC",
                                    "class": "HotspotPanoramaOverlay",
                                    "useHandCursor": true,
                                    "items": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_9DEBEB67_954C_327E_41D8_7DCCDDC912A8_0_HS_2_0.png",
                                         "height": 224,
                                         "width": 219
                                        }
                                       ]
                                      },
                                      "hfov": 13.11,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -5.81,
                                      "yaw": 173.12
                                     }
                                    ],
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 13.11,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_9DEBEB67_954C_327E_41D8_7DCCDDC912A8_0_HS_2_0_0_map.gif",
                                         "height": 112,
                                         "width": 109
                                        }
                                       ]
                                      },
                                      "pitch": -5.81,
                                      "yaw": 173.12
                                     }
                                    ]
                                   },
                                   {
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_9DEE2A67_9574_527E_41B3_6CDED57A89AC, this.camera_96FA4066_9B23_0697_41E1_E0FC9F258967); this.mainPlayList.set('selectedIndex', 0)"
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "enabledInCardboard": true,
                                    "id": "overlay_9F1795A8_9573_D6F2_41DB_73DB19B9A6FA",
                                    "class": "HotspotPanoramaOverlay",
                                    "useHandCursor": true,
                                    "items": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_9DEBEB67_954C_327E_41D8_7DCCDDC912A8_0_HS_1_0.png",
                                         "height": 116,
                                         "width": 137
                                        }
                                       ]
                                      },
                                      "hfov": 8.24,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": 2.18,
                                      "yaw": -146.04
                                     }
                                    ],
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 8.24,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_9DEBEB67_954C_327E_41D8_7DCCDDC912A8_0_HS_1_0_0_map.gif",
                                         "height": 58,
                                         "width": 68
                                        }
                                       ]
                                      },
                                      "pitch": 2.18,
                                      "yaw": -146.04
                                     }
                                    ]
                                   },
                                   {
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_9DE8CF8D_9574_32B2_416C_00D5CD6DA04E, this.camera_96C7002C_9B23_069B_41DC_D23202D1CCC4); this.mainPlayList.set('selectedIndex', 3)"
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "enabledInCardboard": true,
                                    "id": "overlay_999FE03A_9554_6DD6_41D7_8B244B54787E",
                                    "class": "HotspotPanoramaOverlay",
                                    "useHandCursor": true,
                                    "items": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_9DEBEB67_954C_327E_41D8_7DCCDDC912A8_0_HS_0_0.png",
                                         "height": 156,
                                         "width": 163
                                        }
                                       ]
                                      },
                                      "hfov": 9.81,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": 4.3,
                                      "yaw": -83.02
                                     }
                                    ],
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 9.81,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_9DEBEB67_954C_327E_41D8_7DCCDDC912A8_0_HS_0_0_0_map.gif",
                                         "height": 78,
                                         "width": 81
                                        }
                                       ]
                                      },
                                      "pitch": 4.3,
                                      "yaw": -83.02
                                     }
                                    ]
                                   },
                                   {
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_9E805266_99A1_F9DC_41DA_C7892E9AA757, this.camera_96FE909B_9B23_07BC_41E2_E3F1E7B98E14); this.mainPlayList.set('selectedIndex', 13)"
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "enabledInCardboard": true,
                                    "id": "overlay_8B3578FD_99AF_6AAC_41AB_F592BDD3B150",
                                    "class": "HotspotPanoramaOverlay",
                                    "useHandCursor": true,
                                    "items": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_9DEBEB67_954C_327E_41D8_7DCCDDC912A8_0_HS_3_0.png",
                                         "height": 66,
                                         "width": 81
                                        }
                                       ]
                                      },
                                      "hfov": 4.87,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": 3.36,
                                      "yaw": -108.84
                                     }
                                    ],
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 4.87,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_9DEBEB67_954C_327E_41D8_7DCCDDC912A8_0_HS_3_0_0_map.gif",
                                         "height": 33,
                                         "width": 40
                                        }
                                       ]
                                      },
                                      "pitch": 3.36,
                                      "yaw": -108.84
                                     }
                                    ]
                                   },
                                   {
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "click": "this.mainPlayList.set('selectedIndex', 17)"
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "enabledInCardboard": true,
                                    "id": "overlay_8AB10535_99A3_1BBC_41DA_EAADA4DFA21C",
                                    "class": "HotspotPanoramaOverlay",
                                    "useHandCursor": true,
                                    "items": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_9DEBEB67_954C_327E_41D8_7DCCDDC912A8_0_HS_4_0.png",
                                         "height": 69,
                                         "width": 64
                                        }
                                       ]
                                      },
                                      "hfov": 3.88,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": 6.14,
                                      "yaw": -178.21
                                     }
                                    ],
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 3.88,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_9DEBEB67_954C_327E_41D8_7DCCDDC912A8_0_HS_4_0_0_map.gif",
                                         "height": 34,
                                         "width": 32
                                        }
                                       ]
                                      },
                                      "pitch": 6.14,
                                      "yaw": -178.21
                                     }
                                    ]
                                   },
                                   {
                                    "inertia": false,
                                    "hfov": 45,
                                    "image": {
                                     "class": "ImageResource",
                                     "levels": [
                                      {
                                       "class": "ImageResourceLevel",
                                       "url": "media/panorama_9DEE2A67_9574_527E_41B3_6CDED57A89AC_tcap0.png",
                                       "height": 850,
                                       "width": 850
                                      }
                                     ]
                                    },
                                    "id": "panorama_9DEBEB67_954C_327E_41D8_7DCCDDC912A8_tcap0",
                                    "class": "TripodCapPanoramaOverlay",
                                    "angle": 0,
                                    "rotate": true
                                   }
                                  ],
                                  "back": {
                                   "class": "ImageResource",
                                   "levels": [
                                    {
                                     "class": "ImageResourceLevel",
                                     "url": "media/panorama_9DEBEB67_954C_327E_41D8_7DCCDDC912A8_b_hq.jpeg",
                                     "height": 1904,
                                     "width": 1904
                                    },
                                    {
                                     "class": "ImageResourceLevel",
                                     "url": "media/panorama_9DEBEB67_954C_327E_41D8_7DCCDDC912A8_b.jpeg",
                                     "height": 1024,
                                     "width": 1024
                                    }
                                   ]
                                  },
                                  "top": {
                                   "class": "ImageResource",
                                   "levels": [
                                    {
                                     "class": "ImageResourceLevel",
                                     "url": "media/panorama_9DEBEB67_954C_327E_41D8_7DCCDDC912A8_u_hq.jpeg",
                                     "height": 1904,
                                     "width": 1904
                                    },
                                    {
                                     "class": "ImageResourceLevel",
                                     "url": "media/panorama_9DEBEB67_954C_327E_41D8_7DCCDDC912A8_u.jpeg",
                                     "height": 1024,
                                     "width": 1024
                                    }
                                   ]
                                  },
                                  "class": "CubicPanoramaFrame",
                                  "right": {
                                   "class": "ImageResource",
                                   "levels": [
                                    {
                                     "class": "ImageResourceLevel",
                                     "url": "media/panorama_9DEBEB67_954C_327E_41D8_7DCCDDC912A8_r_hq.jpeg",
                                     "height": 1904,
                                     "width": 1904
                                    },
                                    {
                                     "class": "ImageResourceLevel",
                                     "url": "media/panorama_9DEBEB67_954C_327E_41D8_7DCCDDC912A8_r.jpeg",
                                     "height": 1024,
                                     "width": 1024
                                    }
                                   ]
                                  },
                                  "bottom": {
                                   "class": "ImageResource",
                                   "levels": [
                                    {
                                     "class": "ImageResourceLevel",
                                     "url": "media/panorama_9DEBEB67_954C_327E_41D8_7DCCDDC912A8_d_hq.jpeg",
                                     "height": 1904,
                                     "width": 1904
                                    },
                                    {
                                     "class": "ImageResourceLevel",
                                     "url": "media/panorama_9DEBEB67_954C_327E_41D8_7DCCDDC912A8_d.jpeg",
                                     "height": 1024,
                                     "width": 1024
                                    }
                                   ]
                                  },
                                  "left": {
                                   "class": "ImageResource",
                                   "levels": [
                                    {
                                     "class": "ImageResourceLevel",
                                     "url": "media/panorama_9DEBEB67_954C_327E_41D8_7DCCDDC912A8_l_hq.jpeg",
                                     "height": 1904,
                                     "width": 1904
                                    },
                                    {
                                     "class": "ImageResourceLevel",
                                     "url": "media/panorama_9DEBEB67_954C_327E_41D8_7DCCDDC912A8_l.jpeg",
                                     "height": 1024,
                                     "width": 1024
                                    }
                                   ]
                                  },
                                  "front": {
                                   "class": "ImageResource",
                                   "levels": [
                                    {
                                     "class": "ImageResourceLevel",
                                     "url": "media/panorama_9DEBEB67_954C_327E_41D8_7DCCDDC912A8_f_hq.jpeg",
                                     "height": 1904,
                                     "width": 1904
                                    },
                                    {
                                     "class": "ImageResourceLevel",
                                     "url": "media/panorama_9DEBEB67_954C_327E_41D8_7DCCDDC912A8_f.jpeg",
                                     "height": 1024,
                                     "width": 1024
                                    }
                                   ]
                                  }
                                 }
                                ],
                                "pitch": 0
                               },
                               "yaw": 114.61
                              }
                             ],
                             "partial": false,
                             "hfov": 360,
                             "thumbnailUrl": "media/panorama_9DE8CF8D_9574_32B2_416C_00D5CD6DA04E_t.jpg",
                             "id": "panorama_9DE8CF8D_9574_32B2_416C_00D5CD6DA04E",
                             "vfov": 180,
                             "class": "Panorama",
                             "frames": [
                              {
                               "thumbnailUrl": "media/panorama_9DE8CF8D_9574_32B2_416C_00D5CD6DA04E_t.jpg",
                               "overlays": [
                                {
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_9DEABACC_9573_F2B1_41D5_9D1431797D46, this.camera_96699B2D_9B23_1A95_41E2_279DE0EBE307); this.mainPlayList.set('selectedIndex', 20)"
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "enabledInCardboard": true,
                                 "id": "overlay_988133EF_9554_524E_41C8_D1A3A2167B75",
                                 "class": "HotspotPanoramaOverlay",
                                 "useHandCursor": true,
                                 "items": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_9DE8CF8D_9574_32B2_416C_00D5CD6DA04E_0_HS_1_0.png",
                                      "height": 146,
                                      "width": 139
                                     }
                                    ]
                                   },
                                   "hfov": 8.37,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": 3.94,
                                   "yaw": -155.37
                                  }
                                 ],
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 8.37,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_9DE8CF8D_9574_32B2_416C_00D5CD6DA04E_0_HS_1_0_0_map.gif",
                                      "height": 73,
                                      "width": 69
                                     }
                                    ]
                                   },
                                   "pitch": 3.94,
                                   "yaw": -155.37
                                  }
                                 ]
                                },
                                {
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_9DEBEB67_954C_327E_41D8_7DCCDDC912A8, this.camera_966CCB57_9B23_1AB5_41B0_8397478D9903); this.mainPlayList.set('selectedIndex', 2)"
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "enabledInCardboard": true,
                                 "id": "overlay_980654CC_9554_36B2_41C8_9B9ECC0F9C04",
                                 "class": "HotspotPanoramaOverlay",
                                 "useHandCursor": true,
                                 "items": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_9DE8CF8D_9574_32B2_416C_00D5CD6DA04E_0_HS_0_0.png",
                                      "height": 204,
                                      "width": 247
                                     }
                                    ]
                                   },
                                   "hfov": 14.6,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": 10.44,
                                   "yaw": 114.61
                                  }
                                 ],
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 14.6,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_9DE8CF8D_9574_32B2_416C_00D5CD6DA04E_0_HS_0_0_0_map.gif",
                                      "height": 102,
                                      "width": 123
                                     }
                                    ]
                                   },
                                   "pitch": 10.44,
                                   "yaw": 114.61
                                  }
                                 ]
                                },
                                {
                                 "inertia": false,
                                 "hfov": 45,
                                 "image": {
                                  "class": "ImageResource",
                                  "levels": [
                                   {
                                    "class": "ImageResourceLevel",
                                    "url": "media/panorama_9DEE2A67_9574_527E_41B3_6CDED57A89AC_tcap0.png",
                                    "height": 850,
                                    "width": 850
                                   }
                                  ]
                                 },
                                 "id": "panorama_9DE8CF8D_9574_32B2_416C_00D5CD6DA04E_tcap0",
                                 "class": "TripodCapPanoramaOverlay",
                                 "angle": 0,
                                 "rotate": true
                                }
                               ],
                               "back": {
                                "class": "ImageResource",
                                "levels": [
                                 {
                                  "class": "ImageResourceLevel",
                                  "url": "media/panorama_9DE8CF8D_9574_32B2_416C_00D5CD6DA04E_b_hq.jpeg",
                                  "height": 1904,
                                  "width": 1904
                                 },
                                 {
                                  "class": "ImageResourceLevel",
                                  "url": "media/panorama_9DE8CF8D_9574_32B2_416C_00D5CD6DA04E_b.jpeg",
                                  "height": 1024,
                                  "width": 1024
                                 }
                                ]
                               },
                               "top": {
                                "class": "ImageResource",
                                "levels": [
                                 {
                                  "class": "ImageResourceLevel",
                                  "url": "media/panorama_9DE8CF8D_9574_32B2_416C_00D5CD6DA04E_u_hq.jpeg",
                                  "height": 1904,
                                  "width": 1904
                                 },
                                 {
                                  "class": "ImageResourceLevel",
                                  "url": "media/panorama_9DE8CF8D_9574_32B2_416C_00D5CD6DA04E_u.jpeg",
                                  "height": 1024,
                                  "width": 1024
                                 }
                                ]
                               },
                               "class": "CubicPanoramaFrame",
                               "right": {
                                "class": "ImageResource",
                                "levels": [
                                 {
                                  "class": "ImageResourceLevel",
                                  "url": "media/panorama_9DE8CF8D_9574_32B2_416C_00D5CD6DA04E_r_hq.jpeg",
                                  "height": 1904,
                                  "width": 1904
                                 },
                                 {
                                  "class": "ImageResourceLevel",
                                  "url": "media/panorama_9DE8CF8D_9574_32B2_416C_00D5CD6DA04E_r.jpeg",
                                  "height": 1024,
                                  "width": 1024
                                 }
                                ]
                               },
                               "bottom": {
                                "class": "ImageResource",
                                "levels": [
                                 {
                                  "class": "ImageResourceLevel",
                                  "url": "media/panorama_9DE8CF8D_9574_32B2_416C_00D5CD6DA04E_d_hq.jpeg",
                                  "height": 1904,
                                  "width": 1904
                                 },
                                 {
                                  "class": "ImageResourceLevel",
                                  "url": "media/panorama_9DE8CF8D_9574_32B2_416C_00D5CD6DA04E_d.jpeg",
                                  "height": 1024,
                                  "width": 1024
                                 }
                                ]
                               },
                               "left": {
                                "class": "ImageResource",
                                "levels": [
                                 {
                                  "class": "ImageResourceLevel",
                                  "url": "media/panorama_9DE8CF8D_9574_32B2_416C_00D5CD6DA04E_l_hq.jpeg",
                                  "height": 1904,
                                  "width": 1904
                                 },
                                 {
                                  "class": "ImageResourceLevel",
                                  "url": "media/panorama_9DE8CF8D_9574_32B2_416C_00D5CD6DA04E_l.jpeg",
                                  "height": 1024,
                                  "width": 1024
                                 }
                                ]
                               },
                               "front": {
                                "class": "ImageResource",
                                "levels": [
                                 {
                                  "class": "ImageResourceLevel",
                                  "url": "media/panorama_9DE8CF8D_9574_32B2_416C_00D5CD6DA04E_f_hq.jpeg",
                                  "height": 1904,
                                  "width": 1904
                                 },
                                 {
                                  "class": "ImageResourceLevel",
                                  "url": "media/panorama_9DE8CF8D_9574_32B2_416C_00D5CD6DA04E_f.jpeg",
                                  "height": 1024,
                                  "width": 1024
                                 }
                                ]
                               }
                              }
                             ],
                             "pitch": 0
                            },
                            "yaw": 171.35
                           },
                           {
                            "class": "AdjacentPanorama",
                            "distance": 1,
                            "backwardYaw": 100.56,
                            "panorama": "this.panorama_9CE1ECCD_954C_56B3_41C0_001E83533F54",
                            "yaw": -25.85
                           },
                           {
                            "class": "AdjacentPanorama",
                            "distance": 1,
                            "backwardYaw": -72.85,
                            "panorama": "this.panorama_9DEAB61D_9573_D5D2_41DB_7100FF28F1C6",
                            "yaw": -170.08
                           },
                           {
                            "class": "AdjacentPanorama",
                            "distance": 1,
                            "backwardYaw": 15.42,
                            "panorama": "this.panorama_9DEDA5CF_9573_D64E_41D0_B77916FF1472",
                            "yaw": -72.93
                           }
                          ],
                          "partial": false,
                          "hfov": 360,
                          "thumbnailUrl": "media/panorama_9DEABACC_9573_F2B1_41D5_9D1431797D46_t.jpg",
                          "id": "panorama_9DEABACC_9573_F2B1_41D5_9D1431797D46",
                          "vfov": 180,
                          "class": "Panorama",
                          "frames": [
                           {
                            "thumbnailUrl": "media/panorama_9DEABACC_9573_F2B1_41D5_9D1431797D46_t.jpg",
                            "overlays": [
                             {
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_9DE8CF8D_9574_32B2_416C_00D5CD6DA04E, this.camera_961E17B6_9B23_09F7_41E2_B8C3B3F74298); this.mainPlayList.set('selectedIndex', 3)"
                               }
                              ],
                              "rollOverDisplay": false,
                              "enabledInCardboard": true,
                              "id": "overlay_985E9060_9554_2E72_41DA_64835B2916FC",
                              "class": "HotspotPanoramaOverlay",
                              "useHandCursor": true,
                              "items": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_9DEABACC_9573_F2B1_41D5_9D1431797D46_0_HS_2_0.png",
                                   "height": 165,
                                   "width": 176
                                  }
                                 ]
                                },
                                "hfov": 10.51,
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": 5.92,
                                "yaw": 171.35
                               }
                              ],
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 10.51,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_9DEABACC_9573_F2B1_41D5_9D1431797D46_0_HS_2_0_0_map.gif",
                                   "height": 82,
                                   "width": 88
                                  }
                                 ]
                                },
                                "pitch": 5.92,
                                "yaw": 171.35
                               }
                              ]
                             },
                             {
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_9CE1ECCD_954C_56B3_41C0_001E83533F54, this.camera_9610A7D1_9B23_098C_41B2_D5F9C2E185D4); this.mainPlayList.set('selectedIndex', 19)"
                               }
                              ],
                              "rollOverDisplay": false,
                              "enabledInCardboard": true,
                              "id": "overlay_9A75C07A_9554_2E56_41CF_8EBA41C21708",
                              "class": "HotspotPanoramaOverlay",
                              "useHandCursor": true,
                              "items": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_9DEABACC_9573_F2B1_41D5_9D1431797D46_0_HS_1_0.png",
                                   "height": 194,
                                   "width": 233
                                  }
                                 ]
                                },
                                "hfov": 13.81,
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -9.87,
                                "yaw": -25.85
                               }
                              ],
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 13.81,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_9DEABACC_9573_F2B1_41D5_9D1431797D46_0_HS_1_0_0_map.gif",
                                   "height": 97,
                                   "width": 116
                                  }
                                 ]
                                },
                                "pitch": -9.87,
                                "yaw": -25.85
                               }
                              ]
                             },
                             {
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "displayTooltipInTouchScreens": true,
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_9DEAB61D_9573_D5D2_41DB_7100FF28F1C6, this.camera_961597EC_9B23_099B_41D4_E788AA2DA463); this.mainPlayList.set('selectedIndex', 10)",
                                "toolTip": "Go to the kitchen"
                               }
                              ],
                              "rollOverDisplay": false,
                              "enabledInCardboard": true,
                              "id": "overlay_990E1444_9554_35B2_41C0_BD06F8AB301E",
                              "class": "HotspotPanoramaOverlay",
                              "useHandCursor": true,
                              "items": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_9DEABACC_9573_F2B1_41D5_9D1431797D46_0_HS_0_0.png",
                                   "height": 162,
                                   "width": 195
                                  }
                                 ]
                                },
                                "hfov": 11.5,
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": 11.84,
                                "yaw": -170.08
                               }
                              ],
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 11.5,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_9DEABACC_9573_F2B1_41D5_9D1431797D46_0_HS_0_0_0_map.gif",
                                   "height": 81,
                                   "width": 97
                                  }
                                 ]
                                },
                                "pitch": 11.84,
                                "yaw": -170.08
                               }
                              ]
                             },
                             {
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_9DEDA5CF_9573_D64E_41D0_B77916FF1472, this.camera_96096805_9B23_0695_41DE_AB89842CD83F); this.mainPlayList.set('selectedIndex', 18)"
                               }
                              ],
                              "rollOverDisplay": false,
                              "enabledInCardboard": true,
                              "id": "overlay_9BF43E26_95D4_75F1_41CE_D1BB8B6FD87D",
                              "class": "HotspotPanoramaOverlay",
                              "useHandCursor": true,
                              "items": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_9DEABACC_9573_F2B1_41D5_9D1431797D46_0_HS_3_0.png",
                                   "height": 141,
                                   "width": 155
                                  }
                                 ]
                                },
                                "hfov": 9.25,
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -6.32,
                                "yaw": -72.93
                               }
                              ],
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 9.25,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_9DEABACC_9573_F2B1_41D5_9D1431797D46_0_HS_3_0_0_map.gif",
                                   "height": 70,
                                   "width": 77
                                  }
                                 ]
                                },
                                "pitch": -6.32,
                                "yaw": -72.93
                               }
                              ]
                             },
                             {
                              "inertia": false,
                              "hfov": 45,
                              "image": {
                               "class": "ImageResource",
                               "levels": [
                                {
                                 "class": "ImageResourceLevel",
                                 "url": "media/panorama_9DEE2A67_9574_527E_41B3_6CDED57A89AC_tcap0.png",
                                 "height": 850,
                                 "width": 850
                                }
                               ]
                              },
                              "id": "panorama_9DEABACC_9573_F2B1_41D5_9D1431797D46_tcap0",
                              "class": "TripodCapPanoramaOverlay",
                              "angle": 0,
                              "rotate": true
                             }
                            ],
                            "back": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "class": "ImageResourceLevel",
                               "url": "media/panorama_9DEABACC_9573_F2B1_41D5_9D1431797D46_b_hq.jpeg",
                               "height": 1904,
                               "width": 1904
                              },
                              {
                               "class": "ImageResourceLevel",
                               "url": "media/panorama_9DEABACC_9573_F2B1_41D5_9D1431797D46_b.jpeg",
                               "height": 1024,
                               "width": 1024
                              }
                             ]
                            },
                            "top": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "class": "ImageResourceLevel",
                               "url": "media/panorama_9DEABACC_9573_F2B1_41D5_9D1431797D46_u_hq.jpeg",
                               "height": 1904,
                               "width": 1904
                              },
                              {
                               "class": "ImageResourceLevel",
                               "url": "media/panorama_9DEABACC_9573_F2B1_41D5_9D1431797D46_u.jpeg",
                               "height": 1024,
                               "width": 1024
                              }
                             ]
                            },
                            "class": "CubicPanoramaFrame",
                            "right": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "class": "ImageResourceLevel",
                               "url": "media/panorama_9DEABACC_9573_F2B1_41D5_9D1431797D46_r_hq.jpeg",
                               "height": 1904,
                               "width": 1904
                              },
                              {
                               "class": "ImageResourceLevel",
                               "url": "media/panorama_9DEABACC_9573_F2B1_41D5_9D1431797D46_r.jpeg",
                               "height": 1024,
                               "width": 1024
                              }
                             ]
                            },
                            "bottom": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "class": "ImageResourceLevel",
                               "url": "media/panorama_9DEABACC_9573_F2B1_41D5_9D1431797D46_d_hq.jpeg",
                               "height": 1904,
                               "width": 1904
                              },
                              {
                               "class": "ImageResourceLevel",
                               "url": "media/panorama_9DEABACC_9573_F2B1_41D5_9D1431797D46_d.jpeg",
                               "height": 1024,
                               "width": 1024
                              }
                             ]
                            },
                            "left": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "class": "ImageResourceLevel",
                               "url": "media/panorama_9DEABACC_9573_F2B1_41D5_9D1431797D46_l_hq.jpeg",
                               "height": 1904,
                               "width": 1904
                              },
                              {
                               "class": "ImageResourceLevel",
                               "url": "media/panorama_9DEABACC_9573_F2B1_41D5_9D1431797D46_l.jpeg",
                               "height": 1024,
                               "width": 1024
                              }
                             ]
                            },
                            "front": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "class": "ImageResourceLevel",
                               "url": "media/panorama_9DEABACC_9573_F2B1_41D5_9D1431797D46_f_hq.jpeg",
                               "height": 1904,
                               "width": 1904
                              },
                              {
                               "class": "ImageResourceLevel",
                               "url": "media/panorama_9DEABACC_9573_F2B1_41D5_9D1431797D46_f.jpeg",
                               "height": 1024,
                               "width": 1024
                              }
                             ]
                            }
                           }
                          ],
                          "pitch": 0
                         },
                         "yaw": 100.56
                        },
                        {
                         "class": "AdjacentPanorama",
                         "distance": 1,
                         "backwardYaw": -46.47,
                         "panorama": "this.panorama_9DEDA5CF_9573_D64E_41D0_B77916FF1472",
                         "yaw": 164.96
                        }
                       ],
                       "partial": false,
                       "hfov": 360,
                       "thumbnailUrl": "media/panorama_9CE1ECCD_954C_56B3_41C0_001E83533F54_t.jpg",
                       "id": "panorama_9CE1ECCD_954C_56B3_41C0_001E83533F54",
                       "vfov": 180,
                       "class": "Panorama",
                       "frames": [
                        {
                         "thumbnailUrl": "media/panorama_9CE1ECCD_954C_56B3_41C0_001E83533F54_t.jpg",
                         "overlays": [
                          {
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_9DEABACC_9573_F2B1_41D5_9D1431797D46, this.camera_96CC2FB6_9B23_19F7_41DF_A881C7D0639D); this.mainPlayList.set('selectedIndex', 20)"
                            }
                           ],
                           "rollOverDisplay": false,
                           "enabledInCardboard": true,
                           "id": "overlay_98EAA7B1_954C_D2D2_419B_A218410D8476",
                           "class": "HotspotPanoramaOverlay",
                           "useHandCursor": true,
                           "items": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_9CE1ECCD_954C_56B3_41C0_001E83533F54_0_HS_1_0.png",
                                "height": 210,
                                "width": 224
                               }
                              ]
                             },
                             "hfov": 13.41,
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -4.75,
                             "yaw": 100.56
                            }
                           ],
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 13.41,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_9CE1ECCD_954C_56B3_41C0_001E83533F54_0_HS_1_0_0_map.gif",
                                "height": 105,
                                "width": 112
                               }
                              ]
                             },
                             "pitch": -4.75,
                             "yaw": 100.56
                            }
                           ]
                          },
                          {
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_9DEDA5CF_9573_D64E_41D0_B77916FF1472, this.camera_96C0BFF4_9B23_198B_41C4_C570FAF2F42E); this.mainPlayList.set('selectedIndex', 18)"
                            }
                           ],
                           "rollOverDisplay": false,
                           "enabledInCardboard": true,
                           "id": "overlay_9B825035_954C_2DD2_41D7_4B7513124EAF",
                           "class": "HotspotPanoramaOverlay",
                           "useHandCursor": true,
                           "items": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_9CE1ECCD_954C_56B3_41C0_001E83533F54_0_HS_0_0.png",
                                "height": 172,
                                "width": 196
                               }
                              ]
                             },
                             "hfov": 11.79,
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -4.19,
                             "yaw": 164.96
                            }
                           ],
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 11.79,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_9CE1ECCD_954C_56B3_41C0_001E83533F54_0_HS_0_0_0_map.gif",
                                "height": 86,
                                "width": 98
                               }
                              ]
                             },
                             "pitch": -4.19,
                             "yaw": 164.96
                            }
                           ]
                          },
                          {
                           "inertia": false,
                           "hfov": 45,
                           "image": {
                            "class": "ImageResource",
                            "levels": [
                             {
                              "class": "ImageResourceLevel",
                              "url": "media/panorama_9DEE2A67_9574_527E_41B3_6CDED57A89AC_tcap0.png",
                              "height": 850,
                              "width": 850
                             }
                            ]
                           },
                           "id": "panorama_9CE1ECCD_954C_56B3_41C0_001E83533F54_tcap0",
                           "class": "TripodCapPanoramaOverlay",
                           "angle": 0,
                           "rotate": true
                          }
                         ],
                         "back": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "class": "ImageResourceLevel",
                            "url": "media/panorama_9CE1ECCD_954C_56B3_41C0_001E83533F54_b_hq.jpeg",
                            "height": 1904,
                            "width": 1904
                           },
                           {
                            "class": "ImageResourceLevel",
                            "url": "media/panorama_9CE1ECCD_954C_56B3_41C0_001E83533F54_b.jpeg",
                            "height": 1024,
                            "width": 1024
                           }
                          ]
                         },
                         "top": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "class": "ImageResourceLevel",
                            "url": "media/panorama_9CE1ECCD_954C_56B3_41C0_001E83533F54_u_hq.jpeg",
                            "height": 1904,
                            "width": 1904
                           },
                           {
                            "class": "ImageResourceLevel",
                            "url": "media/panorama_9CE1ECCD_954C_56B3_41C0_001E83533F54_u.jpeg",
                            "height": 1024,
                            "width": 1024
                           }
                          ]
                         },
                         "class": "CubicPanoramaFrame",
                         "right": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "class": "ImageResourceLevel",
                            "url": "media/panorama_9CE1ECCD_954C_56B3_41C0_001E83533F54_r_hq.jpeg",
                            "height": 1904,
                            "width": 1904
                           },
                           {
                            "class": "ImageResourceLevel",
                            "url": "media/panorama_9CE1ECCD_954C_56B3_41C0_001E83533F54_r.jpeg",
                            "height": 1024,
                            "width": 1024
                           }
                          ]
                         },
                         "bottom": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "class": "ImageResourceLevel",
                            "url": "media/panorama_9CE1ECCD_954C_56B3_41C0_001E83533F54_d_hq.jpeg",
                            "height": 1904,
                            "width": 1904
                           },
                           {
                            "class": "ImageResourceLevel",
                            "url": "media/panorama_9CE1ECCD_954C_56B3_41C0_001E83533F54_d.jpeg",
                            "height": 1024,
                            "width": 1024
                           }
                          ]
                         },
                         "left": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "class": "ImageResourceLevel",
                            "url": "media/panorama_9CE1ECCD_954C_56B3_41C0_001E83533F54_l_hq.jpeg",
                            "height": 1904,
                            "width": 1904
                           },
                           {
                            "class": "ImageResourceLevel",
                            "url": "media/panorama_9CE1ECCD_954C_56B3_41C0_001E83533F54_l.jpeg",
                            "height": 1024,
                            "width": 1024
                           }
                          ]
                         },
                         "front": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "class": "ImageResourceLevel",
                            "url": "media/panorama_9CE1ECCD_954C_56B3_41C0_001E83533F54_f_hq.jpeg",
                            "height": 1904,
                            "width": 1904
                           },
                           {
                            "class": "ImageResourceLevel",
                            "url": "media/panorama_9CE1ECCD_954C_56B3_41C0_001E83533F54_f.jpeg",
                            "height": 1024,
                            "width": 1024
                           }
                          ]
                         }
                        }
                       ],
                       "pitch": 0
                      },
                      "yaw": -46.47
                     },
                     {
                      "class": "AdjacentPanorama",
                      "distance": 1,
                      "backwardYaw": -72.93,
                      "panorama": "this.panorama_9DEABACC_9573_F2B1_41D5_9D1431797D46",
                      "yaw": 15.42
                     },
                     {
                      "class": "AdjacentPanorama",
                      "distance": 1,
                      "backwardYaw": 132.1,
                      "panorama": "this.panorama_9DB3106C_9573_EE71_41E1_CD9E6ABFBC81",
                      "yaw": 174.96
                     }
                    ],
                    "partial": false,
                    "hfov": 360,
                    "thumbnailUrl": "media/panorama_9DEDA5CF_9573_D64E_41D0_B77916FF1472_t.jpg",
                    "id": "panorama_9DEDA5CF_9573_D64E_41D0_B77916FF1472",
                    "vfov": 180,
                    "class": "Panorama",
                    "frames": [
                     {
                      "thumbnailUrl": "media/panorama_9DEDA5CF_9573_D64E_41D0_B77916FF1472_t.jpg",
                      "overlays": [
                       {
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_9CE1ECCD_954C_56B3_41C0_001E83533F54, this.camera_967ADAC4_9B23_1B8B_41C6_02DA6181DED5); this.mainPlayList.set('selectedIndex', 19)"
                         }
                        ],
                        "rollOverDisplay": false,
                        "enabledInCardboard": true,
                        "id": "overlay_9B8D4921_954C_5FF2_41DC_C6F5A70509D0",
                        "class": "HotspotPanoramaOverlay",
                        "useHandCursor": true,
                        "items": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_9DEDA5CF_9573_D64E_41D0_B77916FF1472_0_HS_2_0.png",
                             "height": 129,
                             "width": 159
                            }
                           ]
                          },
                          "hfov": 9.53,
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -3.74,
                          "yaw": -46.47
                         }
                        ],
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 9.53,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_9DEDA5CF_9573_D64E_41D0_B77916FF1472_0_HS_2_0_0_map.gif",
                             "height": 64,
                             "width": 79
                            }
                           ]
                          },
                          "pitch": -3.74,
                          "yaw": -46.47
                         }
                        ]
                       },
                       {
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_9DEABACC_9573_F2B1_41D5_9D1431797D46, this.camera_967EFAE6_9B23_1B94_41C2_346464E2AA4D); this.mainPlayList.set('selectedIndex', 20)"
                         }
                        ],
                        "rollOverDisplay": false,
                        "enabledInCardboard": true,
                        "id": "overlay_9BD6F8AF_954C_3ECE_41D3_0C7426CEA9EC",
                        "class": "HotspotPanoramaOverlay",
                        "useHandCursor": true,
                        "items": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_9DEDA5CF_9573_D64E_41D0_B77916FF1472_0_HS_1_0.png",
                             "height": 155,
                             "width": 162
                            }
                           ]
                          },
                          "hfov": 9.72,
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -4.98,
                          "yaw": 15.42
                         }
                        ],
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 9.72,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_9DEDA5CF_9573_D64E_41D0_B77916FF1472_0_HS_1_0_0_map.gif",
                             "height": 77,
                             "width": 81
                            }
                           ]
                          },
                          "pitch": -4.98,
                          "yaw": 15.42
                         }
                        ]
                       },
                       {
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_9DB3106C_9573_EE71_41E1_CD9E6ABFBC81, this.camera_96753B07_9B23_1A95_41DA_BD4FBD08ABC7); this.mainPlayList.set('selectedIndex', 17)"
                         }
                        ],
                        "rollOverDisplay": false,
                        "enabledInCardboard": true,
                        "id": "overlay_98E5DE4C_954C_D5B2_41B6_915E1367BC7F",
                        "class": "HotspotPanoramaOverlay",
                        "useHandCursor": true,
                        "items": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_9DEDA5CF_9573_D64E_41D0_B77916FF1472_0_HS_0_0.png",
                             "height": 172,
                             "width": 196
                            }
                           ]
                          },
                          "hfov": 11.74,
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -6.61,
                          "yaw": 174.96
                         }
                        ],
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 11.74,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_9DEDA5CF_9573_D64E_41D0_B77916FF1472_0_HS_0_0_0_map.gif",
                             "height": 86,
                             "width": 98
                            }
                           ]
                          },
                          "pitch": -6.61,
                          "yaw": 174.96
                         }
                        ]
                       },
                       {
                        "inertia": false,
                        "hfov": 45,
                        "image": {
                         "class": "ImageResource",
                         "levels": [
                          {
                           "class": "ImageResourceLevel",
                           "url": "media/panorama_9DEE2A67_9574_527E_41B3_6CDED57A89AC_tcap0.png",
                           "height": 850,
                           "width": 850
                          }
                         ]
                        },
                        "id": "panorama_9DEDA5CF_9573_D64E_41D0_B77916FF1472_tcap0",
                        "class": "TripodCapPanoramaOverlay",
                        "angle": 0,
                        "rotate": true
                       }
                      ],
                      "back": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "class": "ImageResourceLevel",
                         "url": "media/panorama_9DEDA5CF_9573_D64E_41D0_B77916FF1472_b_hq.jpeg",
                         "height": 1904,
                         "width": 1904
                        },
                        {
                         "class": "ImageResourceLevel",
                         "url": "media/panorama_9DEDA5CF_9573_D64E_41D0_B77916FF1472_b.jpeg",
                         "height": 1024,
                         "width": 1024
                        }
                       ]
                      },
                      "top": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "class": "ImageResourceLevel",
                         "url": "media/panorama_9DEDA5CF_9573_D64E_41D0_B77916FF1472_u_hq.jpeg",
                         "height": 1904,
                         "width": 1904
                        },
                        {
                         "class": "ImageResourceLevel",
                         "url": "media/panorama_9DEDA5CF_9573_D64E_41D0_B77916FF1472_u.jpeg",
                         "height": 1024,
                         "width": 1024
                        }
                       ]
                      },
                      "class": "CubicPanoramaFrame",
                      "right": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "class": "ImageResourceLevel",
                         "url": "media/panorama_9DEDA5CF_9573_D64E_41D0_B77916FF1472_r_hq.jpeg",
                         "height": 1904,
                         "width": 1904
                        },
                        {
                         "class": "ImageResourceLevel",
                         "url": "media/panorama_9DEDA5CF_9573_D64E_41D0_B77916FF1472_r.jpeg",
                         "height": 1024,
                         "width": 1024
                        }
                       ]
                      },
                      "bottom": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "class": "ImageResourceLevel",
                         "url": "media/panorama_9DEDA5CF_9573_D64E_41D0_B77916FF1472_d_hq.jpeg",
                         "height": 1904,
                         "width": 1904
                        },
                        {
                         "class": "ImageResourceLevel",
                         "url": "media/panorama_9DEDA5CF_9573_D64E_41D0_B77916FF1472_d.jpeg",
                         "height": 1024,
                         "width": 1024
                        }
                       ]
                      },
                      "left": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "class": "ImageResourceLevel",
                         "url": "media/panorama_9DEDA5CF_9573_D64E_41D0_B77916FF1472_l_hq.jpeg",
                         "height": 1904,
                         "width": 1904
                        },
                        {
                         "class": "ImageResourceLevel",
                         "url": "media/panorama_9DEDA5CF_9573_D64E_41D0_B77916FF1472_l.jpeg",
                         "height": 1024,
                         "width": 1024
                        }
                       ]
                      },
                      "front": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "class": "ImageResourceLevel",
                         "url": "media/panorama_9DEDA5CF_9573_D64E_41D0_B77916FF1472_f_hq.jpeg",
                         "height": 1904,
                         "width": 1904
                        },
                        {
                         "class": "ImageResourceLevel",
                         "url": "media/panorama_9DEDA5CF_9573_D64E_41D0_B77916FF1472_f.jpeg",
                         "height": 1024,
                         "width": 1024
                        }
                       ]
                      }
                     }
                    ],
                    "pitch": 0
                   },
                   "yaw": 132.1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "distance": 1,
                   "backwardYaw": 121.11,
                   "panorama": "this.panorama_9DE8A30E_9574_33CE_41AE_445072CA27C0",
                   "yaw": -124.71
                  }
                 ],
                 "partial": false,
                 "hfov": 360,
                 "thumbnailUrl": "media/panorama_9DB3106C_9573_EE71_41E1_CD9E6ABFBC81_t.jpg",
                 "id": "panorama_9DB3106C_9573_EE71_41E1_CD9E6ABFBC81",
                 "vfov": 180,
                 "class": "Panorama",
                 "frames": [
                  {
                   "thumbnailUrl": "media/panorama_9DB3106C_9573_EE71_41E1_CD9E6ABFBC81_t.jpg",
                   "overlays": [
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_9DEDA5CF_9573_D64E_41D0_B77916FF1472, this.camera_9630A8E0_9B23_078B_41CE_7BEC453386DE); this.mainPlayList.set('selectedIndex', 18)"
                      }
                     ],
                     "rollOverDisplay": false,
                     "enabledInCardboard": true,
                     "id": "overlay_984F06AF_9534_F2CE_41B5_34CC36F41C04",
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "items": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_9DB3106C_9573_EE71_41E1_CD9E6ABFBC81_0_HS_1_0.png",
                          "height": 163,
                          "width": 201
                         }
                        ]
                       },
                       "hfov": 12.04,
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -5.08,
                       "yaw": 132.1
                      }
                     ],
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 12.04,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_9DB3106C_9573_EE71_41E1_CD9E6ABFBC81_0_HS_1_0_0_map.gif",
                          "height": 81,
                          "width": 100
                         }
                        ]
                       },
                       "pitch": -5.08,
                       "yaw": 132.1
                      }
                     ]
                    },
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_9DE8A30E_9574_33CE_41AE_445072CA27C0, this.camera_963478FC_9B23_077B_41D3_2CF7EE70F695); this.mainPlayList.set('selectedIndex', 1)"
                      }
                     ],
                     "rollOverDisplay": false,
                     "enabledInCardboard": true,
                     "id": "overlay_9A86DC35_9534_35D3_41CE_F737EB005C87",
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "items": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_9DB3106C_9573_EE71_41E1_CD9E6ABFBC81_0_HS_0_0.png",
                          "height": 203,
                          "width": 246
                         }
                        ]
                       },
                       "hfov": 14.8,
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": 0.29,
                       "yaw": -124.71
                      }
                     ],
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 14.8,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_9DB3106C_9573_EE71_41E1_CD9E6ABFBC81_0_HS_0_0_0_map.gif",
                          "height": 101,
                          "width": 123
                         }
                        ]
                       },
                       "pitch": 0.29,
                       "yaw": -124.71
                      }
                     ]
                    },
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_9E80A4D7_99A1_7AFC_41E2_0A04B58ED381, this.camera_963FC8BF_9B23_07F4_41C7_F97345245CC7); this.mainPlayList.set('selectedIndex', 15)"
                      }
                     ],
                     "rollOverDisplay": false,
                     "enabledInCardboard": true,
                     "id": "overlay_8B719DBE_99A0_EAAC_41DA_F7E7E8DB8104",
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "items": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_9DB3106C_9573_EE71_41E1_CD9E6ABFBC81_0_HS_2_0.png",
                          "height": 141,
                          "width": 159
                         }
                        ]
                       },
                       "hfov": 9.53,
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": 5.29,
                       "yaw": 169.8
                      }
                     ],
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 9.53,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_9DB3106C_9573_EE71_41E1_CD9E6ABFBC81_0_HS_2_0_0_map.gif",
                          "height": 70,
                          "width": 79
                         }
                        ]
                       },
                       "pitch": 5.29,
                       "yaw": 169.8
                      }
                     ]
                    },
                    {
                     "inertia": false,
                     "hfov": 45,
                     "image": {
                      "class": "ImageResource",
                      "levels": [
                       {
                        "class": "ImageResourceLevel",
                        "url": "media/panorama_9DB3106C_9573_EE71_41E1_CD9E6ABFBC81_tcap0.png",
                        "height": 850,
                        "width": 850
                       }
                      ]
                     },
                     "id": "panorama_9DB3106C_9573_EE71_41E1_CD9E6ABFBC81_tcap0",
                     "class": "TripodCapPanoramaOverlay",
                     "angle": 0,
                     "rotate": true
                    }
                   ],
                   "back": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_9DB3106C_9573_EE71_41E1_CD9E6ABFBC81_b_hq.jpeg",
                      "height": 1904,
                      "width": 1904
                     },
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_9DB3106C_9573_EE71_41E1_CD9E6ABFBC81_b.jpeg",
                      "height": 1024,
                      "width": 1024
                     }
                    ]
                   },
                   "top": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_9DB3106C_9573_EE71_41E1_CD9E6ABFBC81_u_hq.jpeg",
                      "height": 1904,
                      "width": 1904
                     },
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_9DB3106C_9573_EE71_41E1_CD9E6ABFBC81_u.jpeg",
                      "height": 1024,
                      "width": 1024
                     }
                    ]
                   },
                   "class": "CubicPanoramaFrame",
                   "right": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_9DB3106C_9573_EE71_41E1_CD9E6ABFBC81_r_hq.jpeg",
                      "height": 1904,
                      "width": 1904
                     },
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_9DB3106C_9573_EE71_41E1_CD9E6ABFBC81_r.jpeg",
                      "height": 1024,
                      "width": 1024
                     }
                    ]
                   },
                   "bottom": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_9DB3106C_9573_EE71_41E1_CD9E6ABFBC81_d_hq.jpeg",
                      "height": 1904,
                      "width": 1904
                     },
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_9DB3106C_9573_EE71_41E1_CD9E6ABFBC81_d.jpeg",
                      "height": 1024,
                      "width": 1024
                     }
                    ]
                   },
                   "left": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_9DB3106C_9573_EE71_41E1_CD9E6ABFBC81_l_hq.jpeg",
                      "height": 1904,
                      "width": 1904
                     },
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_9DB3106C_9573_EE71_41E1_CD9E6ABFBC81_l.jpeg",
                      "height": 1024,
                      "width": 1024
                     }
                    ]
                   },
                   "front": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_9DB3106C_9573_EE71_41E1_CD9E6ABFBC81_f_hq.jpeg",
                      "height": 1904,
                      "width": 1904
                     },
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_9DB3106C_9573_EE71_41E1_CD9E6ABFBC81_f.jpeg",
                      "height": 1024,
                      "width": 1024
                     }
                    ]
                   }
                  }
                 ],
                 "pitch": 0
                },
                "yaw": 11.69
               },
               {
                "class": "AdjacentPanorama",
                "distance": 1,
                "backwardYaw": -102.05,
                "panorama": "this.panorama_9E875631_99A7_39B4_41C3_E5065093D232",
                "yaw": -174.36
               }
              ],
              "partial": false,
              "hfov": 360,
              "thumbnailUrl": "media/panorama_9E80A4D7_99A1_7AFC_41E2_0A04B58ED381_t.jpg",
              "id": "panorama_9E80A4D7_99A1_7AFC_41E2_0A04B58ED381",
              "vfov": 180,
              "class": "Panorama",
              "frames": [
               {
                "thumbnailUrl": "media/panorama_9E80A4D7_99A1_7AFC_41E2_0A04B58ED381_t.jpg",
                "overlays": [
                 {
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_9E875631_99A7_39B4_41C3_E5065093D232, this.camera_96BA1D42_9B23_1E8F_41BC_B1DD59C18A33); this.mainPlayList.set('selectedIndex', 14)"
                   }
                  ],
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "id": "overlay_9206CB10_99AF_EF74_41B4_9363560612F9",
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_9E80A4D7_99A1_7AFC_41E2_0A04B58ED381_0_HS_1_0.png",
                       "height": 373,
                       "width": 245
                      }
                     ]
                    },
                    "hfov": 14.68,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": 2.91,
                    "yaw": -174.36
                   }
                  ],
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 14.68,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_9E80A4D7_99A1_7AFC_41E2_0A04B58ED381_0_HS_1_0_0_map.gif",
                       "height": 186,
                       "width": 122
                      }
                     ]
                    },
                    "pitch": 2.91,
                    "yaw": -174.36
                   }
                  ]
                 },
                 {
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_9E80A567_99A1_3BDC_41D1_9339CBBC73A9, this.camera_96837CD3_9B23_1F8D_41E1_58E054E749EC); this.mainPlayList.set('selectedIndex', 16)"
                   }
                  ],
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "id": "overlay_9252A9F7_99A1_2ABC_41A9_72AC502FADB0",
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_9E80A4D7_99A1_7AFC_41E2_0A04B58ED381_0_HS_0_0.png",
                       "height": 314,
                       "width": 233
                      }
                     ]
                    },
                    "hfov": 14.04,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -1.07,
                    "yaw": 131.9
                   }
                  ],
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 14.04,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_9E80A4D7_99A1_7AFC_41E2_0A04B58ED381_0_HS_0_0_0_map.gif",
                       "height": 157,
                       "width": 116
                      }
                     ]
                    },
                    "pitch": -1.07,
                    "yaw": 131.9
                   }
                  ]
                 },
                 {
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_9DB3106C_9573_EE71_41E1_CD9E6ABFBC81, this.camera_9687ED0A_9B23_1E9F_41CF_10C6A28147FF); this.mainPlayList.set('selectedIndex', 17)"
                   }
                  ],
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "id": "overlay_8B67B8BD_99A1_2AAF_41E1_67D8EA36B4A0",
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_9E80A4D7_99A1_7AFC_41E2_0A04B58ED381_0_HS_2_0.png",
                       "height": 206,
                       "width": 255
                      }
                     ]
                    },
                    "hfov": 15.35,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -0.47,
                    "yaw": 11.69
                   }
                  ],
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 15.35,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_9E80A4D7_99A1_7AFC_41E2_0A04B58ED381_0_HS_2_0_0_map.gif",
                       "height": 103,
                       "width": 127
                      }
                     ]
                    },
                    "pitch": -0.47,
                    "yaw": 11.69
                   }
                  ]
                 },
                 {
                  "inertia": false,
                  "hfov": 45,
                  "image": {
                   "class": "ImageResource",
                   "levels": [
                    {
                     "class": "ImageResourceLevel",
                     "url": "media/panorama_9DEE2A67_9574_527E_41B3_6CDED57A89AC_tcap0.png",
                     "height": 850,
                     "width": 850
                    }
                   ]
                  },
                  "id": "panorama_9E80A4D7_99A1_7AFC_41E2_0A04B58ED381_tcap0",
                  "class": "TripodCapPanoramaOverlay",
                  "angle": 0,
                  "rotate": true
                 }
                ],
                "back": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_9E80A4D7_99A1_7AFC_41E2_0A04B58ED381_b_hq.jpeg",
                   "height": 1904,
                   "width": 1904
                  },
                  {
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_9E80A4D7_99A1_7AFC_41E2_0A04B58ED381_b.jpeg",
                   "height": 1024,
                   "width": 1024
                  }
                 ]
                },
                "top": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_9E80A4D7_99A1_7AFC_41E2_0A04B58ED381_u_hq.jpeg",
                   "height": 1904,
                   "width": 1904
                  },
                  {
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_9E80A4D7_99A1_7AFC_41E2_0A04B58ED381_u.jpeg",
                   "height": 1024,
                   "width": 1024
                  }
                 ]
                },
                "class": "CubicPanoramaFrame",
                "right": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_9E80A4D7_99A1_7AFC_41E2_0A04B58ED381_r_hq.jpeg",
                   "height": 1904,
                   "width": 1904
                  },
                  {
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_9E80A4D7_99A1_7AFC_41E2_0A04B58ED381_r.jpeg",
                   "height": 1024,
                   "width": 1024
                  }
                 ]
                },
                "bottom": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_9E80A4D7_99A1_7AFC_41E2_0A04B58ED381_d_hq.jpeg",
                   "height": 1904,
                   "width": 1904
                  },
                  {
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_9E80A4D7_99A1_7AFC_41E2_0A04B58ED381_d.jpeg",
                   "height": 1024,
                   "width": 1024
                  }
                 ]
                },
                "left": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_9E80A4D7_99A1_7AFC_41E2_0A04B58ED381_l_hq.jpeg",
                   "height": 1904,
                   "width": 1904
                  },
                  {
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_9E80A4D7_99A1_7AFC_41E2_0A04B58ED381_l.jpeg",
                   "height": 1024,
                   "width": 1024
                  }
                 ]
                },
                "front": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_9E80A4D7_99A1_7AFC_41E2_0A04B58ED381_f_hq.jpeg",
                   "height": 1904,
                   "width": 1904
                  },
                  {
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_9E80A4D7_99A1_7AFC_41E2_0A04B58ED381_f.jpeg",
                   "height": 1024,
                   "width": 1024
                  }
                 ]
                }
               }
              ],
              "pitch": 0
             },
             "yaw": -102.05
            }
           ],
           "partial": false,
           "hfov": 360,
           "thumbnailUrl": "media/panorama_9E875631_99A7_39B4_41C3_E5065093D232_t.jpg",
           "id": "panorama_9E875631_99A7_39B4_41C3_E5065093D232",
           "vfov": 180,
           "class": "Panorama",
           "frames": [
            {
             "thumbnailUrl": "media/panorama_9E875631_99A7_39B4_41C3_E5065093D232_t.jpg",
             "overlays": [
              {
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_9E80D638_99A0_F9B4_41E0_2F85D159820E, this.camera_96EA610A_9B23_069F_41C2_12252829B99D); this.mainPlayList.set('selectedIndex', 8)"
                }
               ],
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "id": "overlay_92DC66F7_99A3_26BC_41CE_FE108D43BE6D",
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_9E875631_99A7_39B4_41C3_E5065093D232_0_HS_1_0.png",
                    "height": 374,
                    "width": 254
                   }
                  ]
                 },
                 "hfov": 14.1,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -22.7,
                 "yaw": 174.71
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 14.1,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_9E875631_99A7_39B4_41C3_E5065093D232_0_HS_1_0_0_map.gif",
                    "height": 187,
                    "width": 127
                   }
                  ]
                 },
                 "pitch": -22.7,
                 "yaw": 174.71
                }
               ]
              },
              {
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_9E80A4D7_99A1_7AFC_41E2_0A04B58ED381, this.camera_96E37142_9B23_068F_4199_D2D20CA57B88); this.mainPlayList.set('selectedIndex', 15)"
                }
               ],
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "id": "overlay_92597FF7_99A1_E6BC_41CF_4EEB72A26B2C",
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_9E875631_99A7_39B4_41C3_E5065093D232_0_HS_0_0.png",
                    "height": 693,
                    "width": 846
                   }
                  ]
                 },
                 "hfov": 48.24,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": 18.14,
                 "yaw": -102.05
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 48.24,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_9E875631_99A7_39B4_41C3_E5065093D232_0_HS_0_0_0_map.gif",
                    "height": 163,
                    "width": 200
                   }
                  ]
                 },
                 "pitch": 18.14,
                 "yaw": -102.05
                }
               ]
              },
              {
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.showPopupPanoramaOverlay(this.popup_8C675771_99A3_67B4_41B8_6614EDB5357D, {'paddingTop':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconHeight':20,'pressedIconHeight':20,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconLineWidth':5,'pressedIconWidth':20,'rollOverBorderSize':0,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'backgroundColorDirection':'vertical','pressedIconColor':'#888888','iconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'rollOverBackgroundOpacity':0.3,'iconColor':'#000000','pressedBorderSize':0,'rollOverIconColor':'#666666','borderColor':'#000000','backgroundOpacity':0.3,'rollOverIconWidth':20,'rollOverBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1]}, null, null, null, null, null, false)"
                }
               ],
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "id": "overlay_8A3C22AD_99A1_1EAC_41BA_6A56F6C9540C",
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_9E875631_99A7_39B4_41C3_E5065093D232_0_HS_3_0.png",
                    "height": 1004,
                    "width": 1323
                   }
                  ]
                 },
                 "hfov": 78.67,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": 7.86,
                 "yaw": 130.64
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 78.67,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_9E875631_99A7_39B4_41C3_E5065093D232_0_HS_3_0_0_map.gif",
                    "height": 151,
                    "width": 200
                   }
                  ]
                 },
                 "pitch": 7.86,
                 "yaw": 130.64
                }
               ]
              },
              {
               "image": {
                "class": "ImageResource",
                "levels": [
                 {
                  "class": "ImageResourceLevel",
                  "url": "media/popup_8C675771_99A3_67B4_41B8_6614EDB5357D_0_0.jpg",
                  "height": 780,
                  "width": 1000
                 },
                 {
                  "class": "ImageResourceLevel",
                  "url": "media/popup_8C675771_99A3_67B4_41B8_6614EDB5357D_0_1.jpg",
                  "height": 399,
                  "width": 512
                 }
                ]
               },
               "hideDuration": 500,
               "popupMaxWidth": "95%",
               "hideEasing": "cubic_out",
               "showEasing": "cubic_in",
               "rotationZ": 0,
               "rotationX": 0,
               "hfov": 78.67,
               "rotationY": 0,
               "id": "popup_8C675771_99A3_67B4_41B8_6614EDB5357D",
               "showDuration": 500,
               "class": "PopupPanoramaOverlay",
               "pitch": 7.86,
               "popupMaxHeight": "95%",
               "yaw": 130.64
              },
              {
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "id": "overlay_89FB0DDD_9A61_2AEC_41D9_E1212792D60C",
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_9E875631_99A7_39B4_41C3_E5065093D232_0_HS_2_0.png",
                    "height": 881,
                    "width": 1179
                   }
                  ]
                 },
                 "hfov": 63.78,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": 25.65,
                 "yaw": 43.49
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 63.78,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_9E875631_99A7_39B4_41C3_E5065093D232_0_HS_2_0_0_map.gif",
                    "height": 149,
                    "width": 200
                   }
                  ]
                 },
                 "pitch": 25.65,
                 "yaw": 43.49
                }
               ]
              },
              {
               "inertia": false,
               "hfov": 45,
               "image": {
                "class": "ImageResource",
                "levels": [
                 {
                  "class": "ImageResourceLevel",
                  "url": "media/panorama_9DEE2A67_9574_527E_41B3_6CDED57A89AC_tcap0.png",
                  "height": 850,
                  "width": 850
                 }
                ]
               },
               "id": "panorama_9E875631_99A7_39B4_41C3_E5065093D232_tcap0",
               "class": "TripodCapPanoramaOverlay",
               "angle": 0,
               "rotate": true
              }
             ],
             "back": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "url": "media/panorama_9E875631_99A7_39B4_41C3_E5065093D232_b_hq.jpeg",
                "height": 1904,
                "width": 1904
               },
               {
                "class": "ImageResourceLevel",
                "url": "media/panorama_9E875631_99A7_39B4_41C3_E5065093D232_b.jpeg",
                "height": 1024,
                "width": 1024
               }
              ]
             },
             "top": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "url": "media/panorama_9E875631_99A7_39B4_41C3_E5065093D232_u_hq.jpeg",
                "height": 1904,
                "width": 1904
               },
               {
                "class": "ImageResourceLevel",
                "url": "media/panorama_9E875631_99A7_39B4_41C3_E5065093D232_u.jpeg",
                "height": 1024,
                "width": 1024
               }
              ]
             },
             "class": "CubicPanoramaFrame",
             "right": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "url": "media/panorama_9E875631_99A7_39B4_41C3_E5065093D232_r_hq.jpeg",
                "height": 1904,
                "width": 1904
               },
               {
                "class": "ImageResourceLevel",
                "url": "media/panorama_9E875631_99A7_39B4_41C3_E5065093D232_r.jpeg",
                "height": 1024,
                "width": 1024
               }
              ]
             },
             "bottom": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "url": "media/panorama_9E875631_99A7_39B4_41C3_E5065093D232_d_hq.jpeg",
                "height": 1904,
                "width": 1904
               },
               {
                "class": "ImageResourceLevel",
                "url": "media/panorama_9E875631_99A7_39B4_41C3_E5065093D232_d.jpeg",
                "height": 1024,
                "width": 1024
               }
              ]
             },
             "left": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "url": "media/panorama_9E875631_99A7_39B4_41C3_E5065093D232_l_hq.jpeg",
                "height": 1904,
                "width": 1904
               },
               {
                "class": "ImageResourceLevel",
                "url": "media/panorama_9E875631_99A7_39B4_41C3_E5065093D232_l.jpeg",
                "height": 1024,
                "width": 1024
               }
              ]
             },
             "front": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "url": "media/panorama_9E875631_99A7_39B4_41C3_E5065093D232_f_hq.jpeg",
                "height": 1904,
                "width": 1904
               },
               {
                "class": "ImageResourceLevel",
                "url": "media/panorama_9E875631_99A7_39B4_41C3_E5065093D232_f.jpeg",
                "height": 1024,
                "width": 1024
               }
              ]
             }
            }
           ],
           "pitch": 0
          },
          "yaw": 89.31
         },
         {
          "class": "AdjacentPanorama",
          "distance": 1,
          "backwardYaw": -95.17,
          "panorama": "this.panorama_9E87579B_99A7_E774_41D5_D9B021C4A182",
          "yaw": -50.4
         },
         {
          "class": "AdjacentPanorama",
          "distance": 1,
          "backwardYaw": -170.87,
          "panorama": "this.panorama_9E80F563_99A1_3BDB_41D7_08E32CDF28A0",
          "yaw": 167.04
         }
        ],
        "partial": false,
        "hfov": 360,
        "thumbnailUrl": "media/panorama_9E80D638_99A0_F9B4_41E0_2F85D159820E_t.jpg",
        "id": "panorama_9E80D638_99A0_F9B4_41E0_2F85D159820E",
        "vfov": 180,
        "class": "Panorama",
        "frames": [
         {
          "thumbnailUrl": "media/panorama_9E80D638_99A0_F9B4_41E0_2F85D159820E_t.jpg",
          "overlays": [
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_9DEDED88_9574_36B2_41D9_B2A57E8A9ED9, this.camera_96AC2E33_9B23_1A8D_41C4_6A12322B4884); this.mainPlayList.set('selectedIndex', 4)"
             }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "id": "overlay_936EA497_99A1_197C_41D7_F3A898DD2C1C",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_9E80D638_99A0_F9B4_41E0_2F85D159820E_0_HS_4_0.png",
                 "height": 142,
                 "width": 226
                }
               ]
              },
              "hfov": 11.71,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -30.27,
              "yaw": 14.49
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 11.71,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_9E80D638_99A0_F9B4_41E0_2F85D159820E_0_HS_4_0_0_map.gif",
                 "height": 71,
                 "width": 113
                }
               ]
              },
              "pitch": -30.27,
              "yaw": 14.49
             }
            ]
           },
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.mainPlayList.set('selectedIndex', 5)"
             }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "id": "overlay_92AA3D78_99A7_2BB4_41B3_50FDA4A495A6",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_9E80D638_99A0_F9B4_41E0_2F85D159820E_0_HS_3_0.png",
                 "height": 106,
                 "width": 177
                }
               ]
              },
              "hfov": 10.09,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -18.31,
              "yaw": 55.01
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 10.09,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_9E80D638_99A0_F9B4_41E0_2F85D159820E_0_HS_3_0_0_map.gif",
                 "height": 53,
                 "width": 88
                }
               ]
              },
              "pitch": -18.31,
              "yaw": 55.01
             }
            ]
           },
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_9E875631_99A7_39B4_41C3_E5065093D232, this.camera_96A30E72_9B23_1A8F_41E2_E22FCAB7418C); this.mainPlayList.set('selectedIndex', 14)"
             }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "id": "overlay_92F755A7_99A7_1B5C_41C3_A505B781E4E1",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_9E80D638_99A0_F9B4_41E0_2F85D159820E_0_HS_2_0.png",
                 "height": 133,
                 "width": 156
                }
               ]
              },
              "hfov": 9.26,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -10.66,
              "yaw": 89.31
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 9.26,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_9E80D638_99A0_F9B4_41E0_2F85D159820E_0_HS_2_0_0_map.gif",
                 "height": 66,
                 "width": 78
                }
               ]
              },
              "pitch": -10.66,
              "yaw": 89.31
             }
            ]
           },
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_9E80F563_99A1_3BDB_41D7_08E32CDF28A0, this.camera_96DA0EE9_9B23_1B9D_41C6_9C8B502E4E34); this.mainPlayList.set('selectedIndex', 7)"
             }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "id": "overlay_92D2A877_99A1_69BC_41D2_C7789FD029DD",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_9E80D638_99A0_F9B4_41E0_2F85D159820E_0_HS_1_0.png",
                 "height": 142,
                 "width": 234
                }
               ]
              },
              "hfov": 13.59,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -14.7,
              "yaw": 167.04
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 13.59,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_9E80D638_99A0_F9B4_41E0_2F85D159820E_0_HS_1_0_0_map.gif",
                 "height": 71,
                 "width": 117
                }
               ]
              },
              "pitch": -14.7,
              "yaw": 167.04
             }
            ]
           },
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_9E87579B_99A7_E774_41D5_D9B021C4A182, this.camera_96A7CEAD_9B23_1B95_41D0_A69C284AE4D9); this.mainPlayList.set('selectedIndex', 6)"
             }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "id": "overlay_92332467_99A1_39DC_41BE_717583404BC6",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_9E80D638_99A0_F9B4_41E0_2F85D159820E_0_HS_0_0.png",
                 "height": 120,
                 "width": 188
                }
               ]
              },
              "hfov": 10.85,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -16.77,
              "yaw": -50.4
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 10.85,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_9E80D638_99A0_F9B4_41E0_2F85D159820E_0_HS_0_0_0_map.gif",
                 "height": 60,
                 "width": 94
                }
               ]
              },
              "pitch": -16.77,
              "yaw": -50.4
             }
            ]
           },
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.mainPlayList.set('selectedIndex', 0)"
             }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "id": "overlay_8B844E86_99A1_295C_41DC_4717A43E61E8",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_9E80D638_99A0_F9B4_41E0_2F85D159820E_0_HS_5_0.png",
                 "height": 138,
                 "width": 137
                }
               ]
              },
              "hfov": 8.25,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -4.32,
              "yaw": 4.51
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 8.25,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_9E80D638_99A0_F9B4_41E0_2F85D159820E_0_HS_5_0_0_map.gif",
                 "height": 69,
                 "width": 68
                }
               ]
              },
              "pitch": -4.32,
              "yaw": 4.51
             }
            ]
           },
           {
            "inertia": false,
            "hfov": 45,
            "image": {
             "class": "ImageResource",
             "levels": [
              {
               "class": "ImageResourceLevel",
               "url": "media/panorama_9DEE2A67_9574_527E_41B3_6CDED57A89AC_tcap0.png",
               "height": 850,
               "width": 850
              }
             ]
            },
            "id": "panorama_9E80D638_99A0_F9B4_41E0_2F85D159820E_tcap0",
            "class": "TripodCapPanoramaOverlay",
            "angle": 0,
            "rotate": true
           }
          ],
          "back": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_9E80D638_99A0_F9B4_41E0_2F85D159820E_b_hq.jpeg",
             "height": 1904,
             "width": 1904
            },
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_9E80D638_99A0_F9B4_41E0_2F85D159820E_b.jpeg",
             "height": 1024,
             "width": 1024
            }
           ]
          },
          "top": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_9E80D638_99A0_F9B4_41E0_2F85D159820E_u_hq.jpeg",
             "height": 1904,
             "width": 1904
            },
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_9E80D638_99A0_F9B4_41E0_2F85D159820E_u.jpeg",
             "height": 1024,
             "width": 1024
            }
           ]
          },
          "class": "CubicPanoramaFrame",
          "right": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_9E80D638_99A0_F9B4_41E0_2F85D159820E_r_hq.jpeg",
             "height": 1904,
             "width": 1904
            },
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_9E80D638_99A0_F9B4_41E0_2F85D159820E_r.jpeg",
             "height": 1024,
             "width": 1024
            }
           ]
          },
          "bottom": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_9E80D638_99A0_F9B4_41E0_2F85D159820E_d_hq.jpeg",
             "height": 1904,
             "width": 1904
            },
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_9E80D638_99A0_F9B4_41E0_2F85D159820E_d.jpeg",
             "height": 1024,
             "width": 1024
            }
           ]
          },
          "left": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_9E80D638_99A0_F9B4_41E0_2F85D159820E_l_hq.jpeg",
             "height": 1904,
             "width": 1904
            },
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_9E80D638_99A0_F9B4_41E0_2F85D159820E_l.jpeg",
             "height": 1024,
             "width": 1024
            }
           ]
          },
          "front": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_9E80D638_99A0_F9B4_41E0_2F85D159820E_f_hq.jpeg",
             "height": 1904,
             "width": 1904
            },
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_9E80D638_99A0_F9B4_41E0_2F85D159820E_f.jpeg",
             "height": 1024,
             "width": 1024
            }
           ]
          }
         }
        ],
        "pitch": 0
       },
       "yaw": 146.24
      },
      {
       "class": "AdjacentPanorama",
       "distance": 1,
       "backwardYaw": -141.19,
       "panorama": "this.panorama_9E87579B_99A7_E774_41D5_D9B021C4A182",
       "yaw": -140.01
      },
      {
       "class": "AdjacentPanorama",
       "distance": 1,
       "backwardYaw": -171.63,
       "panorama": "this.panorama_9E7312E1_99A1_1ED4_41E0_A5D0DA7B2892",
       "yaw": 34.27
      },
      {
       "class": "AdjacentPanorama",
       "distance": 1,
       "backwardYaw": 130.27,
       "panorama": "this.panorama_9DEE2A67_9574_527E_41B3_6CDED57A89AC",
       "yaw": -46.1
      }
     ],
     "partial": false,
     "hfov": 360,
     "thumbnailUrl": "media/panorama_9DEDED88_9574_36B2_41D9_B2A57E8A9ED9_t.jpg",
     "id": "panorama_9DEDED88_9574_36B2_41D9_B2A57E8A9ED9",
     "vfov": 180,
     "class": "Panorama",
     "frames": [
      {
       "thumbnailUrl": "media/panorama_9DEDED88_9574_36B2_41D9_B2A57E8A9ED9_t.jpg",
       "overlays": [
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_9DEE2A67_9574_527E_41B3_6CDED57A89AC, this.camera_9605F875_9B23_0775_41E3_1883991463B8); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "id": "overlay_988DA3FF_9534_724E_41D3_BE42CC11CE6B",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_9DEDED88_9574_36B2_41D9_B2A57E8A9ED9_0_HS_0_0.png",
              "height": 79,
              "width": 106
             }
            ]
           },
           "hfov": 19.9,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -5.86,
           "yaw": -46.1
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 19.9,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_9DEDED88_9574_36B2_41D9_B2A57E8A9ED9_0_HS_0_0_0_map.gif",
              "height": 39,
              "width": 53
             }
            ]
           },
           "pitch": -5.86,
           "yaw": -46.1
          }
         ]
        },
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_9E7312E1_99A1_1ED4_41E0_A5D0DA7B2892, this.camera_96009858_9B23_06BB_41C7_C52DE7026442); this.mainPlayList.set('selectedIndex', 5)"
          }
         ],
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "id": "overlay_915AEBC0_99A3_6ED4_41E1_AC34BD82D853",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_9DEDED88_9574_36B2_41D9_B2A57E8A9ED9_0_HS_6_0.png",
              "height": 40,
              "width": 64
             }
            ]
           },
           "hfov": 11.22,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -22.41,
           "yaw": 34.27
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 11.22,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_9DEDED88_9574_36B2_41D9_B2A57E8A9ED9_0_HS_6_0_0_map.gif",
              "height": 20,
              "width": 32
             }
            ]
           },
           "pitch": -22.41,
           "yaw": 34.27
          }
         ]
        },
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_9E87579B_99A7_E774_41D5_D9B021C4A182, this.camera_960FD83E_9B23_06F7_41D9_4200FB17EBED); this.mainPlayList.set('selectedIndex', 6)"
          }
         ],
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "id": "overlay_90AEE9B0_99A1_2AB4_41C9_611B051567AE",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_9DEDED88_9574_36B2_41D9_B2A57E8A9ED9_0_HS_5_0.png",
              "height": 40,
              "width": 52
             }
            ]
           },
           "hfov": 9.72,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -11.73,
           "yaw": -140.01
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 9.72,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_9DEDED88_9574_36B2_41D9_B2A57E8A9ED9_0_HS_5_0_0_map.gif",
              "height": 20,
              "width": 26
             }
            ]
           },
           "pitch": -11.73,
           "yaw": -140.01
          }
         ]
        },
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.mainPlayList.set('selectedIndex', 14)"
          }
         ],
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "id": "overlay_90308282_99A0_F954_41C7_366D4CCEBC4D",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_9DEDED88_9574_36B2_41D9_B2A57E8A9ED9_0_HS_4_0.png",
              "height": 38,
              "width": 36
             }
            ]
           },
           "hfov": 6.73,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -6.55,
           "yaw": 76.93
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 6.73,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_9DEDED88_9574_36B2_41D9_B2A57E8A9ED9_0_HS_4_0_0_map.gif",
              "height": 19,
              "width": 18
             }
            ]
           },
           "pitch": -6.55,
           "yaw": 76.93
          }
         ]
        },
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_9E80D638_99A0_F9B4_41E0_2F85D159820E, this.camera_960A7823_9B23_068D_41B7_2BE5696CA2F7); this.mainPlayList.set('selectedIndex', 8)"
          }
         ],
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "id": "overlay_9007A6AF_99A3_66AC_41BC_ECDBDB820D1E",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_9DEDED88_9574_36B2_41D9_B2A57E8A9ED9_0_HS_3_0.png",
              "height": 50,
              "width": 61
             }
            ]
           },
           "hfov": 11.17,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -14.85,
           "yaw": 146.24
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 11.17,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_9DEDED88_9574_36B2_41D9_B2A57E8A9ED9_0_HS_3_0_0_map.gif",
              "height": 25,
              "width": 30
             }
            ]
           },
           "pitch": -14.85,
           "yaw": 146.24
          }
         ]
        },
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.mainPlayList.set('selectedIndex', 7)"
          }
         ],
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "id": "overlay_9061D237_99A3_79BC_41D6_410629334386",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_9DEDED88_9574_36B2_41D9_B2A57E8A9ED9_0_HS_2_0.png",
              "height": 26,
              "width": 32
             }
            ]
           },
           "hfov": 6.05,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -8.29,
           "yaw": 142.28
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 6.05,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_9DEDED88_9574_36B2_41D9_B2A57E8A9ED9_0_HS_2_0_0_map.gif",
              "height": 13,
              "width": 16
             }
            ]
           },
           "pitch": -8.29,
           "yaw": 142.28
          }
         ]
        },
        {
         "bleachingDistance": 0.4,
         "id": "overlay_8BF433EA_99E1_7ED4_41C3_797D5942D03B",
         "class": "LensFlarePanoramaOverlay",
         "pitch": 20.01,
         "bleaching": 0.7,
         "yaw": -14.84
        },
        {
         "inertia": false,
         "hfov": 45,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "url": "media/panorama_9DEE2A67_9574_527E_41B3_6CDED57A89AC_tcap0.png",
            "height": 850,
            "width": 850
           }
          ]
         },
         "id": "panorama_9DEDED88_9574_36B2_41D9_B2A57E8A9ED9_tcap0",
         "class": "TripodCapPanoramaOverlay",
         "angle": 0,
         "rotate": true
        }
       ],
       "back": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "url": "media/panorama_9DEDED88_9574_36B2_41D9_B2A57E8A9ED9_b_hq.jpeg",
          "height": 608,
          "width": 608
         }
        ]
       },
       "top": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "url": "media/panorama_9DEDED88_9574_36B2_41D9_B2A57E8A9ED9_u_hq.jpeg",
          "height": 608,
          "width": 608
         }
        ]
       },
       "class": "CubicPanoramaFrame",
       "right": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "url": "media/panorama_9DEDED88_9574_36B2_41D9_B2A57E8A9ED9_r_hq.jpeg",
          "height": 608,
          "width": 608
         }
        ]
       },
       "bottom": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "url": "media/panorama_9DEDED88_9574_36B2_41D9_B2A57E8A9ED9_d_hq.jpeg",
          "height": 608,
          "width": 608
         }
        ]
       },
       "left": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "url": "media/panorama_9DEDED88_9574_36B2_41D9_B2A57E8A9ED9_l_hq.jpeg",
          "height": 608,
          "width": 608
         }
        ]
       },
       "front": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "url": "media/panorama_9DEDED88_9574_36B2_41D9_B2A57E8A9ED9_f_hq.jpeg",
          "height": 608,
          "width": 608
         }
        ]
       }
      }
     ],
     "pitch": 0
    },
    "yaw": 130.27
   },
   {
    "class": "AdjacentPanorama",
    "distance": 1,
    "backwardYaw": -146.04,
    "panorama": "this.panorama_9DEBEB67_954C_327E_41D8_7DCCDDC912A8",
    "yaw": -93.54
   },
   {
    "class": "AdjacentPanorama",
    "distance": 1,
    "backwardYaw": -141.66,
    "panorama": "this.panorama_9DE8A30E_9574_33CE_41AE_445072CA27C0",
    "yaw": -60.38
   }
  ],
  "partial": false,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_9DEE2A67_9574_527E_41B3_6CDED57A89AC_t.jpg",
  "id": "panorama_9DEE2A67_9574_527E_41B3_6CDED57A89AC",
  "vfov": 180,
  "class": "Panorama",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_9DEE2A67_9574_527E_41B3_6CDED57A89AC_t.jpg",
    "overlays": [
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_9DE8A30E_9574_33CE_41AE_445072CA27C0, this.camera_968C3CA1_9B23_1F8D_41D7_88BEF3B0BF99); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_9FF822AD_9574_72F3_41E1_719FC265CBBC",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_9DEE2A67_9574_527E_41B3_6CDED57A89AC_0_HS_2_0.png",
           "height": 168,
           "width": 183
          }
         ]
        },
        "hfov": 10.67,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -13.97,
        "yaw": -60.38
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 10.67,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_9DEE2A67_9574_527E_41B3_6CDED57A89AC_0_HS_2_0_0_map.gif",
           "height": 84,
           "width": 91
          }
         ]
        },
        "pitch": -13.97,
        "yaw": -60.38
       }
      ]
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_9DEBEB67_954C_327E_41D8_7DCCDDC912A8, this.camera_96899C6A_9B23_1E9F_41D9_8ED552486A59); this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_9ED85F29_9575_D3F3_41D1_3FDB44E19FB4",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_9DEE2A67_9574_527E_41B3_6CDED57A89AC_0_HS_1_0.png",
           "height": 83,
           "width": 129
          }
         ]
        },
        "hfov": 7.73,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -7.18,
        "yaw": -93.54
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 7.73,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_9DEE2A67_9574_527E_41B3_6CDED57A89AC_0_HS_1_0_0_map.gif",
           "height": 41,
           "width": 64
          }
         ]
        },
        "pitch": -7.18,
        "yaw": -93.54
       }
      ]
     },
     {
      "areas": [
       {
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_9DEDED88_9574_36B2_41D9_B2A57E8A9ED9, this.camera_96953C0C_9B23_1E9B_41CA_33B3A50C3A7F); this.mainPlayList.set('selectedIndex', 4)",
        "toolTip": "Go in the House"
       }
      ],
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_9FEA7691_9574_32D2_41DB_C6CED3C559D7",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_9DEE2A67_9574_527E_41B3_6CDED57A89AC_0_HS_0_0.png",
           "height": 275,
           "width": 274
          }
         ]
        },
        "hfov": 16.13,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -11.51,
        "yaw": 130.27
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 16.13,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_9DEE2A67_9574_527E_41B3_6CDED57A89AC_0_HS_0_0_0_map.gif",
           "height": 137,
           "width": 137
          }
         ]
        },
        "pitch": -11.51,
        "yaw": 130.27
       }
      ]
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 17)"
       }
      ],
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_98E8F4E3_9534_5677_41C1_275211F7FB53",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_9DEE2A67_9574_527E_41B3_6CDED57A89AC_0_HS_3_0.png",
           "height": 177,
           "width": 169
          }
         ]
        },
        "hfov": 10.1,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -7.92,
        "yaw": 6
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 10.1,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_9DEE2A67_9574_527E_41B3_6CDED57A89AC_0_HS_3_0_0_map.gif",
           "height": 88,
           "width": 84
          }
         ]
        },
        "pitch": -7.92,
        "yaw": 6
       }
      ]
     },
     {
      "inertia": false,
      "hfov": 45,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/panorama_9DEE2A67_9574_527E_41B3_6CDED57A89AC_tcap0.png",
         "height": 850,
         "width": 850
        }
       ]
      },
      "id": "panorama_9DEE2A67_9574_527E_41B3_6CDED57A89AC_tcap0",
      "class": "TripodCapPanoramaOverlay",
      "angle": 0,
      "rotate": true
     }
    ],
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_9DEE2A67_9574_527E_41B3_6CDED57A89AC_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_9DEE2A67_9574_527E_41B3_6CDED57A89AC_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_9DEE2A67_9574_527E_41B3_6CDED57A89AC_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_9DEE2A67_9574_527E_41B3_6CDED57A89AC_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_9DEE2A67_9574_527E_41B3_6CDED57A89AC_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_9DEE2A67_9574_527E_41B3_6CDED57A89AC_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_9DEE2A67_9574_527E_41B3_6CDED57A89AC_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_9DEE2A67_9574_527E_41B3_6CDED57A89AC_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_9DEE2A67_9574_527E_41B3_6CDED57A89AC_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_9DEE2A67_9574_527E_41B3_6CDED57A89AC_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_9DEE2A67_9574_527E_41B3_6CDED57A89AC_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_9DEE2A67_9574_527E_41B3_6CDED57A89AC_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "pitch": 0
 },
 {
  "id": "MainViewerPanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "preloadEnabled": false,
  "touchControlMode": "drag_acceleration",
  "class": "PanoramaPlayer",
  "displayPlaybackBar": true,
  "gyroscopeVerticalDraggingEnabled": true,
  "mouseControlMode": "drag_acceleration"
 },
 {
  "id": "panorama_9DEE2A67_9574_527E_41B3_6CDED57A89AC_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -0.65,
   "yaw": -48.94
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_9DE8A30E_9574_33CE_41AE_445072CA27C0",
 {
  "id": "panorama_9DE8A30E_9574_33CE_41AE_445072CA27C0_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -4.28,
   "yaw": -38.75
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_9DEBEB67_954C_327E_41D8_7DCCDDC912A8",
 {
  "id": "panorama_9DEBEB67_954C_327E_41D8_7DCCDDC912A8_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -5.51,
   "yaw": -83.93
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_9DE8CF8D_9574_32B2_416C_00D5CD6DA04E",
 {
  "id": "panorama_9DE8CF8D_9574_32B2_416C_00D5CD6DA04E_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -0.8,
   "yaw": -156.7
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_9DEDED88_9574_36B2_41D9_B2A57E8A9ED9",
 {
  "id": "panorama_9DEDED88_9574_36B2_41D9_B2A57E8A9ED9_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -3.47,
   "yaw": 135.17
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_9E7312E1_99A1_1ED4_41E0_A5D0DA7B2892",
 {
  "id": "panorama_9E7312E1_99A1_1ED4_41E0_A5D0DA7B2892_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -3.71,
   "yaw": 171.35
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_9E87579B_99A7_E774_41D5_D9B021C4A182",
 {
  "id": "panorama_9E87579B_99A7_E774_41D5_D9B021C4A182_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -3.19,
   "yaw": -136.94
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_9E80F563_99A1_3BDB_41D7_08E32CDF28A0",
 {
  "id": "panorama_9E80F563_99A1_3BDB_41D7_08E32CDF28A0_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -5.01,
   "yaw": -178.45
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_9E80D638_99A0_F9B4_41E0_2F85D159820E",
 {
  "id": "panorama_9E80D638_99A0_F9B4_41E0_2F85D159820E_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -4.44,
   "yaw": 82.15
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_9E87A7A7_99A1_675C_41D7_44A9D18C0303",
 {
  "id": "panorama_9E87A7A7_99A1_675C_41D7_44A9D18C0303_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -8.63,
   "yaw": 170.67
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_9DEAB61D_9573_D5D2_41DB_7100FF28F1C6",
 {
  "id": "panorama_9DEAB61D_9573_D5D2_41DB_7100FF28F1C6_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -4.27,
   "yaw": -128.57
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_9E871860_99A7_29D4_41C2_47458889C165",
 {
  "id": "panorama_9E871860_99A7_29D4_41C2_47458889C165_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -6.32,
   "yaw": 59.2
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_9E807E2F_99A1_29AC_41DC_A32142B5676F",
 {
  "id": "panorama_9E807E2F_99A1_29AC_41DC_A32142B5676F_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -31.33,
   "yaw": 92.39
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_9E805266_99A1_F9DC_41DA_C7892E9AA757",
 {
  "id": "panorama_9E805266_99A1_F9DC_41DA_C7892E9AA757_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -7.96,
   "yaw": -140.1
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_9E875631_99A7_39B4_41C3_E5065093D232",
 {
  "id": "panorama_9E875631_99A7_39B4_41C3_E5065093D232_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -11.6,
   "yaw": -133.01
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_9E80A4D7_99A1_7AFC_41E2_0A04B58ED381",
 {
  "id": "panorama_9E80A4D7_99A1_7AFC_41E2_0A04B58ED381_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -4.38,
   "yaw": 123.63
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_9E80A567_99A1_3BDC_41D1_9339CBBC73A9",
 {
  "id": "panorama_9E80A567_99A1_3BDC_41D1_9339CBBC73A9_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -11.37,
   "yaw": 165.08
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_9DB3106C_9573_EE71_41E1_CD9E6ABFBC81",
 {
  "id": "panorama_9DB3106C_9573_EE71_41E1_CD9E6ABFBC81_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -0.25,
   "yaw": -142.05
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_9DEDA5CF_9573_D64E_41D0_B77916FF1472",
 {
  "id": "panorama_9DEDA5CF_9573_D64E_41D0_B77916FF1472_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 2.38,
   "yaw": -11.25
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_9CE1ECCD_954C_56B3_41C0_001E83533F54",
 {
  "id": "panorama_9CE1ECCD_954C_56B3_41C0_001E83533F54_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -5.54,
   "yaw": -10.17
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_9DEABACC_9573_F2B1_41D5_9D1431797D46",
 {
  "id": "panorama_9DEABACC_9573_F2B1_41D5_9D1431797D46_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -4.62,
   "yaw": -36.75
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PlayList",
  "items": [
   {
    "media": "this.panorama_9DEE2A67_9574_527E_41B3_6CDED57A89AC",
    "camera": "this.panorama_9DEE2A67_9574_527E_41B3_6CDED57A89AC_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "media": "this.panorama_9DE8A30E_9574_33CE_41AE_445072CA27C0",
    "camera": "this.panorama_9DE8A30E_9574_33CE_41AE_445072CA27C0_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "media": "this.panorama_9DEBEB67_954C_327E_41D8_7DCCDDC912A8",
    "camera": "this.panorama_9DEBEB67_954C_327E_41D8_7DCCDDC912A8_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "media": "this.panorama_9DE8CF8D_9574_32B2_416C_00D5CD6DA04E",
    "camera": "this.panorama_9DE8CF8D_9574_32B2_416C_00D5CD6DA04E_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "media": "this.panorama_9DEDED88_9574_36B2_41D9_B2A57E8A9ED9",
    "camera": "this.panorama_9DEDED88_9574_36B2_41D9_B2A57E8A9ED9_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "media": "this.panorama_9E7312E1_99A1_1ED4_41E0_A5D0DA7B2892",
    "camera": "this.panorama_9E7312E1_99A1_1ED4_41E0_A5D0DA7B2892_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "media": "this.panorama_9E87579B_99A7_E774_41D5_D9B021C4A182",
    "camera": "this.panorama_9E87579B_99A7_E774_41D5_D9B021C4A182_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "media": "this.panorama_9E80F563_99A1_3BDB_41D7_08E32CDF28A0",
    "camera": "this.panorama_9E80F563_99A1_3BDB_41D7_08E32CDF28A0_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "media": "this.panorama_9E80D638_99A0_F9B4_41E0_2F85D159820E",
    "camera": "this.panorama_9E80D638_99A0_F9B4_41E0_2F85D159820E_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "media": "this.panorama_9E87A7A7_99A1_675C_41D7_44A9D18C0303",
    "camera": "this.panorama_9E87A7A7_99A1_675C_41D7_44A9D18C0303_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)"
   },
   {
    "media": "this.panorama_9DEAB61D_9573_D5D2_41DB_7100FF28F1C6",
    "camera": "this.panorama_9DEAB61D_9573_D5D2_41DB_7100FF28F1C6_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)"
   },
   {
    "media": "this.panorama_9E871860_99A7_29D4_41C2_47458889C165",
    "camera": "this.panorama_9E871860_99A7_29D4_41C2_47458889C165_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)"
   },
   {
    "media": "this.panorama_9E807E2F_99A1_29AC_41DC_A32142B5676F",
    "camera": "this.panorama_9E807E2F_99A1_29AC_41DC_A32142B5676F_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)"
   },
   {
    "media": "this.panorama_9E805266_99A1_F9DC_41DA_C7892E9AA757",
    "camera": "this.panorama_9E805266_99A1_F9DC_41DA_C7892E9AA757_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)"
   },
   {
    "media": "this.panorama_9E875631_99A7_39B4_41C3_E5065093D232",
    "camera": "this.panorama_9E875631_99A7_39B4_41C3_E5065093D232_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)"
   },
   {
    "media": "this.panorama_9E80A4D7_99A1_7AFC_41E2_0A04B58ED381",
    "camera": "this.panorama_9E80A4D7_99A1_7AFC_41E2_0A04B58ED381_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)"
   },
   {
    "media": "this.panorama_9E80A567_99A1_3BDC_41D1_9339CBBC73A9",
    "camera": "this.panorama_9E80A567_99A1_3BDC_41D1_9339CBBC73A9_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)"
   },
   {
    "media": "this.panorama_9DB3106C_9573_EE71_41E1_CD9E6ABFBC81",
    "camera": "this.panorama_9DB3106C_9573_EE71_41E1_CD9E6ABFBC81_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)"
   },
   {
    "media": "this.panorama_9DEDA5CF_9573_D64E_41D0_B77916FF1472",
    "camera": "this.panorama_9DEDA5CF_9573_D64E_41D0_B77916FF1472_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)"
   },
   {
    "media": "this.panorama_9CE1ECCD_954C_56B3_41C0_001E83533F54",
    "camera": "this.panorama_9CE1ECCD_954C_56B3_41C0_001E83533F54_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)"
   },
   {
    "media": "this.panorama_9DEABACC_9573_F2B1_41D5_9D1431797D46",
    "camera": "this.panorama_9DEABACC_9573_F2B1_41D5_9D1431797D46_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 0)"
   }
  ],
  "id": "mainPlayList"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "media": "this.panorama_9DEE2A67_9574_527E_41B3_6CDED57A89AC",
    "camera": "this.panorama_9DEE2A67_9574_527E_41B3_6CDED57A89AC_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_82785049_9BA3_19D4_41D0_B7FEB9B18A20_playlist, 0, 1)"
   },
   {
    "media": "this.panorama_9DE8A30E_9574_33CE_41AE_445072CA27C0",
    "camera": "this.panorama_9DE8A30E_9574_33CE_41AE_445072CA27C0_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_82785049_9BA3_19D4_41D0_B7FEB9B18A20_playlist, 1, 2)"
   },
   {
    "media": "this.panorama_9DEBEB67_954C_327E_41D8_7DCCDDC912A8",
    "camera": "this.panorama_9DEBEB67_954C_327E_41D8_7DCCDDC912A8_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_82785049_9BA3_19D4_41D0_B7FEB9B18A20_playlist, 2, 3)"
   },
   {
    "media": "this.panorama_9DE8CF8D_9574_32B2_416C_00D5CD6DA04E",
    "camera": "this.panorama_9DE8CF8D_9574_32B2_416C_00D5CD6DA04E_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_82785049_9BA3_19D4_41D0_B7FEB9B18A20_playlist, 3, 4)"
   },
   {
    "media": "this.panorama_9DEDED88_9574_36B2_41D9_B2A57E8A9ED9",
    "camera": "this.panorama_9DEDED88_9574_36B2_41D9_B2A57E8A9ED9_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_82785049_9BA3_19D4_41D0_B7FEB9B18A20_playlist, 4, 5)"
   },
   {
    "media": "this.panorama_9E7312E1_99A1_1ED4_41E0_A5D0DA7B2892",
    "camera": "this.panorama_9E7312E1_99A1_1ED4_41E0_A5D0DA7B2892_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_82785049_9BA3_19D4_41D0_B7FEB9B18A20_playlist, 5, 6)"
   },
   {
    "media": "this.panorama_9E87579B_99A7_E774_41D5_D9B021C4A182",
    "camera": "this.panorama_9E87579B_99A7_E774_41D5_D9B021C4A182_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_82785049_9BA3_19D4_41D0_B7FEB9B18A20_playlist, 6, 7)"
   },
   {
    "media": "this.panorama_9E80F563_99A1_3BDB_41D7_08E32CDF28A0",
    "camera": "this.panorama_9E80F563_99A1_3BDB_41D7_08E32CDF28A0_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_82785049_9BA3_19D4_41D0_B7FEB9B18A20_playlist, 7, 8)"
   },
   {
    "media": "this.panorama_9E80D638_99A0_F9B4_41E0_2F85D159820E",
    "camera": "this.panorama_9E80D638_99A0_F9B4_41E0_2F85D159820E_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_82785049_9BA3_19D4_41D0_B7FEB9B18A20_playlist, 8, 9)"
   },
   {
    "media": "this.panorama_9E87A7A7_99A1_675C_41D7_44A9D18C0303",
    "camera": "this.panorama_9E87A7A7_99A1_675C_41D7_44A9D18C0303_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_82785049_9BA3_19D4_41D0_B7FEB9B18A20_playlist, 9, 10)"
   },
   {
    "media": "this.panorama_9DEAB61D_9573_D5D2_41DB_7100FF28F1C6",
    "camera": "this.panorama_9DEAB61D_9573_D5D2_41DB_7100FF28F1C6_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_82785049_9BA3_19D4_41D0_B7FEB9B18A20_playlist, 10, 11)"
   },
   {
    "media": "this.panorama_9E871860_99A7_29D4_41C2_47458889C165",
    "camera": "this.panorama_9E871860_99A7_29D4_41C2_47458889C165_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_82785049_9BA3_19D4_41D0_B7FEB9B18A20_playlist, 11, 12)"
   },
   {
    "media": "this.panorama_9E807E2F_99A1_29AC_41DC_A32142B5676F",
    "camera": "this.panorama_9E807E2F_99A1_29AC_41DC_A32142B5676F_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_82785049_9BA3_19D4_41D0_B7FEB9B18A20_playlist, 12, 13)"
   },
   {
    "media": "this.panorama_9E805266_99A1_F9DC_41DA_C7892E9AA757",
    "camera": "this.panorama_9E805266_99A1_F9DC_41DA_C7892E9AA757_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_82785049_9BA3_19D4_41D0_B7FEB9B18A20_playlist, 13, 14)"
   },
   {
    "media": "this.panorama_9E875631_99A7_39B4_41C3_E5065093D232",
    "camera": "this.panorama_9E875631_99A7_39B4_41C3_E5065093D232_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_82785049_9BA3_19D4_41D0_B7FEB9B18A20_playlist, 14, 15)"
   },
   {
    "media": "this.panorama_9E80A4D7_99A1_7AFC_41E2_0A04B58ED381",
    "camera": "this.panorama_9E80A4D7_99A1_7AFC_41E2_0A04B58ED381_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_82785049_9BA3_19D4_41D0_B7FEB9B18A20_playlist, 15, 16)"
   },
   {
    "media": "this.panorama_9E80A567_99A1_3BDC_41D1_9339CBBC73A9",
    "camera": "this.panorama_9E80A567_99A1_3BDC_41D1_9339CBBC73A9_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_82785049_9BA3_19D4_41D0_B7FEB9B18A20_playlist, 16, 17)"
   },
   {
    "media": "this.panorama_9DB3106C_9573_EE71_41E1_CD9E6ABFBC81",
    "camera": "this.panorama_9DB3106C_9573_EE71_41E1_CD9E6ABFBC81_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_82785049_9BA3_19D4_41D0_B7FEB9B18A20_playlist, 17, 18)"
   },
   {
    "media": "this.panorama_9DEDA5CF_9573_D64E_41D0_B77916FF1472",
    "camera": "this.panorama_9DEDA5CF_9573_D64E_41D0_B77916FF1472_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_82785049_9BA3_19D4_41D0_B7FEB9B18A20_playlist, 18, 19)"
   },
   {
    "media": "this.panorama_9CE1ECCD_954C_56B3_41C0_001E83533F54",
    "camera": "this.panorama_9CE1ECCD_954C_56B3_41C0_001E83533F54_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_82785049_9BA3_19D4_41D0_B7FEB9B18A20_playlist, 19, 20)"
   },
   {
    "media": "this.panorama_9DEABACC_9573_F2B1_41D5_9D1431797D46",
    "camera": "this.panorama_9DEABACC_9573_F2B1_41D5_9D1431797D46_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_82785049_9BA3_19D4_41D0_B7FEB9B18A20_playlist, 20, 0)"
   }
  ],
  "id": "ThumbnailList_82785049_9BA3_19D4_41D0_B7FEB9B18A20_playlist"
 },
 {
  "class": "FadeInEffect",
  "duration": 4000,
  "id": "effect_83269B13_9BA1_EF74_41BC_B7439173E7FD",
  "easing": "linear"
 },
 {
  "class": "FadeOutEffect",
  "duration": 4000,
  "id": "effect_83268B13_9BA1_EF74_41DD_6DF07AE1E0B5",
  "easing": "linear"
 },
 "this.popup_8C675771_99A3_67B4_41B8_6614EDB5357D",
 {
  "id": "camera_961E17B6_9B23_09F7_41E2_B8C3B3F74298",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 24.63
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_9610A7D1_9B23_098C_41B2_D5F9C2E185D4",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -79.44
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_961597EC_9B23_099B_41D4_E788AA2DA463",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 107.15
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_96096805_9B23_0695_41DE_AB89842CD83F",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -164.58
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_960A7823_9B23_068D_41B7_2BE5696CA2F7",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -165.51
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_960FD83E_9B23_06F7_41D9_4200FB17EBED",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 38.81
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_96009858_9B23_06BB_41C7_C52DE7026442",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 8.37
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_9605F875_9B23_0775_41E3_1883991463B8",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -49.73
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_9639C88E_9B23_0797_41E0_DD0069788009",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -101.26
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_963A68AA_9B23_079F_41D3_D6FB206D5FE2",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 71.16
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_963FC8BF_9B23_07F4_41C7_F97345245CC7",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -168.31
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_9630A8E0_9B23_078B_41CE_7BEC453386DE",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -5.04
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_963478FC_9B23_077B_41D3_2CF7EE70F695",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -58.89
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_9629E915_9B23_06B5_4162_8183059E4C1C",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 129.6
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_962D6931_9B23_068D_41D0_D418986C855B",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 39.99
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_962E294E_9B23_0697_41E0_85B45B71CF31",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -162.19
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_9623E968_9B23_069B_41E3_4235B0F6C9D0",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 6.18
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_96274984_9B23_198B_41CB_113EEA7771CC",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 139.04
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_965879A3_9B23_198D_41D6_45AB25A1DC8E",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -23.69
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_965DE9C0_9B23_198B_41D9_AA625F8A2BAC",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -19.88
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_965109D9_9B23_19BD_41CB_85B3C7CD2EC1",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -72.12
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_9652C9F0_9B23_198B_419A_3898286A0BB2",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -94.11
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_96560A08_9B23_1A9B_41DF_319C39A1DFC8",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 130.9
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_964B9A30_9B23_1A8B_41E0_0B98108864D5",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 4.93
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_964E4A56_9B23_1AB7_41A9_D84C48930EF7",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -30.84
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_9643FA7A_9B23_1B7F_41E0_BF26F422E8C0",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 106.97
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_96467A9E_9B23_1BB7_41BB_B500C8B46583",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 9.92
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_967ADAC4_9B23_1B8B_41C6_02DA6181DED5",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -15.04
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_967EFAE6_9B23_1B94_41C2_346464E2AA4D",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 107.07
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_96753B07_9B23_1A95_41DA_BD4FBD08ABC7",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -47.9
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_96699B2D_9B23_1A95_41E2_279DE0EBE307",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -8.65
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_966CCB57_9B23_1AB5_41B0_8397478D9903",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 96.98
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_9660AB81_9B23_198D_41B5_116979D0F281",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -152.02
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_96673BA4_9B23_198B_41D3_CD98A481AF2B",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -48.1
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_969A3BC6_9B23_1994_41D2_66663D437EEC",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 33.99
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_969E3BEB_9B23_199D_41DA_93E6A0BD22DC",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -145.73
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_96953C0C_9B23_1E9B_41CA_33B3A50C3A7F",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 133.9
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_96899C6A_9B23_1E9F_41D9_8ED552486A59",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 33.96
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_968C3CA1_9B23_1F8D_41D7_88BEF3B0BF99",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 38.34
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_96837CD3_9B23_1F8D_41E1_58E054E749EC",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 37.56
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_9687ED0A_9B23_1E9F_41CF_10C6A28147FF",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -10.2
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_96BA1D42_9B23_1E8F_41BC_B1DD59C18A33",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 77.95
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_96BE2D82_9B23_198F_41E0_9C326DE4E123",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 119.62
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_96B55DBB_9B23_19FD_41D0_49D99F006E81",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -6.88
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_96A9ADFA_9B23_197F_41E1_DCFA72D4BE8E",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 55.29
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_96AC2E33_9B23_1A8D_41C4_6A12322B4884",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -33.76
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_96A30E72_9B23_1A8F_41E2_E22FCAB7418C",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -5.29
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_96A7CEAD_9B23_1B95_41D0_A69C284AE4D9",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 84.83
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_96DA0EE9_9B23_1B9D_41C6_9C8B502E4E34",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 9.13
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_96DEEF1E_9B23_1AB4_41E1_94EFA93D1C4E",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -12.96
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_96D57F51_9B23_1A8D_41D1_8AE0E66F4546",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -45.55
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_96C9DF82_9B23_198F_41C3_D0D93A7C0F2E",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -98.88
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_96CC2FB6_9B23_19F7_41DF_A881C7D0639D",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 154.15
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_96C0BFF4_9B23_198B_41C4_C570FAF2F42E",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 133.53
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_96C7002C_9B23_069B_41DC_D23202D1CCC4",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -65.39
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_96FA4066_9B23_0697_41E1_E0FC9F258967",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 86.46
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_96FE909B_9B23_07BC_41E2_E3F1E7B98E14",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -176.19
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_96F580D1_9B23_078D_41CF_308B12387461",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 153.97
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_96EA610A_9B23_069F_41C2_12252829B99D",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -90.69
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_96E37142_9B23_068F_4199_D2D20CA57B88",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 5.64
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 }
], "children": [
 {
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipShadowBlurRadius": 3,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "top": 0,
  "playbackBarHeight": 10,
  "bottom": "0%",
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadShadowOpacity": 0.7,
  "toolTipPaddingRight": 6,
  "toolTipPaddingLeft": 6,
  "playbackBarHeadWidth": 6,
  "playbackBarBorderColor": "#FFFFFF",
  "borderSize": 0,
  "playbackBarProgressBorderSize": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarRight": 0,
  "progressBorderRadius": 0,
  "paddingTop": 0,
  "toolTipShadowSpread": 0,
  "progressBarBorderRadius": 0,
  "progressBarBorderSize": 0,
  "playbackBarProgressBorderRadius": 0,
  "transitionMode": "blending",
  "toolTipShadowHorizontalLength": 0,
  "shadow": false,
  "toolTipFontColor": "#606060",
  "minWidth": 100,
  "toolTipFontFamily": "Arial",
  "playbackBarBorderRadius": 0,
  "toolTipBorderSize": 1,
  "toolTipPaddingTop": 4,
  "minHeight": 50,
  "id": "MainViewer",
  "playbackBarProgressBorderColor": "#000000",
  "borderRadius": 0,
  "playbackBarHeadBorderRadius": 0,
  "toolTipTextShadowColor": "#000000",
  "progressLeft": 0,
  "playbackBarProgressOpacity": 1,
  "paddingLeft": 0,
  "toolTipFontSize": 12,
  "toolTipPaddingBottom": 4,
  "playbackBarHeadBorderColor": "#000000",
  "toolTipFontStyle": "normal",
  "class": "ViewerArea",
  "playbackBarBorderSize": 0,
  "playbackBarBackgroundOpacity": 1,
  "toolTipOpacity": 1,
  "toolTipShadowOpacity": 1,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarHeadBorderSize": 0,
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipBorderColor": "#767676",
  "toolTipFontWeight": "normal",
  "progressRight": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipTextShadowBlurRadius": 3,
  "progressOpacity": 1,
  "playbackBarHeadShadow": true,
  "progressBackgroundOpacity": 1,
  "toolTipBorderRadius": 3,
  "playbackBarOpacity": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarLeft": 0,
  "toolTipShadowColor": "#333333",
  "playbackBarHeadHeight": 15,
  "progressBarOpacity": 1,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "left": 0,
  "paddingBottom": 0,
  "right": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "progressBottom": 0,
  "toolTipTextShadowOpacity": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "paddingRight": 0,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadOpacity": 1,
  "progressHeight": 10,
  "progressBarBorderColor": "#000000",
  "progressBackgroundColorDirection": "vertical",
  "progressBorderSize": 0,
  "playbackBarBottom": 5,
  "toolTipShadowVerticalLength": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBorderColor": "#000000",
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ]
 },
 {
  "paddingLeft": 0,
  "maxWidth": 860,
  "url": "skin/Image_82FD0F7A_9BA1_27B4_41D3_BDEAB5109F4A.png",
  "top": "11.93%",
  "class": "Image",
  "borderSize": 0,
  "maxHeight": 465,
  "bottom": "21.26%",
  "verticalAlign": "middle",
  "paddingTop": 0,
  "scaleMode": "fit_inside",
  "shadow": false,
  "minWidth": 1,
  "left": "33.74%",
  "paddingBottom": 0,
  "right": "12.16%",
  "paddingRight": 0,
  "click": "this.setComponentVisibility(this.Image_82FD0F7A_9BA1_27B4_41D3_BDEAB5109F4A, true, 0, this.effect_83269B13_9BA1_EF74_41BC_B7439173E7FD, 'showEffect', false); this.setComponentVisibility(this.Image_82FD0F7A_9BA1_27B4_41D3_BDEAB5109F4A, false, 10000, this.effect_83268B13_9BA1_EF74_41DD_6DF07AE1E0B5, 'hideEffect', false)",
  "minHeight": 1,
  "horizontalAlign": "center",
  "backgroundOpacity": 0,
  "id": "Image_82FD0F7A_9BA1_27B4_41D3_BDEAB5109F4A",
  "borderRadius": 0
 },
 {
  "itemOpacity": 1,
  "itemBorderRadius": 0,
  "selectedItemLabelFontWeight": "bold",
  "top": "20%",
  "bottom": "20%",
  "itemThumbnailScaleMode": "fit_outside",
  "itemLabelFontFamily": "Arial",
  "borderSize": 0,
  "selectedItemLabelFontColor": "#FFCC00",
  "itemThumbnailWidth": 100,
  "itemThumbnailHeight": 75,
  "itemThumbnailShadowColor": "#000000",
  "itemLabelFontSize": 14,
  "paddingTop": 10,
  "itemThumbnailBorderRadius": 5,
  "itemPaddingLeft": 3,
  "itemThumbnailOpacity": 1,
  "itemBackgroundColorDirection": "vertical",
  "itemThumbnailShadow": true,
  "itemBackgroundOpacity": 0,
  "itemBackgroundColorRatios": [],
  "shadow": false,
  "itemLabelPosition": "bottom",
  "minWidth": 20,
  "itemThumbnailShadowSpread": 1,
  "itemPaddingRight": 3,
  "itemLabelFontWeight": "normal",
  "gap": 13,
  "itemMode": "normal",
  "itemLabelHorizontalAlign": "center",
  "horizontalAlign": "left",
  "backgroundOpacity": 0.31,
  "scrollBarOpacity": 0.5,
  "itemPaddingBottom": 3,
  "minHeight": 20,
  "itemHorizontalAlign": "center",
  "backgroundColorRatios": [
   0
  ],
  "borderRadius": 5,
  "id": "ThumbnailList_82785049_9BA3_19D4_41D0_B7FEB9B18A20",
  "paddingLeft": 20,
  "itemLabelFontColor": "#FFFFFF",
  "itemBackgroundColor": [],
  "class": "ThumbnailList",
  "itemThumbnailShadowOpacity": 0.27,
  "scrollBarVisible": "rollOver",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "verticalAlign": "top",
  "itemPaddingTop": 3,
  "rollOverItemBackgroundOpacity": 0,
  "itemLabelFontStyle": "normal",
  "layout": "vertical",
  "paddingBottom": 10,
  "itemLabelGap": 8,
  "backgroundColorDirection": "vertical",
  "itemThumbnailShadowBlurRadius": 8,
  "left": "0.4%",
  "scrollBarColor": "#FFFFFF",
  "itemVerticalAlign": "middle",
  "backgroundColor": [
   "#000000"
  ],
  "itemLabelTextDecoration": "none",
  "paddingRight": 20,
  "itemThumbnailShadowHorizontalLength": 3,
  "rollOverItemLabelFontWeight": "bold",
  "itemThumbnailShadowVerticalLength": 3,
  "playList": "this.ThumbnailList_82785049_9BA3_19D4_41D0_B7FEB9B18A20_playlist"
 },
 {
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 350,
   "easing": "cubic_in_out"
  },
  "paddingLeft": 0,
  "top": 0,
  "class": "UIComponent",
  "bottom": 0,
  "borderSize": 0,
  "paddingTop": 0,
  "shadow": false,
  "minWidth": 0,
  "left": 0,
  "paddingBottom": 0,
  "right": 0,
  "paddingRight": 0,
  "backgroundColor": [
   "#000000"
  ],
  "minHeight": 0,
  "backgroundOpacity": 0.55,
  "id": "veilPopupPanorama",
  "borderRadius": 0,
  "visible": false,
  "backgroundColorDirection": "vertical",
  "backgroundColorRatios": [
   0
  ]
 },
 {
  "paddingLeft": 0,
  "top": 0,
  "class": "ZoomImage",
  "bottom": 0,
  "borderSize": 0,
  "paddingTop": 0,
  "scaleMode": "custom",
  "shadow": false,
  "minWidth": 0,
  "left": 0,
  "paddingBottom": 0,
  "right": 0,
  "paddingRight": 0,
  "backgroundColor": [],
  "minHeight": 0,
  "backgroundOpacity": 1,
  "id": "zoomImagePopupPanorama",
  "borderRadius": 0,
  "visible": false,
  "backgroundColorDirection": "vertical",
  "backgroundColorRatios": []
 },
 {
  "shadowBlurRadius": 6,
  "fontSize": 12,
  "shadowColor": "#000000",
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 350,
   "easing": "cubic_in_out"
  },
  "paddingLeft": 5,
  "iconBeforeLabel": true,
  "fontFamily": "Arial",
  "top": 10,
  "class": "CloseButton",
  "label": "",
  "fontStyle": "normal",
  "iconWidth": 20,
  "iconHeight": 20,
  "borderSize": 0,
  "rollOverIconColor": "#666666",
  "borderColor": "#000000",
  "verticalAlign": "middle",
  "mode": "push",
  "paddingTop": 5,
  "fontWeight": "normal",
  "fontColor": "#FFFFFF",
  "shadowSpread": 1,
  "shadow": false,
  "layout": "horizontal",
  "minWidth": 0,
  "cursor": "hand",
  "iconLineWidth": 5,
  "paddingBottom": 5,
  "right": 10,
  "pressedIconColor": "#888888",
  "paddingRight": 5,
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "gap": 5,
  "textDecoration": "none",
  "minHeight": 0,
  "horizontalAlign": "center",
  "backgroundOpacity": 0.3,
  "id": "closeButtonPopupPanorama",
  "iconColor": "#000000",
  "borderRadius": 0,
  "visible": false,
  "backgroundColorDirection": "vertical",
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ]
 }
], 
 "scripts": {
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){    var closeFunction = function(){       clearAutoClose();       this.resumePlayers(playersPaused, !containsAudio);       w.unbind('close', closeFunction, this);   };   var clearAutoClose = function(){       w.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var timeoutID = undefined;   if(autoCloseMilliSeconds){       var autoCloseFunction = function(){           w.hide();       };       w.bind('click', clearAutoClose, this);       timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "playGlobalAudio": function(audio, endCallback){    var endFunction = function(){       audio.unbind('end', endFunction, this);       this.stopGlobalAudio(audio);       if(endCallback)           endCallback();   };   audio = this.getGlobalAudio(audio);   var audios = window.currentGlobalAudios;   if(!audios){       audios = window.currentGlobalAudios = {};   }   audios[audio.get('id')] = audio;   if(audio.get('state') == 'playing'){       return;   }   if(!audio.get('loop')){       audio.bind('end', endFunction, this);   }   audio.play(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){    var self = this;   var showEndFunction = function() {       popupPanoramaOverlay.unbind('showEnd', showEndFunction);       closeButton.bind('click', hideFunction, this);       setCloseButtonPosition();       closeButton.set('visible', true);   };   var endFunction = function() {       if(!popupPanoramaOverlay.get('loop'))           hideFunction();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       if(!self.isCardboardViewMode())           popupPanoramaOverlay.set('visible', false);       closeButton.set('visible', false);       closeButton.unbind('click', hideFunction, this);       popupPanoramaOverlay.unbind('end', endFunction, self);       self.resumePlayers(playersPaused, true);       self.resumeGlobalAudios();   };   var setCloseButtonPosition = function() {       var right = 10;       var top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   this.MainViewer.set('toolTipEnabled', false);   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(true);   this.pauseGlobalAudios();   popupPanoramaOverlay.bind('end', endFunction, this, true);   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); },
  "getGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios != undefined && audio.get('id') in audios){       audio = audios[audio.get('id')];   }   return audio; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){    var self = this;   this.MainViewer.set('toolTipEnabled', false);   var cardboardEnabled = this.isCardboardViewMode();   if(!cardboardEnabled) {       var zoomImage = this.zoomImagePopupPanorama;       var showDuration = popupPanoramaOverlay.get('showDuration');       var hideDuration = popupPanoramaOverlay.get('hideDuration');       var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);       var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth');       var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight');       var showEndFunction = function() {           var loadedFunction = function(){               if(!self.isCardboardViewMode())                   popupPanoramaOverlay.set('visible', false);           };           popupPanoramaOverlay.unbind('showEnd', showEndFunction, self);           popupPanoramaOverlay.set('showDuration', 1);           popupPanoramaOverlay.set('hideDuration', 1);           self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null,            closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction);       };       var hideFunction = function() {           var restoreShowDurationFunction = function(){                popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self);                popupPanoramaOverlay.set('visible', false);               popupPanoramaOverlay.set('showDuration', showDuration);               popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup);               popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup);           };           self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio);           var currentWidth = zoomImage.get('imageWidth');           var currentHeight = zoomImage.get('imageHeight');           popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true);           popupPanoramaOverlay.set('showDuration', 1);           popupPanoramaOverlay.set('hideDuration', hideDuration);           popupPanoramaOverlay.set('popupMaxWidth', currentWidth);           popupPanoramaOverlay.set('popupMaxHeight', currentHeight);          if(popupPanoramaOverlay.get('visible'))              restoreShowDurationFunction();          else              popupPanoramaOverlay.set('visible', true);           self.MainViewer.set('toolTipEnabled', true);       };       if(!imageHD){           imageHD = popupPanoramaOverlay.get('image');       }       if(!toggleImageHD && toggleImage){           toggleImageHD = toggleImage;       }       popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   } else {       var hideEndFunction = function() {           self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);           if(audio){               if(stopBackgroundAudio){                   self.resumeGlobalAudios();               }               self.stopGlobalAudio(audio);           }           popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self);           self.MainViewer.set('toolTipEnabled', true);       };       var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               this.pauseGlobalAudios();           }           this.playGlobalAudio(audio);       }       popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true);   }   popupPanoramaOverlay.set('visible', true); },
  "getActivePlayerWithViewer": function(viewerArea){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   players = players.concat(this.getByClassName('MapPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('viewerArea') == viewerArea) {           var playerClass = player.get('class');           if(playerClass == 'PanoramaPlayer' && player.get('panorama') != undefined) return player;           else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player;           else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player;           else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player;       }   }   return undefined; },
  "fixTogglePlayPauseButton": function(player){    var state = player.get('state');   var button = player.get('buttonPlayPause');   if(typeof button !== 'undefined' && player.get('state') == 'playing'){       button.set('pressed', true);   } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){    var self = this;   var closed = false;   var playerClickFunction = function() {       zoomImage.unbind('loaded', loadedFunction, self);       hideFunction();   };   var clearAutoClose = function(){       zoomImage.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var loadedFunction = function(){       self.unbind('click', playerClickFunction, self);       veil.set('visible', true);       setCloseButtonPosition();       closeButton.set('visible', true);       zoomImage.unbind('loaded', loadedFunction, this);       zoomImage.bind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this);       timeoutID = setTimeout(timeoutFunction, 200);   };   var timeoutFunction = function(){       timeoutID = undefined;       if(autoCloseMilliSeconds){           var autoCloseFunction = function(){               hideFunction();           };           zoomImage.bind('click', clearAutoClose, this);           timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);       }       zoomImage.bind('backgroundClick', hideFunction, this);       if(toggleImage) {           zoomImage.bind('click', toggleFunction, this);           zoomImage.set('imageCursor', 'hand');       }       closeButton.bind('click', hideFunction, this);       if(loadedCallback)           loadedCallback();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       closed = true;       if(timeoutID)           clearTimeout(timeoutID);       if(autoCloseMilliSeconds)           clearAutoClose();       if(hideCallback)           hideCallback();       zoomImage.set('visible', false);       if(hideEffect && hideEffect.get('duration') > 0){           hideEffect.bind('end', endEffectFunction, this);       }       else{           zoomImage.set('image', null);       }       closeButton.set('visible', false);       veil.set('visible', false);       self.unbind('click', playerClickFunction, self);       zoomImage.unbind('backgroundClick', hideFunction, this);       zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true);       if(toggleImage) {           zoomImage.unbind('click', toggleFunction, this);           zoomImage.set('cursor', 'default');       }       closeButton.unbind('click', hideFunction, this);       self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               self.resumeGlobalAudios();           }           self.stopGlobalAudio(audio);       }   };   var endEffectFunction = function() {       zoomImage.set('image', null);       hideEffect.unbind('end', endEffectFunction, this);   };   var toggleFunction = function() {       zoomImage.set('image', isToggleVisible() ? image : toggleImage);   };   var isToggleVisible = function() {       return zoomImage.get('image') == toggleImage;   };   var setCloseButtonPosition = function() {       var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10;       var top = zoomImage.get('imageTop') + 10;       if(right < 10) right = 10;       if(top < 10) top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var userInteractionStartFunction = function() {       if(timeoutUserInteractionID){           clearTimeout(timeoutUserInteractionID);           timeoutUserInteractionID = undefined;       }       else{           closeButton.set('visible', false);       }   };   var userInteractionEndFunction = function() {       if(!closed){           timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300);       }   };   var userInteractionTimeoutFunction = function() {       timeoutUserInteractionID = undefined;       closeButton.set('visible', true);       setCloseButtonPosition();   };   this.MainViewer.set('toolTipEnabled', false);   var veil = this.veilPopupPanorama;   var zoomImage = this.zoomImagePopupPanorama;   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);   if(audio){       if(stopBackgroundAudio){           this.pauseGlobalAudios();       }       this.playGlobalAudio(audio);   }   var timeoutID = undefined;   var timeoutUserInteractionID = undefined;   zoomImage.bind('loaded', loadedFunction, this);   setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0);   zoomImage.set('image', image);   zoomImage.set('customWidth', customWidth);   zoomImage.set('customHeight', customHeight);   zoomImage.set('showEffect', showEffect);   zoomImage.set('hideEffect', hideEffect);   zoomImage.set('visible', true);   return zoomImage; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){    var self = this;   var closeFunction = function(){       self.MainViewer.set('toolTipEnabled', true);       this.resumePlayers(playersPaused, !containsAudio);       if(isVideo) {           this.unbind('resize', resizeFunction, this);       }       w.unbind('close', closeFunction, this);   };   var endFunction = function(){       w.hide();   };   var resizeFunction = function(){       var parentWidth = self.get('actualWidth');       var parentHeight = self.get('actualHeight');       var mediaWidth = media.get('width');       var mediaHeight = media.get('height');       var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100;       var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100;       var windowWidth = popupMaxWidthNumber * parentWidth;       var windowHeight = popupMaxHeightNumber * parentHeight;       var footerHeight = w.get('footerHeight');       var headerHeight = w.get('headerHeight');       if(!headerHeight) {           var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom');           var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom');           headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight;           headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom');       }       if(!footerHeight) {           footerHeight = 0;       }       var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight');       var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom');       var parentAspectRatio = contentWindowWidth / contentWindowHeight;       var mediaAspectRatio = mediaWidth / mediaHeight;       if(parentAspectRatio > mediaAspectRatio) {           windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight');       }       else {           windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom');       }       if(windowWidth > parentWidth * popupMaxWidthNumber) {           windowWidth = parentWidth * popupMaxWidthNumber;       }       if(windowHeight > parentHeight * popupMaxHeightNumber) {           windowHeight = parentHeight * popupMaxHeightNumber;       }       w.set('width', windowWidth);       w.set('height', windowHeight);       w.set('x', (parentWidth - w.get('actualWidth')) * 0.5);       w.set('y', (parentHeight - w.get('actualHeight')) * 0.5);   };   if(autoCloseWhenFinished){       this.executeFunctionWhenChange(playList, 0, endFunction);   }   var isVideo = media.get('class') == 'Video';   if(isVideo){       this.bind('resize', resizeFunction, this);       resizeFunction();   }   else {       w.set('width', popupMaxWidth);       w.set('height', popupMaxHeight);   }   this.MainViewer.set('toolTipEnabled', false);   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           this.stopGlobalAudio(audio);           if(isPanorama) {               var media = playListItem.get('media');               var audios = media.get('audios');               audios.splice(audios.indexOf(audio), 1);               media.set('audios', audios);           }           playList.unbind('change', changeFunction, this);           if(endCallback)               endCallback();       }   };   var audios = window.currentGlobalAudios;   if(audios && audio.get('id') in audios){       audio = audios[audio.get('id')];       if(audio.get('state') != 'playing'){           audio.play();       }       return;   }   playList.bind('change', changeFunction, this);   var playListItem = playList.get('items')[index];   var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem';   if(isPanorama) {       var media = playListItem.get('media');       var audios = (media.get('audios') || []).slice();       if(audio.get('class') == 'MediaAudio') {           var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio');           panoramaAudio.set('autoplay', false);           panoramaAudio.set('audio', audio.get('audio'));           panoramaAudio.set('loop', audio.get('loop'));           panoramaAudio.set('id', audio.get('id'));           audio = panoramaAudio;       }       audios.push(audio);       media.set('audios', audios);   }   this.playGlobalAudio(audio, endCallback); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){    var setVisibility = function(visible){       for(var i = 0, length = components.length; i<length; i++){           components[i].set('visible', visible);       }   };   if (this.rootPlayer.touchEnabled){       setVisibility(true);   } else {       var timeoutID = -1;       var rollOverFunction = function(){           setVisibility(true);           if(timeoutID >= 0) clearTimeout(timeoutID);           parentComponent.unbind('rollOver', rollOverFunction, this);           parentComponent.bind('rollOut', rollOutFunction, this);       };       var rollOutFunction = function(){           var timeoutFunction = function(){               setVisibility(false);               parentComponent.unbind('rollOver', rollOverFunction, this);           };           parentComponent.unbind('rollOut', rollOutFunction, this);           parentComponent.bind('rollOver', rollOverFunction, this);           timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut);       };       parentComponent.bind('rollOver', rollOverFunction, this);   } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){    var self = this;   var endObject = undefined;   var changePlayListFunction = function(event){       if(event.data.previousSelectedIndex == index){           if(changeFunction) changeFunction();           if(endFunction) endObject.unbind('end', endFunction, self);           playList.unbind('change', changePlayListFunction, self);       }   };   if(endFunction){       var playListItem = playList.get('items')[index];       var playListItemClass = playListItem.get('class');       if(playListItemClass == 'PanoramaPlayListItem'){           var camera = playListItem.get('camera');           endObject = camera.get('initialSequence');           if(!endObject) return;       }       else{           endObject = playListItem.get('media');       }       endObject.bind('end', endFunction, this);   }   playList.bind('change', changePlayListFunction, this); },
  "shareTwitter": function(url){    window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "changeBackgroundWhilePlay": function(playList, index, color){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           playList.unbind('change', changeFunction, this);           if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){               viewerArea.set('backgroundColor', backgroundColorBackup);               viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup);           }       }   };   var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var viewerArea = player.get('viewerArea');   var backgroundColorBackup = viewerArea.get('backgroundColor');   var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios');   var colorRatios = [0];   if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){       viewerArea.set('backgroundColor', color);       viewerArea.set('backgroundColorRatios', colorRatios);       playList.bind('change', changeFunction, this);   } },
  "playAudioList": function(audios){    if(audios.length == 0) return;   var currentAudioCount = -1;   var currentAudio;   var playGlobalAudioFunction = this.playGlobalAudio;   var playNext = function(){       if(++currentAudioCount >= audios.length)           currentAudioCount = 0;       currentAudio = audios[currentAudioCount];       playGlobalAudioFunction(currentAudio, playNext);   };   playNext(); },
  "shareGoogle": function(url){    window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "autotriggerAtStart": function(player, callback){    var stateChangeFunction = function(event){        if(event.data.state == 'playing'){           callback();           player.unbind('stateChange', stateChangeFunction, this);       }   };   player.bind('stateChange', stateChangeFunction, this); },
  "pauseGlobalAudios": function(caller){    var audios = window.currentGlobalAudios;   window.currentGlobalAudiosActionCaller = caller;   if(!audios) return;   for(var audio in audios){       audios[audio].pause();   } },
  "shareFacebook": function(url){    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "existsKey": function(key){    return key in window; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){    var self = this;   var stateChangeFunction = function(event){       if(event.data.state == 'stopped'){           dispose();       }   };   var changeFunction = function(){       var index = playListDispatcher.get('selectedIndex');       if(index != -1){           indexDispatcher = index;           dispose();       }   };   var dispose = function(){       if(!playListDispatcher) return;       playList.set('selectedIndex', -1);       if(panoramaSequence && panoramaSequenceIndex != -1){           if(panoramaSequence) {               if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){                   var initialPosition = camera.get('initialPosition');                   var oldYaw = initialPosition.get('yaw');                   var oldPitch = initialPosition.get('pitch');                   var oldHfov = initialPosition.get('hfov');                   var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1];                   initialPosition.set('yaw', previousMovement.get('targetYaw'));                   initialPosition.set('pitch', previousMovement.get('targetPitch'));                   initialPosition.set('hfov', previousMovement.get('targetHfov'));                   var restoreInitialPositionFunction = function(event){                       initialPosition.set('yaw', oldYaw);                       initialPosition.set('pitch', oldPitch);                       initialPosition.set('hfov', oldHfov);                       itemDispatcher.unbind('end', restoreInitialPositionFunction, self);                   };                   itemDispatcher.bind('end', restoreInitialPositionFunction, self);               }               panoramaSequence.set('movementIndex', panoramaSequenceIndex);           }       }       playListDispatcher.set('selectedIndex', indexDispatcher);       if(player){           player.unbind('stateChange', stateChangeFunction, self);       }       if(sameViewerArea){           if(playList != playListDispatcher)               playListDispatcher.unbind('change', changeFunction, self);       }       else{           viewerArea.set('visible', false);       }       playListDispatcher = undefined;   };   if(!mediaDispatcher){       var currentIndex = playList.get('selectedIndex');       var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer);       if(currentPlayer) {           var playerClass = currentPlayer.get('class');           if(playerClass == 'PanoramaPlayer') mediaDispatcher = currentPlayer.get('panorama');           else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video');           else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum');           else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map');       }   }   var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined;   if(!playListDispatcher){       playList.set('selectedIndex', index);       return;   }   var indexDispatcher = playListDispatcher.get('selectedIndex');   if(playList.get('selectedIndex') == index || indexDispatcher == -1){       return;   }   var item = playList.get('items')[index];   var itemDispatcher = playListDispatcher.get('items')[indexDispatcher];   var viewerArea = item.get('player').get('viewerArea');   var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea');   if(sameViewerArea){       if(playList != playListDispatcher){           playListDispatcher.set('selectedIndex', -1);           playListDispatcher.bind('change', changeFunction, this);       }   }   else{       viewerArea.set('visible', true);   }   var panoramaSequenceIndex = -1;   var panoramaSequence = undefined;   var camera = itemDispatcher.get('camera');   if(camera){       panoramaSequence = camera.get('initialSequence');       if(panoramaSequence) {           panoramaSequenceIndex = panoramaSequence.get('movementIndex');       }   }   playList.set('selectedIndex', index);   var player = undefined;   if(item.get('player') != itemDispatcher.get('player')){       player = item.get('player');       player.bind('stateChange', stateChangeFunction, this);   }   this.executeFunctionWhenChange(playList, index, dispose); },
  "unregisterKey": function(key){    delete window[key]; },
  "pauseGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];   }   audio.pause(); },
  "setMainMediaByName": function(name){    var items = this.mainPlayList.get('items');   for(var i = 0; i<items.length; ++i){       if(items[i].get('media').get('label') == name) {           this.mainPlayList.set('selectedIndex', i);           return;       }   } },
  "registerKey": function(key, value){    window[key] = value; },
  "getKey": function(key){    return window[key]; },
  "setMainMediaByIndex": function(index){    if(index >= 0 && index < this.mainPlayList.get('items').length){       this.mainPlayList.set('selectedIndex', index);   } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){    var enabled = this.get(playerFlag);   for(var i in components){       components[i].set('visible', enabled);   } },
  "updateVideoCues": function(playList, index){    var playListItem = playList.get('items')[index];   var video = playListItem.get('media');   if(video.get('cues').length == 0)       return;   var player = playListItem.get('player');   var cues = [];   var changeFunction = function(){       if(playList.get('selectedIndex') != index){           video.unbind('cueChange', cueChangeFunction, this);           playList.unbind('change', changeFunction, this);       }   };   var cueChangeFunction = function(event){       var activeCues = event.data.activeCues;       for(var i = 0, count = cues.length; i<count; ++i){           var cue = cues[i];           if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){               cue.trigger('end');           }       }       cues = activeCues;   };   video.bind('cueChange', cueChangeFunction, this);   playList.bind('change', changeFunction, this); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){    var audios = window.currentGlobalAudios;   if(!audios) return;   var resumeFunction = this.resumeGlobalAudios;   var endFunction = function(){       if(playList.get('selectedIndex') != index) {           resumeFunction(caller);       }   };   this.pauseGlobalAudios(caller);   this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('state') == 'playing') {           if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){               player.pauseCamera();           }           else{               player.pause();           }       }       else {           players.splice(i, 1);       }   }   return players; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){    var endFunction = function(){       if(playList.get('selectedIndex') == fromIndex)           playList.set('selectedIndex', toIndex);   };   this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "syncPlaylists": function(playLists){    var changeToMedia = function(media, playListDispatched){       for(var i = 0, count = playLists.length; i<count; ++i){           var playList = playLists[i];           if(playList != playListDispatched){               var items = playList.get('items');               for(var j = 0, countJ = items.length; j<countJ; ++j){                   if(items[j].get('media') == media){                       if(playList.get('selectedIndex') != j){                           playList.set('selectedIndex', j);                       }                       break;                   }               }           }       }   };   var changeFunction = function(event){       var playListDispatched = event.source;       var selectedIndex = playListDispatched.get('selectedIndex');       if(selectedIndex < 0)           return;       var media = playListDispatched.get('items')[selectedIndex].get('media');       changeToMedia(media, playListDispatched);   };   var mapPlayerChangeFunction = function(event){       var panoramaMapLocation = event.source.get('panoramaMapLocation');       if(panoramaMapLocation){           var map = panoramaMapLocation.get('map');           changeToMedia(map);       }   };   for(var i = 0, count = playLists.length; i<count; ++i){       playLists[i].bind('change', changeFunction, this);   }   var mapPlayers = this.getByClassName('MapPlayer');   for(var i = 0, count = mapPlayers.length; i<count; ++i){       mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this);   } },
  "loadFromCurrentMediaPlayList": function(playList, delta){    var currentIndex = playList.get('selectedIndex');   var totalItems = playList.get('items').length;   var newIndex = (currentIndex + delta) % totalItems;   while(newIndex < 0){       newIndex = totalItems + newIndex;   };   if(currentIndex != newIndex){       playList.set('selectedIndex', newIndex);   }; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){    var changeFunction = function(){       var index = playList.get('selectedIndex');       if(index >= 0){           var beginFunction = function(){               playListItem.unbind('begin', beginFunction);               setMediaLabel(index);           };           var setMediaLabel = function(index){               var media = playListItem.get('media');               var text = media.get('data');               if(!text)                   text = media.get('label');               setHtml(text);           };           var setHtml = function(text){               if(text !== undefined)                   htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>');               else                   htmlText.set('html', '');           };           var playListItem = playList.get('items')[index];           if(htmlText.get('html')){               setHtml('Loading...');               playListItem.bind('begin', beginFunction);           }           else{               setMediaLabel(index);           }       }   };   var disposeFunction = function(){       htmlText.set('html', undefined);       playList.unbind('change', changeFunction, this);       playListItemStopToDispose.unbind('stop', disposeFunction, this);   };   if(playListItemStopToDispose){       playListItemStopToDispose.bind('stop', disposeFunction, this);   }   playList.bind('change', changeFunction, this);   changeFunction(); },
  "loopAlbum": function(playList, index){    var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var loopFunction = function(){       player.play();   };   this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){    this.unregisterKey('visibility_'+component.get('id'));   var changeVisibility = function(){        if(effect && propertyEffect){            component.set(propertyEffect, effect);        }        component.set('visible', visible);       if(component.get('class') == 'ViewerArea'){           try{               if(visible) component.restart();               else        component.pause();           }           catch(e){};       }   };   var effectTimeoutName = 'effectTimeout_'+component.get('id');   if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){       var effectTimeout = window[effectTimeoutName];       if(effectTimeout instanceof Array){           for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) }       }else{           clearTimeout(effectTimeout);       }       delete window[effectTimeoutName];   }   else if(visible == component.get('visible') && !ignoreClearTimeout)       return;   if(applyAt && applyAt > 0){       var effectTimeout = setTimeout(function(){            if(window[effectTimeoutName] instanceof Array) {                var arrayTimeoutVal = window[effectTimeoutName];               var index = arrayTimeoutVal.indexOf(effectTimeout);               arrayTimeoutVal.splice(index, 1);               if(arrayTimeoutVal.length == 0){                   delete window[effectTimeoutName];               }           }else{               delete window[effectTimeoutName];            }           changeVisibility();        }, applyAt);       if(window.hasOwnProperty(effectTimeoutName)){           window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout];       }else{           window[effectTimeoutName] = effectTimeout;       }   }   else{       changeVisibility();   } },
  "getPlayListWithMedia": function(media, onlySelected){    var playLists = this.getByClassName('PlayList');   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       if(onlySelected && playList.get('selectedIndex') == -1)           continue;       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           if(items[j].get('media') == media)               return playList;       }   }   return undefined; },
  "stopGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];       delete audios[audio.get('id')];   }   audio.stop(); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){    var resetFunction = function(){       panoramaPlayListItem.unbind('stop', resetFunction, this);       player.set('mapPlayer', null);   };   panoramaPlayListItem.bind('stop', resetFunction, this);   var player = panoramaPlayListItem.get('player');   player.set('mapPlayer', mapPlayer); },
  "isCardboardViewMode": function(){    var players = this.getByClassName('PanoramaPlayer');   return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "resumeGlobalAudios": function(caller){    if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller)       return;   window.currentGlobalAudiosActionCaller = undefined;   var audios = window.currentGlobalAudios;   if(!audios) return;   for(var audio in audios){       audios[audio].play();   } },
  "startPanoramaWithCamera": function(panorama, camera){    var playLists = this.getByClassName('PlayList');   if(playLists.length == 0)       return;    var restoreItems = [];   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           var item = items[j];           if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){               restoreItems.push({camera: item.get('camera'), item: item});               item.set('camera', camera);           }       }   }   if(restoreItems.length > 0) {       var restoreCameraOnStop = function(){           for (var i = 0; i < restoreItems.length; i++) {               restoreItems[i].item.set('camera', restoreItems[i].camera);           }           restoreItems[0].item.unbind('stop', restoreCameraOnStop, this);       };       restoreItems[0].item.bind('stop', restoreCameraOnStop, this);   } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){    for(var i = 0; i<players.length; ++i){       var player = players[i];       if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){           player.resumeCamera();       }       else{           player.play();       }   } }
 },
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "contentOpaque": false,
 "paddingLeft": 0,
 "class": "Player",
 "start": "this.syncPlaylists([this.ThumbnailList_82785049_9BA3_19D4_41D0_B7FEB9B18A20_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); var self = this; var autotriggerFunc = function(){ self.Image_82FD0F7A_9BA1_27B4_41D3_BDEAB5109F4A.trigger('click') }; this.autotriggerAtStart(this.MainViewerPanoramaPlayer, autotriggerFunc)",
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "overflow": "visible",
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "backgroundPreloadEnabled": true,
 "shadow": false,
 "layout": "absolute",
 "minWidth": 20,
 "paddingBottom": 0,
 "mouseWheelEnabled": true,
 "width": "100%",
 "paddingRight": 0,
 "minHeight": 20,
 "horizontalAlign": "left",
 "id": "rootPlayer",
 "scrollBarColor": "#000000",
 "borderRadius": 0
})