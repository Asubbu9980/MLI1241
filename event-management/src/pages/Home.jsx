import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';




const Home = () => {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  
  const navigate=useNavigate()
  useEffect(() => {
    fetch("http://localhost:3000/events").then(
      response => response.json())
      .then(json => setData(json))
  }, [])



  function onForm(){
    navigate("/form")
  }
  return (
    <>
      <div>
        <center>
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}
            style={{ marginTop: '20px', width: '500px', padding: '10px', borderRadius: '20px' }}
            placeholder='serach events here...' />
        </center>
      </div>
      <div className='container my-5'>
        <div className='row'>
          {data.filter(each => each.EventName.toLowerCase().includes(search.toLowerCase())).map((each) => {
            return (

              <Card style={{ width: '18rem', margin: '1rem' }} key={each.id}>
                <Card.Img variant="top" src={each.ImageURL} style={{ width: '17rem', marginTop: '15px', paddingRight: '10px' }} />
                <Card.Body>
                  
                  <Card.Text>
                    <h3><i>{each.EventCategory}</i></h3>
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">

                  <ListGroup.Item> <h6>Event Name:</h6>{each.EventName}</ListGroup.Item>
                  <ListGroup.Item><h6>Event Description:</h6> {each.Description}</ListGroup.Item>
                  <ListGroup.Item><h6> Event Date:</h6> {each.EventDate}</ListGroup.Item>
                  <ListGroup.Item><h6>Event Time: </h6>{each.Time}</ListGroup.Item>
                   <ListGroup.Item><h6>Number Of Persons:</h6> {each.NumberofPersons}</ListGroup.Item>
                </ListGroup>
                <Button variant="primary" style={{margin:'10px'}} onClick={onForm} >Add Participants</Button>
              </Card>
            );
          }

          )}

        </div>
       
      </div>

      <div className='footer'>
      <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
      

      </div>
    
    </>
     
  )
}


export default Home