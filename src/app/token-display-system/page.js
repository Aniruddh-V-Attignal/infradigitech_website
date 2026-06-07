import ProductDetail from "@/components/ProductDetail";
import StructuredData from "@/components/StructuredData";
import { getProductBySlug } from "@/data/products";

const SLUG = "token-display-system";
const product = getProductBySlug(SLUG);

export const metadata = {
  title: product?.seo?.title,
  description: product?.seo?.description,
  keywords: product?.seo?.keywords,
  alternates: { canonical: `/${SLUG}` },
  openGraph: {
    title: product?.seo?.title,
    description: product?.seo?.description,
    images: (product?.images || []).filter(Boolean).slice(0, 4),
  },
};

export default function Page() {
  return (
    <>
      <StructuredData type="Product" data={product} />
      <StructuredData
        type="BreadcrumbList"
        data={[
          { name: "Home", url: "/" },
          { name: "Products", url: "/products" },
          { name: product.title, url: `/${SLUG}` },
        ]}
      />
      <ProductDetail product={product} />
    </>
  );
}
