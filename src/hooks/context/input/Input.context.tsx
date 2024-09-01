import React from "react";

type MiddlewareFunction = (value: any) => any;

const InputContext = <T extends string | number | Date | boolean>(
  initialValue = "" as T,
  middleware?: MiddlewareFunction
) => {
  const [value, setValue] = React.useState<T>(initialValue);

  React.useEffect(() => {
    if (middleware) middleware(value);
  }, [value, middleware]);

  return { value, setValue };
};

export default InputContext;
