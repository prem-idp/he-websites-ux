export interface Module {
    subModules: SubModule[],
    moduleName: string,
    moduleGroupId: number
};

export interface SubModule {
    "moduleId": number,
    "title": string,
    "credits": null,
    "moduleTypeName": string,
    "dataDescFlag": "N" | "Y",
    "shortDesc": any,
    "description": string,
    "url": string
}