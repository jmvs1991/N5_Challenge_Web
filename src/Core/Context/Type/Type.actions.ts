import { TypeEntity } from "../../Microservices/Type/Models/Type.entity"

export type TypeActions = 
{
    type: "Get",
    payload: TypeEntity[]
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