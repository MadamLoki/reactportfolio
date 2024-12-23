function Header() {
  return (
    <header>
      <nav class="font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-gray-900 shadow sm:items-baseline w-full">
        <name class="mb-2 sm:mb-0 inner">
          <a class="text-4xl no-underline text-blue-400 font-serif ">
            Sara J. Ryan
          </a>
          <br />
          <span class="font-mono text-sm text-gray-500">Aspiring Full Stack Developer</span>
        </name>
        <aside class="sm:mb-0 self-center">
          <a href="/" class="text-md no-underline text-gray-300 hover:text-blue-400 ml-2 px-1">About</a>
          <a href="/portfolio" class="text-md no-underline text-gray-300 hover:text-blue-400 ml-2 px-1">Portfolio</a>
          <a href="/contact" class="text-md no-underline text-gray-300 hover:text-blue-400 ml-2 px-1">Contact</a>
          <a href="/resume" class="text-md no-underline text-gray-300 hover:text-blue-400 ml-2 px-1">Resume</a>
        </aside>
      </nav>
    </header>
  );
}

export default Header;