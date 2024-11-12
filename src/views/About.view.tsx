import { Image } from "react-bootstrap";

import bannerLogo from "@assets/bannerLogo.png";

export default function About() {
    return (
        <>
            <article className="bg-body-tertiary fs-5 d-flex flex-column align-items-center about">
                <section className="m-4">
                    חברת <span className="fw-semibold"> ST נדל"ן VIP</span> עוסקת בשיווק, תיווך, השכרה ומכירה של נדל"ן עסקי, מסחרי ופרטי עם דגש והתמחות בשוק המשרדים בתל אביב.
                </section>
                <section className="m-4">
                    לחברה ניסיון וידע רב בתחום הנדל"ן, משרדי החברה נמצאים באזור התעסוקה של צפון תל אביב במתחם רמת החייל - עתידים.                
                </section>
                <section className="m-4">
                    בראש החברה עומדת אסתי עמר, אשר לזכותה ניסיון רב משנת 2008 בתחום הנדל"ן המסחרי עם דגש בשוק:
                    המשרדים, קליניקות, חנויות, אולמות תצוגה, מסעדות ובתי קפה.
                </section>
                <section className="m-4">
                    יחד עם צוות מנצח, מיומן, בעל ניסיון וידע בתחום הנדל"ן <span className="fw-semibold">ST נדל"ן VIP </span> מביאה גישה עסקית מיוחדת עם יחס אישי  "VIP".
                </section>
                <section className="m-4">
                    בשילוב של ניסיון, ידע וקשרים עסקיים רחבים אתם תקבלו תוצאות מוצלחות ומהירות.
                </section>

                <Image className="m-4" src={bannerLogo} height="25%" width="25%" />
            </article >
        </>
    )
}


