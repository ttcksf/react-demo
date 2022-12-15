import React, { useRef, useState } from "react";

const ManyInput = () => {
  // const [name, setName] = useState("");
  // const [age, setAge] = useState("");
  // const [post, setPost] = useState("");
  // const [address, setAddress] = useState("");
  // const [tel, setTel] = useState("");
  // const [email, setEmail] = useState("");

  // const handleName = (e) => {
  //   setName(e.target.value);
  // };
  // const handleAge = (e) => {
  //   setAge(e.target.value);
  // };
  // const handlePost = (e) => {
  //   setPost(e.target.value);
  // };
  // const handleAddress = (e) => {
  //   setAddress(e.target.value);
  // };
  // const handleTel = (e) => {
  //   setTel(e.target.value);
  // };
  // const handleEmail = (e) => {
  //   setEmail(e.target.value);
  // };

  // console.log(name);
  // console.log(age);
  // console.log(post);
  // console.log(address);
  // console.log(tel);
  // console.log(email);

  const [user, setUser] = useState({
    name: "",
    age: "",
    post: "",
    address: "",
    tel: "",
    email: "",
  });

  const handleUser = (e) => {
    //スプレッド構文でオブジェクトの中身を上書きする
    //e.target.nameでinputタグのname属性と付き合わせする
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(user);

  return (
    <div>
      <form>
        <div>
          <input
            name="name"
            onChange={handleUser}
            type="text"
            placeholder="お名前"
          />
        </div>
        <div>
          <input
            name="age"
            onChange={handleUser}
            type="text"
            placeholder="年齢"
          />
        </div>
        <div>
          <input
            name="post"
            onChange={handleUser}
            type="text"
            placeholder="郵便番号"
          />
        </div>
        <div>
          <input
            name="address"
            onChange={handleUser}
            type="text"
            placeholder="住所"
          />
        </div>
        <div>
          <input
            name="tel"
            onChange={handleUser}
            type="text"
            placeholder="電話番号"
          />
        </div>
        <div>
          <input
            name="email"
            onChange={handleUser}
            type="text"
            placeholder="メールアドレス"
          />
        </div>
      </form>
    </div>
  );
};

export default ManyInput;
