import type { TabData } from "../types/drink";

export const drinkTabs: TabData[] = [
  {
    id: "alcohol",
    title: "alcohol",
    subtitle: "アルコール",
    category: [
      {
        name: "aperitif",
        items: [
          {
            name: "champagne",
            nameJa: "シャンパン",
            price: "¥ 1,650 -",
          },
          {
            name: "sparkling wine",
            nameJa: "スパークリングワイン",
            price: "¥ 1,320 -",
          },
          {
            name: "mimoza hamanako",
            nameJa: "ミモザ浜名湖 \n ( みかんジュース + スパークリングワイン )",
            price: "¥ 1,650 -",
          },
          {
            name: "kir royal",
            nameJa: "キールロワイヤル \n ( カシス + スパークリングワイン )",
            price: "¥ 1,320 -",
          },
          {
            name: "kir",
            nameJa: "キール \n ( カシス + 白ワイン )",
            price: "¥ 1,100 -",
          },

          {
            name: "sherry",
            nameJa: "シェリー \n ( アモンティリャード )",
            price: "¥ 880 -",
          },
        ],
      },
      {
        name: "beer",
        items: [
          {
            name: "draft beer",
            nameJa: "静岡麦酒樽生",
            price: "¥ 880 -",
          },
        ],
        drinkListClass: "flex items-center justify-between",
        drinkListType: "flex",
      },
      {
        name: "cocktail",
        items: [
          {
            name: "",
            nameJa:
              "カシス・ピーチ・マンゴーリキュールを使ってお好みに合わせたカクテルを",
            price: "¥ 935 -",
          },
        ],
        drinkListType: "flex",
      },
      {
        name: "wine",
        drinkListType: "cols-3",
        items: [
          {
            name: "wine pairing",
            nameJa: "ワインペアリング",
            note: "ソムリエ厳選の料理に合わせたグラスワイン 3 杯のセット",
            price: "",
            isFullWidth: true,
          },
          {
            name: "light 3glass",
            nameJa: "ライト",
            price: "¥ 3,080 -",
          },
          {
            name: "standard 4glass",
            nameJa: "スタンダード",
            price: "¥ 5,500 -",
          },
          {
            name: "Premium 4glass",
            nameJa: "プレミアム",
            price: "¥ 7,700 -",
          },
          {
            name: "white wine",
            nameJa: "白ワイン",
            price: "¥ 880 -",
          },
          {
            name: "red wine",
            nameJa: "赤ワイン",
            price: "¥ 880 -",
          },
        ],
      },
      {
        name: "champagne",
        drinkListType: "flex",
        items: [
          {
            name: "N.V. krug grande cuvee brut",
            nameJa: "N.V. クリュッグ グラン · キュベ ブリュット",
            price: "¥ 63,250 -",
          },
          {
            name: "2006 perrier jouet belle epoque",
            nameJa: "'06 ペリエ · ジュエ ベル · エポック",
            price: "¥ 49,500 -",
          },
          {
            name: "1999 nicolas feuillatte palmes d'or brut ",
            nameJa: "'99 ニコラ ·フィアット パルム ·ドール ブリュット",
            price: "¥ 46,750 -",
          },
          {
            name: "N.V. laurent perrier ultra brut",
            nameJa: "N.V. ローラン · ペリエ ウルトラ ·ブリュット",
            price: "¥ 7,700 -",
          },
          {
            name: "N.V. moet et chandon nectar imperial",
            nameJa: "N.V. モエ · エ · シャンドン ネクター アンペリアル",
            price: "¥ 16,500 -",
          },
          {
            name: "N.V. jean vesselle sec",
            nameJa: "N.V. ジャン ·ヴェッセル セック",
            price: "¥ 13,750 -",
          },
          {
            name: "N.V. moet et chandon brut imperial",
            nameJa: "N.V. モエ · エ · シャンドン ブリュット アンペリアル",
            price: "¥ 13,750 -",
          },
          {
            name: "N.V. laurent perrier la cuvee brut",
            nameJa: "N.V. ローラン · ペリエ ラ · キュヴェ ブリュット",
            price: "¥ 12,650 -",
          },
          {
            name: "N.V. r&l legras blanc de blancs brut grand cru",
            nameJa: "N.V. ルグラ ブラン ·ド ·ブラン ブリュット グラン · クリュ",
            price: "¥ 11,275 -",
          },
          {
            name: "N.V. joly champagne cuvee brut",
            nameJa: "N.V. ジョリー · シャンパーニュ キュヴェ ブリュット",
            price: "¥ 9,900 -",
          },
          {
            name: "N.V. beaumont des crayeres grande reserve",
            nameJa: "N.V. ボーモン · デ · クレイエール グランド · レゼルヴ ",
            price: "¥ 9,900 -",
          },
          {
            name: "N.V. beaumont des crayeres grande reserve",
            nameJa:
              "N.V. ピエール · モンキュイ ユーグ ·ド · クールメ ブリュット",
            price: "¥ 9,350 -",
          },
          {
            name: "N.V. pierre moncuit hugues de coulmet brut ",
            nameJa:
              "N.V. ピエール · モンキュイ ユーグ ·ド · クールメ ブリュット",
            price: "¥ 8,800 -",
          },
          {
            name: "N.V. cattier 1er cru brut ~ demi ~",
            nameJa: "N.V. キャティア プルミエ · クリュ ブリュット ハーフ",
            price: "¥ 6,600 -",
          },
        ],
      },
      {
        name: "champagne  - rose -",
        drinkListType: "flex",
        items: [
          {
            name: "N.V. laurent perrier cuvee rose",
            nameJa: "N.V. ローラン · ペリエ キュヴェ · ロゼ",
            price: "¥ 29,700 -",
          },
          {
            name: "N.V. jean vesselle rose de saignee",
            nameJa: "N.V. ジャン ·ヴェッセル ロゼ ·ドゥ · セニエ",
            price: "¥ 15,400 -",
          },
        ],
      },
      {
        name: "vin mousseux",
        drinkListType: "flex",
        items: [
          {
            name: "N.V. santa alicia tierra sur sparkling rose (chile)",
            nameJa:
              "N.V. サンタ ·アリシア ティエラ ·スール スパークリング ロゼ（チリ）",
            price: "¥ 3,850 -",
          },
          {
            name: "N.V. francois montand brut blanc de blancs - demi - (gascogne)",
            nameJa:
              "N.V. フランソワ· モンタン ブリュット ブラン ·ド ·ブラン ハーフ（ガスコーニュ）",
            price: "¥ 3,300 -",
          },
        ],
      },
      {
        name: "vin rose",
        drinkListType: "flex",
        items: [
          {
            name: "2014 chinon rose de saignee - wilfrid rousse - (loire)",
            nameJa:
              "'14 シノン ロゼ ·ド · セニエ ·ヴィルフリー · ルース（ロワール）",
            price: "¥ 3,850 -",
          },
          {
            name: "2011 bourgogne rose - mongeard mugneret - (bourgogne)",
            nameJa:
              "'11 ブルゴーニュ ロゼ · モンジャール · ミュニュレ（ブルゴーニュ）",
            price: "¥ 3,300 -",
          },
          {
            name: "2013 iberieli chkhaveri rose (georgia)",
            nameJa: "'13 イベリエリ チュハヴェリ ロゼ（ジョージア）",
            price: "¥ 3,300 -",
          },
        ],
      },
      {
        name: "vin rouge　bourgogne",
        nameJa: "ブルゴーニュ",
        drinkListType: "flex",
        items: [
          {
            name: "N.V. krug grande cuvee brut",
            nameJa: "'14 エシェゾー グラン · クリュ‐コンフュロン · コトティド‐",
            price: "¥ 60,500 -",
          },
          {
            name: "2006 perrier jouet belle epoque",
            nameJa:
              '\'15 ヴォルネイ プルミエ· クリュ"サントゥノ· デュ·ミリゥ"‐コント·ラフォン‐',
            price: "¥ 49,500 -",
          },
          {
            name: "1999 nicolas feuillatte palmes d'or brut",
            nameJa:
              '\'11 ヴォーヌ·ロマネ·プルミエ· クリュ"レ ·スショ" ‐コンフュロン ·コトティド‐',
            price: "¥ 33,000 -",
          },
          {
            name: "N.V. laurent perrier ultra brut",
            nameJa: '\'09 ポマール"レ ·ヴィーニョ"‐シャンタル · レスキュール‐',
            price: "¥ 17,600 -",
          },
          {
            name: "N.V. moet et chandon nectar imperial",
            nameJa:
              '\'05 ボーヌ プルミエ· クリュ"レ · シュアシュー"‐シャンタル ·レスキュール‐',
            price: "¥ 16,500 -",
          },
          {
            name: "N.V. jean vesselle sec",
            nameJa:
              "'11 ニュイ· サン · ジョルジュ プルミエ · クリュ オー · シャン · ペルドリ‐シェヴィヨン · シェゾー‐",
            price: "¥ 15,950 -",
          },
          {
            name: "N.V. moet et chandon brut imperial",
            nameJa:
              '\'11 ヴォルネイ"レ · ジューヌ ·フェミーネ"‐シャンタル · レスキュール‐',
            price: "¥ 15,400 -",
          },
          {
            name: "N.V. laurent perrier la cuvee brut",
            nameJa: "'15 モレ · サン ·ドニ‐ステファン · マニャン‐",
            price: "¥ 14,850 -",
          },
          {
            name: "N.V. r&l legras blanc de blancs brut grand cru",
            nameJa: "'13 モルゴン‐マルセル · ラピエール‐",
            price: "¥ 11,550 -",
          },
          {
            name: "N.V. joly champagne cuvee brut",
            nameJa: "'11 ラドワ ルージュ‐ルー · デュモン‐",
            price: "¥ 11,000 -",
          },
          {
            name: "N.V. beaumont des crayeres grande reserve",
            nameJa:
              "'04 コルトン グラン · クリュ‐ブシャール · ペール · エ ·フィス ハーフ",
            price: "¥ 13,750 -",
          },
        ],
      },
      {
        name: "vin rouge　bordeaux",
        nameJa: "ボルドー",
        drinkListType: "flex",
        items: [
          {
            name: "2016 ch. lagrange",
            nameJa: "'16 シャトー·ラグランジュ",
            price: "¥ 19,800 -",
          },
          {
            name: "2015 ch. d'armailhac",
            nameJa: "'15 シャトー · ダルマイヤック",
            price: "¥ 19,800 -",
          },
          {
            name: "2013 le petit lion du marquis de les cases",
            nameJa: "'13 ル·プティ·リオン·デュ·マルキ·ド·ラス·カーズ",
            price: "¥ 15,400 -",
          },
        ],
      },
      {
        name: "autre",
        nameJa: "その他",
        drinkListType: "flex",
        items: [
          {
            name: "N.V. overture (california)",
            nameJa: "N.V. オーバーチュア(カリフォルニア)",
            price: "¥ 41,800 -",
          },
          {
            name: "2006 chateauneuf du pape cuvee reservee - clos saint michel - (cotes du rhone)",
            nameJa:
              "'06 シャトーヌフ · デュ· パプ キュベ · レゼルバ‐クロ · サンミッシェル‐ (コート・デュ・ローヌ)",
            price: "¥ 16,500 -",
          },
          {
            name: "2010 cornas ' les arenes' - m. chapoutier - (cotes du rhone)",
            nameJa:
              '\'10 コルナス"レ ·ザレーヌ"‐M・シャプティエ‐(コート・デュ・ローヌ)',
            price: "¥ 15,950 -",
          },
          {
            name: "2007 chateauneuf du pape rouge - senechaux - (cotes du rhone)",
            nameJa:
              "'10 シャトーヌフ・デュ・パプルージュ‐セネショー‐ (コート・デュ・ローヌ)",
            price: "¥ 13,200 -",
          },
          {
            name: "2014 cote rotie classique - clusel roch - (cotes du rhone)",
            nameJa:
              "'14 コート・ロティ クラシック‐クルーセル・ロシュ‐ (コート・デュ・ローヌ)",
            price: "¥ 13,200 -",
          },
          {
            name: "2006 dom. de baron'arques (languedoc)",
            nameJa: "'06 ドメーヌ・ド・バロナーク(ラングドック)",
            price: "¥ 11,550 -",
          },
          {
            name: "N.V. chassorney du sud cuvee G - frederic cossard - (lenguedoc)",
            nameJa:
              "N.V.シャソルネイ·デュ·シュッドキュヴェG‐フレデリック·コサール‐ (ラングドック)",
            price: "¥ 6,380 -",
          },
        ],
      },
      {
        name: "vin blanc bourgogne",
        nameJa: "ブルゴーニュ",
        drinkListType: "flex",
        items: [
          {
            name: "2015 meursault 'clos de la barre'comtes lefon -",
            nameJa: '\'15 ムルソー"クロ ·ド · ラ · バール"‐コント · ラフォン‐',
            price: "¥ 71,500 -",
          },
          {
            name: "2015 chassagne montrachet 1er cru 'morgeot' - dom. fontaine gagnard -",
            nameJa:
              '\'15 シャサーニュ· モンラッシェ プルミエ · クリュ"モルジョ"‐フォンテーヌ · ガニャール‐',
            price: "¥ 23,100 -",
          },
          {
            name: "2010 meursault - chantal lescure -",
            nameJa: "'10 ムルソー‐シャンタル · レスキュール‐",
            price: "¥ 22,000 -",
          },
          {
            name: "2014 chablis 1er cru'la forest'- vincent dauvissat -",
            nameJa:
              '\'14 シャブリ プルミエ · クリュ"ラ ·フォレ"‐ヴァンサン ·ドーヴィサ‐',
            price: "¥ 21,780 -",
          },
          {
            name: "2014 chablis 1er cru 'vaillons'- vincent dauvissat -",
            nameJa:
              '\'14 シャブリ プルミエ · クリュ"ヴァイヨン"‐ヴァンサン ·ドーヴィサ‐',
            price: "¥ 21,780 -",
          },
          {
            name: "2013 chablis - marcel servin -",
            nameJa: "N.V. シャブリ‐マルセル · セルヴァン‐",
            price: "¥ 16,500 -",
          },
          {
            name: "2017 chablis 1er cru 'beauroy'- laurent tribut -",
            nameJa:
              '\'17 シャブリ プルミエ · クリュ"ボーロワ"‐ローラン ·トリビュー‐',
            price: "¥ 9,350 -",
          },
          {
            name: "2012 macon villages - albert bichot -",
            nameJa: "'12 マコン ·ヴィラージュ ‐アルベール · ビショー ‐",
            price: "¥ 4,950 -",
          },
        ],
      },
      {
        name: "bordeaux",
        nameJa: "ボルドー",
        drinkListType: "flex",
        items: [
          {
            name: "2011 domaine de chevalier blanc",
            nameJa: "'11 ドメーヌ ·ド · シュヴァリエ ブラン",
            price: "¥ 38,500 -",
          },
          {
            name: "2015 aile d'argent",
            nameJa: "'15 エール · ダルジャン",
            price: "¥ 29,700 -",
          },
          {
            name: "2016 clos floridene graves blanc",
            nameJa: "'16 クロ ·フロリデーヌ グラーヴ ブラン",
            price: "¥ 8,580 -",
          },
        ],
      },
      {
        name: "vin blanc autre",
        nameJa: "その他",
        drinkListType: "flex",
        items: [
          {
            name: "2014 riesling grand cru' zinnkoefle'- eric rominger - (alsace)",
            nameJa:
              "'14 リースリング グラン · クリュ 'ツィンコッフレ'‐エリック · ロマンジェ‐ (アルザス)",
            price: "¥ 10,780 -",
          },
          {
            name: "2015 pinot gris - marcel deiss - (alsace)",
            nameJa: "'15 ピノ· グリ - マルセル · ダイス - （アルザス）",
            price: "¥ 11,550 -",
          },
          {
            name: "2013 vouvray clos de rougemont abbaye de mermoutier - vigneau chevreau - (loire)",
            nameJa:
              "'13 ヴーヴレ クロ ·ド · ルージュモン アベイ·ド · マルムティエール‐ヴィニョー · シュヴロー‐（ロワール）",
            price: "¥ 6,820 -",
          },
          {
            name: "2016 gewurztraminer tradition - charles sparr - (alsace)",
            nameJa:
              "'16 ゲヴェルツトラミネール トラディション‐シャルル ·スパー ‐（アルザス）",
            price: "¥ 6,600 -",
          },
        ],
      },
      {
        name: "grand vin",
        drinkListType: "flex",
        items: [
          {
            name: "1978 ch. lofite rothochild",
            nameJa: "'78 シャトー · ラフィット · ロートシルト",
            price: "¥ 302,500 -",
          },
          {
            name: "1987 ch. haut brion rouge",
            nameJa: "'87 シャトー · オー ·ブリオン ルージュ",
            price: "¥ 211,750 -",
          },
          {
            name: "1993 ch. margaux",
            nameJa: "'93 シャトー · マルゴー",
            price: "¥ 211,750 -",
          },
          {
            name: "1990 ch. ducru beaucaillou",
            nameJa: "'90 シャトー · デュクリュ · ボーカイユ",
            price: "¥ 96,250 -",
          },
          {
            name: "1997 ch d' yquem ~ demi ~",
            nameJa: "'97 シャトー · ディケム ハーフ",
            price: "¥ 71,500 -",
          },
        ],
      },
    ],
  },
  {
    id: "non-alcohol",
    title: "non alcohol",
    subtitle: "ノンアルコール",
    category: [
      {
        name: "wine",
        items: [
          {
            name: "non-alcohol wine pairing",
            nameJa: "ノンアルコールワインペアリング",
            note: "ワインから造った本物の味わい独自の製法でワインからアルコールだけ抜いた\n本格的な味わいを料理と合わせてお楽しみ下さい",
            price: "",
            isFullWidth: true,
          },
          {
            name: "",
            nameJa: "スパークリングワイン・白・赤のグラスワイン 3 杯セット",
            price: "¥ 2,420 -",
            isFullWidth: true,
            showDivider: true,
          },
          {
            name: "non-alcohol sparkling wine",
            nameJa: "ノンアルコール スパークリングワイン",
            price: "¥ 880 -",
          },
          {
            name: "non-alcohol red wine",
            nameJa: "ノンアルコール 赤ワイン",
            price: "¥ 880 -",
          },
          {
            name: "non-alcohol white wine",
            nameJa: "ノンアルコール 白ワイン",
            price: "¥ 880 -",
          },
        ],
      },
      {
        name: "soft drink",
        items: [
          {
            name: "mikkabi mikan juice",
            nameJa: "三ケ日みかんジュース",
            price: "¥ 1,650 -",
          },
          {
            name: "orange juice",
            nameJa: "100% オレンジジュース",
            price: "¥ 1,650 -",
          },
          {
            name: "apple juice",
            nameJa: "100% りんごジュース",
            price: "¥ 1,100 -",
          },
          {
            name: "Ginger Ale (Sweet or Dry)",
            nameJa: "ジンジャーエール ( 甘口 or 辛口 )",
            price: "¥ 1,320 -",
          },
          {
            name: "grapefruit juice",
            nameJa: "100% グレープフルーツジュース",
            price: "¥ 1,320 -",
          },
        ],
      },
      {
        name: "non alcohol beer",
        drinkListType: "flex",
        items: [
          {
            name: "kirin zeroichi",
            nameJa: "キリン零 ICHI",
            price: "¥ 660 -",
          },
        ],
      },
      {
        name: "premium juice",
        nameJa:
          "トラウベンモスト社 オーストラリア産ワイン用のぶどうを100% 使用した葡萄ジュース",
        items: [
          {
            name: "white grapes juice",
            nameJa: "白葡萄ジュース",
            note: [
              {
                label: "ストレート",
                price: "¥ 825 -",
              },
              {
                label: "スパークリングブレンド",
                price: "¥ 880 -",
              },
            ],
            price: "",
          },
          {
            name: "red grapes juice",
            nameJa: "赤葡萄ジュース",
            note: [
              {
                label: "ストレート",
                price: "¥ 825 -",
              },
              {
                label: "スパークリングブレンド",
                price: "¥ 880 -",
              },
            ],
            price: "",
          },
        ],
      },
      {
        name: "non alcohol cocktail",
        items: [
          {
            name: "pear belini",
            nameJa: "ペアべリーニ (洋梨 + ピーチ + ソーダ)",
            price: "¥ 715 -",
          },
          {
            name: "saratoga cooler",
            nameJa: "サラトガクーラー (ライム + ジンジャエール)",
            price: "¥ 715 -",
          },
          {
            name: "gulemon juice",
            nameJa:
              "グレモンジュース (グレープフルーツ+レモン + はちみつ +ライム + キウイ)",
            price: "¥ 715 -",
          },
          {
            name: "raichimoni",
            nameJa: "ライチモーニ (ライチ + グレープフルーツ + トニック)",
            price: "¥ 715 -",
          },
          {
            name: "mohito minto",
            nameJa: "モヒートミント (ミント + ライム + トニック)",
            price: "¥ 715 -",
          },
        ],
      },
      {
        name: "organic",
        items: [
          {
            name: "lemonade",
            nameJa:
              "自家製レモネード レモン & ライム、はちみつをたっぷり使った当店人気 No.1ドリンク",
            price: "¥ 770 -",
          },
          {
            name: "green tea shizuoka",
            nameJa:
              "有機緑茶（冷 or 温）厳選された茶葉のみを使った香り高さが特徴",
            price: "¥ 660 -",
          },
        ],
      },
    ],
  },
  {
    id: "tea-finale-water",
    title: "tea finale water",
    subtitle: "",
    category: [
      {
        name: "tea",
        items: [
          {
            name: "tea pairing",
            nameJa: "ティーペアリング",
            price: "¥ 4,290 -",
            note: "料理に合わせてご提供するお得なティーベアリングです",
            isFullWidth: true,
            showDivider: true,
          },
          {
            name: "bara-cha",
            nameJa: "薔薇茶",
            price: "¥ 1,210 -",
          },
          {
            name: "asanoka",
            nameJa: "あさのか",
            price: "¥ 1,430 -",
          },
          {
            name: "gyokuro",
            nameJa: "玉露",
            price: "¥ 1,760 -",
          },
          {
            name: "ibushi",
            nameJa: "いぶし",
            price: "¥ 1,210 -",
          },
        ],
      },
      {
        name: "water",
        items: [
          {
            name: "perrie",
            nameJa: "ペリエ ( スパークリングウォーター )",
            price: "¥ 825 -",
          },
          {
            name: "surgiva",
            nameJa: "スルジーヴァ ( スティルウォーター )",
            price: "¥ 825 -",
          },
        ],
      },
      {
        name: "finale",
        items: [
          {
            name: "marc brandy",
            nameJa: "マール",
            price: "¥ 1,650 -",
          },
          {
            name: "calvados",
            nameJa: "カルバドス",
            price: "¥ 1,320 -",
          },
          {
            name: "cognac",
            nameJa: "コニャック",
            price: "¥ 1,650 -",
          },
          {
            name: "portwine",
            nameJa: "ポートワイン",
            price: "¥ 1,650 -",
          },
          {
            name: "limoncello",
            nameJa: "自家製リモンチェロ",
            price: "¥ 900 -",
          },
        ],
      },
      {
        name: "other",
        drinkListType: "flex",
        items: [
          {
            name: "",
            nameJa:
              "日本酒・焼酎ご用意しております。スタッフへお尋ねください。",
            price: "¥ 880 -",
          },
        ],
      },
    ],
  },
];
