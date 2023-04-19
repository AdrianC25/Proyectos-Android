// JSON file describing the AR-experience for offline usage
var projectJSONOffline =
{
    "isCloud": false,
    "tcId": "63d42a9379cb970051133af4",
    "name": "ISTL",
    "targets": [
        {
            "name": "ra",
            "augmentations": [
                {
                    "type": "Model3D",
                    "uri": "augmentation-assets/3631_ra/63e5aa0e560fae00637d8d7b/model.wt3",
                    "targetId": "63e5a9b2560fae00637d8d78",
                    "minSDK": "6.1.0",
                    "modDat": 1675996217812,
                    "creDat": 1675995662492,
                    "properties": {
                        "name": "laptop",
                        "mtlUrl": "https://s3-eu-west-1.amazonaws.com/target-manager-live/9611f9d75fa1f2a2018302694b9429e2/63d42a9379cb970051133af4/63e5a9b2560fae00637d8d78/studio/3ok36JoV/model.mtl",
                        "isOccluder": false,
                        "ignoreInAR": false,
                        "rotate": {
                            "x": 319,
                            "y": 283,
                            "z": 279
                        },
                        "scale": {
                            "x": 0.019347,
                            "y": 0.019347,
                            "z": 0.019347
                        },
                        "translate": {
                            "x": -3.335605756558599,
                            "y": 2.3822084149031886,
                            "z": -0.6894343599819832
                        }
                    },
                    "fileSize": 56999,
                    "id": "63e5aa0e560fae00637d8d7b"
                },
                {
                    "type": "VideoDrawable",
                    "height": 0.3,
                    "uri": "augmentation-assets/3631_ra/63e5ac36560fae00637d8d94/video.mp4",
                    "targetId": "63e5a9b2560fae00637d8d78",
                    "externalUri": false,
                    "firstFrameImgUrlFileSize": 312594,
                    "firstFrameAlphaImgUrlFileSize": 113483,
                    "firstFrameAlphaImgUrl": "augmentation-assets/3631_ra/63e5ac36560fae00637d8d94/firstFrameAlphaImgUrl.png",
                    "minSDK": "6.1.0",
                    "modDat": 1675996360116,
                    "creDat": 1675996214165,
                    "properties": {
                        "name": "videoplayback (2)",
                        "firstFrameImgUrl": "augmentation-assets/3631_ra/63e5ac36560fae00637d8d94/firstFrameImg.png",
                        "translate": {
                            "x": 0.011606827377611595,
                            "y": -0.004301537487046148,
                            "z": -0.5781477340009145
                        },
                        "autoPlay": false,
                        "autoResume": false,
                        "endlessLoop": false,
                        "ignoreInAR": false,
                        "opacity": 1,
                        "rotate": {
                            "x": 0,
                            "y": 0,
                            "z": 0
                        },
                        "scale": {
                            "x": 2,
                            "y": 2,
                            "z": 2
                        },
                        "videoMode": "overlay",
                        "zOrder": 0
                    },
                    "fileSize": 3907501,
                    "id": "63e5ac36560fae00637d8d94"
                }
            ]
        },
        {
            "name": "logo istl",
            "augmentations": [
                {
                    "height": 0.1,
                    "type": "Label",
                    "targetId": "63d42b5861e26b0044d02be9",
                    "minSDK": "6.1.0",
                    "modDat": 1675453021162,
                    "creDat": 1674849415819,
                    "properties": {
                        "name": "label_1",
                        "text": "INSTITTUTO SUPERIOR TECNOLOGICO LOJA",
                        "style": {
                            "backgroundColor": "rgba(0,0,0,1)",
                            "fontStyle": "normal",
                            "textColor": "rgba(255,255,255,1)"
                        },
                        "ignoreInAR": false,
                        "opacity": 1,
                        "rotate": {
                            "x": 0,
                            "y": 0,
                            "z": 0
                        },
                        "scale": {
                            "x": 2,
                            "y": 2,
                            "z": 2
                        },
                        "translate": {
                            "x": -0.03221238078111405,
                            "y": 1.085747828541001,
                            "z": 0.8853430390423244
                        },
                        "zOrder": 5
                    },
                    "fileSize": 0,
                    "id": "63d42c8761e26b0044d02c08"
                },
                {
                    "type": "VideoDrawable",
                    "height": 0.3,
                    "uri": "augmentation-assets/1618905481_logo_istl/63d6c2cf61e26b0044d02e63/video.mp4",
                    "targetId": "63d42b5861e26b0044d02be9",
                    "externalUri": false,
                    "firstFrameImgUrlFileSize": 831,
                    "firstFrameAlphaImgUrlFileSize": 341,
                    "firstFrameAlphaImgUrl": "augmentation-assets/1618905481_logo_istl/63d6c2cf61e26b0044d02e63/firstFrameAlphaImgUrl.png",
                    "minSDK": "6.1.0",
                    "modDat": 1675731861639,
                    "creDat": 1675018959347,
                    "properties": {
                        "name": "cancion",
                        "firstFrameImgUrl": "augmentation-assets/1618905481_logo_istl/63d6c2cf61e26b0044d02e63/firstFrameImg.png",
                        "translate": {
                            "x": -0.6306629571473326,
                            "y": -0.22898343200310856,
                            "z": 0.3129802755015829
                        },
                        "autoPlay": true,
                        "autoResume": false,
                        "endlessLoop": false,
                        "ignoreInAR": false,
                        "opacity": 1,
                        "rotate": {
                            "x": 0,
                            "y": 0,
                            "z": 0
                        },
                        "scale": {
                            "x": 2,
                            "y": 2,
                            "z": 2
                        },
                        "videoMode": "overlay",
                        "zOrder": 0
                    },
                    "fileSize": 6621840,
                    "id": "63d6c2cf61e26b0044d02e63"
                },
                {
                    "type": "ImageDrawable",
                    "height": 0.3,
                    "uri": "augmentation-assets/1618905481_logo_istl/63d930f361e26b0044d03411/image.jpeg",
                    "targetId": "63d42b5861e26b0044d02be9",
                    "minSDK": "6.1.0",
                    "modDat": 1675718772551,
                    "creDat": 1675178227388,
                    "properties": {
                        "name": "torre eifel",
                        "forceNativeBrowser": "false",
                        "ignoreInAR": false,
                        "opacity": 1,
                        "rotate": {
                            "x": 347,
                            "y": 340,
                            "z": 355
                        },
                        "scale": {
                            "x": 2,
                            "y": 2,
                            "z": 2
                        },
                        "translate": {
                            "x": -1.26332509062662,
                            "y": -0.004850181871781795,
                            "z": 0.8176976773082978
                        },
                        "zOrder": 4
                    },
                    "fileSize": 6961,
                    "id": "63d930f361e26b0044d03411"
                },
                {
                    "type": "ImageDrawable",
                    "height": 0.3,
                    "uri": "augmentation-assets/1618905481_logo_istl/63d9313661e26b0044d03412/image.jpeg",
                    "targetId": "63d42b5861e26b0044d02be9",
                    "minSDK": "6.1.0",
                    "modDat": 1675453024603,
                    "creDat": 1675178294551,
                    "properties": {
                        "name": "pokemongo",
                        "forceNativeBrowser": "false",
                        "ignoreInAR": false,
                        "opacity": 1,
                        "rotate": {
                            "x": 358,
                            "y": 15,
                            "z": 11
                        },
                        "scale": {
                            "x": 2,
                            "y": 2,
                            "z": 2
                        },
                        "translate": {
                            "x": 1.5114540637191896,
                            "y": -0.008729647638188703,
                            "z": 0.6549433473998496
                        },
                        "zOrder": 3
                    },
                    "fileSize": 5318,
                    "id": "63d9313661e26b0044d03412"
                },
                {
                    "height": 0.1,
                    "type": "Label",
                    "targetId": "63d42b5861e26b0044d02be9",
                    "minSDK": "6.1.0",
                    "modDat": 1675452984900,
                    "creDat": 1675178682767,
                    "properties": {
                        "name": "label_2",
                        "text": "DESARROLLO DE  SOFTWARE",
                        "style": {
                            "backgroundColor": "rgba(207,231,247,0.84)",
                            "fontStyle": "italic",
                            "textColor": "rgba(0,0,0,1)"
                        },
                        "ignoreInAR": false,
                        "opacity": 1,
                        "rotate": {
                            "x": 0,
                            "y": 0,
                            "z": 0
                        },
                        "scale": {
                            "x": 2,
                            "y": 2,
                            "z": 2
                        },
                        "translate": {
                            "x": -0.07133771016424106,
                            "y": 0.717706953870764,
                            "z": 0.627307880955793
                        },
                        "zOrder": 2
                    },
                    "fileSize": 0,
                    "id": "63d932ba61e26b0044d03413"
                },
                {
                    "type": "Button",
                    "height": 0.3,
                    "uri": "augmentation-assets/1618905481_logo_istl/63d9346261e26b0044d03416/image.png",
                    "targetId": "63d42b5861e26b0044d02be9",
                    "minSDK": "6.1.0",
                    "modDat": 1675194732093,
                    "creDat": 1675179106123,
                    "properties": {
                        "clickUrl": "https://www.facebook.com/https://www.facebook.com/TecnologicoLoja?__cft__[0]=AZWmMI0epESupacTLsN5k2lLXreKS1g2w8xSuDFSRqF3eH9mXis82k_r7Xys4yngt9c2Tlm_Wv7KCMw_qqgbCyFTvWsbJMzXaqgItAlIJ9PFMyJyeVGmbYF7O_KUKWM4ZBKyKzdHIaDJsDrcm2bmuQxSCWDWkA7WsvrJuh9xLvgvZvH4Tk1gBL7i3_7czjcagvk&__tn__=",
                        "name": "button_1",
                        "forceNativeBrowser": "false",
                        "ignoreInAR": false,
                        "opacity": 1,
                        "rotate": {
                            "x": 0,
                            "y": 0,
                            "z": 0
                        },
                        "scale": {
                            "x": 1,
                            "y": 1,
                            "z": 1
                        },
                        "translate": {
                            "x": 1.198251861415534,
                            "y": -1.4163889830217338,
                            "z": 0.496042605980462
                        },
                        "zOrder": 1
                    },
                    "fileSize": 3967,
                    "id": "63d9346261e26b0044d03416"
                },
                {
                    "type": "Model3D",
                    "uri": "augmentation-assets/1618905481_logo_istl/63dd620161e26b0044d03e0b/model.wt3",
                    "targetId": "63d42b5861e26b0044d02be9",
                    "minSDK": "6.1.0",
                    "modDat": 1675995480898,
                    "creDat": 1675452929254,
                    "properties": {
                        "name": "laptop",
                        "mtlUrl": "https://s3-eu-west-1.amazonaws.com/target-manager-live/9611f9d75fa1f2a2018302694b9429e2/63d42a9379cb970051133af4/63d42b5861e26b0044d02be9/studio/KOwDxejY/model.mtl",
                        "isOccluder": false,
                        "ignoreInAR": false,
                        "rotate": {
                            "x": 316,
                            "y": 286,
                            "z": 282
                        },
                        "scale": {
                            "x": 0.009173,
                            "y": 0.009173,
                            "z": 0.009173
                        },
                        "translate": {
                            "x": -1.4692980286405901,
                            "y": 0.10530101410952875,
                            "z": 1.0067041292225496
                        }
                    },
                    "fileSize": 56999,
                    "id": "63dd620161e26b0044d03e0b"
                }
            ]
        }
    ],
    "type": "ImageTargetCollection",
    "wtcFiles": [
        {
            "url": "augmentation-trackers/6.0/tracker.wtc",
            "nrOfTargets": 2,
            "version": "6.0",
            "creDat": 1675995574978
        },
        {
            "url": "augmentation-trackers/6.0/tracker.wtc",
            "nrOfTargets": 2,
            "version": "6.1",
            "creDat": 1675995574978
        },
        {
            "url": "augmentation-trackers/6.0/tracker.wtc",
            "nrOfTargets": 2,
            "version": "6.2",
            "creDat": 1675995574978
        },
        {
            "url": "augmentation-trackers/6.0/tracker.wtc",
            "nrOfTargets": 2,
            "version": "7.0",
            "creDat": 1675995574978
        },
        {
            "url": "augmentation-trackers/6.0/tracker.wtc",
            "nrOfTargets": 2,
            "version": "7.1",
            "creDat": 1675995574978
        },
        {
            "url": "augmentation-trackers/6.0/tracker.wtc",
            "nrOfTargets": 2,
            "version": "7.2",
            "creDat": 1675995574978
        },
        {
            "url": "augmentation-trackers/6.0/tracker.wtc",
            "nrOfTargets": 2,
            "version": "8.0",
            "creDat": 1675995574978
        },
        {
            "url": "augmentation-trackers/6.0/tracker.wtc",
            "nrOfTargets": 2,
            "version": "latest",
            "creDat": 1675995574978
        }
    ],
    "settings": {
        "tracker": {}
    }
}
;
