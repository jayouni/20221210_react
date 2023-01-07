import styled from "styled-components";
import {BsPlusLg} from"react-icons/bs";
import { useState } from "react";
import { redirect } from "react-router-dom";
import { Button } from "../common/button";
import { postPost } from "../../api/admin";

function Edit() {

  

  const [inputs,setInputs] = useState({
    content:"",
    images: [],
  });

  const [previewUrls,setPreviewUrls] = useState([]);

  const handleImages = (e) => {

    if(inputs.images.length + e.target.files.length > 5) {

      window.alert("사진은 5개 이하로 등록해주세요");

      return;

    }

    const {files} = e.target;

    setPreviewUrls([]);


    setInputs((inputs) => {

      const prevImages = inputs.images;

      
      const fileArr = [...prevImages, ...files];

      fileArr.forEach((file) => {
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = () => {
          setPreviewUrls((urls) => [...urls,reader.result]);

        };

      });

      return {...inputs,
      images: [...prevImages , ...files],
      };
    });


   
  };


  const handleSubmit = () => {

    const form = new FormData();

    form.append("content", inputs.content);
    inputs.images.forEach((image) => {
      form.append("images" , image);
    });

    postPost(form).then((res) => console.log(res));

  };

  return (
    <Container>
      <TextArea placeholder="글을 입력해주세요" onChange={(e) => setInputs((inputs) => ({...inputs, content:e.target.value}))}/>
    <ImagesWrapper>
      {previewUrls.map((url ,idx)=> (<Preview key={idx} url={url} />))}

      <input type="file" accept="image/*" multiple style={{display : "none"}} id="postImages" onChange={handleImages}/>

    </ImagesWrapper>

    <BtnInput htmlFor="postImages">
        <BsPlusLg color="#ccc" size={40}/>
      </BtnInput>

      <Button style={{position : "absolute ", bottom : 0 , left : 0 }} onClick={handleSubmit}>등록</Button>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 20px;

  position: relative;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;

  border:1px solid #eee;
  outline: none;
  resize: none;
  
`;

const ImagesWrapper = styled.div`

  display: flex;
  flex-wrap: wrap;

`;

const BtnInput = styled.label`
  display : flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;

  border: 2px solid #eee;
  cursor: pointer;
`;


export default Edit;


function Preview({url}) {
  return (
  <PreviewBox>
    <img src={url} alt="" />
  </PreviewBox>
  );
}

const PreviewBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;

  overflow: hidden;

  img {
    width: 100px;
  }

`;