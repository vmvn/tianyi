﻿$axure.loadCurrentPage({
  "url":"home.html",
  "generationDate":new Date(1462117572544.7),
  "isCanvasEnabled":false,
  "variables":["OnLoadVariable"],
  "page":{
    "packageId":"d131929b114942569c3beed06220ddde",
    "type":"Axure:Page",
    "name":"Home",
    "notes":{
},
    "style":{
      "baseStyle":"627587b6038d43cca051c114ac41ad32",
      "pageAlignment":"near",
      "fill":{
        "fillType":"solid",
        "color":0xFFFFFFFF},
      "image":null,
      "imageHorizontalAlignment":"near",
      "imageVerticalAlignment":"near",
      "imageRepeat":"auto",
      "favicon":null,
      "sketchFactor":"0",
      "colorStyle":"appliedColor",
      "fontName":"应用字体",
      "borderWidth":"0"},
    "adaptiveStyles":{
},
    "interactionMap":{
},
    "diagram":{
      "objects":[{
          "id":"312241cfc066498bac4e8e03ffbcaf2f",
          "label":"img01",
          "type":"dynamicPanel",
          "styleType":"dynamicPanel",
          "visible":true,
          "style":{
            "size":{
              "width":10,
              "height":10}},
          "adaptiveStyles":{
},
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"linkWindow",
                      "description":"在 新窗口/标签页 打开 /knowledgeMap/data/MainInfo.jsp?mapId=26",
                      "target":{
                        "targetType":"webUrl",
                        "urlLiteral":{
                          "exprType":"stringLiteral",
                          "value":"/knowledgeMap/data/MainInfo.jsp?mapId=26",
                          "stos":[]},
                        "includeVariables":false},
                      "linkType":"new"}]}]}},
          "tabbable":true,
          "scrollbars":"none",
          "fitToContent":true,
          "propagate":false,
          "diagrams":[{
              "id":"5579d7edcfe64314a11abc1bbab8a716",
              "label":"状态1",
              "type":"Axure:PanelDiagram",
              "objects":[{
                  "id":"4b7264694679483bafa91c0cce9a1ffd",
                  "label":"",
                  "parentDynamicPanel":"312241cfc066498bac4e8e03ffbcaf2f",
                  "panelIndex":0,
                  "type":"imageBox",
                  "styleType":"imageBox",
                  "visible":true,
                  "style":{
                    "size":{
                      "width":110,
                      "height":150}},
                  "adaptiveStyles":{
},
                  "objects":[{
                      "id":"50ec3b0b4a3b42dd90e6687ef0ab8590",
                      "label":"",
                      "isContained":true,
                      "parentDynamicPanel":"312241cfc066498bac4e8e03ffbcaf2f",
                      "panelIndex":0,
                      "type":"richTextPanel",
                      "styleType":"paragraph",
                      "visible":true,
                      "style":{
                        "size":{
                          "width":110,
                          "height":150}},
                      "adaptiveStyles":{
}}],
                  "interactionMap":{
                    "onMouseOver":{
                      "description":"OnMouseOver",
                      "cases":[{
                          "description":"用例 1",
                          "isNewIfGroup":false,
                          "actions":[{
                              "action":"setPanelState",
                              "description":"设置 img01 到 状态2",
                              "panelsToStates":[{
                                  "panelPath":["312241cfc066498bac4e8e03ffbcaf2f"],
                                  "stateInfo":{
                                    "setStateType":"diagram",
                                    "stateNumber":2,
                                    "stateValue":{
                                      "exprType":"stringLiteral",
                                      "value":"1",
                                      "stos":[]},
                                    "loop":false,
                                    "showWhenSet":false,
                                    "options":{
                                      "compress":false}}}]}]}]}},
                  "images":{
                    "normal~":"images/home/u1.jpg"}}],
              "style":{
                "fill":{
                  "fillType":"solid",
                  "color":0xFFFFFF},
                "image":null,
                "imageHorizontalAlignment":"near",
                "imageVerticalAlignment":"near",
                "imageRepeat":"auto"},
              "adaptiveStyles":{
}},
{
              "id":"a552fe56f3f64924aa3a5426acc458ca",
              "label":"状态2",
              "type":"Axure:PanelDiagram",
              "objects":[{
                  "id":"90cab05c3fe8470c977b5aa39702e323",
                  "label":"",
                  "parentDynamicPanel":"312241cfc066498bac4e8e03ffbcaf2f",
                  "panelIndex":1,
                  "type":"imageBox",
                  "styleType":"imageBox",
                  "visible":true,
                  "style":{
                    "opacity":"0.5",
                    "size":{
                      "width":110,
                      "height":150}},
                  "adaptiveStyles":{
},
                  "objects":[{
                      "id":"8b56315044e541bd8f7559d5a98f1d50",
                      "label":"",
                      "isContained":true,
                      "parentDynamicPanel":"312241cfc066498bac4e8e03ffbcaf2f",
                      "panelIndex":1,
                      "type":"richTextPanel",
                      "styleType":"paragraph",
                      "visible":true,
                      "style":{
                        "opacity":"0.5",
                        "size":{
                          "width":110,
                          "height":150}},
                      "adaptiveStyles":{
}}],
                  "interactionMap":{
                    "onMouseOut":{
                      "description":"OnMouseOut",
                      "cases":[{
                          "description":"用例 1",
                          "isNewIfGroup":false,
                          "actions":[{
                              "action":"setPanelState",
                              "description":"设置 img01 到 状态1",
                              "panelsToStates":[{
                                  "panelPath":["312241cfc066498bac4e8e03ffbcaf2f"],
                                  "stateInfo":{
                                    "setStateType":"diagram",
                                    "stateNumber":1,
                                    "stateValue":{
                                      "exprType":"stringLiteral",
                                      "value":"1",
                                      "stos":[]},
                                    "loop":false,
                                    "showWhenSet":false,
                                    "options":{
                                      "compress":false}}}]}]}]}},
                  "images":{
                    "normal~":"images/home/u1.jpg"}}],
              "style":{
                "fill":{
                  "fillType":"solid",
                  "color":0xFFFFFF},
                "image":null,
                "imageHorizontalAlignment":"near",
                "imageVerticalAlignment":"near",
                "imageRepeat":"auto"},
              "adaptiveStyles":{
}}]},
{
          "id":"c9aaba8b3cd7417ea2092d53bd12cd36",
          "label":"img02",
          "type":"dynamicPanel",
          "styleType":"dynamicPanel",
          "visible":true,
          "style":{
            "location":{
              "x":132,
              "y":0},
            "size":{
              "width":10,
              "height":10}},
          "adaptiveStyles":{
},
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"linkWindow",
                      "description":"在 新窗口/标签页 打开 /knowledgeMap/data/MainInfo.jsp?mapId=27",
                      "target":{
                        "targetType":"webUrl",
                        "urlLiteral":{
                          "exprType":"stringLiteral",
                          "value":"/knowledgeMap/data/MainInfo.jsp?mapId=27",
                          "stos":[]},
                        "includeVariables":false},
                      "linkType":"new"}]}]}},
          "tabbable":true,
          "scrollbars":"none",
          "fitToContent":true,
          "propagate":false,
          "diagrams":[{
              "id":"9e1bca962905409a8178cad43d9fd8a5",
              "label":"状态1",
              "type":"Axure:PanelDiagram",
              "objects":[{
                  "id":"9d1e3896ef3746f0a57e394b364ffd9c",
                  "label":"",
                  "parentDynamicPanel":"c9aaba8b3cd7417ea2092d53bd12cd36",
                  "panelIndex":0,
                  "type":"imageBox",
                  "styleType":"imageBox",
                  "visible":true,
                  "style":{
                    "size":{
                      "width":110,
                      "height":150}},
                  "adaptiveStyles":{
},
                  "objects":[{
                      "id":"ee9b3dd076024906bf6e93040c98675e",
                      "label":"",
                      "isContained":true,
                      "parentDynamicPanel":"c9aaba8b3cd7417ea2092d53bd12cd36",
                      "panelIndex":0,
                      "type":"richTextPanel",
                      "styleType":"paragraph",
                      "visible":true,
                      "style":{
                        "size":{
                          "width":110,
                          "height":150}},
                      "adaptiveStyles":{
}}],
                  "interactionMap":{
                    "onMouseOver":{
                      "description":"OnMouseOver",
                      "cases":[{
                          "description":"用例 1",
                          "isNewIfGroup":false,
                          "actions":[{
                              "action":"setPanelState",
                              "description":"设置 img02 到 状态2",
                              "panelsToStates":[{
                                  "panelPath":["c9aaba8b3cd7417ea2092d53bd12cd36"],
                                  "stateInfo":{
                                    "setStateType":"diagram",
                                    "stateNumber":2,
                                    "stateValue":{
                                      "exprType":"stringLiteral",
                                      "value":"1",
                                      "stos":[]},
                                    "loop":false,
                                    "showWhenSet":false,
                                    "options":{
                                      "compress":false}}}]}]}]}},
                  "images":{
                    "normal~":"images/home/u6.jpg"}}],
              "style":{
                "fill":{
                  "fillType":"solid",
                  "color":0xFFFFFF},
                "image":null,
                "imageHorizontalAlignment":"near",
                "imageVerticalAlignment":"near",
                "imageRepeat":"auto"},
              "adaptiveStyles":{
}},
{
              "id":"4f0095ab7c454ec7a651cef6836f9eca",
              "label":"状态2",
              "type":"Axure:PanelDiagram",
              "objects":[{
                  "id":"67811a165dc74559af8e9fbe064c5ed2",
                  "label":"",
                  "parentDynamicPanel":"c9aaba8b3cd7417ea2092d53bd12cd36",
                  "panelIndex":1,
                  "type":"imageBox",
                  "styleType":"imageBox",
                  "visible":true,
                  "style":{
                    "opacity":"0.5",
                    "size":{
                      "width":110,
                      "height":150}},
                  "adaptiveStyles":{
},
                  "objects":[{
                      "id":"a15d39f48d9b409383b4a2d0639e6db5",
                      "label":"",
                      "isContained":true,
                      "parentDynamicPanel":"c9aaba8b3cd7417ea2092d53bd12cd36",
                      "panelIndex":1,
                      "type":"richTextPanel",
                      "styleType":"paragraph",
                      "visible":true,
                      "style":{
                        "opacity":"0.5",
                        "size":{
                          "width":110,
                          "height":150}},
                      "adaptiveStyles":{
}}],
                  "interactionMap":{
                    "onMouseOut":{
                      "description":"OnMouseOut",
                      "cases":[{
                          "description":"用例 1",
                          "isNewIfGroup":false,
                          "actions":[{
                              "action":"setPanelState",
                              "description":"设置 img02 到 状态1",
                              "panelsToStates":[{
                                  "panelPath":["c9aaba8b3cd7417ea2092d53bd12cd36"],
                                  "stateInfo":{
                                    "setStateType":"diagram",
                                    "stateNumber":1,
                                    "stateValue":{
                                      "exprType":"stringLiteral",
                                      "value":"1",
                                      "stos":[]},
                                    "loop":false,
                                    "showWhenSet":false,
                                    "options":{
                                      "compress":false}}}]}]}]}},
                  "images":{
                    "normal~":"images/home/u6.jpg"}}],
              "style":{
                "fill":{
                  "fillType":"solid",
                  "color":0xFFFFFF},
                "image":null,
                "imageHorizontalAlignment":"near",
                "imageVerticalAlignment":"near",
                "imageRepeat":"auto"},
              "adaptiveStyles":{
}}]},
{
          "id":"774abc3405764c0192a387b4465ff9fc",
          "label":"img03",
          "type":"dynamicPanel",
          "styleType":"dynamicPanel",
          "visible":true,
          "style":{
            "location":{
              "x":265,
              "y":-1},
            "size":{
              "width":10,
              "height":10}},
          "adaptiveStyles":{
},
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"linkWindow",
                      "description":"在 新窗口/标签页 打开 \\Axure\\zjk.html",
                      "target":{
                        "targetType":"webUrl",
                        "urlLiteral":{
                          "exprType":"stringLiteral",
                          "value":"\\Axure\\zjk.html",
                          "stos":[]},
                        "includeVariables":false},
                      "linkType":"new"}]}]}},
          "tabbable":true,
          "scrollbars":"none",
          "fitToContent":true,
          "propagate":false,
          "diagrams":[{
              "id":"ef10ae5d8461416493fd757f6adbe8ba",
              "label":"状态1",
              "type":"Axure:PanelDiagram",
              "objects":[{
                  "id":"6ec1019be1c44a418c46bc10605d75b6",
                  "label":"",
                  "parentDynamicPanel":"774abc3405764c0192a387b4465ff9fc",
                  "panelIndex":0,
                  "type":"imageBox",
                  "styleType":"imageBox",
                  "visible":true,
                  "style":{
                    "size":{
                      "width":110,
                      "height":150}},
                  "adaptiveStyles":{
},
                  "objects":[{
                      "id":"7cd59b3938454795bb9c9414c915f23a",
                      "label":"",
                      "isContained":true,
                      "parentDynamicPanel":"774abc3405764c0192a387b4465ff9fc",
                      "panelIndex":0,
                      "type":"richTextPanel",
                      "styleType":"paragraph",
                      "visible":true,
                      "style":{
                        "size":{
                          "width":110,
                          "height":150}},
                      "adaptiveStyles":{
}}],
                  "interactionMap":{
                    "onMouseOver":{
                      "description":"OnMouseOver",
                      "cases":[{
                          "description":"用例 1",
                          "isNewIfGroup":false,
                          "actions":[{
                              "action":"setPanelState",
                              "description":"设置 img03 到 状态2",
                              "panelsToStates":[{
                                  "panelPath":["774abc3405764c0192a387b4465ff9fc"],
                                  "stateInfo":{
                                    "setStateType":"diagram",
                                    "stateNumber":2,
                                    "stateValue":{
                                      "exprType":"stringLiteral",
                                      "value":"1",
                                      "stos":[]},
                                    "loop":false,
                                    "showWhenSet":false,
                                    "options":{
                                      "compress":false}}}]}]}]}},
                  "images":{
                    "normal~":"images/home/u11.jpg"}}],
              "style":{
                "fill":{
                  "fillType":"solid",
                  "color":0xFFFFFF},
                "image":null,
                "imageHorizontalAlignment":"near",
                "imageVerticalAlignment":"near",
                "imageRepeat":"auto"},
              "adaptiveStyles":{
}},
{
              "id":"a381e4f0d39c4458ae105b54b9e05ed1",
              "label":"状态2",
              "type":"Axure:PanelDiagram",
              "objects":[{
                  "id":"9e704d11d4aa402792f8a31aa3717927",
                  "label":"",
                  "parentDynamicPanel":"774abc3405764c0192a387b4465ff9fc",
                  "panelIndex":1,
                  "type":"imageBox",
                  "styleType":"imageBox",
                  "visible":true,
                  "style":{
                    "opacity":"0.5",
                    "size":{
                      "width":110,
                      "height":150}},
                  "adaptiveStyles":{
},
                  "objects":[{
                      "id":"38f36d8e05514643868e0219d760abb4",
                      "label":"",
                      "isContained":true,
                      "parentDynamicPanel":"774abc3405764c0192a387b4465ff9fc",
                      "panelIndex":1,
                      "type":"richTextPanel",
                      "styleType":"paragraph",
                      "visible":true,
                      "style":{
                        "opacity":"0.5",
                        "size":{
                          "width":110,
                          "height":150}},
                      "adaptiveStyles":{
}}],
                  "interactionMap":{
                    "onMouseOut":{
                      "description":"OnMouseOut",
                      "cases":[{
                          "description":"用例 1",
                          "isNewIfGroup":false,
                          "actions":[{
                              "action":"setPanelState",
                              "description":"设置 img03 到 状态1",
                              "panelsToStates":[{
                                  "panelPath":["774abc3405764c0192a387b4465ff9fc"],
                                  "stateInfo":{
                                    "setStateType":"diagram",
                                    "stateNumber":1,
                                    "stateValue":{
                                      "exprType":"stringLiteral",
                                      "value":"1",
                                      "stos":[]},
                                    "loop":false,
                                    "showWhenSet":false,
                                    "options":{
                                      "compress":false}}}]}]}]}},
                  "images":{
                    "normal~":"images/home/u11.jpg"}}],
              "style":{
                "fill":{
                  "fillType":"solid",
                  "color":0xFFFFFF},
                "image":null,
                "imageHorizontalAlignment":"near",
                "imageVerticalAlignment":"near",
                "imageRepeat":"auto"},
              "adaptiveStyles":{
}}]},
{
          "id":"21b5db8841ee42e68bc58e6016e83bfa",
          "label":"",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "fontName":"'微软雅黑 Regular', '微软雅黑'",
            "horizontalAlignment":"center",
            "location":{
              "x":0,
              "y":160},
            "size":{
              "width":110,
              "height":19}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"ab32f2469b4248cfb39ab7bc194fc382",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "fontName":"'微软雅黑 Regular', '微软雅黑'",
                "horizontalAlignment":"center",
                "location":{
                  "x":0,
                  "y":160},
                "size":{
                  "width":110,
                  "height":19}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"c9e6b7dd01db4520a2097b11e67e55e9",
          "label":"",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "fontName":"'微软雅黑 Regular', '微软雅黑'",
            "horizontalAlignment":"center",
            "location":{
              "x":132,
              "y":160},
            "size":{
              "width":110,
              "height":19}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"f55207c2ca004255a3cc973b776d5df9",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "fontName":"'微软雅黑 Regular', '微软雅黑'",
                "horizontalAlignment":"center",
                "location":{
                  "x":132,
                  "y":160},
                "size":{
                  "width":110,
                  "height":19}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"21bf4e5ddcae42f4bf80558494698d99",
          "label":"",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "fontName":"'微软雅黑 Regular', '微软雅黑'",
            "horizontalAlignment":"center",
            "location":{
              "x":265,
              "y":159},
            "size":{
              "width":110,
              "height":19}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"42bbb90169da40bf941d1ddba47e3a64",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "fontName":"'微软雅黑 Regular', '微软雅黑'",
                "horizontalAlignment":"center",
                "location":{
                  "x":265,
                  "y":159},
                "size":{
                  "width":110,
                  "height":19}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}}]}},
  "masters":{
},
  "objectPaths":{
    "312241cfc066498bac4e8e03ffbcaf2f":{
      "scriptId":"u0"},
    "4b7264694679483bafa91c0cce9a1ffd":{
      "scriptId":"u1"},
    "50ec3b0b4a3b42dd90e6687ef0ab8590":{
      "scriptId":"u2"},
    "90cab05c3fe8470c977b5aa39702e323":{
      "scriptId":"u3"},
    "8b56315044e541bd8f7559d5a98f1d50":{
      "scriptId":"u4"},
    "c9aaba8b3cd7417ea2092d53bd12cd36":{
      "scriptId":"u5"},
    "9d1e3896ef3746f0a57e394b364ffd9c":{
      "scriptId":"u6"},
    "ee9b3dd076024906bf6e93040c98675e":{
      "scriptId":"u7"},
    "67811a165dc74559af8e9fbe064c5ed2":{
      "scriptId":"u8"},
    "a15d39f48d9b409383b4a2d0639e6db5":{
      "scriptId":"u9"},
    "774abc3405764c0192a387b4465ff9fc":{
      "scriptId":"u10"},
    "6ec1019be1c44a418c46bc10605d75b6":{
      "scriptId":"u11"},
    "7cd59b3938454795bb9c9414c915f23a":{
      "scriptId":"u12"},
    "9e704d11d4aa402792f8a31aa3717927":{
      "scriptId":"u13"},
    "38f36d8e05514643868e0219d760abb4":{
      "scriptId":"u14"},
    "21b5db8841ee42e68bc58e6016e83bfa":{
      "scriptId":"u15"},
    "ab32f2469b4248cfb39ab7bc194fc382":{
      "scriptId":"u16"},
    "c9e6b7dd01db4520a2097b11e67e55e9":{
      "scriptId":"u17"},
    "f55207c2ca004255a3cc973b776d5df9":{
      "scriptId":"u18"},
    "21bf4e5ddcae42f4bf80558494698d99":{
      "scriptId":"u19"},
    "42bbb90169da40bf941d1ddba47e3a64":{
      "scriptId":"u20"}}});