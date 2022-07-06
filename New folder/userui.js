import { useEffect, useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col} from 'react-bootstrap';
import {
    collection,
    getDocs,
    deleteDoc,
    doc,
    onSnapshot,
  } from "firebase/firestore";
  import { db } from "../firebase";

function Userui() {
    const [news, setNews] = useState([]);
    const [data, setData] = useState([]);

  useEffect(() => {

    const unsub = onSnapshot(
      collection(db, "events"),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setNews(list);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  useEffect(() => {

    const unsub = onSnapshot(
      collection(db, "announcement"),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  return (
    <div className='w-100'>        
    <div className="container p-3">
      <div className="carousel">
    <Carousel>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100 imgcarousell"
          src="https://images.pexels.com/photos/902288/pexels-photo-902288.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100 imgcarousell"
          src="https://images.pexels.com/photos/942547/pexels-photo-942547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100 imgcarousell"
          src="https://images.pexels.com/photos/4330929/pexels-photo-4330929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    <Row className="mx-0">
    <Card as={Col} className="text-center">
      <Card.Header>Events</Card.Header>
      {news.map((items)=>(
      <Card.Body>
        <Card.Title>{items.title}</Card.Title>
        <Card.Text>{items.date}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      ))}
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
    <Card as={Col} className="text-center">
      <Card.Header>News</Card.Header>
      {data.map((item)=>(
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.body}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      ))}
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
      </Row>
    </div>
    </div>
  );
}

export default Userui