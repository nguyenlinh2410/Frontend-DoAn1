const images = import.meta.glob('./*.*', { eager: true });

export default Object.fromEntries(
  Object.entries(images).map(([key, value]) => [
    key.replace('./', ''),
    value.default,
  ])
);