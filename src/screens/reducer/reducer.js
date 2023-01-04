export const init = {
  loading: false,
  todo: {},
  error: false,
};

//action payloadがデータで、action typeが状況(状態)
//どういう状況(状態)になったら、どんなデータを持ちますか？
export const todoIf = (state, action) => {
  if (action.type === "START") {
    return {
      loading: true,
      todo: {},
      error: false,
    };
  } else if (action.type === "SUCCESS") {
    return {
      loading: false,
      // fetch関数のdataがaction.payload。言葉に意味はない。
      todo: action.payload,
      error: false,
    };
  } else if (action.type === "ERROR") {
    return {
      loading: false,
      todo: {},
      error: true,
    };
  }
};

//ifだと複雑に見えがちなのでswitchで書き直しているだけ
//更新のないプロパティは書かなくても良いルール
export const todoSwitch = (state, action) => {
  switch (action.type) {
    case "START":
      return {
        loading: true,
        todo: {},
        error: false,
      };
    case "SUCCESS":
      return {
        ...state,
        loading: false,
        todo: action.payload,
      };
    case "ERROR":
      return {
        loading: false,
        todo: {},
        error: true,
      };
    default:
      return state;
  }
};
