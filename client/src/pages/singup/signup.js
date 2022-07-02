import React, { useState, useEffect } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db, storage } from "../../firebase";
import { setDoc, doc, Timestamp } from "firebase/firestore";
import { useNavigate} from "react-router-dom";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import "./signup.css"


const Signup = () => {
  const [per, setPerc] = useState(null)
  const [file, setFile] = useState("")
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    address:"",
    phoneNumber:"",
    files: "",
    error: null,
    loading: false,
  });

  const history = useNavigate();

  const { name, email, address, phoneNumber, password, files, error, loading } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setData({ ...data, error: null, loading: true });
    if (!name || !email || !password) {
      setData({ ...data, error: "All fields are required" });
    }
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await setDoc(doc(db, "users", result.user.uid), {
        uid: result.user.uid,
        name,
        email,
        phoneNumber,
        address,
        files,
        createdAt: Timestamp.fromDate(new Date()),
        isOnline: true,
      });
      setData({
        name: "",
        email: "",
        password: "",
        phoneNumber:"",
        address: "",
        error: null,
        loading: false,
      });
      history("/login");
    } catch (err) {
      setData({ ...data, error: err.message, loading: false });
    }
  };

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


  return (
    <div className = "signupbody">
    <section className="signupsection">
      <h3 style={{margin:"10px"}}>Create An Account</h3>
      <form className="form" onSubmit={handleSubmit}>
           <img className = "signupimg" src={file ? URL.createObjectURL(file): "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt=""/>  
        <div className="input_container">
            <label className = "Imglabel"htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
            </label>
            <input type="file" name="files" onChange ={(e) => setFile(e.target.files[0])}style={{ display: "none" }} />
        </div>
        <div className="input_container">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={name} onChange={handleChange} />
        </div>
        <div className="input_container">
          <label htmlFor="address">Address</label>
          <input type="text" name="address" value={address} onChange={handleChange} />
        </div>
        <div className="input_container">
          <label htmlFor="contact">Contact Number</label>
          <input type="text" name="phoneNumber" value={phoneNumber} onChange={handleChange} />
        </div>
        <div className="input_container">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="input_container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        {error ? <p className="error">Please Fill Up All the Credentials!</p> : null}
        <div className="btn_container">
          <button className="btn" disabled={loading}>
            {loading ? "Creating ..." : "Register"}
          </button>
        </div>
      </form>
    </section>
    </div>
  );
};

export default Signup;