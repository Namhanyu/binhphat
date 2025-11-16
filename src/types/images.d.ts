// TypeScript module declaration for importing .webp images
declare module "*.webp" {
  const value: {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
  };
  export default value;
}
