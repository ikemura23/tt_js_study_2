//===============================================
//変数の記述例
//===============================================

//変数名の定義
var sample01;

//変数と変数の値を同時に定義
var sample02 = 'テキスト';

//複数の変数名を同時に定義
var sample03, sample04, sample05;

//改行を入れた例
var sample03,
    sample04,
    sample05;

//複数の変数名と値を同時に定義
var sample06 = 10, sample07 = 0, sample07 = 'テキスト';

//改行を入れた例
var sample06 = 10,
    sample07 = 0,
    sample07 = 'テキスト';

//変数に変数を格納することもできます
var hoge = 'ほげほげ',
    fuga;
fuga = hoge;


//===============================================
//演算子の例
//  演算子の中でも機能によって「論理演算子」「算術演算子」「比較演算子」などに分類されます。
//  詳細は「js　演算子」などで検索してください。
//===============================================

//「=」値を代入（もともと入っていた値は上書きされます）
var hoge = 'てきすと';
hoge = 'テキスト!!';
//「テキスト!!」が格納される

//「+=」値を代入（もともと入っていた値に足されます）
var hoge = '天上天下';
hoge += '唯我独尊';
//「天上天下唯我独尊」と表示されます

//「++」「--」
var i = 0;
i++;//1づつ加算
i--;//１づつ減算
