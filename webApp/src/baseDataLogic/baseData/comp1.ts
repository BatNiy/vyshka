import {IDataFromServer} from "../DataTransfer";
import {Generator} from "../RandomGenerator";
let col12name: IDataFromServer = {
    typeIdent: "Col",
    uuid: Generator.UUID(),
    readOnly: false,
    jsIdent: "ColControl",
    type: {
        width: {
            baseType: "int",
            value: 12
        },
        name: {
            baseType: "VisualComponent",
            value: {
                jsIdent: "TextControlHeader",
                typeIdent: "AttrName",
                uuid: Generator.UUID(),
                readOnly: false,
                type: {
                    value: {
                        baseType: "string",
                        value: "ШГН-30"
                    },
                    name: {
                        baseType: "string",
                        value: "Скважина"
                    }
                }
            },
            group: "attrs"
        }
    }
};
let col2_1: IDataFromServer = {
    typeIdent: "Col",
    uuid: Generator.UUID(),
    readOnly: false,
    jsIdent: "ColControl",
    type: {
        width: {
            baseType: "int",
            value: 4
        },
        name: {
            baseType: "VisualComponent",
            value: {
                jsIdent: "TextControl",
                typeIdent: "AttrName",
                uuid: Generator.UUID(),
                readOnly: false,
                type: {
                    value: {
                        baseType: "string",
                        value: "105"
                    },
                    name: {
                        baseType: "string",
                        value: "Номер Куста"
                    }
                }
            },
            group: "attrs"
        }
    }
};

let col2_2: IDataFromServer = {
    typeIdent: "Col",
    uuid: Generator.UUID(),
    readOnly: false,
    jsIdent: "ColControl",
    type: {
        width: {
            baseType: "int",
            value: 4
        },
        name: {
            baseType: "VisualComponent",
            value: {
                jsIdent: "TextControl",
                typeIdent: "AttrName",
                uuid: Generator.UUID(),
                readOnly: false,
                type: {
                    value: {
                        baseType: "string",
                        value: "107"
                    },
                    name: {
                        baseType: "string",
                        value: "Номер скважины"
                    }
                }
            },
            group: "attrs"
        }
    }
};
let col2_3: IDataFromServer = {
    typeIdent: "Col",
    uuid: Generator.UUID(),
    readOnly: false,
    jsIdent: "ColControl",
    type: {
        width: {
            baseType: "int",
            value: 4
        },
        name: {
            baseType: "VisualComponent",
            value: {
                jsIdent: "TextControlMeter",
                typeIdent: "AttrName",
                uuid: Generator.UUID(),
                readOnly: false,
                type: {
                    value: {
                        baseType: "string",
                        value: "115"
                    },
                    name: {
                        baseType: "string",
                        value: "Глубина спуска"
                    }
                }
            },
            group: "attrs"
        }
    }
};

let dataRow1: IDataFromServer = {
    typeIdent: "Row",
    uuid: Generator.UUID(),
    readOnly: false,
    jsIdent: "RowControl",
    type: {
        col1: {
            baseType: "VisualComponent",
            value: col12name,
            group: "cols"
        }
    },
};

let dataRow2: IDataFromServer = {
    typeIdent: "Row",
    uuid: Generator.UUID(),
    readOnly: false,
    jsIdent: "RowControl",
    type: {
        col2_1: {
            baseType: "VisualComponent",
            value: col2_1,
            group: "cols"
        },
        col2_2: {
            baseType: "VisualComponent",
            value: col2_2,
            group: "cols"
        },
        col2_3: {
            baseType: "VisualComponent",
            value: col2_3,
            group: "cols"
        }
    },
};

let col3_1: IDataFromServer = {
    typeIdent: "Col",
    uuid: Generator.UUID(),
    readOnly: false,
    jsIdent: "ColControl",
    type: {
        width: {
            baseType: "int",
            value: 6
        },
        attrMap: {
            baseType: "VisualComponent",
            value: {
                jsIdent: "MapWrap",
                typeIdent: "AttrMap",
                uuid: Generator.UUID(),
                readOnly: false,
                type: {
                    name: {
                        baseType: 'string',
                        value: "Местонахождение"
                    },
                    lat: {
                        baseType: "float",
                        value: 55.7522200
                    },
                    lon: {
                        baseType: "float",
                        value: 37.6155600
                    }
                }
            },
            group: "attrs"
        }
    }
};

let dataRow3: IDataFromServer = {
    typeIdent: "Row",
    uuid: Generator.UUID(),
    readOnly: false,
    jsIdent: "RowControl",
    type: {
        col3: {
            baseType: "VisualComponent",
            value: col3_1,
            group: "cols"
        }
    },
};

export let data1 : IDataFromServer = {
    typeIdent: "baseType",
    uuid: "1",
    readOnly: false,
    jsIdent: "ObjecWrap",
    type: {
        Row1: {
            baseType: "VisualComponent",
            value: dataRow1,
            group: "rows"
        },
        Row2: {
            baseType: "VisualComponent",
            value: dataRow2,
            group: "rows"
        },
        Row3: {
            baseType: "VisualComponent",
            value: dataRow3,
            group: "rows"
        }
    },
};
