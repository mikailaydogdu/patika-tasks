import fetch from "node-fetch";
import axios from "axios";


const getData = async(number) => {

const { data } = await axios (`https://jsonplaceholder.typicode.com/users/${number}`);
const {data : post}  = await axios (`https://jsonplaceholder.typicode.com/posts?userId=${[number]}`);



console.log(data);
console.log(post);

 }
 


function GetDataOutput(number) {
return getData(number);
}


export default GetDataOutput;
