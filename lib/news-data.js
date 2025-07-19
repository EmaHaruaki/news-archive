export const getNewsData = async () => {
  const sources = [
    {
      name: "NHK NEWS WEB",
      category: "総合",
      articles: [
        { title: "政府、新たな経済対策を発表", time: "14:30", url: "#" },
        { title: "東京都心で記録的な暖かさ", time: "13:15", url: "#" },
        { title: "AI技術の規制強化を検討", time: "12:45", url: "#" },
        { title: "地方自治体のデジタル化推進", time: "12:20", url: "#" },
        { title: "新型コロナ対策の見直し検討", time: "11:55", url: "#" },
        { title: "環境保護政策の新たな取り組み", time: "11:30", url: "#" },
        { title: "教育制度改革の議論が活発化", time: "10:45", url: "#" },
        { title: "高齢化社会への対応策を協議", time: "10:15", url: "#" },
      ],
    },
    {
      name: "朝日新聞デジタル",
      category: "総合",
      articles: [
        { title: "企業の働き方改革が加速", time: "15:20", url: "#" },
        { title: "地方創生の新たな取り組み", time: "14:10", url: "#" },
        { title: "教育現場でのDX推進", time: "13:30", url: "#" },
        { title: "医療制度の改革案が浮上", time: "13:00", url: "#" },
        { title: "若者の政治参加促進策", time: "12:35", url: "#" },
        { title: "持続可能な社会づくりへの取り組み", time: "12:10", url: "#" },
        { title: "文化芸術支援の新制度", time: "11:40", url: "#" },
        { title: "スポーツ振興政策の見直し", time: "11:20", url: "#" },
      ],
    },
    {
      name: "日本経済新聞",
      category: "経済",
      articles: [
        { title: "株価が年初来高値を更新", time: "15:45", url: "#" },
        { title: "円安が企業業績に影響", time: "14:55", url: "#" },
        { title: "新興企業の資金調達活発化", time: "13:20", url: "#" },
        { title: "半導体業界の設備投資拡大", time: "12:50", url: "#" },
        { title: "金融政策の転換点が近づく", time: "12:25", url: "#" },
        { title: "不動産市場の動向に注目", time: "11:50", url: "#" },
        { title: "エネルギー価格の上昇続く", time: "11:25", url: "#" },
        { title: "消費者物価指数が上昇", time: "10:55", url: "#" },
      ],
    },
    {
      name: "ITmedia NEWS",
      category: "テクノロジー",
      articles: [
        { title: "生成AIの新サービス続々", time: "16:10", url: "#" },
        { title: "量子コンピューター実用化へ", time: "15:30", url: "#" },
        { title: "サイバーセキュリティ強化", time: "14:20", url: "#" },
        { title: "5G通信の普及が加速", time: "13:45", url: "#" },
        { title: "クラウドサービスの新機能", time: "13:15", url: "#" },
        { title: "IoT機器のセキュリティ対策", time: "12:40", url: "#" },
        { title: "ブロックチェーン技術の応用拡大", time: "12:05", url: "#" },
        { title: "メタバース市場の成長予測", time: "11:35", url: "#" },
      ],
    },
  ];

  const summary = {
    politics:
      "政府が新たな経済対策を発表し、企業の働き方改革が加速している。株価は年初来高値を更新し、円安が企業業績に影響を与えている。",
    technology:
      "生成AIの新サービスが続々と登場し、量子コンピューターの実用化に向けた動きが活発化。サイバーセキュリティの強化も進んでいる。",
    society:
      "東京都心で記録的な暖かさを観測。地方創生の新たな取り組みや教育現場でのDX推進が注目されている。",
  };

  const date = new Date().toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });

  return {
    sources,
    summary,
    date,
  };
};

export const getArchiveDates2 = async () => {
  return [
    { slug: "2024-01-16", label: "2024年1月16日" },
    { slug: "2024-01-15", label: "2024年1月15日" },
    { slug: "2024-01-14", label: "2024年1月14日" },
    { slug: "2024-01-13", label: "2024年1月13日" },
  ];
};
