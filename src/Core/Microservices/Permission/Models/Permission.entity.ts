import { TypeEntity } from "../../Type/Models/Type.entity";

export class PermissionEntity {
    id: number = 0;
    firstName: string = "";
    lastName: string = "";
    dateOfPermission: Date = new Date();
    typeId: number = 0;
    type: TypeEntity = new TypeEntity();
}