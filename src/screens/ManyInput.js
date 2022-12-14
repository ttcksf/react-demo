import React, { useRef, useState } from "react";

const ManyInput = () => {
  //1個ずつステートを管理するのは面倒
  // const [name, setName] = useState("");
  // const handleChangeName = () => {
  //   setName(e.target.value);
  // };
  //初期値がオブジェクトのものにまとめる
  // const [user, setUser] = useState({
  //   name: "",
  //   age: "",
  //   post: "",
  //   address: "",
  //   tel: "",
  //   email: "",
  // });
  // const handleChange = (e) => {
  //   setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };
  // console.log(user);

  //レンダリングさせたくない時はuseRef
  const nameRef = useRef();
  const ageRef = useRef();
  const postRef = useRef();
  const addressRef = useRef();
  const telRef = useRef();
  const emailRef = useRef();

  return (
    // <div>
    //   <form>
    //     <div>
    //       <input
    //         onChange={handleChange}
    //         type="text"
    //         name="name"
    //         placeholder="お名前"
    //       />
    //     </div>
    //     <div>
    //       <input
    //         onChange={handleChange}
    //         type="text"
    //         name="age"
    //         placeholder="年齢"
    //       />
    //     </div>
    //     <div>
    //       <input
    //         onChange={handleChange}
    //         type="text"
    //         name="post"
    //         placeholder="郵便番号"
    //       />
    //     </div>
    //     <div>
    //       <input
    //         onChange={handleChange}
    //         type="text"
    //         name="address"
    //         placeholder="住所"
    //       />
    //     </div>
    //     <div>
    //       <input
    //         onChange={handleChange}
    //         type="text"
    //         name="tel"
    //         placeholder="電話番号"
    //       />
    //     </div>
    //     <div>
    //       <input
    //         onChange={handleChange}
    //         type="text"
    //         name="email"
    //         placeholder="メールアドレス"
    //       />
    //     </div>
    //   </form>
    // </div>

    <div>
      <form>
        <div>
          <input ref={nameRef} type="text" name="name" placeholder="お名前" />
        </div>
        <div>
          <input ref={ageRef} type="text" name="age" placeholder="年齢" />
        </div>
        <div>
          <input ref={postRef} type="text" name="post" placeholder="郵便番号" />
        </div>
        <div>
          <input
            ref={addressRef}
            type="text"
            name="address"
            placeholder="住所"
          />
        </div>
        <div>
          <input ref={telRef} type="text" name="tel" placeholder="電話番号" />
        </div>
        <div>
          <input
            ref={emailRef}
            type="text"
            name="email"
            placeholder="メールアドレス"
          />
        </div>
      </form>
    </div>
  );
};

export default ManyInput;
