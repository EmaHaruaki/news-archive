const API_BASE_URL = "https://haseyrsk.g.kuroco.app";

// ----------------- Utility -----------------
function formatDateToSlug(date) {
  return date.toISOString().split("T")[0];
}

function generateDateRange() {
  const startDate = new Date("2025-07-15");
  const endDate = new Date();
  const dates = [];

  const currentDate = new Date(startDate);
  while (currentDate <= endDate) {
    dates.push(formatDateToSlug(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates;
}

// API から記事取得
export async function fetchNewsArticleByDate(dateSlug) {
  try {
    const response = await fetch(`${API_BASE_URL}/rcms-api/7/topics/details/${dateSlug}`);
    if (!response.ok) {
      if (response.status === 404) {
        console.warn(`記事が見つかりません: ${dateSlug}`);
        return null;
      }
      throw new Error(`API Error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`記事の取得に失敗 (${dateSlug}):`, error);
    return null;
  }
}

// 記事リストを整形
function parseArticleContent(article) {
  const sourceMap = [
    { field: "ext_2", name: "NHK NEWS WEB", category: "総合" },
    { field: "ext_3", name: "日本経済新聞", category: "経済" },
    { field: "ext_4", name: "Bloomberg", category: "経済" },
    { field: "ext_5", name: "産経新聞", category: "総合" },
    { field: "ext_6", name: "読売新聞", category: "総合" },
  ];

  return sourceMap.map(({ field, name, category }) => {
    const entries = article.details?.[field] || [];

    const articles = entries.map((entry) => {
      const ext = entry[field];
      const time =
        (entry.ext_9 || entry.ext_10 || entry.ext_11 || entry.ext_12 || entry.ext_13 || "")
          .split(" ")[1] || "";
      return {
        title: ext?.title || "タイトルなし",
        time,
        url: ext?.url || "#",
        source: name,
      };
    });

    return { name, category, articles };
  });
}

// 要約を整形
function parseSummaryContent(article) {
  return {
    markdown: article.details?.ext_1 || "本日のニュースまとめはありません。",
  };
}

// 今日のニュース
export async function getTodaysNewsData() {
  const todaySlug = formatDateToSlug(new Date());
  let article = await fetchNewsArticleByDate(todaySlug);

  if (!article) {
    const dates = generateDateRange().reverse();
    for (const date of dates) {
      article = await fetchNewsArticleByDate(date);
      if (article) break;
    }
    if (!article) return null;
  }

  return {
    sources: parseArticleContent(article),
    summary: parseSummaryContent(article),
    date: new Date(article.details.ymd || todaySlug).toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
    }),
  };
}

// 指定日付のニュース
export async function getNewsDataByDate(dateSlug) {
  const article = await fetchNewsArticleByDate(dateSlug);
  if (!article) return null;

  return {
    sources: parseArticleContent(article),
    summary: parseSummaryContent(article),
    date: new Date(article.details.ymd || dateSlug).toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
    }),
  };
}

// アーカイブ用日付（直近10件）
export async function getArchiveDates() {
  const dates = generateDateRange().reverse();
  const availableDates = [];

  for (const date of dates.slice(0, 10)) {
    const article = await fetchNewsArticleByDate(date);
    if (article) {
      availableDates.push({
        slug: date, // YYYY-MM-DD
        label: new Date(date).toLocaleDateString("ja-JP", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      });
    }
  }

  return availableDates;
}

// すべての日付slug一覧（年月日形式）
export async function getAllAvailableDates() {
  return generateDateRange();
}
