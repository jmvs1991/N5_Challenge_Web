import { PermissionPage } from "./Permission.page";
import { PermissionProvider as PermissionProviderContext } from "./../../Core/Context/Permission/Permission.provider";
import { TypeProvider as TypeProviderContext } from "./../../Core/Context/Type/Type.provider";

export const PermissionProvider = () => {
  return (
    <TypeProviderContext>
      <PermissionProviderContext>
        <PermissionPage />
      </PermissionProviderContext>
    </TypeProviderContext>
  );
};
