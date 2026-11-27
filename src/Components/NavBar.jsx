import { useEffect, useRef, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { RiCloseLine, RiMenu3Line } from "react-icons/ri"
import images from "../assets/Images"
import { products } from "../Content/productDetials"

const navigationItems = [
  { label: "Home", link: "/" },
  { label: "About Us", link: "/about-us" },
  { label: "Design Studio", link: "/digital-studio" },

  { label: "Blogs", link: "/blogs" },
  { label: "Contact Us", link: "/contact-us" },
]

const mobileNavigationItems = [
  { label: "Home", link: "/" },
  { label: "About Us", link: "/about-us" },
  { label: "Products", link: "/products", submenu: "products" },
  { label: "Design Studio", link: "/digital-studio" },
  { label: "Services", link: "/#services" },
  { label: "Projects", link: "/#projects" },
  { label: "Blogs", link: "/blogs", submenu: "blogs" },
  { label: "Contact Us", link: "/contact-us" },
]

const homeElevators = Object.values(products).map((product) => {
  const subtitle = product.hero?.subtitle?.toUpperCase() ?? ""
  const type = subtitle.includes("TRACTION")
    ? "Traction"
    : subtitle.includes("MRL")
      ? "MRL"
      : subtitle.includes("HYDRAULIC")
        ? "Hydraulic"
        : "Panoramic"

  return { name: product.name, slug: product.slug, type }
})

const commercialElevators = [
  "Passengers",
  "Office",
  "Apartments",
  "Hotel",
  "Hospitals",
  "Goods / Service",
  "Car Parking",
]

function ProductMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [isClickOpen, setIsClickOpen] = useState(false)
  const menuRef = useRef(null)
  const triggerRef = useRef(null)
  const { pathname } = useLocation()
  const isProductsActive =
    pathname === "/products" ||
    pathname === "/home-elevator-products" ||
    pathname === "/commercial-elevator-products" ||
    pathname.startsWith("/products/")

  const closeMenu = () => {
    setIsOpen(false)
    setIsClickOpen(false)
  }

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      closeMenu()
      triggerRef.current?.focus()
    }
  }

  return (
    <li
      ref={menuRef}
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => {
        if (!isClickOpen) setIsOpen(false)
      }}
      onBlur={(event) => {
        if (!menuRef.current?.contains(event.relatedTarget)) closeMenu()
      }}
      onKeyDown={handleKeyDown}
    >
      <div className="flex items-center gap-1">
        <Link
          to="/products"
          className={`group relative whitespace-nowrap py-2 font-inter text-[15px] transition-colors duration-300 hover:text-[#E9A60F] ${
            isOpen || isProductsActive ? "text-[#E9A60F]" : "text-white"
          }`}
        >
          Products
          <span
            className={`absolute inset-x-0 bottom-0 h-[2px] origin-left bg-[#E9A60F] transition-transform duration-300 ${
              isOpen || isProductsActive
                ? "scale-x-100"
                : "scale-x-0 group-hover:scale-x-100"
            }`}
            aria-hidden="true"
          />
        </Link>
        <button
          ref={triggerRef}
          type="button"
          aria-label={isOpen ? "Close Products menu" : "Open Products menu"}
          aria-expanded={isOpen}
          aria-controls="products-dropdown"
          onClick={() => {
            const nextOpen = !isClickOpen
            setIsClickOpen(nextOpen)
            setIsOpen(nextOpen)
          }}
          className={`rounded p-1 text-white transition-colors hover:text-[#E9A60F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E9A60F] ${
            isOpen ? "rotate-180 text-[#E9A60F]" : ""
          }`}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            fill="none"
            className="size-3 transition-transform duration-300"
          >
            <path
              d="m3.5 6 4.5 4 4.5-4"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </svg>
        </button>
      </div>

      <div
        id="products-dropdown"
        aria-hidden={!isOpen}
        className={`absolute left-1/2 top-full z-50 grid h-[440px] w-[600px] max-w-[calc(100vw-2rem)] grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] gap-5 rounded-[24px] border border-[#E9A60F99] bg-[#1E1B17] px-6 py-6 shadow-[0_16px_40px_rgba(0,0,0,0.35)] transition-[opacity,transform,visibility] duration-300 ease-out motion-reduce:transition-none sm:px-[60px] ${
          isOpen
            ? "visible -translate-x-1/2 translate-y-0 opacity-100"
            : "invisible -translate-x-1/2 -translate-y-2 opacity-0"
        }`}
      >
        <section aria-labelledby="home-elevators-heading" className="min-w-0">
          <Link
            id="home-elevators-heading"
            to="/home-elevator-products"
            onClick={closeMenu}
            tabIndex={isOpen ? 0 : -1}
            className="mb-4 block w-fit whitespace-nowrap font-bebas text-[24px] leading-none text-[#E9A60F] transition-colors hover:text-white"
          >
            HOME ELEVATORS
          </Link>
          <ul className="space-y-0.5">
            {homeElevators.map((elevator) => (
              <li key={elevator.name}>
                <Link
                  to={`/products/${elevator.slug}`}
                  onClick={closeMenu}
                  tabIndex={isOpen ? 0 : -1}
                  className="flex min-h-[42px] items-center justify-between gap-2 whitespace-nowrap font-inter text-[13px] text-white transition-colors hover:text-[#E9A60F] sm:text-[15px]"
                >
                  <span>{elevator.name}</span>
                  <span className="shrink-0 text-right text-[10px] text-[#E9A60F] sm:text-[11px]">
                    {elevator.type}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="commercial-heading" className="min-w-0">
          <Link
            id="commercial-heading"
            to="/commercial-elevator-products"
            onClick={closeMenu}
            tabIndex={isOpen ? 0 : -1}
            className="mb-4 block w-fit whitespace-nowrap font-bebas text-[24px] leading-none text-[#E9A60F] transition-colors hover:text-white"
          >
            COMMERCIAL
          </Link>
          <ul className="space-y-0.5">
            {commercialElevators.map((elevator) => (
              <li key={elevator}>
                <Link
                  to="/commercial-elevator-products"
                  onClick={closeMenu}
                  tabIndex={isOpen ? 0 : -1}
                  className="flex min-h-[42px] items-center whitespace-nowrap font-inter text-[13px] text-white transition-colors hover:text-[#E9A60F] sm:text-[15px]"
                >
                  {elevator}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </li>
  )
}

function BlogMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [isClickOpen, setIsClickOpen] = useState(false)
  const menuRef = useRef(null)
  const triggerRef = useRef(null)
  const { pathname } = useLocation()
  const isBlogsActive = pathname === "/blogs" || pathname.startsWith("/blogs/")

  const closeMenu = () => {
    setIsOpen(false)
    setIsClickOpen(false)
  }

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      closeMenu()
      triggerRef.current?.focus()
    }
  }

  return (
    <li
      ref={menuRef}
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => {
        if (!isClickOpen) setIsOpen(false)
      }}
      onBlur={(event) => {
        if (!menuRef.current?.contains(event.relatedTarget)) closeMenu()
      }}
      onKeyDown={handleKeyDown}
    >
      <div className="flex items-center gap-1">
        <Link
          to="/blogs"
          onClick={closeMenu}
          className={`group relative whitespace-nowrap py-2 font-inter text-[15px] transition-colors duration-300 hover:text-[#E9A60F] ${
            isOpen || isBlogsActive ? "text-[#E9A60F]" : "text-white"
          }`}
        >
          Blogs
          <span
            className={`absolute inset-x-0 bottom-0 h-[2px] origin-left bg-[#E9A60F] transition-transform duration-300 ${
              isOpen || isBlogsActive
                ? "scale-x-100"
                : "scale-x-0 group-hover:scale-x-100"
            }`}
            aria-hidden="true"
          />
        </Link>
        <button
          ref={triggerRef}
          type="button"
          aria-label={isOpen ? "Close Blogs menu" : "Open Blogs menu"}
          aria-expanded={isOpen}
          aria-controls="blogs-dropdown"
          onClick={() => {
            const nextOpen = !isClickOpen
            setIsClickOpen(nextOpen)
            setIsOpen(nextOpen)
          }}
          className={`rounded p-1 text-white transition-colors hover:text-[#E9A60F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E9A60F] ${
            isOpen ? "rotate-180 text-[#E9A60F]" : ""
          }`}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            fill="none"
            className="size-3 transition-transform duration-300"
          >
            <path
              d="m3.5 6 4.5 4 4.5-4"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </svg>
        </button>
      </div>

      <div
        id="blogs-dropdown"
        aria-hidden={!isOpen}
        className={`absolute left-1/2 top-full z-50 grid w-[420px] max-w-[calc(100vw-2rem)] grid-cols-2 gap-6 rounded-[20px] border border-[#E9A60F99] bg-[#1E1B17] px-6 py-5 shadow-[0_16px_40px_rgba(0,0,0,0.35)] transition-[opacity,transform,visibility] duration-300 ease-out motion-reduce:transition-none ${
          isOpen
            ? "visible -translate-x-1/2 translate-y-0 opacity-100"
            : "invisible -translate-x-1/2 -translate-y-2 opacity-0"
        }`}
      >
        <section aria-labelledby="technical-blogs-heading" className="min-w-0">
          <h2
            id="technical-blogs-heading"
            className="mb-3 font-bebas text-[20px] leading-none text-[#E9A60F]"
          >
            TECHNICAL
          </h2>
          <Link
            to="/blogs/technical"
            onClick={closeMenu}
            tabIndex={isOpen ? 0 : -1}
            className="block font-inter text-[14px] text-white transition-colors hover:text-[#E9A60F]"
          >
            All technical blogs
          </Link>
        </section>

        <section aria-labelledby="non-technical-blogs-heading" className="min-w-0">
          <h2
            id="non-technical-blogs-heading"
            className="mb-3 font-bebas text-[20px] leading-none text-[#E9A60F]"
          >
            NON-TECHNICAL
          </h2>
          <Link
            to="/blogs/non-technical"
            onClick={closeMenu}
            tabIndex={isOpen ? 0 : -1}
            className="block font-inter text-[14px] text-white transition-colors hover:text-[#E9A60F]"
          >
            All non-technical blogs
          </Link>
        </section>
      </div>
    </li>
  )
}

