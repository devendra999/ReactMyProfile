import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Loader = ({loader}) => {
  return (
    <>
        <div className="col-md-4 col-sm-6 single-list">
            <div class="content loader" count={5}>
                <div class="image-wrapper">
                    <Skeleton height={300}/>
                </div>
                <div class="info">
                    <span class="d-block w-100"><Skeleton height={28}/></span>
                    <h4><Skeleton height={50}/></h4>
                    <p><Skeleton height={28} count={2} /></p>
                    <div class="btn-wrapper">
                        <Skeleton width={100} height={46} />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Loader