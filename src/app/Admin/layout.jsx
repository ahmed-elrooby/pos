import React from 'react'
import Sidebar from './Aside'
import Navbar from './Component/Utils/Home/Hesder'

const layout = ({children}) => {
  return<>
       <section className="flex h-screen transition-all duration-300">
        <Sidebar/>

          <section className="flex flex-col flex-1 overflow-hidden">
{/* <Navbar/> */}
            <main
              className={`
                flex-1 p-4 overflow-y-auto transition-all duration-300 bg-[radial-gradient(circle_at_0%_0%,#0b1120_0%,#0f1724_100%)]
before:content-[''] before:absolute before:inset-0             md:p-2
              `}
            >
              <div
                className={`
                  rounded-xl p-2 md:p-6 transition-all duration-300
                `}
              >
                {children}
              </div>
            </main>
          </section>
      </section>
  </>
}

export default layout
