import { allProducts } from "@shsfwork/.content-collections/generated";

export const FOOTER__NAV = {
  website: [
    { href: "/", title: "Home" },
    { href: "/services", title: "Services" },
    { href: "/products", title: "Products" },
    { href: "/boilerplates", title: "Boilerplates" },
    { href: "/starter-kits", title: "Starter Kits" },
  ],
  online: [{ href: "https://github.com/shsfwork", title: "GitHub" }],
  product: [
    ...allProducts.map((product) => ({
      title: product.title,
      href: product.url,
    })),
  ],
};
