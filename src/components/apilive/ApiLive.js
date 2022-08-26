import React, {useState, useEffect} from 'react'
import Loader from './Loader'

const ApiLive = () => {
    const [items, setItems] = useState([])
    const [loader, setLoader] = useState(true)

    const getweather = async () => {
      setLoader(true);
        try {
          let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=6b889807f1e34bff88c9159e948ed6fb";
    
          let res = await fetch(url);
          let data = await res.json();
          let articals = data.articles
          setItems(articals)
          setLoader(false)
    
        } catch (error) {
          console.log(error);
          setLoader(false)
        }
      };

    useEffect(() => {
        getweather ();
        
    }, [9000])

    

  return (
    <>
        <div className="api-section">
          
            <div className="container">
                <h2 className="text-center">Live Api Detail Fetch</h2>
                
                <div className="row api-list">
                  
                  {items.map((e)=>{
                    const {author, title, description, url, urlToImage, publishedAt, content} = e;
                    return (
                      
                      <>
                        {loader ? <Loader loader={loader}  /> :
                        <div className="col-md-4 col-sm-6 single-list">
                          <div className="content">
                              <div className="image-wrapper">
                                <img src={urlToImage} alt="" />
                              </div>
                              <div className="info">
                                <span className='d-block w-100'>{publishedAt}</span>
                                <h4>{title}</h4>  
                                <p>{`${description.substring(0, 100)}...`}</p>
                                <div className="btn-wrapper">
                                  <a target="_blank" href={url}>Read More</a>
                                </div>
                              </div>  
                          </div>   
                      </div>

                    }
                      </>
                    )
                  })}
                </div>
            </div>
        </div>
    </>
  )
}

export default ApiLive