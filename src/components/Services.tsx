import React from 'react'
import Timeline from './Timeline'

function Services() {
  return (
    
    <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <Timeline/>
            <div className="max-w-lg">
                <h1 className="text-5xl font-bold leading-tight">One Stop Solution For Your Constructions</h1>
                <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
            </div>
        </div>
    </div>

  )
}

export default Services