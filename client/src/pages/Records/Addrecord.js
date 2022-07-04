import React,{useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { setDoc, doc, collection, addDoc, Timestamp, serverTimestamp } from "firebase/firestore";
import {auth, db, storage} from '../../firebase'
import {createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { v4 as uuid } from 'uuid';
import './addrecord.css'

function Addrecord({inputs, title}) {

  const [file, setFile] = useState("")
  const [data,setData] = useState({})
  const [per, setPerc] = useState(null)
  const navigate = useNavigate()
  const reportuid = uuid()

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;

      console.log(name);
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPerc(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  console.log(data);


  const handleAdd = async (e) => {
    
    e.preventDefault();

      await setDoc(doc(db, "reports",reportuid), {
        ...data,
        timeStamp: serverTimestamp(),
      });
      navigate('/reports')

  };

  const handleInput = (e) =>{
      const id = e.target.id
      const value = e.target.value
     
      setData({...data, [id] : value})
  }

  console.log(data)


  return (
    <>
    <div className="new">
      <div className="newContainer">

        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="recordbottom">
          <div className="recordright">
            <form className = "newform" onSubmit = {handleAdd}>
              <div className="formInput">
                <label style={{float:"right"}} className = "Imglabel"htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange ={(e) => setFile(e.target.files[0])}
                  style={{ display: "none"}}
                />
              </div> 
              <label style = {{marginBottom:"-20px", marginRight:"440px"}}>Type</label>
                    <select className = "recordselect" name = "status" id = "status"  onChange = {handleInput}>
                        <option value = "Infrastrure">Infrastructure</option>
                        <option value = "Electrical" >Electrical</option>
                        <option value = "Plumbing" >Plumbing</option>
                        <option value = "People" >People</option>
                    </select>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                    
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={handleInput}
                  />
                </div>
              ))}
              
              <label style = {{marginBottom:"-20px"}}>Description</label>
                <input style ={{border:"1px solid black", height:"100px"}}name = "description" id = "description"  onChange = {handleInput}/>
            <button style = {{marginTop:"-10px"}}className = "newbutton" disabled={per !== null && per < 100} type="submit">
                Send Report
            </button>
            </form>
          </div>
          <div className="recordleft">
            <img  className = "rcdimg"
              src={
                file
                ? URL.createObjectURL(file)
                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />  
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Addrecord