export default function Hero() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex px-5  items-center justify-center flex-col">
        <h2 className="mb-4 border-b pb-4 text-4xl leading-tight font-serif">
          " Timeless Splendor: Basnagoda Wallawwa – A Testament to Elegance "
        </h2>
        {/* <h1 className="title-font sm:text-4xl text-3xl pb-8 pt-8 mb-4 font-medium text-gray-100">
          " Timeless Splendor: Basnagoda Wallawwa – A Testament to Elegance "
        </h1> */}
        <div className="bg-[url('/img/hero-pattern.svg')] mt-15 pb-10">
          <img
            src="https://images.unsplash.com/photo-1561280087-05a42e2a2a53?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="content"
            className="object-cover object-center rounded-lg h-196 w-full"
          />
        </div>
        <div className="text-center lg:w-2/3 w-full">
          <p className="leading-relaxed mb-8">
            Basnagoda Wallawwa is a historic gem, steeped in the opulence of its
            past. Constructed in the 18th century, it served as the residence of
            a prominent and affluent family that wielded significant influence
            over the Basnagoda Gonagaldeniya area. The family's wealth was
            evident in their possession of thousands of acres of land, a sizable
            herd of sixteen elephants, and hundreds of men under their command.
          </p>
        </div>
      </div>
    </section>
  );
}
