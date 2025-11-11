

const LoftRoom = () => {



  return (
    <div className='min-h-screen text-white px-14 flex justify-between items-center' >
      <div className="">
       <div className='text-8xl'>
        <h1>LoftLoom</h1>
       </div>

          <div className='text-lg font-semi-bold pt-4 flex justify-between items-center'>
              <p className='w-80'>
                UI Design, UX, Wireframe
              </p>
            </div>

            <div className='text-button-border text-lg flex items-start pt-14'>
                <button className='border-2 rounded-full px-8 py-2 border-button-border'>View Project</button>
            </div>
        </div>

        <div>
          <img src="/loft.png" width="800" height="300"  className="rounded-lg"/>
        </div>

      
       

    </div>
  )
}

export default LoftRoom

