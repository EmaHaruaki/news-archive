import { NewsHeader } from "@/components/news-header"
import { NewsFooter } from "@/components/news-footer"

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <NewsHeader />
      <div className="space-y-12 px-8 py-8 mx-auto">
        <section className="space-y-4">
          <h1 className="text-2xl font-bold">お問い合わせ</h1>
          <p>
            当サイトで提供される記事の内容に関しては、最善を尽くして正確さを保つよう努めていますが、その正確性や完全性を保証するものではありません。また、当サイトの利用によって生じた損失や損害に対して、一切の責任を負わないことをご了承ください。
          </p>
          <p>
            記事の削除依頼、ご質問、その他のお問い合わせがございましたら、XのDMで
            <a
              href="https://x.com/FastNewsjp24"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline ml-1"
            >
              こちら
            </a>
            からお問い合わせください。
          </p>
        </section>

        <section className="space-y-4">
          <h1 className="text-2xl font-bold">Contact</h1>
          <p>
            While we make every effort to ensure the accuracy of the articles provided on this site, we do not guarantee their accuracy or completeness. We are not liable for any losses or damages that may arise from the use of this website.
          </p>
          <p>
            If you have any requests for article removal, questions, or other inquiries, please contact us via DM on X
            <a
              href="https://x.com/FastNewsjp24"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline ml-1"
            >
              here
            </a>
            .
          </p>
        </section>

      </div>
      <NewsFooter />
    </div>
  );
}
