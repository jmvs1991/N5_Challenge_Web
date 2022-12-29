import { TypeProvider as TypeProviderContext } from "./../../Core/Context/Type/Type.provider";
import { TypePage } from "./Type.page";

export const TypeProvider = () => {
  return (
    <TypeProviderContext>
      <TypePage />
    </TypeProviderContext>
  );
};
