const About = () => {
  return (
    <>
      <div className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center'>
        <h1 className='text-4xl font-bold leading-none tracking-tight sm:text-6xl'>
          We love
        </h1>
        <div className='stats bg-primary shadow'>
          <div className='stat'>
            <div className='stat-title text-primary-content text-4xl font-bold tracking-widest'>
              MJ
            </div>
          </div>
        </div>
      </div>
      <p className='mt-6 text-lg leading-8 max-w-2xl m-auto'>
        Welcome to MJ-Store, your one-stop destination for all your products needs. Founded in 2024, we have been serving customers with
        top-quality products and exceptional service ever since. At MJ-Store, we believe in providing our customers with the best shopping
        experience possible. Whether you're looking for beds,
        chairs, or sofas, we have a wide selection to
        meet your needs. Our curated collection features products from trusted
        brands and artisans, ensuring you get only the finest quality items.
        What sets us apart is our commitment to customer satisfaction. Our team
        works tirelessly to ensure that every aspect of your shopping journey,
        from browsing our website to receiving your order, is smooth and
        enjoyable. If you have any questions or need assistance, our friendly
        customer support team is always here to help. We also believe in giving
        back to the community. That's why we partner with local charities and
        organizations to support causes that are important to us and our
        customers. Thank you for choosing MJ-Store. We appreciate your support
        and look forward to serving you for many years to come. Happy shopping!
      </p>
    </>
  );
}
export default About