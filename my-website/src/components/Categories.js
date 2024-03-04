import { useRef } from "react"


const Categories = () => {
    const containerRef = useRef(null);

    const scrollLeft = () => {
      if (containerRef.current) {
        containerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
      }
    };
  
    const scrollRight = () => {
      if (containerRef.current) {
        containerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
      }
    };
  
  return (
    <div>
        <h2>Shop by Categories</h2>
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <button onClick={scrollLeft}>&lt;</button>
        <div
          ref={containerRef}
          style={{
            display: 'flex',
            overflowX: 'scroll',
            flexWrap: 'nowrap',
            gap: '30px',
            padding: '20px 0',
            width: 'calc(100% - 40px)'
          }}
        >
        <div>
            <img src='https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f10917087a483040b557e4b18204312c.png?f=png?dim=256x0' alt='img' style={{ width: '170px' }}></img>
            <p>Top Products</p>
        </div>
        <div>
            <img src='https://cdn01.pharmeasy.in/dam/discovery/categoryImages/fa936f30b4563fc4abd187fb22fe5258.png?f=png?dim=256x0' alt='img' style={{ width: '170px' }}></img>
            <p>Elderly Care</p>
        </div>
        <div>
            <img src='https://cdn01.pharmeasy.in/dam/discovery/categoryImages/1e622b0308ec3ab48887512eaa3488a5.png?f=png?dim=256x0' alt='personal care' style={{ width: '170px' }}/>
            <p>personal Care</p>
            </div>
            <div>
                <img src='https://cdn01.pharmeasy.in/dam/discovery/categoryImages/9cc9a28ea4513009966cae794114eefd.png?f=png?dim=256x0' alt='heath' style={{ width: '170px' }}></img>
                <p>Healthcare Decices</p>
                </div> 
            <div>
                <img src='https://cdn01.pharmeasy.in/dam/discovery/categoryImages/335dae76832d370c94f0440f5ba89e1f.png?f=png?dim=256x0' alt='food' style={{ width: '170px' }}/>
                <p>Health Food and Drinks</p>
                </div>  
                <div>
                <img src='https://cdn01.pharmeasy.in/dam/discovery/categoryImages/ce48d6d71ace3892945f0b0a64c1f0e9.png?f=png?dim=256x0' alt='food' style={{ width: '170px' }}/>
                <p>Skin Care</p>
                </div> 
                <div>
                <img src='https://cdn01.pharmeasy.in/dam/discovery/categoryImages/11315fee93053980af48fd871bf687b8.png?f=png?dim=256x0' alt='food' style={{ width: '170px' }}/>
                <p>Mother and Baby Care</p>
                </div> 
                <div>
                <img src='https://cdn01.pharmeasy.in/dam/discovery/categoryImages/4405b7900b0b34fcb5c8572aae9d4b2e.png?f=png?dim=256x0' alt='food' style={{ width: '170px' }}/>
                <p>Accessories and Wearables</p>
                </div> 
                <div>
                <img src='https://cdn01.pharmeasy.in/dam/discovery/categoryImages/514d0d7d01a63502b4ebfec9ae26f4d2.png?f=png?dim=256x0' alt='food' style={{ width: '170px' }}/>
                <p>Fitness Supliments</p>
                </div> 
                <div>
                <img src='https://cdn01.pharmeasy.in/dam/discovery/categoryImages/ecad9a974e003fb987858b3ee81413c6.png?f=png?dim=256x0' alt='food' style={{ width: '170px' }}/>
                <p>Ayurvedic Care</p>
                </div> 
                <div>
                <img src='https://cdn01.pharmeasy.in/dam/discovery/categoryImages/af7a9b53ad1239659615c6895b0972d7.png?f=png?dim=256x0' alt='food' style={{ width: '170px' }}/>
                <p>Sexual Wellness</p>
                </div> 
                <div>
                <img src='https://cdn01.pharmeasy.in/dam/discovery/categoryImages/bde7d1752b5e3cd69f42157f4d578535.png?f=png?dim=256x0' alt='food' style={{ width: '170px' }}/>
                <p>Mega Clearance Sale</p>
                </div> 
                <div>
                <img src='https://cdn01.pharmeasy.in/dam/discovery/categoryImages/105ceca515ee30509f93309ae75306aa.png?f=png?dim=256x0' alt='food'style={{ width: '170px' }}/>
                <p>Daibetic Care</p>
                </div> 
                <div>
                <img src='https://cdn01.pharmeasy.in/dam/discovery/categoryImages/35d6d4e00e5d3058906cfa8b92ca799c.png?f=png?dim=256x0' alt='food' style={{ width: '170px' }}/>
                <p>Health Condition</p>
                </div> 
                <div>
                <img src='https://cdn01.pharmeasy.in/dam/discovery/categoryImages/1f26c63d94373c72af65b6b90b6ea147.png?f=png?dim=256x0' alt='food' style={{ width: '170px' }}/>
                <p>Winter Store</p>
                </div> 
                <div>
                <img src='https://cdn01.pharmeasy.in/dam/discovery/categoryImages/ef15f03b682d37c994eb978d6c85c455.png?f=png?dim=256x0' alt='food' style={{ width: '170px' }}/>
                <p>Tranding Products</p>
                </div> 
                </div>
                <button onClick={scrollRight}>&gt;</button>
        </div>
    </div>
  )
}
export default Categories