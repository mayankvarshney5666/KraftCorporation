import React from 'react'
import NavbarHeader from '../components/NavbarHeader'
import SidePanel from '../components/SidePanel'
import './styles/CurrentJobs.css'
import NavbarJobs from '../components/NavbarJobs'
import NavFoot from '../components/NavFoot'
import Footer from '../components/Footer'

const CurrentJobs = () => {
    return (
        <div>
            <NavbarHeader />
            <NavbarJobs />
            <NavFoot cat={"Current Jobs"} />

            <div className="jobs ">
                <div className="lhs">
                    <div className="jobLists text-center">
                        <div className="noOpenings b ">
                            - No Opening Yet.
                        </div>
                        {/* <CurrentJobListings /> */}
                    </div>
                </div>

                <div className="rhs">
                    <SidePanel />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CurrentJobs