function NavigationLinks() {
  const { pathname } = useLocation()

  return (
    <ul className="hidden items-center gap-3 lg:flex lg:gap-8">
      {navigationItems.slice(0, 2).map((item) => (
        <li key={item.label}>
          <Link
            to={item.link}
            className={`group relative whitespace-nowrap py-2 font-inter text-[15px] transition-colors duration-300 hover:text-[#E9A60F] ${
              !item.link.includes("#") && pathname === item.link
                ? "text-[#E9A60F]"
                : "text-white"
            }`}
          >
            {item.label}
            <span
              className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-[#E9A60F] transition-transform duration-300 group-hover:scale-x-100"
              aria-hidden="true"
            />
          </Link>
        </li>
      ))}
      <ProductMenu key={pathname} />
      {navigationItems.slice(2).map((item) =>
        item.label === "Blogs" ? (
          <BlogMenu key={item.label} />
        ) : (
          <li key={item.label}>
            <Link
              to={item.link}
              className={`group relative whitespace-nowrap py-2 font-inter text-[15px] transition-colors duration-300 hover:text-[#E9A60F] ${
                pathname === item.link ? "text-[#E9A60F]" : "text-white"
              }`}
            >
              {item.label}
              <span
                className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-[#E9A60F] transition-transform duration-300 group-hover:scale-x-100"
                aria-hidden="true"
              />
            </Link>
          </li>
        )
      )}
    </ul>
  )
}

function MobileNavigation({
  isOpen,
  expandedMenu,
  onClose,
  onToggleSubmenu,
}) {
  const { pathname } = useLocation()

  const linkClassName =
    "group flex min-h-11 min-w-0 flex-1 items-center rounded-xl px-4 py-3 font-inter text-[15px] font-semibold text-[#111111] transition-[background-color,transform] duration-200 hover:translate-x-1 hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#141210] motion-reduce:transition-none"
  const subLinkClassName =
    "block min-h-10 rounded-lg px-3 py-2.5 font-inter text-sm text-[#211D1D] transition-[background-color,transform] duration-200 hover:translate-x-1 hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#141210] motion-reduce:transition-none"

  const renderSubmenu = (submenu) => {
    if (submenu === "products") {
      return (
        <ul className="space-y-0.5 border-l border-black/20 pl-2">
          <li>
            <Link
              to="/home-elevator-products"
              onClick={onClose}
              className={subLinkClassName}
            >
              Home Elevators
            </Link>
          </li>
          {homeElevators.map((elevator) => (
            <li key={elevator.slug}>
              <Link
                to={`/products/${elevator.slug}`}
                onClick={onClose}
                className={subLinkClassName}
              >
                {elevator.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/commercial-elevator-products"
              onClick={onClose}
              className={subLinkClassName}
            >
              Commercial Elevators
            </Link>
          </li>
          {commercialElevators.map((elevator) => (
            <li key={elevator}>
              <Link
                to="/commercial-elevator-products"
                onClick={onClose}
                className={subLinkClassName}
              >
                {elevator}
              </Link>
            </li>
          ))}
        </ul>
      )
    }

    return (
      <ul className="space-y-0.5 border-l border-black/20 pl-2">
        <li>
          <Link
            to="/blogs/technical"
            onClick={onClose}
            className={subLinkClassName}
          >
            All technical blogs
          </Link>
        </li>
        <li>
          <Link
            to="/blogs/non-technical"
            onClick={onClose}
            className={subLinkClassName}
          >
            All non-technical blogs
          </Link>
        </li>
      </ul>
    )
  }

  return (
    <div
      aria-hidden={!isOpen}
      inert={!isOpen}
      className={`absolute inset-x-0 top-full z-[60] px-[8%] lg:hidden ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className={`mx-auto mt-2 max-h-0 overflow-y-auto overscroll-contain rounded-[22px] border border-white/40 bg-[linear-gradient(135deg,#F8D46A_0%,#E9A60F_55%,#C78A08_100%)] p-3 shadow-[0_16px_40px_rgba(0,0,0,0.35)] transition-[max-height,opacity,transform,visibility] duration-300 ease-out motion-reduce:transition-none ${
          isOpen
            ? "visible max-h-[calc(100svh-6rem)] translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <ul className="space-y-1">
          {mobileNavigationItems.map((item, index) => {
            const isExpanded = expandedMenu === item.submenu
            const submenuId = `mobile-${item.submenu}-submenu`
            const isActive =
              item.link === "/"
                ? pathname === "/"
                : !item.link.includes("#") &&
                  (pathname === item.link || pathname.startsWith(`${item.link}/`))

            return (
              <li
                key={item.label}
                style={{
                  transitionDelay: isOpen ? `${index * 35}ms` : "0ms",
                }}
                className={`transition-[opacity,transform] duration-200 motion-reduce:transition-none ${
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-2 opacity-0"
                }`}
              >
                <div className="flex items-center gap-1">
                  <Link
                    to={item.link}
                    onClick={onClose}
                    aria-current={isActive ? "page" : undefined}
                    className={`${linkClassName} ${
                      isActive ? "bg-black/10" : ""
                    }`}
                  >
                    {item.label}
                  </Link>

                  {item.submenu && (
                    <button
                      type="button"
                      aria-label={`${isExpanded ? "Collapse" : "Expand"} ${item.label} links`}
                      aria-expanded={isExpanded}
                      aria-controls={submenuId}
                      onClick={() => onToggleSubmenu(item.submenu)}
                      className="flex size-11 shrink-0 items-center justify-center rounded-xl text-[#111111] transition-colors hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#141210] motion-reduce:transition-none"
                    >
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 16 16"
                        fill="none"
                        className={`size-4 transition-transform duration-200 motion-reduce:transition-none ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      >
                        <path
                          d="m3.5 6 4.5 4 4.5-4"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </button>
                  )}
                </div>

                {item.submenu && (
                  <div
                    id={submenuId}
                    aria-hidden={!isExpanded}
                    inert={!isExpanded}
                    className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out motion-reduce:transition-none ${
                      isExpanded
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden px-3">
                      {renderSubmenu(item.submenu)}
                    </div>
                  </div>
                )}
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [expandedMobileMenu, setExpandedMobileMenu] = useState(null)
  const headerRef = useRef(null)
  const mobileMenuButtonRef = useRef(null)
  const { pathname, search, hash } = useLocation()

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setExpandedMobileMenu(null)
  }

  const toggleMobileSubmenu = (submenu) => {
    setExpandedMobileMenu((currentMenu) =>
      currentMenu === submenu ? null : submenu
    )
  }

  useEffect(() => {
    closeMobileMenu()
  }, [pathname, search, hash])

  useEffect(() => {
    if (!isMobileMenuOpen) return

    const handlePointerDown = (event) => {
      if (!headerRef.current?.contains(event.target)) closeMobileMenu()
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMobileMenu()
        mobileMenuButtonRef.current?.focus()
      }
    }

    const handleResize = () => {
      if (window.innerWidth >= 1024) closeMobileMenu()
    }

    document.addEventListener("pointerdown", handlePointerDown)
    document.addEventListener("keydown", handleKeyDown)
    window.addEventListener("resize", handleResize)

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown)
      document.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("resize", handleResize)
    }
  }, [isMobileMenuOpen])

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 h-20 w-full bg-gradient-to-r from-[#141210] via-[#6C4B00] to-black shadow-[0_8px_24px_rgba(0,0,0,0.2)]"
    >
    <div className="mx-auto grid h-full w-[90%] grid-cols-[1fr_auto] items-center gap-4 lg:grid-cols-[1fr_auto_1fr]">
        <Link to="/" aria-label="NVANZ home" className="w-fit">
          <img
            className="block h-auto w-36"
            src={images.logo}
            alt="NVANZ Elevators logo"
          />
        </Link>

       <nav
  aria-label="Main navigation"
  className="hidden lg:block lg:justify-self-center"
>
  <NavigationLinks />
</nav>

        <button
          ref={mobileMenuButtonRef}
          type="button"
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() =>
            isMobileMenuOpen ? closeMobileMenu() : setIsMobileMenuOpen(true)
          }
          className="justify-self-end rounded-lg p-2 text-[#E9A60F] transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E9A60F] lg:hidden"
        >
          {isMobileMenuOpen ? (
            <RiCloseLine aria-hidden="true" className="size-8 cursor-pointer" />
          ) : (
            <RiMenu3Line aria-hidden="true" className="size-8 cursor-pointer" />
          )}
        </button>
      </div>

      <MobileNavigation
        isOpen={isMobileMenuOpen}
        expandedMenu={expandedMobileMenu}
        onClose={closeMobileMenu}
        onToggleSubmenu={toggleMobileSubmenu}
      />
    </header>
  )
}

export default NavBar
