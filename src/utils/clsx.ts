const clsx = (classNames: (string | boolean | undefined)[]) => {
  return classNames.filter(Boolean).join(" ").trim();
};

export default clsx;
