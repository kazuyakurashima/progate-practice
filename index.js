// 関数の定義

const printWanko = () => {
    console.log("にんじゃわんこ");
  };

// f() = console.log("にんじゃわんこ")

  const printHitsuji = () => {
    console.log("ひつじ仙人");
  };

  const call = (callback) => {
    console.log("コールバック関数を呼び出します。");
    callback();
  };

// call(callback)   f( g(x) )
// console.log("コールバック関数を呼び出します。")
// callback()       g(x)



// 関数の呼び出し
printWanko();
printHitsuji();



  // 引数をprintHitsujiに書き換えて出力を確認しましょう
  call(printWanko);
  call(printHitsuji);

  call( () => {
    console.log("たまご凡人");
  });









  const introduce = (callback) => {
    callback("ほんまかいな？")
  };
  
  // introduce(callback)        f( g(x) )
  // callback("ほんまかいな？")     g(x)
  
  introduce((name) => {
    console.log(name);
  });
  
  // f ( g(x) )
  // g(x)            