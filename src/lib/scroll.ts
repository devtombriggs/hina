export function scrollToSection(hash: string) {
  const id = hash.startsWith("#") ? hash.slice(1) : hash;
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function handleHashLinkClick(hash: string) {
  return (e: { preventDefault: () => void }) => {
    e.preventDefault();
    scrollToSection(hash);
  };
}
