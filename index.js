// 関数の定義

const printWanko = () => {
    console.log("にんじゃわんこ");
  };
// f() = console.log("にんじゃわんこ")


  const printHitsuji = () => {
    console.log("ひつじ仙人");
  };
// f() = console.log("にんじゃわんこ")


  const call = (callback) => {
    console.log("コールバック関数を呼び出し。");
    callback();
  };
// call(callback)   f( g(x) )
// console.log("コールバック関数を呼び出します。")
// callback()       g()



  const introduce = (callback) => {
    callback("ほんですがな？")
  };
  // introduce(callback)        f( g(x) )
  // callback("ほんまかいな？")    g(x)



// 関数の呼び出し
printWanko();
printHitsuji();
// f()の実行
  // にんじゃわんこ
  // ひつじ仙人


  call(printWanko);
  call(printHitsuji);
// f( g(x) )の実行
  // clg("コールバック関数を呼び出します")
  // printWanko();   にんじゃわんこ
  // clg("コールバック関数を呼び出します")
  // printWanko();   ひつじ仙人

  call( () => {
    console.log("たまご凡人");
  });
// f( g(x) )の実行
  // clg("コールバック関数を呼び出します")
  // たまご凡人


  introduce((name) => {
    console.log(name);
  });

  // f ( g(x) )の実行
  // g(x)の実行
  // ほんまかいな