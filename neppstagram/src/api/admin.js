import axios from "axios"

const token = localStorage.getItem("access-token");

axios.defaults.baseURL = "http://101.101.218.43";

if(token) {
    axios.defaults.headers= {
        Authorization : `Bearer ${token}`,
    }
}

/** 
 * 
 *  @param {{name : string , email : string , }}
 * 
 * **/

export const postUser = async (form) => {
    
    
    const result = await axios.post("users",{
        ...form,
    });

    return result;


};


export const signIn =  async (form) => {
    
    
    const result = await axios.post("users/login",{
        ...form,
    });

    const token = result.data.data.token;

    

    window.localStorage.setItem("access-token", token);

    axios.defaults.headers.Authorization = `Bearer ${token}`;

    console.log(token);

    return true;

};

export const getCurrentUser = async () => {

    const { data } = await axios.get("users/current");
    return data.data;

};

export const patchProfile = (form) => {

    return axios.patch("users/profile" , form);

};


export const postPost = async(form) => {

    const { data } = await axios.post("posts", form);

    return data.data;

};

export const getPosts = async(page = 1) => {
   const {data} = await axios.get(`/posts?page=${page}`);

   return data.data;

};

export const getPostById = async (id) => {

    const {data} = await axios.get("/posts/" + id);

    return data;
}


export const getComments = async (postId , page = 1) => {

    const {data} = await axios.get("/comments",{
        params : {

            page,
            postId,
        },
    });

    console.log(data);
    return data.data ;

};

export const searchUser = async (name) => {

    const { data } = await axios.get("/users/search" ,{
        params : {
            name,
        },
    });

    return data;
};

export const getUserById = async (id) => {
   const {data} = await axios.get("/users/" + id);

   return data.data;
}

export const getPostsByUserId = async (id) => {
    const {data} = await axios.get("/posts/author/" + id);
 
    return data.data;
 }



export const postComments = async ( form ) => {

    const { data } = await axios.post(`/comments?postId=${form.postId}&content=${form.content}`);
    
    console.log(data);
    return data.data;
};

export const deleteComment = async(commentId) => {

    const {data} = await axios.delete(`/comments/${commentId}`);

    return data;
};


export const convertUrl = async (url) => {

    const res = await fetch(url);
    const data = await res.blob();
    const ext = url.split(".").pop();
    const filename = url.split("/").pop();
    const metadata = {type : `image/${ext}`};

    return new File([data],filename,metadata);


};

