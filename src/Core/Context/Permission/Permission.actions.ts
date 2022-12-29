import { PermissionEntity } from "../../Microservices/Permission/Models/Permission.entity"

export type PermissionActions = 
{
    type: "Get",
    payload: PermissionEntity[]
}|
{
    type: "GetById"
}|
{
    type: "Command"
}|
{
    type: "Loading"
}|
{
    type: "Error"
}