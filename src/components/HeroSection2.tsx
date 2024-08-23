import Image from "next/image"

function HeroSection2() {
  return (
    <>
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
        <div className="absolute inset-0">
            <img src="/WEBSITE COLLAGE IMAGE-06.png" alt="Background Image" className="object-cover object-center w-full h-full" />
            <div className="absolute inset-0 bg-black opacity-10"></div>
        </div>

        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="p-1 rounded-3xl m-4 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]  
                from-gray-100 from-60% ">
              <Image
                alt="Amar Nirman Logo"
                height={1500}
                width={800}
                src="/AmarNirman.png"
                className="max-w-sm"
              ></Image>
            </div>
            <div className="p-4 max-w-xl bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]  
                from-gray-100 from-50% text-black">
              <h1 className="p-4 text-5xl font-bold leading-tight">One Stop Solution</h1>
              <h1 className="p-4 text-4xl font-bold leading-tight">For Your Constructions</h1>
              <p className="p-4">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>


      </div>
    </>
  )
}

export default HeroSection2