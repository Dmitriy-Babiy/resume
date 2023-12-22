/// <reference types="vite-plugin-svgr/client" />
/// <reference types="vite/client" />

declare module '*.svg' {
  import { FC, SVGProps } from 'react';

  const src: string;
  export default src;

  export const ReactComponent: FC<SVGProps<SVGElement>>;
}
