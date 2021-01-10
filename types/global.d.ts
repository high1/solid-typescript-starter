declare interface NodeModule {
  hot: {
    accept(fn?: () => void): void;
    dispose(fn?: () => void): void;
  };
}

declare module '*.module.css' {
  const value: { readonly [key: string]: string };
  export default value;
}

declare module '*.svg' {
  const value: string | undefined;
  export default value;
}
declare module '*.bmp' {
  const value: string | undefined;
  export default value;
}
declare module '*.gif' {
  const value: string | undefined;
  export default value;
}
declare module '*.jpg' {
  const value: string | undefined;
  export default value;
}
declare module '*.jpeg' {
  const value: string | undefined;
  export default value;
}
declare module '*.png' {
  const value: string | undefined;
  export default value;
}
declare module '*.webp' {
  const value: string | undefined;
  export default value;
}
declare module '*.avif' {
  const value: string | undefined;
  export default value;
}
