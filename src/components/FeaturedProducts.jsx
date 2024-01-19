import ProductsGrid from "./ProductsGrid"
import Title from "./Title"

const FeaturedProducts = () => {
  return (
    <div className="pt-24">
        <Title text='featured products'/>
        <ProductsGrid/>
    </div>
  )
}
export default FeaturedProducts