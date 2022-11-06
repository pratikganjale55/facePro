import axios from 'axios';
import React from 'react' ;
import { useState } from 'react';
import { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import "./contact.css" ;

const ContactList = () => {
    const [data, setData] = useState([]) ;
    const [limit, setLimit] = useState(1) ;
    const fetchMoreData = () => {
        setTimeout(() => {
            axios.get("https://randomuser.me/api/?results=5")
            .then((res) => {
                let data1 =  res.data.results
                setData(data.concat(data1))
            })
            
        }, 1000)
    }
  
console.log(data)

    useEffect(() => {
        fetch(`https://randomuser.me/api/?results=6`) 
        .then((res) => res.json())
        .then((data1) => {
          setData(data1.results)
      })
        .catch((e) => console.log(e)) 
       
    }, [])
    
    
    
  return (
    <>
    <div className = "scrollContainer"> 
    <InfiniteScroll
          dataLength={data.length}
          next={fetchMoreData}
          hasMore={limit !== 500}
          loader={<h3>Loading...</h3>}
        >
        
             {
                data && data.map((ele) => {
                     return <> 
                       <div className="flexDiv">
                          {/* <div className="firstLetter">A</div> */}
                          <div className="contactName">
                           <b>{ele.name.first} {ele.name.last}</b> 
                          </div>
                          <div>
                            <img src={ele.picture.large}/>
                          </div>
                       </div>
                     </>
                })
             }
        
    </InfiniteScroll>
    </div>
    </>
  )
}

export default ContactList
