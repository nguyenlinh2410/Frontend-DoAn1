const modules = import.meta.glob("./**/*.jsx", { eager: true });

const components = {};

for (const path in modules) {
  const fileName = path.split("/").pop().replace(".jsx", "");

  components[fileName] = modules[path].default;
  console.log("load component: ", components);
}
export default components;
