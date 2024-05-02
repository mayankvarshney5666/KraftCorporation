import React from 'react'
import NavbarHeader from '../components/NavbarHeader'
import SidePanel from '../components/SidePanel'
import './styles/CurrentJobs.css'

const CurrentJobs = () => {
    return (
        <div>
            <NavbarHeader />
            {/* <Navbar/> */}
            Navbar Will be Displayed Here

            <section className="headBg theme2 bread-right">
                <div className="wrap">
                    <div className="page-title-inner about-head fo">
                        <div className="h1 head mt-2 d-flex align-items-center">
                            <h2>Current Jobs</h2>
                        </div>
                        <div className="breadcrumb ar uu small">
                            <a href="/home" title="Home">Home</a> <b className="ffv p2px"> › </b> Current Jobs
                        </div>
                    </div>
                </div>
            </section>
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
        </div>
    )
}

export default CurrentJobs
