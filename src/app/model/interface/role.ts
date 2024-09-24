export interface IRole{
    roleId: number,
    role: string
}

export interface IDesignation {
    designation:string,
    designationId:number
}

export interface APIResponseModel{
    message:string,
    result:boolean,
    data:any
}