import React from 'react'
import Aside from './components/Aside/Aside'
import Header from './components/Header/Header'

const layout = ({children}) => {
  return<>
       <section className="flex h-screen transition-all duration-300">
        <Aside/>

          <section className="flex flex-col flex-1 overflow-hidden">
<Header/>
            <main
              className={`
                flex-1 p-4 overflow-y-auto transition-all duration-300
                   bg-gradient-to-br from-[#f6f9fc] to-[#edf2f7]
                md:p-2
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
